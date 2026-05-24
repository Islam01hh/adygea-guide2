import { useState } from "react";
import { Calendar, Award, MapPin, Sparkles, Filter, Users } from "lucide-react";

interface AdygeaEvent {
  title: string;
  category: "culture" | "sport" | "music";
  date: string;
  location: string;
  description: string;
  participants: string;
  image: string;
}

export default function EventsList() {
  const [activeFilter, setActiveFilter] = useState<"all" | "culture" | "sport" | "music">("all");

  const events: AdygeaEvent[] = [
    {
      title: "Международный фестиваль Адыгейского Сырa",
      category: "culture",
      date: "Середина сентября (ежегодно)",
      location: "Республика Адыгея, Даховская поляна у хребта Уна-Коз",
      description: "Главное ежегодное гастрономическое событие республики! Сюда приезжают десятки тысяч туристов со всей России, чтобы попробовать свежесваренный сыр от лучших подворий каждого района Адыгеи. Конкурсы сыроваров, народные танцы джегу, дегустации халюжей и кояжа под кавказскую музыку.",
      participants: "Свыше 35,000 гостей",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Водные соревнования «Интерралли Белая»",
      category: "sport",
      date: "Конец апреля — Начало мая",
      location: "Майкопский район, река Белая у поселка Гузерипль",
      description: "Легендарный весенний чемпионат по экстремальному сплаву на рафтах и катамаранах на бурных порогах реки Белой (пороги 'Киша-1', 'Киша-2', 'Топоры'). Сложные естественные сплавные препятствия 4-5 категории сложности. Собирает сильнейших рафтеров и каякеров страны.",
      participants: "Более 200 команд и тысячи зрителей",
      image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "День Республики Адыгея",
      category: "culture",
      date: "5 октября (ежегодно)",
      location: "г. Майкоп, центральная площадь им. Ленина",
      description: "Официальный государственный национальный праздник! Массовые гуляния по главной пешеходной улице Краснооктябрьская, этно-базары с адыгскими сувенирами ручной работы (золотое шитье, резьба по дереву), концерты государственных ансамблей «Нальмэс» и «Исламей», завершающиеся праздничным салютом.",
      participants: "Общереспубликанское празднование",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Южно-российский фестиваль авторской песни «Первоцвет»",
      category: "music",
      date: "Начало мая",
      location: "Майкопский район, пос. Каменномостский (Хаджох)",
      description: "Атмосферный весенний фестиваль бардовской песни под звездами у Кавказских предгорий. Палаточный этно-лагерь, костры, душевные песни под акустическую гитару о горах, сплавах, дружбе и романтике дикой природы Кавказа.",
      participants: "Более 1,500 любителей гитарной лирики",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const filtered = activeFilter === "all" 
    ? events 
    : events.filter(e => e.category === activeFilter);

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-6 text-left" id="events_list_container">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-600 animate-pulse" />
          <h2 className="font-display font-black text-xl md:text-2xl text-slate-800 tracking-tight">
            Календарь событий и фестивалей
          </h2>
        </div>
        <p className="text-slate-500 text-xs md:text-sm mt-1">
          Планируйте ваше путешествие под яркие этнографические праздники и зрелищные горные состязания
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center gap-1.5 flex-wrap bg-slate-50 p-1 rounded-2xl border border-slate-100 max-w-max">
        <span className="text-[10px] font-mono font-bold text-slate-400 px-2 uppercase tracking-wider flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Сортировка:
        </span>
        {[
          { id: "all", label: "Все мероприятия" },
          { id: "culture", label: "🎭 Культура" },
          { id: "sport", label: "🚣 Спорт / Экстрим" },
          { id: "music", label: "🎸 Музыка / Песни" }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id as any)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition whitespace-nowrap ${
              activeFilter === cat.id
                ? "bg-slate-900 text-white shadow"
                : "text-slate-500 hover:text-slate-800"
            }`}
            id={`event_filter_btn_${cat.id}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Events timeline list */}
      <div className="space-y-6">
        {filtered.map((item, idx) => {
          const catColors = {
            culture: "bg-amber-50 text-amber-800 border-amber-200",
            sport: "bg-sky-50 text-sky-800 border-sky-200",
            music: "bg-indigo-50 text-indigo-800 border-indigo-200"
          };

          return (
            <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-105 overflow-hidden shadow-sm hover:shadow transition flex flex-col md:flex-row items-stretch" id={`event_item_card_${idx}`}>
              {/* Photo Area */}
              <div className="md:w-1/3 min-h-[160px] relative shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider border backdrop-blur-md ${catColors[item.category]}`}>
                  {item.category === "culture" ? "культура" : item.category === "sport" ? "спорт" : "музыка"}
                </span>
              </div>

              {/* Text description area */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-indigo-650 font-mono font-bold gap-1">
                    <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-slate-150 shadow-sm">
                      📅 {item.date}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-sm md:text-base text-slate-800 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10.5px]">
                  <span className="text-slate-500 flex items-center gap-1.5 font-light">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {item.location}
                  </span>
                  
                  <span className="text-indigo-650 font-bold bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100 shrink-0 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-500" />
                    {item.participants}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bonus Call */}
      <div className="p-4 bg-indigo-50/20 rounded-2xl border border-indigo-100 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
          <p className="text-xs text-slate-650 font-light">
            <strong>Хотите выступить или принять участие?</strong> Для большинства народных ярмарок взнос за участие не требуется. Ремесленникам предоставляются бесплатные деревянные прилавки от Комитета по туризму Республики Адыгея.
          </p>
        </div>
      </div>
    </div>
  );
}
