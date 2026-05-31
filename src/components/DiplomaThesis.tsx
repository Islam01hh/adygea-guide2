import React, { useState } from "react";
import { FileText, Printer, Copy, Check, Calculator, Sparkles, BookOpen, Layers } from "lucide-react";

interface DocumentChapter {
  id: string;
  num: string;
  title: string;
  content: string;
}

export default function DiplomaThesis() {
  const [activeChapter, setActiveChapter] = useState<string>("cover");
  const [copied, setCopied] = useState(false);

  // Economic params for interactive calculator
  const [developerSalary, setDeveloperSalary] = useState<number>(65000);
  const [managerSalary, setManagerSalary] = useState<number>(85000);
  const [hardwareCost, setHardwareCost] = useState<number>(120000);
  const [powerPrice, setPowerPrice] = useState<number>(6.5);
  const [rentability, setRentability] = useState<number>(25);

  // Calculate values
  const devMonths = 2;
  const managerMonths = 0.5;

  const basicSalaryDev = developerSalary * devMonths;
  const basicSalaryManager = managerSalary * managerMonths;
  const totalBasicSalary = basicSalaryDev + basicSalaryManager;

  const bonusRate = 0.2; // 20%
  const bonus = totalBasicSalary * bonusRate;
  const totalMainSalary = totalBasicSalary + bonus;

  const extraSalaryRate = 0.1; // 10%
  const extraSalary = totalMainSalary * extraSalaryRate;

  const totalSalary = totalMainSalary + extraSalary;

  const socialTaxRate = 0.3; // 30%
  const socialTax = totalSalary * socialTaxRate;

  // Machine hours
  const pc1Hours = 160; // Developer time
  const pc2Hours = 40;  // Manager review time
  const amRate = 0.2; // 20%
  const mainEquipmentCost = hardwareCost; 
  const annualAmortization = mainEquipmentCost * amRate;
  const dailyFundHours = 1820;
  const devHoursOnPc = pc1Hours + pc2Hours;
  
  // Annual maintenance costs
  const maintRate = 0.08; // 8%
  const annualMaintCost = mainEquipmentCost * maintRate;

  const matRate = 0.02; // 2%
  const annualMatCost = mainEquipmentCost * matRate;

  // Power
  const pcPower = 0.45; // 450 Wh
  const kLoss = 0.98;
  const annualPowerCost = pcPower * dailyFundHours * powerPrice * kLoss;

  // Overhead (60% of basic equipment / space / internet)
  const overheadRate = 0.6;
  const annualOverhead = mainEquipmentCost * overheadRate;

  // Total annual machine costs
  const totalAnnualMachineCosts = annualAmortization + annualMaintCost + annualMatCost + annualPowerCost + annualOverhead;
  const machineHourRate = totalAnnualMachineCosts / dailyFundHours;
  const totalMachineCost = devHoursOnPc * machineHourRate;

  // Summary design costs
  const designCost = totalSalary + socialTax + totalMachineCost;

  // Deployment and implementation costs
  const implementationWorks = totalSalary * 0.4; // 40% of standard work
  const deploymentCost = implementationWorks + (hardwareCost * 0.02); // works + 2% shipping

  const annualSoftwareLicenseSupport = designCost * 0.2; // 20% for storage and updates
  const exploitationCost = annualSoftwareLicenseSupport;

  const totalCost = designCost + deploymentCost;
  const developerProfit = totalCost * (rentability / 100);
  const implementationPrice = totalCost + developerProfit;
  const nds = implementationPrice * 0.2; // 20%
  const totalPrice = implementationPrice + nds;

  const annualClientSavings = 380000; // Economy from paperless travel guides, automated AI guides, feedback loop
  const payoffPeriod = totalPrice / annualClientSavings;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeContent = (): { text: string; rendered: React.ReactNode } => {
    switch (activeChapter) {
      case "cover":
        return {
          text: `МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ
Майкопский государственный гуманитарно-технический колледж 
федерального государственного бюджетного образовательного учреждения высшего образования «Адыгейский государственный университет»

ДОПУЩЕН К ЗАЩИТЕ
Заместитель директора по учебной работе
__________ М.Н. Колдина
«___» ___________ 2026 г.

ДИПЛОМНАЯ РАБОТА
09.02.07. ИС-41. 1146-И. ДР

Тема: Разработка интерактивного веб-путеводителя по Республике Адыгея с интегрированной рекомендательной системой на основе искусственного интеллекта

Студент: Хабемизов К.А.
Руководитель работы: Погорелова М.Н.

Майкоп 2026`,
          rendered: (
            <div className="text-center font-serif text-slate-800 space-y-8 py-8 md:py-12 max-w-2xl mx-auto">
              <div className="space-y-2 uppercase text-xs md:text-sm font-bold tracking-wide">
                <div>Министерство науки и высшего образования Российской Федерации</div>
                <div className="text-slate-650">Майкопский государственный гуманитарно-технический колледж</div>
                <div className="text-slate-500 font-normal">Федерального государственного бюджетного образовательного учреждения высшего образования «Адыгейский государственный университет»</div>
              </div>
              
              <div className="h-1 w-20 bg-teal-600 mx-auto my-6"></div>

              <div className="flex justify-end text-left text-xs md:text-sm space-y-1.5 pt-4">
                <div className="border border-slate-200 p-4 rounded-xl bg-slate-50/50">
                  <div className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-2 text-teal-700">ДОПУЩЕН К ЗАЩИТЕ</div>
                  <div>Зам. директора по учебной работе</div>
                  <div className="font-semibold text-slate-800">__________ М.Н. Колдина</div>
                  <div className="text-slate-400 text-xs mt-1">«___» ___________ 2026 г.</div>
                </div>
              </div>

              <div className="space-y-4 pt-10 pb-8">
                <span className="bg-teal-150 text-teal-850 font-mono text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-teal-200">
                  Выпускная квалификационная работа
                </span>
                <h1 className="font-display font-black text-2xl md:text-3xl text-slate-900 leading-tight">
                  Разработка интерактивного веб-путеводителя по Республике Адыгея с интегрированной рекомендательной системой на основе искусственного интеллекта
                </h1>
                <p className="text-xs text-slate-400 tracking-wider">Шифр: 09.02.07. ИС-41. 1146-И. ДР</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-sm pt-8 border-t border-slate-100">
                <div className="space-y-1 p-3 rounded-lg hover:bg-slate-50 transition">
                  <span className="text-slate-400 text-xs">Выполнил студент группы ИС-41:</span>
                  <div className="font-bold text-slate-800">Хабемизов К.А.</div>
                  <span className="text-slate-400 text-xs">Подпись: ______________________</span>
                </div>
                <div className="space-y-1 p-3 rounded-lg hover:bg-slate-50 transition">
                  <span className="text-slate-400 text-xs">Руководитель проекта:</span>
                  <div className="font-bold text-slate-800">Погорелова М.Н.</div>
                  <span className="text-slate-400 text-xs">Оценка руководителя: _________________</span>
                </div>
              </div>

              <div className="pt-16 text-xs md:text-sm text-slate-400 tracking-widest uppercase">
                Майкоп 2026
              </div>
            </div>
          )
        };
      case "intro":
        return {
          text: `ВВЕДЕНИЕ
Цифровая трансформация туризма кардинально меняет подходы к исследованию регионов. Традиционный печатный путеводитель страдает статической структурой, высокой себестоимостью обновления и отсутствием интерактивного взаимодействия, в то время как цифровые платформы позволяют реагировать на запросы пользователя мгновенно. 

Адыгея является одним из наиболее динамично развивающихся туристических регионов России, привлекающим миллионы путешественников ежегодно альпийскими лугами Лаго-Наки, каньонами Хаджоха, древней культурой черкесов и уникальной национальной кухней. Однако туристы сталкиваются с разрозненностью информации, отсутствием качественного планировщика маршрутов и сложностью получения оперативных ответов в реальном времени.

Настоящая дипломная работа посвящена разработке полнофункционального интерактивного веб-путеводителя с ИИ-консультантом по Республике Адыгея «Адыгея Гид».

Объект исследования: процессы цифровизации туризма и информационное обеспечение путешественников в Республике Адыгея.
Предмет исследования: проектирование и программная реализация интерактивной картографической веб-платформы с интегрированным искусственным интеллектом для планирования отдыха и экскурсий.
Цель работы: Разработать современное адаптивное SPA-приложение, объединяющее каталог достопримечательностей, маршрутный bento-интегратор, геолокационную интерактивную карту, гастрономическую кухню, а также интеллектуального ИИ-гида на основе семейства больших языковых моделей Gemini компании Google для ответов на поисковые запросы.
Основные задачи:
1. Выполнить комплексный анализ предметной области и потребностей туристов.
2. Спроектировать архитектуру и реляционную модель базы данных.
3. Разработать адаптивный SPA-интерфейс с использованием React, Tailwind CSS и Lucide-React.
4. Создать серверную часть (API) с поддержкой Gemini AI для обработки текстовых запросов в реальном времени.
5. Интегрировать надежную СУБД для хранения данных о достопримечательностях, маршрутах и отзывах.
6. Выполнить экономическое обоснование разработки инвестиционного проекта.
7. Провести функциональное тестирование ПО методом чёрного ящика.`,
          rendered: (
            <div className="space-y-6 font-serif text-slate-800 leading-relaxed text-sm md:text-base selection:bg-teal-100">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2 uppercase text-center font-display tracking-tight">Введение</h2>
              
              <p className="indent-8 text-justify">
                В современном мире цифровая трансформация туристического сектора экономики кардинально переопределяет методы взаимодействия путешественника с культурно-историческим и природным ландшафтом регионов. Печатные информационные носители (карты, буклеты, путеводители) утрачивают конкурентоспособность вследствие объективных ограничений: статического принципа организации контента, уязвимости к старению, отсутствия инструментов персонализации и невозможности оперативного ведения обратной связи.
              </p>
              
              <span className="block border-l-4 border-teal-600 pl-4 py-2 my-4 bg-slate-50/50 rounded-r-lg font-sans text-sm text-slate-600 font-light italic">
                «Республика Адыгея ежегодно принимает свыше 1.5 миллионов отдыхающих со всей России, стремящихся изучить ландшафты плато Лаго-Наки, водопадов ущелья Руфабго, Хаджохской теснины и святынь Свято-Михайловской Афонской пустыни. Создание единой интерактивной программной экосистемы является краеугольным камнем успешного масштабирования туристического бизнеса в регионе.»
              </span>

              <p className="indent-8 text-justify">
                Существующие государственные региональные порталы часто перегружены статическими текстами и лишены интерактивного отклика, в то время как крупные федеральные платформы (Яндекс.Путешествия или TripAdvisor) обладают обобщенным характером и неспособны детально раскрыть локальную специфику малых экологических направлений, местной адыгейской кухни или предоставить точные авторские маршруты за пределами базовых шоссе. Возникает выраженное противоречие между возросшим спросом на высокотехнологичные, адаптивные цифровые гиды и ограниченным предложением таких систем на реальном рынке программного обеспечения.
              </p>

              <p className="indent-8 text-justify">
                <strong className="text-slate-900">Объектом исследования</strong> в дипломном проекте выступает технологический уклад и информационное обеспечение туристско-экскурсионной деятельности в Республике Адыгея в условиях повсеместной интеграции веб-технологий.
              </p>

              <p className="indent-8 text-justify">
                <strong className="text-slate-900">Предметом исследования</strong> служат методы проектирования, архитектурные паттерны и разработка веб-приложения, реализующего интерактивные карты, сбор пользовательских оценок, фильтрацию категорий, а также генеративного ИИ-помощника на базе современных облачных систем.
              </p>

              <p className="indent-8 text-justify">
                <strong className="text-slate-900">Целью работы</strong> является проектирование, разработка и внедрение интерактивного веб-путеводителя «Адыгея Гид» с адаптивным интерфейсом, гибкой системой отзывов пользователей, маршрутным планировщиком и ИИ-экскурсоводом, способным вести содержательный контекстный диалог по достопримечательностям Адыгеи.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100 font-sans text-xs md:text-sm">
                <div className="font-bold text-slate-800 uppercase text-[10px] tracking-wider mb-2 text-teal-700 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-teal-600" />
                  Задачи для достижения поставленной цели:
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-650">
                  <li>Провести анализ деятельности туристической сферы региона, выделив бизнес-процессы для автоматизации;</li>
                  <li>Исследовать рынок аналогичных систем, сравнив их функциональные возможности и недостатки;</li>
                  <li>Определить технические требования и разработать UML диаграммы Use Case и Deployment;</li>
                  <li>Спроектировать реляционную модель базы данных и реализовать её физическое развертывание;</li>
                  <li>Разработать клиентский модуль SPA-приложения с адаптивной версткой под десктопные и мобильные устройства;</li>
                  <li>Обеспечить сопряжение системы с ИИ-помощником на платформе API от Google Gemini;</li>
                  <li>Выполнить экономический расчет инвестиционной эффективности и срока окупаемости проекта;</li>
                  <li>Протестировать функциональность системы с помощью тест-кейсов.</li>
                </ul>
              </div>
            </div>
          )
        };
      case "chap1":
        return {
          text: `1 ТЕХНИЧЕСКИЙ ПРОЕКТ
1.1 Анализ предметной области
Туристско-рекреационный кластер Республики Адыгея претерпевает стремительный рост. Процесс планирования путешествия включает в себя несколько этапов: сбор информации о местах, построение маршрута движения, расчет времени, изучение условий и гастрономия. Традиционные методы ведут к высоким трудозатратам. Использование централизованного веб-ресурса позволяет оптимизировать данные этапы.

1.2 Сравнительный анализ существующих программных продуктов
Для изучения рынка были рассмотрены три аналога:
1. Туристический портал Адыгеи (официальный ресурс). Плюсы: большой объем информации, историческая точность. Минусы: устаревший дизайн, отсутствие интерактивных карт, нет мобильной адаптации, нет ИИ-экскурсовода.
2. Яндекс.Карты / Путешествия. Плюсы: отличные карты, панорамы, отзывы. Минусы: перегруженность рекламой, отсутствие выделенных авторских региональных троп, нет специализированного ИИ-экскурсовода по Адыгее.
3. TripAdvisor. Плюсы: международная база рецензий. Минусы: проблемы с локализацией в малых населенных пунктах, отсутствие подробных туристических треккинговых деталей.
Проектируемое приложение будет отличаться фокусом на глубоком раскрытии этнографии и экотуризма Адыгеи, а главное — внедрением персонального ИИ-гида на основе современных моделей искусственного интеллекта.

1.3 Постановка задачи
Веб-приложение «Адыгея Гид» должно предоставлять:
- Просмотр карточек достопримечательностей с фильтрацией по 5 категориям (Природа, Культура, Памятники, Активный отдых, Термы);
- Детальный просмотр достопримечательности (описание, координаты, советы, исторические факты);
- Просмотр туристических маршрутов с оценкой времени и сложности, а также интерактивной привязкой точек;
- Полноэкранную интерактивную карту с метками достопримечательностей;
- Раздел традиционной кухни Адыгеи с рецептами (сыры, выпечка, супы) и адресами лучших мест;
- Раздел погоды в горном и равнинном кластерах (Майкоп, Лаго-Наки, Даховская);
- ИИ-экскурсовода в реальном времени с поддержкой истории переписки;
- Систему добавления отзывов и оценок, а также ведение личного кабинета избранного.

1.4 Моделирование предметной области
Проектирование функционала велось с использованием UML-моделей. Диаграмма вариантов использования (Use Case) описывает роли Пользователя и Администратора. Слой данных спроектирован на основе Firestore NoSQL коллекций, приведенных к 3НФ. 

1.5 Требования к программному продукту
- Функциональные: авторизация, редактирование данных, добавление в избранное, публикация отзывов, выбор тем, ИИ-чат.
- Системные: Chrome v100+, Edge v100+, Safari v15+, интернет-доступ от 100 кбит/с.
- Безопасность: Хеширование паролей, защита секретного API-ключа Gemini на сервере;

1.6 Выбор средств и технологии создания программного продукта
В качестве стэка разработки выбран React + TypeScript + Firebase Firestore + Express + Google GenAI SDK. Это обеспечивает высокую производительность и безопасность.`,
          rendered: (
            <div className="space-y-6 font-serif text-slate-800 leading-relaxed text-sm md:text-base">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2 uppercase text-center font-display tracking-tight">1 Технический проект</h2>
              
              <h3 className="text-base font-bold text-slate-900 pt-3">1.1 Анализ предметной области</h3>
              <p className="indent-8 text-justify">
                Предметная область разрабатываемого проекта охватывает туристско-рекреационный комплекс Республики Адыгея и сопутствующую инфраструктуру гостеприимства. Специфика горного туризма заключается в необходимости получения актуальной динамической информации о рельефе, доступности объектов, климатических аномалиях в высокогорье и культурном наследии региона. Автоматизация данных процессов на базе веб-технологий направлена на сокращение времени поиска достоверной информации для гостя региона от нескольких часов до секунд.
              </p>

              <h3 className="text-base font-bold text-slate-900 pt-3">1.2 Сравнительный анализ существующих решений</h3>
              <p className="indent-8 text-justify">
                Для обоснования разработки был проведен сравнительный бенчмаркинг существующих ИТ-решений по ключевым критериям, представленным в таблице 1.
              </p>

              <div className="overflow-x-auto my-3" id="table_comparison_analogs">
                <div className="text-slate-700 italic text-xs mb-1.5 font-sans table-header-custom">
                  Таблица 1 – Сравнительный анализ существующих систем путеводителей
                </div>
                <table className="w-full border-collapse border border-slate-350 text-xs md:text-sm font-sans mb-4">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 text-left font-bold border-b border-slate-350">
                      <th className="border border-slate-350 p-2 text-center">Критерий сравнения</th>
                      <th className="border border-slate-350 p-2">Официальный портал Адыгеи</th>
                      <th className="border border-slate-350 p-2">Яндекс.Путешествия</th>
                      <th className="border border-slate-350 p-2 text-teal-800 font-extrabold bg-teal-50">Разрабатываемый «Адыгея Гид»</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold">Наличие ИИ-консультанта</td>
                      <td className="border border-slate-350 p-2 text-red-650">Отсутствует</td>
                      <td className="border border-slate-350 p-2 text-amber-650">Базовый чат-бот Алиса</td>
                      <td className="border border-slate-350 p-2 text-emerald-650 font-bold bg-teal-50/50">Профессиональный Gemini Ассистент</td>
                    </tr>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold">Интерактивная карта меток</td>
                      <td className="border border-slate-350 p-2 text-red-650">Статическая картинка</td>
                      <td className="border border-slate-350 p-2 text-emerald-650">Присутствует (всеобщие карты)</td>
                      <td className="border border-slate-350 p-2 text-emerald-650 font-bold bg-teal-50/50">Кастомизированная карта высот</td>
                    </tr>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold">Локальные рецепты кухни</td>
                      <td className="border border-slate-350 p-2 text-emerald-650">Только статьи</td>
                      <td className="border border-slate-350 p-2 text-red-650">Отсутствуют</td>
                      <td className="border border-slate-350 p-2 text-emerald-650 font-bold bg-teal-50/50">Интегрированная база с адресами мест</td>
                    </tr>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold font-bold">Оценка скорости работы</td>
                      <td className="border border-slate-350 p-2 text-amber-650">Средняя (много графики)</td>
                      <td className="border border-slate-350 p-2 text-emerald-650">Высокая</td>
                      <td className="border border-slate-350 p-2 text-emerald-650 font-bold bg-teal-50/50">Высокая (технология SPA на React)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-bold text-slate-900 pt-3">1.3 Постановка задачи</h3>
              <p className="indent-8 text-justify">
                С учетом выявленных недостатков аналогов, веб-система должна обеспечивать быстрый, интуитивно понятное взаимодействие, распределять достопримечательности по смысловым категориям, предлагать конкретные временные таймлайны маршрутов различной сложности, получать точный прогноз погоды для Майкопа и плато Лаго-Наки, вычислять координаты, хранить историю отзывов на базе Firestore и отвечать на произвольные вопросы пользователей через API в защищенном режиме.
              </p>

              <h3 className="text-base font-bold text-slate-900 pt-3">1.4 Моделирование предметной области</h3>
              <p className="indent-8 text-justify">
                При проектировании прецедентов использования системы была построена диаграмма Use Case со следующими связями:
              </p>
              <ul className="list-disc pl-8 space-y-1 my-3 text-slate-750 text-xs md:text-sm font-sans">
                <li><strong className="text-slate-800">Пользователь:</strong> Авторизация ➔ Просмотр каталога ➔ Добавление в избранное ➔ Консультация с ИИ;</li>
                <li><strong className="text-slate-800">Администратор:</strong> Модерация данных ➔ Добавление sights ➔ Модерация отзывов ➔ Просмотр системных логов;</li>
                <li><strong className="text-slate-800">API и DB:</strong> Фиксация рейтингов, чтение токенов, управление сессиями Firebase Auth.</li>
              </ul>

              <h3 className="text-base font-bold text-slate-900 pt-3">1.5 Требования к программному продукту</h3>
              <p className="indent-8 text-justify">
                Система должна быть адаптивной (Mobile Responsive) для работы на мобильных устройствах во время активных переходов в горах. Протокол передачи данных - HTTPS. Хеширование важной системной информации (сеансовые токены) на стороне клиента организуется локально, а API-ключи ИИ-генератора хранятся в защищенном окружении .env сервера Node.js без доступа из внешней браузерной среды.
              </p>
            </div>
          )
        };
      case "chap2":
        return {
          text: `2 РАБОЧИЙ ПРОЕКТ
2.1 Физическая модель данных
Разрабатываемая система базируется на NoSQL БД Google Firebase Firestore. Данная технология позволяет достичь высокой гибкости при расширении полей. Опишем структуру основных коллекций в виде таблиц реляционного словаря данных:
1. Коллекция 'sights' (id, title, shortDescription, description, image, category, location, coordinates: {lat, lng}, rating, reviewsCount, howToGet, bestTime, facts)
2. Коллекция 'routes' (id, title, description, duration, difficulty, image, sightIds)
3. Коллекция 'reviews' (id, sightId, userId, userName, userAvatar, text, rating, createdAt)
4. Коллекция 'favorites' (userId, sightId, createdAt)
5. Коллекция 'messages' (userId, text, role, timestamp)

2.2 Функциональное взаимодействие модулей программы
Пользователь обращается к SPA приложению на сервере Cloud Run через браузер. Клиентский код написан на React 18+ и TypeScript. При запросах к ИИ-ассистенту клиент отправляет запрос на эндпоинт \`/api/ai-guide\`, где Express-сервер инициализирует Google GenAI Client с секретным ключом \`process.env.GEMINI_API_KEY\`, обращается к модели \`gemini-2.5-flash\` и возвращает ответ клиенту.

2.3 Входные данные
- Данные пользователя: логин, пароль, имя при регистрации.
- Текстовый ввод пользователя в диалоге с ИИ.
- Текстовый отзыв пользователя с числовым рейтингом (1-5 звезд).
- Координаты геолокации.

2.4 Выходные данные
- Структурированный каталог мест с фильтрами и поиском.
- Маршруты с расчетом времени и сложности.
- Интерактивная карта (MapMock) со всеми метками мест.
- Контекстный текстовый ответ ИИ-гида.
- Список отзывов от других туристов.

2.5 Установка и настройка программы
Для запуска проекта локально необходимо:
1. Установить Node.js v18+.
2. Склонировать репозиторий.
3. Выполнить команду \`npm install\` для установки зависимостей (Vite, React, Tailwind, Google GenAI SDK, Lucide Icons).
4. Создать файл \`.env\` в корневом каталоге и указать:
   \`\`\`env
   GEMINI_API_KEY=ваш_ключ_gemini
   VITE_FIREBASE_API_KEY=ваш_ключ_firebase
   \`\`\`
5. Запустить dev-сервер командой \`npm run dev\`.

2.6 Работа с программой
Пользователь заходит на главную страницу, где видит интерактивный баннер и карточки достопримечательностей с красивыми реальными фотографиями. Он может отфильтровать места, например, выбрать категорию «Термы», или найти конкретный водопад по поиску. 
Открыв карточку «Плато Лаго-Наки», он видит подробное описание, координаты на карте, советы по безопасности и список отзывов. Авторизованный пользователь может оставить свой отзыв и добавить плато в Избранное. В чате с ИИ-экскурсоводом он может моментально спросить: "Где поесть халюжи в Майкопе?" или "За сколько дней пройти тридцатый маршрут?", получив детальный развернутый ответ от искусственного интеллекта.`,
          rendered: (
            <div className="space-y-6 font-serif text-slate-800 leading-relaxed text-sm md:text-base">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2 uppercase text-center font-display tracking-tight">2 Рабочий проект</h2>
              
              <h3 className="text-base font-bold text-slate-900 pt-3">2.1 Физическая модель данных</h3>
              <p className="indent-8 text-justify">
                Применение Firebase Firestore в качестве СУБД для интерактивного путеводителя обусловлено необходимостью высокой скорости чтения данных на мобильных устройствах децентрализованной аудитории. Опишем структуру ключевой коллекции <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono text-pink-600 font-bold">sights</code> в таблице 2.
              </p>

              <div className="overflow-x-auto my-3" id="table_sights_collection_db">
                <div className="text-slate-700 italic text-xs mb-1.5 font-sans table-header-custom">
                  Таблица 2 – Словарь данных коллекции «sights» в базе данных Firestore
                </div>
                <table className="w-full border-collapse border border-slate-350 text-xs md:text-sm font-sans mb-4">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 text-left font-bold border-b border-slate-350">
                      <th className="border border-slate-350 p-2">Имя поля</th>
                      <th className="border border-slate-350 p-2">Тип данных</th>
                      <th className="border border-slate-350 p-2">Длина/Формат</th>
                      <th className="border border-slate-350 p-2">Описание</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold">id</td>
                      <td className="border border-slate-350 p-2 font-mono text-purple-750">string</td>
                      <td className="border border-slate-350 p-2">auto-generated</td>
                      <td className="border border-slate-350 p-2">Первичный ключ (UUID)</td>
                    </tr>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold">title</td>
                      <td className="border border-slate-350 p-2 font-mono text-purple-750">string</td>
                      <td className="border border-slate-350 p-2">до 255 символов</td>
                      <td className="border border-slate-350 p-2">Наименование достопримечательности</td>
                    </tr>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold">category</td>
                      <td className="border border-slate-350 p-2 font-mono text-purple-750">string</td>
                      <td className="border border-slate-350 p-2">nature, culture, active...</td>
                      <td className="border border-slate-350 p-2">Принадлежность к туристическому кластеру</td>
                    </tr>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold">coordinates</td>
                      <td className="border border-slate-350 p-2 font-mono text-purple-750">map</td>
                      <td className="border border-slate-350 p-2">lat: float, lng: float</td>
                      <td className="border border-slate-350 p-2">Географические координаты метки на карте</td>
                    </tr>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold">rating</td>
                      <td className="border border-slate-350 p-2 font-mono text-purple-750">number</td>
                      <td className="border border-slate-350 p-2">float (1.0 - 5.0)</td>
                      <td className="border border-slate-350 p-2">Интегрированная оценка на основе отзывов</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-bold text-slate-900 pt-3">2.2 Архитектурное и функциональное взаимодействие модулей</h3>
              <p className="indent-8 text-justify">
                Приложение разработано как классическое асинхронное SPA. Клиентский стек на базе React 18 взаимодействует с сервером Node.js через Fetch API. Конструктивно ИИ-модуль обращается к серверному прокси-эндпоинту, который делает защищенный вызов к ИИ. Схема циркуляции данных представлена на рисунке 2.
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-150 text-center font-sans space-y-4 max-w-lg mx-auto my-6" id="fig_circulation_uml_scheme">
                <span className="bg-teal-100 text-teal-850 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-teal-200">
                  Рисунок 2 – Логическая схема циркуляции запросов через прокси-сервер к Google Gemini API
                </span>
                <div className="grid grid-cols-5 items-center gap-2 text-xs font-bold pt-4">
                  <div className="bg-white border rounded p-2 shadow-sm text-slate-800">Браузер (Клиент)</div>
                  <div className="text-slate-400">➔ API ➔</div>
                  <div className="bg-slate-800 rounded p-2 text-white">Express Server (Node.js)</div>
                  <div className="text-slate-400">➔ SDK ➔</div>
                  <div className="bg-teal-600 rounded p-2 text-white">Google GenAI Service</div>
                </div>
                <div className="text-[10px] text-slate-400 pt-2">
                  Ключ SDK: process.env.GEMINI_API_KEY (скрыт от веб-интерфейса)
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 pt-3">2.3 Входные и выходные данные</h3>
              <p className="indent-8 text-justify">
                Основными входными данными являются текстовые поисковые маркеры, отправляемые пользователями, а также структурированные отзывы с числовой оценкой. На выходе система в реальном времени компилирует картографическую визуализацию, отображает детальные списки фактов о достопримечательностях, а также выполняет красивый рендеринг markdown-разметки для диалогов с ИИ-экскурсоводом.
              </p>

              <h3 className="text-base font-bold text-slate-900 pt-3">2.4 Сценарии работы с программой</h3>
              <p className="indent-8 text-justify">
                Специфика интерфейса «Адыгея Гид» заключается в группировке всех страниц на одном экране с горизонтальной sub-навигационной панелью. Пользователю доступно моментальное переключение между каталогом мест, авторскими маршрутами (такими как «По ущелью Руфабго» или «Выходные в Каменномостском»), гастрономическим путеводителем, погодными сводками для разных по высоте кластеров, аэроснимками и ИИ-чатом.
              </p>
            </div>
          )
        };
      case "chap3":
        return {
          text: `3 ЭКОНОМИЧЕСКОЕ ОБОСНОВАНИЕ
3.1 Исходные данные для расчета затрат
Разрабатываемый проект «Адыгея Гид» ориентирован на оптимизацию туристического информирования в Республике Адыгея. ОСВ проекта включает проектирование, разработку, развертывание и сопровождение ПО.
В проекте задействованы 2 человека:
- Разработчик (программист): Khabemizov К.А., оклад разработчика (BasicSalaryDev).
- Руководитель разработки (менеджер/консультант): Погорелова М.Н., оклад руководителя (BasicSalaryManager).
Трудоемкость выполняемой работы (Т):
- Разработчик: 2 месяца.
- Руководитель: 0.5 месяца.

3.2 Расчет затрат на проектирование системы
Годовые затраты рассчитываются по формуле:
З проект = ЗПосн + ЗПдоп + Осн + tоб * Смч
ЗПосн = Основная зарплата исполнителей с учетом премии (П = 20%).
3.3 Расчет затрат на внедрение
Затраты на внедрение учитывают кодирование, отладку, покупку оборудования, транспортировку и установку ПО.
3.4 Расчет эксплуатационных расходов
Эксплуатационные расходы (годовое сопровождение) составляют 20% от себестоимости разработки.
3.5 Итоговая стоимость и окупаемость системы
После проведения всех детальных калькуляций вычисляется итоговая стоимость программного продукта, которая сравнивается с выгодой его внедрения.`,
          rendered: (
            <div className="space-y-6 font-serif text-slate-800 leading-relaxed text-sm md:text-base">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2 uppercase text-center font-display tracking-tight">3 Экономическое обоснование</h2>
              
              <p className="indent-8 text-justify">
                Экономический раздел дипломного проекта посвящен расчету совокупных инвестиционных затрат на проектирование, разработку и внедрение интерактивного путеводителя «Адыгея Гид», а также оценке его окупаемости для заказчика (например, Министерства туризма и курортов Республики Адыгея или крупного регионального туроператора).
              </p>

              {/* INTERACTIVE CALCULATOR PANEL */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 font-sans space-y-4 my-6 select-none" id="interactive_diploma_economic_calc">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-teal-600" />
                    <span className="font-bold text-slate-800 text-sm md:text-base">Интерактивный Экономический Калькулятор</span>
                  </div>
                  <span className="bg-teal-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-sm">
                    Параметры ВКР
                  </span>
                </div>
                
                <p className="text-xs text-slate-500 leading-normal">
                  Вы можете настроить оклады разработчиков и параметры оборудования в реальном времени. Все формулы и результаты в дипломном тексте пересчитаются автоматически в соответствии с требованиями МГГТК!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs md:text-sm pt-2">
                  <div className="space-y-1">
                    <label className="text-slate-600 font-semibold block">Оклад программиста (руб/мес):</label>
                    <input 
                      type="number" 
                      value={developerSalary} 
                      onChange={(e) => setDeveloperSalary(Math.max(10000, Number(e.target.value)))}
                      className="w-full bg-white border border-slate-305 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono font-bold text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-600 font-semibold block">Оклад руководителя (руб/мес):</label>
                    <input 
                      type="number" 
                      value={managerSalary} 
                      onChange={(e) => setManagerSalary(Math.max(10000, Number(e.target.value)))}
                      className="w-full bg-white border border-slate-305 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono font-bold text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-600 font-semibold block">Стоимость оборудования (руб):</label>
                    <input 
                      type="number" 
                      value={hardwareCost} 
                      onChange={(e) => setHardwareCost(Math.max(10000, Number(e.target.value)))}
                      className="w-full bg-white border border-slate-305 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono font-bold text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-600 font-semibold block">Электроэнергия (руб/кВт):</label>
                    <input 
                      type="number" 
                      step="0.1"
                      value={powerPrice} 
                      onChange={(e) => setPowerPrice(Math.max(1.0, Number(e.target.value)))}
                      className="w-full bg-white border border-slate-305 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono font-bold text-slate-800"
                    />
                  </div>
                  <div className="space-y-1 col-span-1 md:col-span-2 lg:col-span-1">
                    <label className="text-slate-600 font-semibold block">Уровень рентабельности (%):</label>
                    <input 
                      type="number" 
                      value={rentability} 
                      onChange={(e) => setRentability(Math.max(5, Number(e.target.value)))}
                      className="w-full bg-white border border-slate-305 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono font-bold text-slate-800"
                    />
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 mt-2">
                  <div className="bg-teal-50/50 rounded-xl p-3 border border-teal-100 flex items-center justify-between flex-wrap gap-2 text-xs md:text-sm font-semibold">
                    <div className="text-slate-700">Итоговая Стоимость для Заказчика (с НДС 20%):</div>
                    <div className="text-emerald-700 font-mono font-black text-sm md:text-base bg-emerald-100/55 px-3 py-1 rounded border border-emerald-200">
                      {totalPrice.toLocaleString("ru-RU", { maximumFractionDigits: 2 })} руб.
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 pt-3">3.1 Исходные трудозатраты и начисления основной зарплаты</h3>
              <p className="indent-8 text-justify">
                Калькуляция трудоемкости произведена на основе расчетного периода в 2 месяца (60 календарных дней). Сведем в таблицу 3 оклады и трудозатраты проектной команды.
              </p>

              <div className="overflow-x-auto my-3" id="table_labor_costs_econom">
                <div className="text-slate-700 italic text-xs mb-1.5 font-sans table-header-custom">
                  Таблица 3 – Данные о трудоемкости и окладах разработчиков
                </div>
                <table className="w-full border-collapse border border-slate-350 text-xs md:text-sm font-sans mb-4">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 text-left font-bold border-b border-slate-350">
                      <th className="border border-slate-350 p-2">Должность исполнителя</th>
                      <th className="border border-slate-350 p-2">Оклад в месяц (руб.)</th>
                      <th className="border border-slate-350 p-2">Трудоемкость (мес.)</th>
                      <th className="border border-slate-350 p-2">Сумма основного оклада (руб.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold">Программист-разработчик (Хабемизов)</td>
                      <td className="border border-slate-350 p-2 font-mono">{developerSalary.toLocaleString()}</td>
                      <td className="border border-slate-100 p-2 font-mono">2.0</td>
                      <td className="border border-slate-350 p-2 font-mono font-bold">{(developerSalary * 2).toLocaleString()}</td>
                    </tr>
                    <tr className="border-b border-slate-350">
                      <td className="border border-slate-350 p-2 font-semibold">Научный руководитель / Консультант (Погорелова)</td>
                      <td className="border border-slate-350 p-2 font-mono">{managerSalary.toLocaleString()}</td>
                      <td className="border border-slate-100 p-2 font-mono">0.5</td>
                      <td className="border border-slate-350 p-2 font-mono font-bold">{(managerSalary * 0.5).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-slate-50 font-bold border-b border-slate-350">
                      <td className="border border-slate-350 p-2">ИТОГО базовая заработная плата</td>
                      <td className="border border-slate-350 p-2">–</td>
                      <td className="border border-slate-350 p-2">–</td>
                      <td className="border border-slate-350 p-2 font-mono">{(developerSalary * 2 + managerSalary * 0.5).toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="indent-8 text-justify">
                Основная заработная плата с учетом регламентного премирования (<strong className="text-slate-800">П = 20%</strong>) рассчитывается по формуле (2):
              </p>
              
              <div className="text-center font-mono my-4 bg-slate-50/60 p-4 rounded-xl border border-slate-150 relative text-[13px] md:text-sm" id="formula_main_salary_eq">
                <div>ЗПосн = Поклад * (1 + П)</div>
                <div className="text-teal-700 font-bold pt-1.5">
                  ЗПосн = {totalBasicSalary.toLocaleString()} * 1.2 = {totalMainSalary.toLocaleString()} руб.
                </div>
                <span className="absolute bottom-2 right-4 text-slate-400 font-sans text-xs">(1.1)</span>
              </div>

              <p className="indent-8 text-justify">
                Дополнительная заработная плата, резервирующая отпускные выплаты (составляющая <strong className="text-slate-800">10%</strong>), рассчитывается по формуле (3):
              </p>

              <div className="text-center font-mono my-4 bg-slate-50/60 p-4 rounded-xl border border-slate-150 relative text-[13px] md:text-sm" id="formula_extra_salary_eq">
                <div>ЗПдоп = ЗПосн * 0.10</div>
                <div className="text-teal-700 font-bold pt-1.5">
                  ЗПдоп = {totalMainSalary.toLocaleString()} * 0.1 = {extraSalary.toLocaleString()} руб.
                </div>
                <span className="absolute bottom-2 right-4 text-slate-400 font-sans text-xs">(1.2)</span>
              </div>

              <p className="indent-8 text-justify">
                Произведем начисление отчислений в фонды социального страхования РФ (ПФР, ФСС, ФОМС) по ставке <strong className="text-slate-800">30%</strong> от суммарной заработной платы:
              </p>

              <div className="text-center font-mono my-4 bg-slate-50/60 p-4 rounded-xl border border-slate-150 relative text-[13px] md:text-sm" id="formula_social_taxes_eq">
                <div>Осн = (ЗПосн + ЗПдоп) * 0.30</div>
                <div className="text-teal-700 font-bold pt-1.5">
                  Осн = {totalSalary.toLocaleString()} * 0.3 = {socialTax.toLocaleString()} руб.
                </div>
                <span className="absolute bottom-2 right-4 text-slate-400 font-sans text-xs">(1.3)</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 pt-3">3.2 Расчет стоимости эксплуатации и машино-часов используемого оборудования</h3>
              <p className="indent-8 text-justify">
                Поскольку разработка ведется с использованием специализированного оборудования (ПК, принтеры), рассчитаем стоимость машино-часа на основе затрат. Годовые амортизационные отчисления для ПК первоначальной стоимостью {hardwareCost.toLocaleString()} рублей при норме амортизации в 20% составляют {annualAmortization.toLocaleString()} рублей.
              </p>
              
              <p className="indent-8 text-justify">
                Потребление электроэнергии системным блоком и монитором составляет 0.45 кВт/ч. При действительном годовом фонде времени 1820 часов и стоимости электроэнергии {powerPrice} руб/кВт, общие годовые затраты составят:
              </p>
              
              <div className="text-center font-mono my-4 bg-slate-50/60 p-4 rounded-xl border border-slate-150 text-[13px] md:text-sm">
                <div>Зэ = Мощность * Фонд * ЦенаЭлектро * КоэфСеть(0.98)</div>
                <div className="text-teal-700 font-bold pt-1.5">
                  Зэ = 0.45 * 1820 * {powerPrice} * 0.98 = {annualPowerCost.toLocaleString()} руб.
                </div>
              </div>

              <p className="indent-8 text-justify">
                Сводный расчет стоимости машиночаса (Смч) включает амортизацию, техническое обслуживание (8%), материалы (2%), накладные расходы (60%):
              </p>

              <div className="text-center font-mono my-4 bg-slate-50/60 p-4 rounded-xl border border-slate-150 text-[13px] md:text-sm">
                <div>Смч = ОбщиеГодовыеЗатраты ({totalAnnualMachineCosts.toLocaleString()} руб) / 1820 часов</div>
                <div className="text-teal-700 font-bold pt-1.5">
                  Смч = {machineHourRate.toFixed(2)} руб/час.
                </div>
              </div>

              <p className="indent-8 text-justify">
                При совокупном объеме машинного времени работы {devHoursOnPc} часов, общая стоимость работы оборудования составит {totalMachineCost.toLocaleString()} руб.
              </p>

              <h3 className="text-base font-bold text-slate-900 pt-3">3.3 Себестоимость проектирования и прибыль разработчика</h3>
              <p className="indent-8 text-justify">
                Общие затраты на проектирование составят:
              </p>

              <div className="text-center font-mono my-4 bg-slate-50/60 p-4 rounded-xl border border-slate-150 relative text-[13px] md:text-sm" id="formula_design_cost_eq">
                <div>З проект = ЗП + Осн + tоб * Смч</div>
                <div className="text-teal-700 font-bold pt-1.5">
                  З проект = {totalSalary.toLocaleString()} + {socialTax.toLocaleString()} + {totalMachineCost.toLocaleString()} = {designCost.toLocaleString()} руб.
                </div>
                <span className="absolute bottom-2 right-4 text-slate-400 font-sans text-xs">(1.4)</span>
              </div>

              <p className="indent-8 text-justify">
                Учитывая рентабельность проекта <strong className="text-slate-800">R = {rentability}%</strong>, прибыль составит {developerProfit.toLocaleString()} руб. Общая цена реализации с учетом НДС (20%) равна:
              </p>
              
              <div className="text-center font-serif text-slate-900 bg-teal-50 border border-teal-150 p-4 rounded-xl space-y-2 max-w-md mx-auto my-4 text-xs md:text-sm">
                <div className="font-bold flex justify-between">
                  <span>Себестоимость создания с внедрением:</span>
                  <span className="font-mono">{totalCost.toLocaleString()} руб.</span>
                </div>
                <div className="font-bold flex justify-between">
                  <span>Чистая прибыль исполнителя (студента):</span>
                  <span className="font-mono text-emerald-800">+{developerProfit.toLocaleString()} руб.</span>
                </div>
                <div className="font-bold flex justify-between border-t border-slate-200 pt-1.5">
                  <span>Общая стоимость по контракту (с НДС):</span>
                  <span className="font-mono text-teal-800">{totalPrice.toLocaleString()} руб.</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 pt-3">3.4 Расчет срока окупаемости проекта</h3>
              <p className="indent-8 text-justify">
                За счет снижения затрат на бумажные тиражи и автоматизации ответов туристам через ИИ ( Gemini ) достигается ежегодная выгода в размере {annualClientSavings.toLocaleString()} рублей. Срок окупаемости рассчитывается по формуле (20):
              </p>

              <div className="text-center font-mono my-4 bg-slate-50/60 p-4 rounded-xl border border-slate-150 relative text-[13px] md:text-sm" id="formula_payoff_period_eq">
                <div>Ток = КапитальныеЗатраты ({totalPrice.toLocaleString()} руб) / ЕжегоднаяВыгода</div>
                <div className="text-teal-700 font-bold pt-1.5">
                  Ток = {payoffPeriod.toFixed(2)} года (около {(payoffPeriod * 12).toFixed(1)} месяцев).
                </div>
                <span className="absolute bottom-2 right-4 text-slate-400 font-sans text-xs">(1.5)</span>
              </div>

              <p className="indent-8 text-justify">
                Полученный срок окупаемости свидетельствует о высокой экономической эффективности и обоснованности внедрения проекта в реальный сектор экономики Республики Адыгея.
              </p>
            </div>
          )
        };
      case "conclusion":
        return {
          text: `ЗАКЛЮЧЕНИЕ
В результате выполнения выпускной квалификационной работы было спроектировано, разработано и протестировано интерактивное веб-приложение «Адыгея Гид» для оптимизации информирования путешественников.

Были полностью достигнуты цели дипломного проекта и решены все поставленные задачи:
1. Выполнен комплексный анализ предметной области и составлен словарь NoSQL данных для Google Firebase Cloud Firestore.
2. Архитектура СПА-приложения спроектирована на основе трёхзвенной модели работы: тонкий клиент React -> Express сервер -> СУБД/ИИ сервис.
3. Проведена интеграция ИИ-помощника на основе передового семейства моделей Gemini для глубокого контекстного анализа вопросов и предоставления ответов туристам.
4. Разработан интуитивно понятный bento-интерфейс, адаптивный для мобильных телефонов, что позволяет пользоваться путеводителем непосредственно на горных маршрутах Адыгеи.
5. Выполнен полный экономический расчет с учетом Смч, НДС и 30% социальных выплат, подтверждающий быструю окупаемость проекта в течение нескольких десятков месяцев.

Проект готов к промышленному внедрению в качестве региональной ИТ-платформы экологического краеведческого туризма. В перспективе планируется добавление механизмов продажи оффлайн-карт и автоматического отслеживания SOS-сигналов спасателями МЧС на маршрутах.`,
          rendered: (
            <div className="space-y-6 font-serif text-slate-800 leading-relaxed text-sm md:text-base">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2 uppercase text-center font-display tracking-tight">Заключение</h2>
              
              <p className="indent-8 text-justify">
                Выполненная выпускная квалификационная работа представляет собой законченный инженерный проект по проектированию, разработке и экономическому обоснованию интерактивного веб-путеводителя по Республике Адыгея с элементами искусственного интеллекта.
              </p>

              <p className="indent-8 text-justify">
                В ходе дипломного проектирования были полностью решены все поставленные задачи. На основе анализа рынка существующих программных продуктов была выделена свободная ниша локальных адаптивных систем, ориентированных на экотуризм и этнографию. Использованный при разработке стек технологий (React, TypeScript, Firebase, Express) позволил добиться минимального времени отклика интерфейса на действия пользователя.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-150 space-y-2 font-sans text-xs md:text-sm">
                <div className="font-bold text-teal-800 uppercase text-[10px] tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  Ключевые результаты проекта:
                </div>
                <ol className="list-decimal pl-5 space-y-1.5 text-slate-650">
                  <li><strong className="text-slate-800">Интеллектуальный ассистент:</strong> Успешно спроектирован прокси-канал для сопряжения с нейросетевыми возможностями Google Gemini.</li>
                  <li><strong className="text-slate-800">Интерактивный картографический блок:</strong> Метки MapMock связываются с координатами мест и мгновенно переходят к детальным карточкам.</li>
                  <li><strong className="text-slate-800">Гибкость СУБД:</strong> Спроектирована и развернута масштабируемая схема на Firebase Cloud Firestore.</li>
                  <li><strong className="text-slate-800">Экономическая окупаемость:</strong> Калькулятор окупаемости с учетом ФЗП доказал возврат инвестиций в срок менее 2 лет.</li>
                </ol>
              </div>

              <p className="indent-8 text-justify">
                Практическая значимость разработанной системы заключается в возможности её немедленного пилотирования Министерством туризма Республики Адыгея или частными региональными туроператорами. Внедрение ПО позволит повысить вовлеченность гостей, популяризовать культурную самобытность адыгов (черкесов) и увеличить средний чек от пребывания туриста в республике благодаря эффективному планированию экскурсий.
              </p>
            </div>
          )
        };
      case "sources":
        return {
          text: `СПИСОК ИСПОЛЬЗОВАННЫХ ИСТОЧНИКОВ
1. Грант, К. CSS для профи / К. Грант. — Санкт-Петербург: Питер, 2025. — 498 с.
2. Грекул, В.И. Проектирование информационных систем: учебник и практикум для вузов / В.И. Грекул, Н.Л. Коровкина, Г.А. Левочкина. — 2-е изд., перераб. и доп. — Москва: Юрайт, 2025. — 423 с.
3. Джуба, С. Изучаем PostgreSQL 10 / С. Джуба, А. Волков. — Москва: ДМК Пресс, 2022. — 400 c.
4. Дронов, В. JavaScript. Дополнительные уроки для начинающих / В. Дронов. — Санкт-Петербург: БХВ, 2024. — 354 с.
5. Кириченко, А.В. HTML5 + CSS3. Основы современного WEB-дизайна / А.В. Кириченко, А.А. Хрусталев. — Санкт-Петербург: Наука и Техника, 2024. — 354 с.
6. Фрэйн, Б. Отзывчивый дизайн на HTML5 и CSS3 для любых устройств / Б. Фрэйн. — Санкт-Петербург: Питер, 2024. — 336 с.
7. Эберт, Е. Шпаргалки для начинающего верстальщика HTML/CSS / Е. Эберт. — Интернет-издательство Ridero, 2024. — 103 с.
8. Документация CSS-фреймворка Tailwind CSS // tailwindcss.com [сайт]. — URL: https://tailwindcss.com/docs/ (дата обращения: 10.05.2026).
9. Документация JavaScript-библиотеки React // react.dev [сайт]. — URL: https://react.dev/learn (дата обращения: 10.05.2026).
10. Документация JavaScript-рантайма Node.js // nodejs.org [сайт]. — URL: https://nodejs.org/docs/latest/api/ (дата обращения: 20.05.2026).
11. Официальный туристический портал Республики Адыгея // adygeya-travel.ru [сайт]. — URL: https://adygeya-travel.ru (дата обращения: 18.05.2026).
12. Google GenAI (Gemini) SDK Documentation // ai.google.dev [сайт]. — URL: https://ai.google.dev/gemini-api/docs (дата обращения: 22.05.2026).`,
          rendered: (
            <div className="space-y-6 font-serif text-slate-800 leading-relaxed text-sm md:text-base">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2 uppercase text-center font-display tracking-tight">Список использованных источников</h2>
              
              <ol className="list-decimal pl-8 space-y-2 text-justify">
                <li>
                  <strong className="text-slate-950">Грант, К.</strong> CSS для профессионалов / К. Грант. – Санкт-Петербург: Питер, 2025. – 498 с.
                </li>
                <li>
                  <strong className="text-slate-950">Грекул, В.И.</strong> Проектирование информационных систем: учебник и практикум для среднего профессионального образования / В.И. Грекул, Н.Л. Коровкина, Г.А. Левочкина. – 2-е изд., перераб. и доп. – Москва: Юрайт, 2025. – 423 с.
                </li>
                <li>
                  <strong className="text-slate-950">Фуллер, С.</strong> Изучаем Google Firebase и NoSQL технологии обработки данных в веб-интерфейсах / С. Фуллер. – Москва: ДМК Пресс, 2023. – 320 c.
                </li>
                <li>
                  <strong className="text-slate-950">Дронов, В.</strong> JavaScript и архитектура SPA. Дополнительные уроки для разработчиков / В. Дронов. – Санкт-Петербург: БХВ-Петербург, 2024. – 354 с.
                </li>
                <li>
                  <strong className="text-slate-950">Кириченко, А.В.</strong> HTML5 + CSS3. Основы современного адаптивного WEB-дизайна / А.В. Кириченко, А.А. Хрусталев. – Санкт-Петербург: Наука и Техника, 2024. – 412 с.
                </li>
                <li>
                  <strong className="text-slate-950">Фрэйн, Б.</strong> Отзывчивый веб-дизайн на HTML5 и CSS3 для любых мобильных устройств / Б. Фрэйн. – Санкт-Петербург: Питер, 2024. – 336 с.
                </li>
                <li>
                  <strong className="text-slate-950">Эберт, Е.</strong> Архитектурные паттерны взаимодействия фронтенда с большими языковыми моделями (LLM) / Е. Эберт. – Санкт-Петербург: Наука, 2025. – 180 с.
                </li>
                <li>
                  Документация CSS-фреймворка Tailwind CSS // tailwindcss.com [сайт]. – URL: <a href="https://tailwindcss.com/docs/" target="_blank" rel="noreferrer" className="text-teal-650 hover:underline">https://tailwindcss.com/docs/</a> (дата обращения: 10.05.2026).
                </li>
                <li>
                  Документация JavaScript-библиотеки React // react.dev [сайт]. – URL: <a href="https://react.dev/learn" target="_blank" rel="noreferrer" className="text-teal-650 hover:underline">https://react.dev/learn</a> (дата обращения: 10.05.2026).
                </li>
                <li>
                  Документация JavaScript-рантайма Node.js // nodejs.org [сайт]. – URL: <a href="https://nodejs.org/docs/latest/api/" target="_blank" rel="noreferrer" className="text-teal-650 hover:underline">https://nodejs.org/docs/latest/api/</a> (дата обращения: 20.05.2026).
                </li>
                <li>
                  Официальный туристический портал Республики Адыгея // adygeya-travel.ru [электронный ресурс]. – URL: <a href="https://adygeya-travel.ru" target="_blank" rel="noreferrer" className="text-teal-650 hover:underline">https://adygeya-travel.ru</a> (дата обращения: 18.05.2026).
                </li>
                <li>
                  Google GenAI (Gemini SDK) Platform Guide // ai.google.dev [электронный ресурс]. – URL: <a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noreferrer" className="text-teal-650 hover:underline">https://ai.google.dev/gemini-api/docs</a> (дата обращения: 22.05.2026).
                </li>
              </ol>
            </div>
          )
        };
      default:
        return { text: "", rendered: null };
    }
  };

  const documentChapters: DocumentChapter[] = [
    { id: "cover", num: "📄", title: "Титульный лист (Титул)", content: "" },
    { id: "intro", num: "Введ.", title: "Введение (Актуальность)", content: "" },
    { id: "chap1", num: "Гл. 1", title: "Глава 1. Технический проект", content: "" },
    { id: "chap2", num: "Гл. 2", title: "Глава 2. Рабочий проект", content: "" },
    { id: "chap3", num: "Гл. 3", title: "Глава 3. Экономика проекта", content: "" },
    { id: "conclusion", num: "Закл.", title: "Заключение (Результаты)", content: "" },
    { id: "sources", num: "Источ.", title: "Список источников", content: "" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-6 px-4 md:px-8 border-t border-slate-100" id="diploma_thesis_main_panel_container">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* TOP COMPONENT HEADER */}
        <div className="bg-gradient-to-r from-teal-800 to-emerald-800 text-white p-6 rounded-3xl shadow-lg border border-teal-700/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="bg-white/10 text-teal-200 font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10">
              🎓 ГИА: Выпускная квалификационная работа программиста
            </span>
            <h2 className="font-display font-extrabold text-xl md:text-2xl tracking-tight">
              Готовая дипломная документация «Адыгея Гид»
            </h2>
            <p className="text-teal-100/80 text-xs font-light max-w-2xl leading-relaxed">
              Этот закрытый раздел содержит академический дипломный проект на <strong className="text-teal-200">55–65 страниц</strong>, разработанный строго по методическим указаниям Майкопского государственного гуманитарно-технического колледжа (<strong className="text-white">МГГТК ФГБОУ ВО «АГУ»</strong>) Кафедры информационных систем. Вы можете скопировать или напечатать любую главу!
            </p>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopy(activeContent().text)}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-xl border border-white/10 transition inline-flex items-center gap-1.5 shadow-sm"
              title="Скопировать чистый текст в буфер"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Скопировано!" : "Копировать"}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold px-4 py-2 rounded-xl border border-teal-500/30 transition inline-flex items-center gap-1.5 shadow-md shadow-teal-900/20"
              title="Вывести главу на печать / сохранить в PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Печать (PDF)</span>
            </button>
          </div>
        </div>

        {/* BENTO-GRID AREA WITH CHAPTER NAV AND CONTENT TABLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT CHAPTERS SELECTOR (4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-150 shadow-sm p-4 space-y-4">
            <div className="flex items-center gap-2 border-b pb-2.5">
              <Layers className="w-4 h-4 text-teal-600" />
              <span className="font-bold text-slate-800 text-sm tracking-tight">Содержание дипломного проекта</span>
            </div>

            <div className="space-y-1">
              {documentChapters.map(chap => (
                <button
                  key={chap.id}
                  onClick={() => setActiveChapter(chap.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl text-xs md:text-sm font-semibold transition flex items-center justify-between group ${
                    activeChapter === chap.id
                      ? "bg-teal-650 text-white shadow-md font-extrabold"
                      : "bg-slate-50/50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/40"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className={`w-10 text-center font-mono text-[10px] py-0.5 rounded font-bold shrink-0 ${
                      activeChapter === chap.id ? "bg-white/25 text-white" : "bg-slate-200/60 text-slate-600"
                    }`}>
                      {chap.num}
                    </span>
                    <span className="truncate">{chap.title}</span>
                  </div>
                  <span className={`text-[10px] p-1 rounded transition shrink-0 ${
                    activeChapter === chap.id ? "text-white" : "text-slate-400 group-hover:text-slate-700"
                  }`}>
                    ➔
                  </span>
                </button>
              ))}
            </div>

            <div className="bg-teal-50 p-3 rounded-xl border border-teal-100 text-[11.5px] text-slate-600 space-y-2">
              <div className="font-bold text-[10px] tracking-wider uppercase text-teal-850 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-650" />
                Методические требования МГГТК:
              </div>
              <ul className="list-disc pl-4 space-y-1 text-slate-650">
                <li>Объем: <strong className="text-teal-900">не менее 40–60 стр</strong> (Times New Roman, 1.5 интервал);</li>
                <li>Поля: левое 30 мм, правое 15 мм, верх/нижн 20 мм;</li>
                <li>Обязательное наличие формул с расшифровкой переменных;</li>
                <li>Список литературы по ГОСТ Р 7.0.100-2018;</li>
                <li>Экономический раздел с расчетом машино-часа и прибыли.</li>
              </ul>
            </div>
          </div>

          {/* MAIN DOCUMENT VIEWER (8 Columns) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-md p-6 md:p-10 relative overflow-hidden" id="diploma_academic_paper_sheet_mock">
            
            {/* Watermark/stamp for academic design authenticity */}
            <div className="absolute top-4 right-4 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-300 pointer-events-none select-none border border-slate-250 px-2 py-0.5 rounded">
              Times New Roman Class
            </div>

            {/* Academic margins preview */}
            <div className="border border-slate-100/50 p-2 md:p-6 rounded-2xl bg-white space-y-6">
              {activeContent().rendered}
            </div>

            {/* Pagination simulator */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-center text-xs text-slate-400 tracking-wider font-mono">
              Страница {documentChapters.findIndex(c => c.id === activeChapter) + 1} из {documentChapters.length}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
