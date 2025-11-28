import { useState } from "react";
import { TEMPLATES } from "@/lib/constants/templates";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TemplatePage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const initialHTML = TEMPLATES.find(template => template.name == id)?.template

    const [text, updateText] = useState(initialHTML);

    return (
        <div className="p-11">

            <div className="flex items-center gap-2 h-[80vh]">

                <div style={{ width: "100%", height: '100% ' }} className="flex flex-col justify-between">
                    <Button className="w-fit" onClick={() => navigate(-1)}>Назад</Button>

                    <Button className="w-fit">Скачать шаблон exel файла</Button>
                </div>

                <iframe
                    title="Webview"
                    className="w-full h-full border "
                    srcDoc={text}
                /></div>

            <div className="flex items-center justify-between mt-3">
                <Input className="w-fit" type="file" placeholder="Загрузить exel файл" />
                <div className="flex gap-4">
                    <Button className="w-fit " onClick={() => { }}>Отправить участникам</Button>
                    <Button className="w-fit " onClick={() => { }}>Выгрузить zip</Button></div>
            </div>
        </div>
    )
};

export default TemplatePage;
