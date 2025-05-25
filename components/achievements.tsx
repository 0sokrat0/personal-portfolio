"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardDecoration } from "@/components/ui/decorations";
import { Award, Calendar } from "lucide-react";
import Image from "next/image";

export function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "Хрущевская оттепель",
      year: "2025",
      image: "/images/achievements/Оттепель.jpg",
      color: "from-pink-500 to-rose-500",
      description:
        "Свидетельство о размещении авторского материала на сайте infourok.ru",
    },

    {
      id: 2,
      title: "Благодарность",
      year: "2025",
      image: "/images/achievements/Благодарность проекта infourok.r.jpg",
      color: "from-violet-500 to-purple-500",
      description:
        "Свидетельство о размещении авторского материала на сайте infourok.ru",
    },
    {
      id: 3,
      title: "Инфографика по обществознанию «Потребление»",

      year: "2025",
      image: "/images/achievements/Потребление.jpg",
      color: "from-blue-500 to-cyan-500",
      description:
        "Свидетельство о размещении авторского материала на сайте infourok.ru",
    },
    {
      id: 4,
      title: "Лекция «Начало ВОВ»",

      year: "2025",
      image:
        "/images/achievements/Свидетельство проекта infourok.ru №ЦШ80592514.jpg",
      color: "from-blue-500 to-cyan-500",
      description:
        "Свидетельство о размещении авторского материала на сайте infourok.ru",
    },
    {
      id: 5,
      title: "КМЭПТ24",
      year: "2024",
      image: "/images/achievements/КМЭПТ24.jpg",
      color: "from-blue-500 to-cyan-500",
      description:
        "научно-практической конференции КМЭПТ Апрельские чтения - 2024",
    },
    {
      id: 6,
      title: "Благодартвенное письмо",
      year: "2025",
      image: "/images/achievements/Благодарность квиз.jpg",
      color: "from-blue-500 to-cyan-500",
      description:
        "Благодарность за организацию мероприятия ко Дню Конституции Российской Федерации",
    },
    {
      id: 7,
      title: "КМЭПТ25",
      year: "2025",
      image: "/images/achievements/КМЭПТ25.jpg",
      color: "from-blue-500 to-cyan-500",
      description:
        "Благодарность за подготовку студентов к IV межрегиональной студенческой научно-практической конференции КМЭПТ Апрельские чтения - 2025",
    },
    {
      id: 8,
      title: "Благодарность",
      year: "2025",
      image: "/images/achievements/Благодарность Шкурина.png",
      color: "from-blue-500 to-cyan-500",
      description:
        " Благодарность за подготовку призера II Межрегиональной олимпиады Великая Победа",
    },
    {
      id: 9,
      title: "Благодарность за подготовку и организацию конкурса ",
      year: "2025",
      image: "/images/achievements/1.jpg",
      color: "from-pink-500 to-rose-500",
      description:
        'Благодарность за подготовку и организацию конкурса "Моя семья в годы Великой Отечественной войны"',
    },
    {
      id: 10,
      title: "Сертификат участника Всероссийского конкурса лучших практик...",
      year: "2025",
      image: "/images/achievements/2.jpg",
      color: "from-violet-500 to-purple-500",
      description:
        "Сертификат участника Всероссийского конкурса лучших практик методических разработок для системы СПО по УГПС 09.00.00",
    },
    {
      id: 11,
      title:
        'Сертификат докладчика Международной конференции "Форсайт образования..."',
      year: "2025",
      image: "/images/achievements/3.jpg",
      color: "from-green-500 to-teal-500",
      description:
        'Сертификат докладчика Международной научно-практической конференции "Форсайт образования. Портрет студента будущего"',
    },
    {
      id: 12,
      title:
        'Сертификат участника Международной конференции "Форсайт образования..."',
      year: "2025",
      image: "/images/achievements/4.jpg",
      color: "from-yellow-500 to-orange-500",
      description:
        'Сертификат участника Международной научно-практической конференции "Форсайт образования. Портрет преподавателя будущего"',
    },
  ];

  return (
    <Card className="border-0 shadow-lg overflow-hidden bg-white/80 dark:bg-gray-800/90 backdrop-blur-md relative">
      <CardDecoration />
      <CardContent className="p-6 md:p-8">
        <Carousel className="w-full">
          <CarouselContent>
            {achievements.map((a) => (
              <CarouselItem
                key={a.id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="p-1">
                  <div className="bg-white dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300">
                    <div className="relative w-full aspect-[2/3]">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${a.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                      ></div>
                      <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm text-gray-500">{a.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {a.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {a.description}
                      </p>
                      {/* Здесь зарезервировано место под файл */}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="bg-white dark:bg-gray-800/90 hover:bg-primary hover:text-white" />
            <CarouselNext className="bg-white dark:bg-gray-800/90 hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
}
