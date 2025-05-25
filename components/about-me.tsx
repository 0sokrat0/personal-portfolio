import { Card, CardContent } from "@/components/ui/card";
import { CardDecoration } from "@/components/ui/decorations";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export function AboutMe() {
  return (
    <FadeIn>
      <Card className="border-0 shadow-xl overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md relative">
        <CardDecoration />
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  📚 Преподаватель истории и обществознания с 2023 года. Умею
                  превращать прошлое в увлекательное путешествие, а сложные
                  социальные процессы – в понятные и актуальные идеи.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  Вовлекаю в образовательный процесс через мультимедиа,
                  документальные кадры, игры, проекты, а также через личную
                  историю каждого студента.
                </p>
                <div className="mt-4 quote">
                  "Знать прошлое, чтобы понимать будущее", - лозунг, не
                  покидающий мои занятия.
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  История
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Обществознание
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Интерактивное обучение
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Проектная работа
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Мультимедиа
                </span>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="image-frame h-64 md:h-80">
                <Image
                  src="/images/photo/2.jpg"
                  alt="Елизавета Шкурина проводит занятие"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
