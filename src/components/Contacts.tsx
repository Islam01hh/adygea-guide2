import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, Check, AlertCircle } from "lucide-react";

interface ContactsProps {
  onSubmitFeedback: (name: string, email: string, message: string) => Promise<boolean>;
}

export default function Contacts({ onSubmitFeedback }: ContactsProps) {
  const [fName, setFName] = useState("");
  const [fEmail, setFEmail] = useState("");
  const [fMessage, setFMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fName || !fEmail || !fMessage) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const ok = await onSubmitFeedback(fName, fEmail, fMessage);
      if (ok) {
        setSubmitStatus("success");
        setFName("");
        setFEmail("");
        setFMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Auto-clear success status indicator after 5s
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-6 text-left" id="contacts_and_feedback_container">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-teal-600 animate-pulse" />
          <h2 className="font-display font-black text-xl md:text-2xl text-slate-800 tracking-tight">
            Официальные контакты и обратная связь
          </h2>
        </div>
        <p className="text-slate-500 text-xs md:text-sm mt-1">
          Туристско-информационный центр Республики Адыгея всегда рад помочь гостям и выслушать рационализаторские идеи
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Contact credentials and coordinates cards */}
        <div className="space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-4.5">
            <h3 className="font-display font-bold text-slate-800 text-sm md:text-base">
              📍 Контактный узел ТИЦ Адыгеи
            </h3>
            
            <div className="space-y-3 text-xs text-slate-650">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-800">Почтовый адрес администрации</span>
                  <p className="font-light">385000, Республика Адыгея, г. Майкоп, ул. Краснооктябрьская, д. 21</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-800">Телефон ТИЦ РА (Справочная)</span>
                  <p className="font-light font-mono">+7 (877) 252-11-22</p>
                  <span className="text-[10px] text-slate-400 font-light block">Режим работы: пн-пт с 09:00 до 18:00</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-800">Электронная почта</span>
                  <a href="mailto:info@adygea-gid.ru" className="font-light text-teal-600 hover:underline font-mono">info@adygea-gid.ru</a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-orange-50/25 border border-orange-100 rounded-2xl text-xs text-slate-650 leading-relaxed font-light">
            <HelpCircle className="w-5 h-5 text-orange-500 mb-1" />
            <h4 className="font-bold text-slate-800 mb-1">Где припарковать автомобиль?</h4>
            Перед началом прогулки по главной Краснооктябрьской улице в Майкопе, вы можете оставить машину на бесплатной охраняемой стоянке возле Городского парка культуры и отдыха.
          </div>
        </div>

        {/* Suggest Improvement Form Panel */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100" id="suggest_improvement_form_box">
          <h3 className="font-display font-bold text-slate-800 text-sm md:text-base border-b border-slate-200 pb-3 mb-4">
            📩 Форма «Предложить улучшение»
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1 uppercase font-mono tracking-wider">Ваше имя</label>
              <input
                type="text"
                required
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                placeholder="Константин Константинопольский"
                className="w-full bg-white border border-slate-250/60 rounded-xl px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-opacity-90"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1 uppercase font-mono tracking-wider">Электронный адрес (Email)</label>
              <input
                type="email"
                required
                value={fEmail}
                onChange={(e) => setFEmail(e.target.value)}
                placeholder="example@mail.ru"
                className="w-full bg-white border border-slate-250/60 rounded-xl px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-opacity-90 animate-none"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1 uppercase font-mono tracking-wider">Суть предложения / Сообщение</label>
              <textarea
                required
                rows={4}
                value={fMessage}
                onChange={(e) => setFMessage(e.target.value)}
                placeholder="Здравствуйте! Предлагаю добавить в маршруты координаты Хаджохских дольменов, расположенных неподалеку..."
                className="w-full bg-white border border-slate-250/60 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-opacity-90 resize-none font-light"
                disabled={isSubmitting}
              />
            </div>

            {submitStatus === "success" && (
              <div className="bg-teal-50 border border-teal-200 text-teal-800 rounded-xl p-3 text-[11px] flex items-center gap-2 font-semibold">
                <Check className="w-4.5 h-4.5 text-teal-500 shrink-0" />
                <span>Ваше предложение успешно отправлено в БД Адыгеи! Администратор ответит Вам на email.</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-3 text-[11px] flex items-center gap-2 font-semibold">
                <AlertCircle className="w-4.5 h-4.5 text-red-500 shrink-0" />
                <span>Ошибка службы отправки. Попробуйте еще раз позже.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-bold text-xs rounded-xl shadow-md transition inline-flex items-center justify-center gap-2"
              id="btn_submit_contacts_suggest"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Отправка..." : "Отправить предложение в администрацию"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
