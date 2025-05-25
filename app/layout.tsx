import type React from "react"
import type { Metadata } from "next"
import { playfair, lato } from "@/lib/fonts"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Персональный сайт преподавателя | Шкурина Елизавета Сергеевна",
  description: "Информация о преподавателе истории и обществознания, учебные материалы, достижения и контакты",
  keywords: ["преподаватель", "история", "обществознание", "образование", "учебные материалы", "колледж"],
  authors: [{ name: "Шкурина Елизавета Сергеевна" }],
  creator: "Шкурина Елизавета Сергеевна",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    title: "Персональный сайт преподавателя | Шкурина Елизавета Сергеевна",
    description: "Информация о преподавателе истории и обществознания, учебные материалы, достижения и контакты",
    siteName: "Персональный сайт преподавателя",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4f6bbd" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${playfair.variable} ${lato.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
