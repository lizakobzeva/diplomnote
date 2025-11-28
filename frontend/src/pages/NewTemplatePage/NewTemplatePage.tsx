import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { TEMPLATES } from "@/lib/constants/templates";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Upload, AlertCircle, Download, Send } from "lucide-react";
import axiosInstance from "@/lib/config/ApiConfig/ApiConfig";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";

const NewTemplatePage = () => {
    const initialHTML = TEMPLATES[0]?.template || "<h1>Сертификат для {{ name }}</h1>";
    const navigate = useNavigate();

    const [htmlTemplate, setHtmlTemplate] = useState(initialHTML);
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [fields, setFields] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const [isGeneratingZip, setIsGeneratingZip] = useState(false);
    const [isSendingEmails, setIsSendingEmails] = useState(false);

    // Загрузка Excel → получение полей
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) {
            setFile(null);
            setFields([]);
            return;
        }

        if (!selectedFile.name.endsWith('.xlsx')) {
            setError("Только файлы .xlsx");
            return;
        }

        setFile(selectedFile);
        setError(null);
        setLoading(true);

        const form = new FormData();
        form.append("excel_file", selectedFile);

        try {
            const res = await axiosInstance.post("/get_fields", form);
            if (res.data.success) {
                setFields(res.data.columns);
                toast.success("Поля из Excel загружены!");
            } else {
                toast.error(res.data.error);
            }
        } catch (err: any) {
            toast.error(err.response?.data?.error || "Ошибка сервера");
            setError("Не удалось прочитать файл");
        } finally {
            setLoading(false);
        }
    };

    // Клик по полю — копируем в буфер + тост
    const insertField = (field: string) => {
        const text = `{{ ${field} }}`;
        navigator.clipboard.writeText(text);
        toast.success(`Скопировано: ${text}`, { autoClose: 1500 });
    };

    // Главная функция для генерации
    const generate = async (mode: "zip" | "email") => {
        if (!file) return toast.error("Загрузите Excel-файл");
        if (!htmlTemplate.includes("{{")) return toast.error("Добавьте хотя бы одно поле {{ ... }}");

        const formData = new FormData();
        formData.append("excel_file", file);
        formData.append("template_file", new Blob([htmlTemplate], { type: "text/html" }), "template.html");
        formData.append("delivery_method", mode);

        try {
            if (mode === "zip") {
                setIsGeneratingZip(true);
                toast.info("Генерируем PDF...");

                const res = await axiosInstance.post("/", formData, {
                    responseType: "blob",
                });

                const blob = new Blob([res.data], { type: "application/zip" });
                const url = window.URL.createObjectURL(blob);
                saveAs(blob, `certificates_${new Date().toISOString().slice(0, 16).replace(":", "")}.zip`);

                toast.success("ZIP успешно скачан!");
            } else {
                setIsSendingEmails(true);
                toast.info("Отправляем письма...");

                const res = await axiosInstance.post("/", formData);

                // Результаты рассылки приходят в заголовке X-Email-Results
                const resultsHeader = res.headers["x-email-results"];
                const results = resultsHeader ? JSON.parse(resultsHeader) : [];

                const success = results.filter((r: any) => r.success).length;
                const failed = results.length - success;

                if (failed === 0) {
                    toast.success(`Успешно отправлено всем ${success} участникам!`);
                } else {
                    toast.warn(`Отправлено: ${success}, ошибок: ${failed}`);
                }
            }
        } catch (err: any) {
            console.error(err);
            toast.error(err.response?.data?.error || "Ошибка при обработке");
        } finally {
            setIsGeneratingZip(false);
            setIsSendingEmails(false);
        }
    };

    return (
        <div className="p-6 space-y-6 mx-auto">
            <div className="flex w-full justify-between">
                {/* Левая панель */}
                <div className="w-[20%] space-y-6">
                    <Button variant="outline" onClick={() => navigate(-1)}>
                        Назад
                    </Button>

                    {/* Загрузка файла */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">1. Excel-файл</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input
                                type="file"
                                accept=".xlsx"
                                onChange={handleFileChange}
                                disabled={loading || isGeneratingZip || isSendingEmails}
                            />
                            {loading && <div className="flex items-center gap-2 mt-3"><Loader2 className="w-4 h-4 animate-spin" /> Читаем...</div>}
                            {file && <p className="mt-2 text-sm text-green-600"><Upload className="w-4 h-4 inline" /> {file.name}</p>}
                            {error && <p className="mt-3 text-sm text-red-600 flex items-center gap-2"><AlertCircle className="w-4 h-4" /> {error}</p>}
                        </CardContent>
                    </Card>

                    {/* Поля */}
                    {fields.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">2. Поля</CardTitle>
                                <p className="text-sm text-muted-foreground">Клик — скопировать</p>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {fields.map((f) => (
                                    <Badge
                                        key={f}
                                        variant="secondary"
                                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                                        onClick={() => insertField(f)}
                                    >
                                        {'{{ ' + f + ' }}'}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    )}

                    {/* Кнопки действий */}
                    {file && fields.length > 0 && (
                        <div className="space-y-3 pt-4">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full"
                                onClick={() => generate("zip")}
                                disabled={isGeneratingZip || isSendingEmails}
                            >
                                {isGeneratingZip ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Генерация...
                                    </>
                                ) : (
                                    <>
                                        <Download className="mr-2 h-5 w-5" />
                                        Выгрузить ZIP
                                    </>
                                )}
                            </Button>

                            <Button
                                size="lg"
                                className="w-full"
                                onClick={() => generate("email")}
                                disabled={isGeneratingZip || isSendingEmails}
                            >
                                {isSendingEmails ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Отправка...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-5 w-5" />
                                        Отправить всем
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </div>

                {/* Правая часть */}
                <div className="w-[78%] h-[93vh]">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>3. HTML-шаблон</CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-between h-[83vh]">
                            <Textarea
                                value={htmlTemplate}
                                onChange={(e) => setHtmlTemplate(e.target.value)}
                                className="font-mono w-[42%] text-sm h-full resize-none rounded-r-none "
                            />
                            <div className="w-[56%] h-full border rounded-lg  overflow-hidden bg-white">
                                <iframe
                                    title="Превью"
                                    srcDoc={htmlTemplate}
                                    className="w-full h-full"
                                    sandbox="allow-same-origin"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default NewTemplatePage;