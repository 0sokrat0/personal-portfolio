import { AboutMe } from "@/components/about-me";
import { Achievements } from "@/components/achievements";
import { Contacts } from "@/components/contacts";
import { Education } from "@/components/education";
import { Events } from "@/components/events";
import { Info } from "@/components/info";
import { Materials } from "@/components/materials";
import { Navigation } from "@/components/navigation";
import { StudentWorks } from "@/components/student-works";
import { ThemeToggle } from "@/components/theme-toggle";
import { BubbleDecoration, WavyDivider } from "@/components/ui/decorations";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bubble-bg">
      <BubbleDecoration className="inset-0 fixed" />

      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Персональный сайт преподавателя
          </h1>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Navigation />
          </aside>

          <main className="lg:col-span-3 space-y-20">
            <section id="info" className="pt-8">
              <Info />
            </section>

            <section id="about" className="pt-8">
              <FadeIn direction="up" delay={100}>
                <h2 className="section-title">Обо мне</h2>
              </FadeIn>
              <AboutMe />
            </section>

            <section id="education" className="pt-8">
              <FadeIn direction="up" delay={100}>
                <h2 className="section-title">Образование</h2>
              </FadeIn>
              <Education />
            </section>

            <section id="events" className="pt-8">
              <FadeIn direction="up" delay={100}>
                <h2 className="section-title">События</h2>
              </FadeIn>
              <Events />
            </section>

            <section id="materials" className="pt-8">
              <FadeIn direction="up" delay={100}>
                <h2 className="section-title">Учебные материалы</h2>
              </FadeIn>
              <Materials />
            </section>

            <section id="student-works" className="pt-8">
              <FadeIn direction="up" delay={100}>
                <h2 className="section-title">Работы студентов</h2>
              </FadeIn>
              <StudentWorks />
            </section>

            <section id="achievements" className="pt-8">
              <FadeIn direction="up" delay={100}>
                <h2 className="section-title">Достижения</h2>
              </FadeIn>
              <Achievements />
            </section>

            <section id="contacts" className="pt-8">
              <FadeIn direction="up" delay={100}>
                <h2 className="section-title">Контакты</h2>
              </FadeIn>
              <Contacts />
            </section>
          </main>
        </div>
      </div>

      <WavyDivider />
      <footer className="bg-primary text-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
