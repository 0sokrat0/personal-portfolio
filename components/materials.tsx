"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CardDecoration } from "@/components/ui/decorations";
import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink, FileText } from "lucide-react";
import { useState } from "react";

export function Materials() {
  const materials = [
    {
      id: 1,
      title: "США и Европа во второй половине XX века",
      description:
        "Презентация по истории, посвященная развитию западных стран во второй половине XX века.",
      type: "Презентация",
      link: "https://disk.yandex.ru/i/eqmB00mD2m8TQA",
    },
    {
      id: 2,
      title: "Культура 'развитого социализма'",
      description:
        "Учебные материалы по истории культуры СССР в период 'развитого социализма'.",
      type: "Презентация",
      link: "https://disk.yandex.ru/i/3j3YcD8Fmry08w",
    },
    {
      id: 3,
      title: "Экономика - основа жизнедеятельности",
      description:
        "Материалы по обществознанию, раскрывающие основы экономической системы общества.",
      type: "Презентация",
      link: "https://disk.yandex.ru/i/l3LGXutq5euD8Q",
    },
    {
      id: 4,
      title: "Социальная структура общества",
      description:
        "Учебные материалы по обществознанию, посвященные социальной стратификации и мобильности.",
      type: "Презентация",
      link: "https://disk.yandex.ru/d/mDo4kw9OlQEMdA",
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <FadeIn delay={300}>
      <Card className="border-0 shadow-lg overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md relative">
        <CardDecoration />
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <FadeIn
                key={material.id}
                delay={150 * index}
                direction="up"
                distance={20}
                once={false}
                threshold={0.2}
              >
                <div
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  onMouseEnter={() => setHoveredId(material.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="h-3 bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center transition-transform duration-300 ${
                          hoveredId === material.id ? "scale-110" : ""
                        }`}
                      >
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="inline-flex items-center mt-1 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs">
                          {material.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {material.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {material.description}
                    </p>

                    <div className="flex justify-end">
                      <a
                        href={material.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Открыть материал</span>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
