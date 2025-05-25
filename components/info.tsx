import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export function Info() {
  return (
    <div className="relative">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

      <FadeIn>
        <Card className="border-0 shadow-xl overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">
          <CardContent className="p-0">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70 z-10" />
              <Image
                src=""
                alt="Елизавета Шкурина"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6">
                <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 animate-float">
                  <Image
                    src="/images/photo/Иформация.jpg"
                    alt="Фотография преподавателя"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 128px, 160px"
                    quality={90}
                  />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-center mb-2 drop-shadow-md">
                  Шкурина Елизавета Сергеевна
                </h1>
                <p className="text-lg md:text-xl text-center opacity-90 drop-shadow-md">
                  Преподаватель истории и обществознания
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <span className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground rounded-full font-medium">
                  История
                </span>
                <span className="px-4 py-2 bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary-foreground rounded-full font-medium">
                  Обществознание
                </span>
                <span className="px-4 py-2 bg-accent/10 dark:bg-accent/20 text-accent-foreground rounded-full font-medium">
                  Колледж информатики и программирования
                </span>
              </div>

              <p className="text-center text-lg text-gray-600 dark:text-gray-300">
                Приветствую вас на моем персональном сайте! Здесь вы найдете
                информацию о моей преподавательской деятельности, учебные
                материалы и многое другое.
              </p>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
