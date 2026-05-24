import { Utensils, Award, MapPin, Sparkles, Flame } from "lucide-react";

interface Dish {
  name: string;
  originalName?: string;
  description: string;
  ingredients: string[];
  bestPlaces: { name: string; location: string }[];
  image: string;
}

export default function Cuisine() {
  const dishes: Dish[] = [
    {
      name: "Адыгейский сыр",
      originalName: "Матэкъуае",
      description: "Легендарный мягкий сыр с нежным кисломолочным вкусом и плотной консистенцией. Готовится из коровьего (иногда козьего или овечьего) молока путем створаживания горячей молочной сывороткой в плетеных корзинах из ивовых прутьев, которые оставляют на головке фирменный рельефный узор.",
      ingredients: ["Цельное молоко", "Молочная сыворотка", "Поваренная соль"],
      image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=400",
      bestPlaces: [
        { name: "Фестиваль Адыгейского Сырa", location: "Даховская поляна (ежегодно в сентябре)" },
        { name: "Этно-кафе «Сияние гор»", location: "пос. Каменномостский, ул. Мира, 4" },
        { name: "Подворье «Черкесский Сад»", location: "станица Даховская" }
      ]
    },
    {
      name: "Адыгейский щипс",
      originalName: "Шэпс",
      description: "Главное национальное праздничное блюдо — густой, ароматный соус-суп на насыщенном мясном бульоне (обычно курином или говяжьем) с добавлением кукурузной или пшеничной муки, заправленный пассерованным луком и знаменитой адыгейской солью с чесноком и специями. Подается горячим вместе с пастэ (крутой манной/кукурузной кашей).",
      ingredients: ["Мясной бульон", "Мука пшеничная/кукурузная", "Сливочное масло", "Адыгейская соль", "Красный перец"],
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=400",
      bestPlaces: [
        { name: "Ресторан «Мэздах»", location: "г. Майкоп, лесопарковая зона Мысхако" },
        { name: "Ресторан национальной кухни «Черкесия»", location: "г. Майкоп, ул. Советская, 197" }
      ]
    },
    {
      name: "Халюжи",
      originalName: "Хьэлыжъо",
      description: "Хрустящие, золотистые полукруглые пирожки из пресного слоеного теста с начинкой из свежего, тягучего адыгейского сыра, обжаренные во фритюре до пузырчатой аппетитной корочки. Внешне напоминают чебуреки, но обладают неповторимым нежным сырным вкусом. Подаются горячими.",
      ingredients: ["Пшеничная мука", "Адыгейский сыр", "Вода", "Растительное масло для жарки"],
      image: "https://images.unsplash.com/photo-1628191139360-408a55997193?auto=format&fit=crop&q=80&w=400",
      bestPlaces: [
        { name: "Кафе у водопадов Руфабго", location: "Трасса на Лаго-Наки, перед мостом к водопадам" },
        { name: "Трактир «У камина»", location: "Хаджохское ущелье" }
      ]
    },
    {
      name: "Кояж (Жареный сыр)",
      originalName: "Къуаежъ",
      description: "Традиционное сытное блюдо пастухов — ломтики свежего адыгейского сыра, обжаренные на сковороде на топленом сливочном масле с добавлением зелени (лук, петрушка) и красного молотого перца до образования хрустящей пикантной корочки. Сыр плавится внутри, но сохраняет форму снаружи.",
      ingredients: ["Адыгейский свежий сыр", "Сливочное масло", "Зеленый лук", "Красная паприка"],
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=400",
      bestPlaces: [
        { name: "База отдыха «Лаго-Наки»", location: "Даховская, горный хребет Азиш-Тау" },
        { name: "Ресторан «Графство Хаджох»", location: "сопка над рекой Белая" }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-6 text-left" id="cuisine_guide_container">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2">
          <Utensils className="w-5 h-5 text-amber-600 animate-bounce" />
          <h2 className="font-display font-black text-xl md:text-2xl text-slate-800 tracking-tight">
            Традиционная адыгейская кухня
          </h2>
        </div>
        <p className="text-slate-500 text-xs md:text-sm mt-1">
          Черкесская гастрономия — это древний сплав сочных сыров, сытных соусов щипс и хрустящей выпечки в котле
        </p>
      </div>

      {/* Intro Banner */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 p-5 rounded-2xl border border-amber-100/60 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2 space-y-2">
          <span className="bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-flex items-center gap-1">
            <Award className="w-3.5 h-3.5" /> Черкесские традиции гостеприимства
          </span>
          <h3 className="font-display font-bold text-slate-800 text-sm md:text-base">
            Закон очага и хлебосольства
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed font-light">
            Для адыгов гость является посланником бога, поэтому самые лакомые сырные яства и мясные деликатесы испокон веков выставляются на маленький круглый столик — <strong>анэ</strong>. Центральная роль здесь отведена адыгейскому сыру, защищенному географическим патентом правообладателя.
          </p>
        </div>
        <div className="hidden md:block rounded-xl overflow-hidden shadow border border-amber-100/50 h-28">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=250" 
            alt="Адыгейское подворье" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dishes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dishes.map((dish, index) => (
          <div key={index} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow transition flex flex-col justify-between" id={`cuisine_dish_card_${index}`}>
            <div>
              {/* Photo */}
              <div className="h-44 relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover hover:scale-102 transition duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-amber-300 text-[10px] font-mono font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                  {dish.originalName}
                </div>
              </div>

              {/* Title and Description */}
              <div className="p-4.5 space-y-3">
                <div className="space-y-1">
                  <h4 className="font-display font-black text-sm md:text-base text-slate-800 tracking-tight">
                    {dish.name}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {dish.ingredients.map((ing, ingIdx) => (
                      <span key={ingIdx} className="bg-slate-200/60 text-slate-600 text-[9px] font-medium px-1.5 py-0.5 rounded">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  {dish.description}
                </p>
              </div>
            </div>

            {/* Places where to try */}
            <div className="p-4.5 border-t border-slate-200/50 bg-amber-50/10 space-y-2">
              <span className="text-[10px] font-mono text-amber-700 font-bold uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-600" /> Где попробовать в Адыгее:
              </span>
              <div className="space-y-1">
                {dish.bestPlaces.map((pl, pIdx) => (
                  <div key={pIdx} className="text-[11px] text-slate-700 flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-slate-800">⚫ {pl.name}</span>
                    <span className="text-slate-500 sm:text-right italic">{pl.location || "г. Майкоп / Горные курорты"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Traditional Drink Extra */}
      <div className="p-4.5 bg-orange-50/30 rounded-2xl border border-orange-100 flex items-start gap-3 text-xs leading-relaxed">
        <Flame className="w-5 h-5 text-orange-600 mt-0.5 shrink-0 animate-pulse" />
        <div className="space-y-1">
          <h5 className="font-bold text-slate-800">☕ Чем запивать? Черкесский чай и Бахъсымэ</h5>
          <p className="text-slate-600 font-light">
            Черкесский чай собирается из листьев лесного кавказского шиповника, чабреца, душицы и сушеных лесных груш — он обладает густым целебным ароматом и согревает в суровые горные ночи. А бахсыма — древнейший прохладительный напиток из кукурузной муки слабой ферментации с медом, употребляемый на народных фестивалях.
          </p>
        </div>
      </div>
    </div>
  );
}
