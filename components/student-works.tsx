"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CardDecoration } from "@/components/ui/decorations";
import { ExternalLink, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function StudentWorks() {
  const works = [
    {
      id: "work1",
      student: "Иракская война",
      title: "Война в Ираке",
      description:
        "Исследовательская работа, посвященная анализу причин, хода и последствиям войны в Ираке.",
      image: "/images/image1.png",
      link: "https://disk.yandex.ru/i/N56D4SlPVB8jvQ",
    },
    {
      id: "work2",
      student: "Моя семья в годы Великой Отечественной войны",
      title: "Моя семья в годы Великой Отечественной войны",
      description:
        "Работа победителя конкурса, рассказывающая о судьбе семьи в годы ВОВ, основанная на семейных архивах и воспоминаниях.",
      image: "/images/image2.png",
      link: "https://disk.yandex.ru/i/yFKrGjz9rCu7MA",
    },
    {
      id: "work3",
      student: "ТЕХНОРАКЕТА",
      title: "Проект IT-предприятия",
      description:
        "Коллективный проект студентов по разработке концепции IT-предприятия с учётом социально-экономических факторов.",
      image: "/images/image3.png",
      link: "https://disk.yandex.ru/d/OAQqgSTa_grS2w",
    },
  ];

  const [selectedWork, setSelectedWork] = useState<string | null>(null);

  return (
    <Card className="border-0 shadow-lg overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md relative">
      <CardDecoration />
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                selectedWork === work.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() =>
                setSelectedWork(selectedWork === work.id ? null : work.id)
              }
            >
              <div className="relative h-48">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={500}
                  height={300}
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white ">
                    {work.title}
                  </h3>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm  text-gray-600 font-medium">
                      {work.student}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {work.description}
                </p>

                <div className="flex justify-end">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Открыть работу</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
