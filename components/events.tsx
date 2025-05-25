"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CardDecoration } from "@/components/ui/decorations";
import { FadeIn } from "@/components/ui/fade-in";
import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Events() {
  const events = [
    {
      id: "event1",
      title: "Открытое занятие по ОПБ.05 Обществознание",
      date: "2023",
      location: "Колледж информатики и программирования",
      participants: "Группа ИСИП-624",
      description:
        "На открытом уроке по обществознанию преподаватель Елизавета Сергеевна Шкурина познакомила первокурсников группы ИСИП-624 с темой «Рынок труда и безработица». Ребята изучили структуру зарплаты, проанализировали статистику по прожиточному минимуму и МРОТ, просмотрели видео о формах зарплаты и обсудили виды безработицы на примерах. Занятие прошло в формате командной работы: студенты составили алгоритм по теме, выделив ключевые элементы, что поможет им в будущем в профессии. Урок завершился выводами в формате «верное/неверное» и рефлексией, где каждый мог оценить свою работу.",
      image: "/images/photo/1.jpg",
    },
    {
      id: "event2",
      title: "Урок мужества в КИПФИН",
      date: "2024",
      location: "КИПФИН",
      participants: "Студенты колледжа",
      description:
        "В КИПФИН прошел урок мужества, который провела Шкурина Е.С. Занятие было посвящено Дню памяти о россиянах, исполнявших служебный долг за пределами Отечества. Студенты узнали о военных конфликтах, в которых участвовали советские войска, почтили память воинов, сражавшихся в Афганистане, и задумались о глубоком значении слова «мужество».",
      image: "/images/photo/2.jpg",
    },
    {
      id: "event3",
      title: "Заседание предметной цикловой комиссии ОГСЭ",
      date: "2024",
      location: "КИПФИН",
      participants: "Преподаватели колледжа",
      description:
        "В КИПФИН прошло заседание предметной цикловой комиссии общих гуманитарных и социально-экономических дисциплин. Обсуждались вопросы методического сопровождения образовательных программ и современные подходы к обучению. Шкурина Е.С. рассказала о применении ИИ на занятиях. Коллеги отметили ценность представленного опыта и рекомендовали его к использованию в образовательной практике.",
      image: "/images/photo/3.jpg",
    },
    {
      id: "event4",
      title: "Памяти героев — навсегда в наших сердцах",
      date: "6 мая 2024",
      location: "Грачевский парк",
      participants: "Группа 1ИСИП-924",
      description:
        "6 мая студенты группы 1ИСИП-924 вместе с преподавателем Шкуриной Е.С. возложили цветы к мемориалу «Советским воинам — защитникам Москвы» в Грачевском парке. Этот торжественный момент стал знаком уважения и благодарности участникам Великой Отечественной войны, отдавшим жизнь за свободу и мир. Мы помним. Мы гордимся.",
      image: "/images/photo/4.jpg",
    },
  ];

  const [activeEvent, setActiveEvent] = useState(events[0]);

  return (
    <FadeIn delay={300}>
      <Card className="border-0 shadow-xl overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md relative">
        <CardDecoration />
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="space-y-3">
                {events.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setActiveEvent(event)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeEvent.id === event.id
                        ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                        : "bg-white hover:bg-primary/5 shadow-sm"
                    }`}
                  >
                    <h3
                      className={`font-semibold ${
                        activeEvent.id === event.id
                          ? "text-white"
                          : "text-primary"
                      }`}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        activeEvent.id === event.id
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      {event.date}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-64 md:h-72 w-full">
                  <Image
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {activeEvent.title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center text-sm text-white/90 gap-1">
                        <Calendar className="w-4 h-4" />
                        {activeEvent.date}
                      </span>
                      <span className="inline-flex items-center text-sm text-white/90 gap-1">
                        <MapPin className="w-4 h-4" />
                        {activeEvent.location}
                      </span>
                      <span className="inline-flex items-center text-sm text-white/90 gap-1">
                        <Users className="w-4 h-4" />
                        {activeEvent.participants}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {activeEvent.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
