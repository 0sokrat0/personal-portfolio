"use client";

import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardDecoration } from "@/components/ui/decorations";
import { FadeIn } from "@/components/ui/fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full rounded-xl bg-primary hover:bg-primary/90 transition-opacity"
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Отправка...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Send className="w-4 h-4" />
          Отправить сообщение
        </span>
      )}
    </Button>
  );
}

export function Contacts() {
  const initialState: ContactFormState = {};
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <FadeIn delay={400}>
      <Card className="border-0  shadow-lg overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md relative">
        <CardDecoration />
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Связаться со мной
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-md">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">ESShkurina@fa.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Адрес</p>
                    <p className="font-medium">Кронштадтский бульвар, 37Б</p>
                    <p className="text-sm text-gray-500">Москва</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">
                  Колледж информатики и программирования
                </h4>
                <a
                  href="https://kip.fa.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Посетить сайт колледжа</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Обратная связь
              </h3>
              {state?.success ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-green-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-lg">
                      Спасибо за ваше сообщение!
                    </h4>
                  </div>
                  <p>{state.message}</p>
                </div>
              ) : (
                <form action={formAction} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className={`rounded-xl border-gray-200 focus:border-primary focus:ring-primary ${
                        state?.errors?.name
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    {state?.errors?.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {state.errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={`rounded-xl border-gray-200 focus:border-primary focus:ring-primary ${
                        state?.errors?.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    {state?.errors?.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {state.errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={`rounded-xl border-gray-200 focus:border-primary focus:ring-primary ${
                        state?.errors?.message
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    {state?.errors?.message && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {state.errors.message}
                      </p>
                    )}
                  </div>

                  {state?.errors?._form && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-800">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        <p>{state.errors._form}</p>
                      </div>
                    </div>
                  )}

                  <SubmitButton />
                </form>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
