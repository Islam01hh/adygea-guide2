import { ShieldAlert, Car, Briefcase, Phone, HelpCircle, HardHat, Compass, Sparkles } from "lucide-react";

export default function UsefulInfo() {
  const safetyRules = [
    {
      title: "Регистрация в МЧС Адыгеи",
      desc: "Перед выходом на сложные многодневные маршруты (например, знаменитую Тридцатку через гору Фишт к Черному морю) обязательно зарегистрируйте состав группы на официальном портале МЧС или лично в Майкопе."
    },
    {
      title: "Опасайтесь диких зверей",
      desc: "Территория Кавказского заповедника населена бурыми медведями, рысями и дикими кабанами. Не сходите со стационарных маркированных троп, не оставляйте еду возле палаток на ночь и не ходите в одиночку в лесную чащу."
    },
    {
      title: "Локации без сотовой связи",
      desc: "На хребте Азиш-Тау, плато Лаго-Наки и на пути к приюту Фишт сотовая связь отсутствует полностью. Заранее скачайте офлайн-карты местности (например, Organic Maps или Яндекс.Карты) и возьмите с собой бумажную карту и компас."
    }
  ];

  const transportGuides = [
    {
      title: "🚆 Как добраться на поезде",
      desc: "Ближайший крупный железнодорожный узел — город Краснодар (120 км от Майкопа). Из Краснодара трижды в день курсирует скоростной комфортный поезд «Ласточка» до ж/д вокзала города Майкоп."
    },
    {
      title: "🚌 Междугородние автобусы",
      desc: "С автовокзала Майкопа ежедневно ходят пригородные рейсовые автобусы до поселка Каменномостский (Хаджох), Даховской и поселка Гузерипль. В дикие ущелья автобусы ходят редко, рекомендуется бронировать местный трансфер."
    },
    {
      title: "🚗 На личном автомобиле",
      desc: "Отличная асфальтированная федеральная трасса Р-217 / А-160 ведет прямо в Майкоп. Далее на юг идет качественная дорога через Хаджох и Даховскую прямо к подножию Лаго-Наки. АЗС есть в Майкопе, Хаджохе и Каменномостском."
    }
  ];

  const packingList = [
    "Прочные треккинговые ботинки с высоким голенищем",
    "Непромокаемый влагозащитный чехол для рюкзака",
    "Складные телескопические треккинговые палки",
    "Индивидуальная аптечка (бинты, антисептик, пластыри от мозолей)",
    "Налобный светодиодный фонарь со сменным комплектом батареек",
    "Портативный аккумулятор (Powerbank) для телефона",
    "Теплая флисовая френч-кофта даже в летний период"
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-7 text-left" id="useful_info_container">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-indigo-600 animate-spin-slow" />
          <h2 className="font-display font-black text-xl md:text-2xl text-slate-800 tracking-tight">
            Полезная памятка для туристов
          </h2>
        </div>
        <p className="text-slate-500 text-xs md:text-sm mt-1">
          Подробный справочно-информационный кодекс туриста: как добраться, правила безопасности и список необходимых вещей
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Mountain Safety rules */}
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-4">
            <h3 className="font-display font-bold text-slate-800 text-sm md:text-base flex items-center gap-2 border-b border-slate-200/60 pb-2">
              <HardHat className="w-5 h-5 text-amber-600" />
              <span>🚨 Безопасность при восхождении в горах</span>
            </h3>
            <div className="space-y-3.5">
              {safetyRules.map((r, i) => (
                <div key={i} className="text-xs space-y-1">
                  <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    {r.title}
                  </h4>
                  <p className="text-slate-650 leading-relaxed font-light pl-3.5">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transportation directions */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-4">
            <h3 className="font-display font-bold text-slate-800 text-sm md:text-base flex items-center gap-2 border-b border-slate-200/60 pb-2">
              <Car className="w-5 h-5 text-teal-600" />
              <span>🚗 Логистика, дороги и транспортное сообщение</span>
            </h3>
            <div className="space-y-3.5">
              {transportGuides.map((t, i) => (
                <div key={i} className="text-xs space-y-1">
                  <h4 className="font-bold text-slate-800">{t.title}</h4>
                  <p className="text-slate-650 leading-relaxed font-light">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packing checklist and extreme phones (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Packing list helper */}
          <div className="bg-indigo-50/15 p-5 rounded-2xl border border-indigo-100/40 space-y-3">
            <h3 className="font-display font-bold text-slate-800 text-sm flex items-center gap-1.5">
              <Briefcase className="w-4.5 h-4.5 text-indigo-600" />
              <span>🎒 Что взять в рюкзак?</span>
            </h3>
            <div className="space-y-2">
              {packingList.map((item, id) => (
                <div key={id} className="text-[11px] text-slate-700 flex items-start gap-1.5 leading-relaxed font-light">
                  <span className="text-indigo-500 font-bold shrink-0">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency support numbers */}
          <div className="bg-red-50/20 p-5 rounded-2xl border border-red-100/40 space-y-3">
            <h3 className="font-display font-bold text-red-950 text-sm flex items-center gap-1.5 border-b border-red-100 pb-2">
              <Phone className="w-4.5 h-4.5 text-red-600" />
              <span>📞 Экстренные службы RA</span>
            </h3>
            <div className="space-y-2.5 text-xs text-slate-800">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono block">Единый спасательный телефон</span>
                <span className="font-extrabold text-red-600 font-mono text-sm">112</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono block">Адыгейский поисково-спасательный отряд МЧС</span>
                <span className="font-bold text-slate-800 font-mono text-[11px] block">+7 (8772) 56-19-11</span>
                <span className="text-[10px] font-light text-slate-500">Адрес: Республика Адыгея, пос. Хаджох</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono block">Управление МЧС по Республике Адыгея</span>
                <span className="font-bold text-slate-800 font-mono text-[11px] block">+7 (8772) 52-32-15</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nature preservation advice */}
      <div className="p-4 bg-emerald-50/20 rounded-2xl border border-emerald-100 text-xs text-slate-650 font-light flex gap-3">
        <Compass className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-slate-800 font-bold">🌲 Сохраняйте чистоту биосферного заповедника!</strong>
          <p>
            Республика Адыгея славится кристально чистым воздухом и нетронутой кавказской экосистемой. Забирайте весь мусор (включая пластик, батарейки, консервные банки) с собой в рюкзаках до ближайших мусоросборников в горных населенных пунктах. Не разводите костры в непредусмотренных местах.
          </p>
        </div>
      </div>
    </div>
  );
}
