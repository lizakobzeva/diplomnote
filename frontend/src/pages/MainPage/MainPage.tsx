import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TEMPLATES } from "@/lib/constants/templates";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, Copy, LogOut } from "lucide-react";
import { ITemplate } from "@/lib/types";
import { toast, Toaster } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MainPage = () => {
  const navigate = useNavigate();

  // Данные пользователя (замени на свой стор/контекст при необходимости)
  const userName = localStorage.getItem("user_name") || "Пользователь";

  const handleCopy = (template: ITemplate) => {
    navigator.clipboard.writeText(template.template);
    toast.success(`Шаблон "${template.name}" скопирован.`);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_name");
    // удали другие данные при необходимости
    navigate("/login");
    toast.success("Вы вышли из аккаунта");
  };

  return (
    <div className="relative py-[5vh] px-[10vw] flex flex-col w-full h-[80vh] justify-between items-center">
      <Toaster />

      {/* Плашка профиля — НЕ влияет на расположение карусели */}
      <div className="absolute top-6 right-[10vw] z-20">
        <Card className="shadow-md">
          <CardContent className="flex items-center gap-3 p-2 pr-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={localStorage.getItem("user_avatar") || undefined} />
              <AvatarFallback>{userName[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium max-w-[120px] truncate">
              {userName}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold tracking-tight text-center"
      >
        Выберите шаблон
      </motion.h1>

      {/* Основной блок — полностью как было у тебя изначально */}
      <div className="flex w-full items-center justify-between mt-10 overflow-visible">
        <Carousel opts={{ align: "start" }} className="w-[70%] h-full overflow-visible">
          <CarouselContent className="flex space-x-6 overflow-visible">
            {TEMPLATES.map((template) => (
              <CarouselItem
                onClick={() => navigate(`/template/${template.name}`)}
                key={template.name}
                className="md:basis-1/2 lg:basis-1/3 min-w-[25vw]"
              >
                <motion.div whileHover={{ scale: 1.03 }} className="p-3 overflow-visible">
                  <Card className="h-[60vh] min-w-[25vw] rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition cursor-pointer overflow-visible">
                    <CardContent className="flex flex-col h-full items-center justify-between p-6 overflow-visible">
                      <img
                        className="w-full h-[40vh] object-cover rounded-xl shadow-sm"
                        src={template.img}
                        alt={template.name}
                      />
                      <span className="text-2xl font-semibold mt-4 text-center">
                        {template.name}
                      </span>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(template);
                        }}
                        className="mt-4 flex items-center space-x-2"
                      >
                        <Copy className="w-5 h-5" />
                        <span>Скопировать</span>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Карточка "Новый шаблон" — без изменений */}
        <motion.div whileHover={{ scale: 1.1 }} className="overflow-visible">
          <Card
            className="cursor-pointer rounded-2xl shadow-lg h-[60vh] flex items-center justify-center border border-gray-200 hover:shadow-2xl transition overflow-visible"
            onClick={() => navigate("/newtemplate")}
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Plus className="w-16 h-16" />
              <span className="text-2xl font-semibold mt-2">Новый шаблон</span>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default MainPage;