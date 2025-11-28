import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { TEMPLATES } from "@/lib/constants/templates";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getExelFileKeyWords } from "@/services/AuthByEmail/AuthByEmail";

const NewTemplatePage = () => {
    const initialHTML = TEMPLATES[0].template;
    const navigate = useNavigate(); const [text, updateText] = useState(initialHTML)
    const [file, setFile] = useState<File | null>(null);

    const getKeyWords = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);

        if (selectedFile) {
            console.log("Выбран файл:", selectedFile.name);

            // Если нужно прочитать Excel
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileData = event.target?.result;
                // здесь можно передать fileData в getExelFileKeyWords
                // getExelFileKeyWords(fileData)
                console.log(fileData);
            };
            reader.readAsArrayBuffer(selectedFile); // или readAsBinaryString/readAsText в зависимости от вашей функции
        }
    };

    return (
        <div className="p-6 space-y-4">
            {/* Навигация назад */}
            <Button className="w-fit mb-3" onClick={() => navigate(-1)}>
                Назад
            </Button>

            {/* Основная рабочая область */}
            <div className="flex flex-col md:flex-row gap-4 h-[80vh]">
                {/* Редактор HTML */}
                <Textarea
                    value={text}
                    onChange={(e) => updateText(e.target.value)}
                    className="flex-1 min-h-[300px] p-3 border rounded-md resize-none"
                    placeholder="Введите HTML здесь..."
                />

                {/* Превью */}
                <iframe
                    title="Webview"
                    className="flex-1 w-full h-[300px] md:h-full border rounded-md"
                    srcDoc={text}
                />
            </div>

            {/* Действия */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-3">
                <Input
                    onChange={getKeyWords}
                    type="file"
                    placeholder="Загрузить Excel файл"
                    className="w-full md:w-fit"
                />

                <div className="flex gap-4">
                    <Button className="w-fit" onClick={() => { }}>
                        Отправить участникам
                    </Button>
                    <Button className="w-fit" onClick={() => { }}>
                        Выгрузить zip
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NewTemplatePage;
