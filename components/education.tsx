import { Card, CardContent } from "@/components/ui/card";
import { CardDecoration } from "@/components/ui/decorations";
import { FadeIn } from "@/components/ui/fade-in";
import { Calendar } from "lucide-react";
import Image from "next/image";

export function Education() {
  return (
    <FadeIn delay={200}>
      <Card className="border-0 shadow-xl overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md relative">
        <CardDecoration />
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-primary/20"></div>

              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="bg-white rounded-xl p-5 shadow-sm card-hover">
                  <h3 className="text-xl font-semibold text-primary">
                    ГАОУ ВО МГПУ
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Бакалавр. Педагогическое образование с двумя профилями
                    подготовки (история, иностранный язык)
                  </p>
                  <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>2023</span>
                  </div>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="bg-white rounded-xl p-5 shadow-sm card-hover">
                  <h3 className="text-xl font-semibold text-primary">
                    ГАОУ ВО МГПУ
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Программа переподготовки "Преподавание обществознания"
                  </p>
                  <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>2023</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="image-frame h-64">
                <Image
                  src="/images/photo/Образование (2).jpg"
                  alt="Елизавета Шкурина с дипломом МГПУ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="image-frame h-64">
                <Image
                  src="/images/photo/Образование.jpg"
                  alt="Диплом о высшем образовании"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
