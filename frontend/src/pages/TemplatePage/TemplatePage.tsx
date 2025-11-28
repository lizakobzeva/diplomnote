import { useState } from "react";
import { TEMPLATES } from "@/lib/constants/templates";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Upload, Download, Send, FileDown, AlertCircle } from "lucide-react";
import axiosInstance from "@/lib/config/ApiConfig/ApiConfig";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";

// Вспомогательная функция: вытаскиваем все {{ поле }} из шаблона
const extractFieldsFromTemplate = (html: string): string[] => {
    const regex = /{{\s*([a-zA-Z0-9_]+)\s*}}/gi;
    const fields = new Set<string>();
    let match;
    while ((match = regex.exec(html)) !== null) {
        fields.add(match[1].trim());
    }
    return Array.from(fields);
};

const downloadSampleExcel = () => {
    // Прямая ссылка на файл из папки public
    const link = document.createElement("a");
    link.href = "/templates/шаблон.xlsx"; // или "/samples/certificate-sample.xlsx"
    link.download = "шаблон_для_заполнения.xlsx"; // имя файла при скачивании
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Шаблон скачан!");
};
const TemplatePage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const template = TEMPLATES.find(t => t.name === id);
    if (!template) {
        return <div className="p-10 text-center text-xl">Шаблон не найден</div>;
    }

    const [file, setFile] = useState<File | null>(null);
    const [fields, setFields] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [generating, setGenerating] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Автоматически вытаскиваем поля из шаблона при загрузке страницы
    const templateFields = extractFieldsFromTemplate(template.template);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile || !selectedFile.name.endsWith('.xlsx')) {
            toast.error("Только .xlsx файлы");
            return;
        }

        setFile(selectedFile);
        setError(null);
        setLoading(true);

        const formData = new FormData();
        formData.append("excel_file", selectedFile);

        try {
            const res = await axiosInstance.post("/get_fields", formData); // без headers!
            if (res.data.success) {
                setFields(res.data.columns);
                toast.success(`Загружено полей: ${res.data.columns.length}`);
            }
        } catch (err: any) {
            toast.error("Ошибка чтения файла");
            setError("Не удалось прочитать Excel");
        } finally {
            setLoading(false);
        }
    };

    const insertField = (field: string) => {
        navigator.clipboard.writeText(`{{ ${field} }}`);
        toast.success(`Скопировано: {{ ${field} }}`, { autoClose: 1500 });
    };

    const generate = async (mode: "zip" | "email") => {
        if (!file) return toast.error("Загрузите Excel-файл");

        const formData = new FormData();
        formData.append("excel_file", file);
        formData.append("template_file", new Blob([template.template], { type: "text/html" }), "template.html");
        formData.append("delivery_method", mode);

        try {
            if (mode === "zip") {
                setGenerating(true);
                const res = await axiosInstance.post("/", formData, { responseType: "blob" });
                saveAs(new Blob([res.data]), `сертификаты_${Date.now()}.zip`);
                toast.success("ZIP скачан!");
            } else {
                setSending(true);
                const res = await axiosInstance.post("/", formData);
                const resultsHeader = res.headers["x-email-results"];
                const results = resultsHeader ? JSON.parse(resultsHeader) : [];
                const ok = results.filter((r: any) => r.success).length;
                toast.success(`Отправлено: ${ok} из ${results.length}`);
            }
        } catch (err: any) {
            toast.error("Ошибка: " + (err.response?.data?.error || "неизвестно"));
        } finally {
            setGenerating(false);
            setSending(false);
        }
    };

    return (
        <div className="p-6 mx-auto">
            <div className="flex gap-8 h-[88vh]">
                {/* Левая панель */}
                <div className="w-[23%] space-y-6">
                    <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
                        Назад
                    </Button>

                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-lg">{template.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                            <Button
                                variant="secondary"
                                className="w-full"
                                onClick={downloadSampleExcel}
                            >
                                <FileDown className="mr-2 h-4 w-4" />
                                Скачать пример Excel
                            </Button>

                            {/* Загрузка своего файла */}
                            <div className="space-y-3">
                                <Input
                                    type="file"
                                    accept=".xlsx"
                                    onChange={handleFileChange}
                                    disabled={loading || generating || sending}
                                />
                                {loading && <p className="text-sm text-muted-foreground flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Читаем...</p>}
                                {file && <p className="text-sm text-green-600 flex items-center gap-1"><Upload className="w-4 h-4" /> {file.name}</p>}
                                {error && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {error}</p>}
                            </div>

                            {/* Поля из загруженного файла */}
                            {fields.length > 0 && (
                                <div>
                                    <p className="text-sm font-medium mb-2">Поля из вашего файла:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {fields.map(f => (
                                            <Badge key={f} variant="secondary" className="cursor-pointer text-xs" onClick={() => insertField(f)}>
                                                {'{{ ' + f + ' }}'}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Поля из шаблона (подсказка) */}
                            {templateFields.length > 0 && fields.length === 0 && (
                                <div className="text-xs text-muted-foreground">
                                    <p className="font-medium mb-2">Ожидаются поля:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {templateFields.map(f => (
                                            <Badge key={f} variant="outline" className="text-xs">
                                                {'{{ ' + f + ' }}'}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Кнопки действий */}
                            <div className="space-y-3">
                                <Button
                                    className="w-full"
                                    variant="outline"
                                    onClick={() => generate("zip")}
                                    disabled={!file || generating || sending}
                                >
                                    {generating ? "Генерация..." : "Выгрузить ZIP"}
                                    <Download className="ml-2 h-4 w-4" />
                                </Button>
                                <Button
                                    className="w-full"
                                    onClick={() => generate("email")}
                                    disabled={!file || generating || sending}
                                >
                                    {sending ? "Отправка..." : "Отправить всем"}
                                    <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Превью */}
                <div className="flex-1 h-[95vh] border-2 border-dashed rounded-xl overflow-hidden bg-white shadow-xl">
                    <iframe
                        title="Превью сертификата"
                        srcDoc={template.template}
                        className="w-full h-full"
                        sandbox="allow-same-origin"
                    />
                </div>
            </div>
        </div>
    );
};

export default TemplatePage;