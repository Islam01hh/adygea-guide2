import { useState } from "react";
import { CloudRain, Sun, CloudLightning, Wind, Thermometer, AlertTriangle, CheckSquare, Sparkles } from "lucide-react";

type SeasonType = "summer" | "autumn" | "winter" | "spring";

interface WeatherStats {
  location: string;
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: string;
  altitude: string;
  vibe: string;
}

export default function Weather() {
  const [selectedSeason, setSelectedSeason] = useState<SeasonType>("summer");

  // Simulated live-like weather for Maykop vs Plato Lago-Naki vs Guzeripl
  const weatherLocations: WeatherStats[] = [
    {
      location: "Майкоп (Предгорье, 220м)",
      temp: 24,
      condition: "Солнечно, переменная облачность",
      humidity: 55,
      windSpeed: "3 м/с",
      altitude: "высота 220 м",
      vibe: "Отличный мягкий южный климат предлесья."
    },
    {
      location: "Плато Лаго-Наки (Высокогорье, 1600м)",
      temp: 14,
      condition: "Горный туман, свежий ветер",
      humidity: 85,
      windSpeed: "9 м/с",
      altitude: "высота 1650 м",
      vibe: "Прохладный альпийский ветер, туманность нарастает во второй половине дня."
    },
    {
      location: "Поселок Гузерипль (Горная долина, 670м)",
      temp: 19,
      condition: "Кучевые облака, без осадков",
      humidity: 65,
      windSpeed: "2.5 м/с",
      altitude: "высота 670 м",
      vibe: "Долина в объятиях вековых кавказских пихт. Здесь сухо и спокойно."
    }
  ];

  // Clothing guide based on seasons
  const seasonalClothingGuides: Record<SeasonType, { title: string; clothes: string[]; tips: string }> = {
    summer: {
      title: "🌞 Летний сезон (Июнь — Август)",
      clothes: [
        "Легкая ветровка (в горах быстро холодает)",
        "Головной убор (кепка, панама) от палящего солнца",
        "Треккинговая обувь с нескользящим протектором",
        "Солнцезащитные очки и крем SPF 30+",
        "Дождевик складной на случай грозы"
      ],
      tips: "Днем в Майкопе может быть +32°C, а на плато Лаго-Наки всего +15°C с внезапным дождем. Всегда берите легкие слои с собой в поход!"
    },
    autumn: {
      title: "🍁 Осенний сезон (Сентябрь — Ноябрь)",
      clothes: [
        "Флисовая кофта или термобелье",
        "Мембранная куртка с ветро- и влагозащитой",
        "Теплые треккинговые носки",
        "Сменные перчатки и легкая шапка",
        "Прочные влагостойкие ботинки"
      ],
      tips: "Осень в Адыгее сказочно золотая, но коварная. Выпадение тумана на дорогах хребта Каменное Море происходит за считанные минуты."
    },
    winter: {
      title: "❄️ Зимний сезон (Декабрь — Февраль)",
      clothes: [
        "Пуховая теплая куртка / Лыжный костюм",
        "Термобелье влагорегулирующее (меринос)",
        "Шерстяная шапка и водонепроницаемые перчатки",
        "Шарф / Бафф для защиты лица от метели",
        "Обувь с глубоким протектором или шипами"
      ],
      tips: "На Лаго-Наки и Оштене лежит толстый снежный покров до 1.5-2 метров. Идеально для санок и снегоходов, но берегитесь обморожения."
    },
    spring: {
      title: "🌱 Весенний сезон (Март — Май)",
      clothes: [
        "Непродуваемый софтшелл (Softshell)",
        "Сменная сухая одежда в рюкзаке",
        "Качественные резиновые сапоги или бахилы",
        "Солнцезащитные очки (снежники отражают ультрафиолет)",
        "Термо-кружка для чая"
      ],
      tips: "В горах весной тает снег, реки Белая и Курджипс становятся полноводными и грозными. Тропы могут быть грязными и скользкими."
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-6 text-left" id="weather_forecast_container">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2">
          <CloudRain className="w-5 h-5 text-teal-600 animate-pulse" />
          <h2 className="font-display font-black text-xl md:text-2xl text-slate-800 tracking-tight">
            Метеорологическая сводка Адыгеи
          </h2>
        </div>
        <p className="text-slate-500 text-xs md:text-sm mt-1">
          Горный климат обладает выраженной высотной поясностью — сверяйте перед выходом на трассу в биосферный заповедник
        </p>
      </div>

      {/* Meteo Grid Locations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weatherLocations.map((loc, idx) => (
          <div key={idx} className="bg-slate-50 p-4.5 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-3 shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">{loc.altitude}</span>
              <h3 className="font-display font-bold text-slate-800 text-xs md:text-sm line-clamp-1">
                {loc.location}
              </h3>
              
              <div className="flex items-center gap-2 py-1">
                <Thermometer className="w-6 h-6 text-orange-500" />
                <span className="text-3xl font-black text-slate-800 font-display">+{loc.temp}°C</span>
              </div>

              <p className="text-[11px] text-teal-700 font-semibold bg-teal-50/50 px-2 py-1 rounded border border-teal-100/50 max-w-max">
                {loc.condition}
              </p>
            </div>

            <div className="pt-2.5 border-t border-slate-250/30 text-[10px] space-y-1.5 text-slate-500">
              <div className="flex justify-between">
                <span>Влажность воздуха</span>
                <span className="font-bold text-slate-700">{loc.humidity}%</span>
              </div>
              <div className="flex justify-between">
                <span>Скорость ветра</span>
                <span className="font-bold text-slate-700">{loc.windSpeed}</span>
              </div>
              <p className="text-[9.5px] italic text-slate-450 leading-relaxed font-light mt-1">
                {loc.vibe}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mountain Safety Alert */}
      <div className="bg-red-50 border border-red-150 p-4 rounded-2xl flex gap-3 text-xs leading-relaxed text-red-900">
        <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5 animate-bounce" />
        <div className="space-y-1">
          <h4 className="font-bold text-red-950">Внимание: Быстрое изменение погоды на высоте</h4>
          <p className="text-red-800 font-light">
            Помните, на высоте свыше 1500 метров (Лаго-Наки, перевал Гузерипль) погода меняется за считанные минуты. Ясное небо может мгновенно затянуться облаками с проливным дождем, шквалистым ветром или градом. Рекомендуется регистрировать группы в МЧС РФ по Республике Адыгея перед выходом на дикие тропы.
          </p>
        </div>
      </div>

      {/* Dynamic Clothing Guide Controls */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <h3 className="font-display font-bold text-slate-800 text-xs md:text-sm uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>Рекомендации по экипировке по сезонам</span>
          </h3>
          <span className="text-[11px] font-mono text-slate-400">Выберите сезон:</span>
        </div>

        {/* Season selector buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(["summer", "autumn", "winter", "spring"] as SeasonType[]).map(season => {
            const labels: Record<SeasonType, string> = {
              summer: "☀️ Лето",
              autumn: "🍁 Осень",
              winter: "❄️ Зима",
              spring: "🌱 Весна"
            };

            return (
              <button
                key={season}
                onClick={() => setSelectedSeason(season)}
                className={`py-2 px-3 text-xs md:text-sm font-semibold rounded-xl border transition ${
                  selectedSeason === season
                    ? "bg-slate-900 border-slate-900 text-white shadow-md scale-101"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
                id={`season_btn_${season}`}
              >
                {labels[season]}
              </button>
            );
          })}
        </div>

        {/* Season Guide Visual Display */}
        <div className="bg-indigo-50/25 p-5 rounded-2xl border border-indigo-100/30 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-3 text-left">
            <h4 className="font-display font-bold text-slate-800 text-sm md:text-base">
              {seasonalClothingGuides[selectedSeason].title}
            </h4>
            <div className="space-y-2">
              {seasonalClothingGuides[selectedSeason].clothes.map((item, id) => (
                <div key={id} className="flex items-start gap-2.5 text-xs text-slate-650">
                  <CheckSquare className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4.5 rounded-xl border border-indigo-100/20 flex flex-col justify-center space-y-2">
            <h5 className="font-bold text-slate-700 text-xs uppercase font-mono tracking-wider">💡 Важный совет туристам:</h5>
            <p className="text-slate-600 font-light text-xs leading-relaxed">
              {seasonalClothingGuides[selectedSeason].tips}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
