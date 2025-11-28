export interface ExcelData {
    [key: string]: string | number;
}
export interface TemplateEditorProps {
    template: string;
    setTemplate: (value: string) => void;
    css: string;
    setCss: (value: string) => void;
}

export interface ExcelUploaderProps {
    setExcelData: (data: ExcelData[]) => void;
}

export interface TemplatePreviewProps {
    template: string;
    css: string;
    data: ExcelData | null;
}
export interface PDFGeneratorProps {
    template: string;
    css: string;
    data: ExcelData[];
}