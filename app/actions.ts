"use server"

import { z } from "zod"

// Схема валидации для формы обратной связи
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  email: z.string().email({ message: "Введите корректный email адрес" }),
  message: z.string().min(10, { message: "Сообщение должно содержать не менее 10 символов" }),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Валидация данных формы
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  // Если валидация не прошла, возвращаем ошибки
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Пожалуйста, исправьте ошибки в форме",
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    // Здесь будет логика отправки данных (например, в базу данных или по email)
    // Для демонстрации просто имитируем задержку
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // В реальном приложении здесь будет код для отправки данных
    console.log("Форма отправлена:", { name, email, message })

    // Возвращаем успешный результат
    return {
      success: true,
      message: "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.",
    }
  } catch (error) {
    // Обработка ошибок
    return {
      errors: {
        _form: ["Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже."],
      },
      success: false,
    }
  }
}
