// ======================
// DATASET
// ======================
const postersData = [
  {
    id: 1,
    title: "Вступай в ряды Красной армии",
    author: "Б. В. Силкин",
    year: 1920,
    theme: "гражданская война",
    period: "1920-е",
    keyImages: ["солдат"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Join%20the%20ranks%20of%20the%20Red%20Army%2C%20Russian%20propaganda%20poster%201920.jpg",
    annotation: "Ранний мобилизационный плакат: прямая адресность, упрощённая риторика призыва и императивная композиция."
  },
  {
    id: 2,
    title: "Польско-советский пропагандистский плакат",
    author: "С. М. Мухарский",
    year: 1920,
    theme: "пропаганда",
    period: "1920-е",
    keyImages: ["враг", "солдат"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Polish-soviet%20propaganda%20poster%201920.jpg",
    annotation: "Плакат строит бинарную оппозицию «свой/чужой» и усиливает эффект агитации через визуальную поляризацию."
  },
  {
    id: 3,
    title: "Красная Армия — вооружённая сила СССР...",
    author: "Агитпроп СССР",
    year: 1927,
    theme: "гражданская война",
    period: "1920-е",
    keyImages: ["солдат", "техника"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Idn.duke.edu%20Soviet%20propaganda%20poster%20-%20Red%20Army%20Training%201927%20USSR%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F%20%D0%90%D1%80%D0%BC%D0%B8%D1%8F--%D0%92%D0%BE%D0%BE%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B8%D0%BB%D0%B0%20%D0%A1.%D0%A1.%D0%A1.%D0%A0.%20%D0%B4%D0%BB%D1%8F%20%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D1%8B%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%20%D1%82%D1%80%D1%83%D0%B4%D1%8F%D1%89%D0%B8%D1%85%D1%81%D1%8F%20No%20known%20copyright.jpg",
    annotation: "Мобилизационная риторика и дисциплина образа: плакат конструирует государственную силу как защиту трудящихся."
  },
  {
    id: 4,
    title: "Да здравствует международная пролетарская революция",
    author: "С. М. Мухарский",
    year: 1925,
    theme: "пропаганда",
    period: "1920-е",
    keyImages: ["рабочий"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1925.%20%D0%94%D0%B0%20%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B5%D1%82%20%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F.jpg",
    annotation: "Плакат формирует интернациональный горизонт революции: коллективный субъект и масштаб исторической миссии."
  },
  {
    id: 5,
    title: "Крестьянка, укрепляй союз рабочих и крестьян",
    author: "М. В. Ушаков-Поскочин",
    year: 1925,
    theme: "быт",
    period: "1920-е",
    keyImages: ["крестьянка", "женщина"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/%22Peasant%20woman%2C%20consolidate%20the%20unity%20of%20workers%20and%20peasants.%22.jpg",
    annotation: "Образ крестьянки задаёт связку «земля—труд—порядок», переводя социальный союз в наглядный типаж."
  },
  {
    id: 6,
    title: "Поднимем культурный уровень рабочего",
    author: "Д. А. Буланов",
    year: 1927,
    theme: "культура",
    period: "1920-е",
    keyImages: ["рабочий", "ребенок"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1927.%20%D0%9D%D0%B0%D1%88%D0%B0%20%D1%86%D0%B5%D0%BB%D1%8C%2C%20%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D0%B2%20%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C%20%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B5%D0%B3%D0%BE%2C%20%D0%BF%D1%80%D0%B8%D0%B1%D0%BB%D0%B8%D0%B7%D0%B8%D1%82%D1%8C%20%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D1%83%D1%8E%20%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8E.jpg",
    annotation: "Плакат связывает «культурный уровень» с историческим ускорением: просвещение становится политическим ресурсом."
  },
  {
    id: 7,
    title: "Против кулака и спекулянта",
    author: "Н. Н. Поманский",
    year: 1928,
    theme: "пропаганда",
    period: "1920-е",
    keyImages: ["враг", "крестьянка"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1928.%20Against%20the%20kulak%20and%20the%20speculator%20will%20strengthen%20and%20expand%20socialist%20cooperation.jpg",
    annotation: "Поляризация социального поля: «кулак/спекулянт» как фигура угрозы, кооперация — как норма нового порядка."
  },
  {
    id: 8,
    title: "Непрерывная работа увеличивает богатство страны",
    author: "С. А. Власов",
    year: 1930,
    theme: "индустриализация",
    period: "1930-е",
    keyImages: ["рабочий", "техника"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1930.%20%D0%9D%D0%B5%D0%BF%D1%80%D0%B5%D1%80%D1%8B%D0%B2%D0%BA%D0%B0%20%D1%83%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B8%D0%B2%D0%B0%D0%B5%D1%82%20%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5%20%D0%B1%D0%BE%D0%B3%D0%B0%D1%82%D1%81%D1%82%D0%B2%D0%BE.jpg",
    annotation: "Героизация режима труда: экономика представлена как вопрос дисциплины, темпа и коллективного усилия."
  },
  {
    id: 9,
    title: "Ускорим индустриализацию вкладами в сберкассы",
    author: "Неизвестный художник",
    year: 1929,
    theme: "индустриализация",
    period: "1920-е",
    keyImages: ["техника"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Let%27s%20speed%20up%20industrialization%20in%20the%20USSR%20with%20deposits%20to%20state%20labour%20savings%20offices%20%283274390010%29.jpg",
    annotation: "Финансовая дисциплина как часть модернизационного проекта: деньги визуализируются через машины и индустриальные формы."
  },
  {
    id: 10,
    title: "Пятилетку — в 4 года",
    author: "Неизвестный художник",
    year: 1931,
    theme: "индустриализация",
    period: "1930-е",
    keyImages: ["рабочий", "техника"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/345Spurt%20in%20the%20five-year%20period%20-%20three%20years%2C%201931.jpg",
    annotation: "Логика ускорения: плакат строит ощущение сверх-нормы как моральной и политической обязанности."
  },
  {
    id: 11,
    title: "За Родину!",
    author: "А. Г. Ситтаро",
    year: 1941,
    theme: "великая отечественная война",
    period: "1940-е",
    keyImages: ["солдат", "враг"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1941.%20%D0%97%D0%B0%20%D0%A0%D0%BE%D0%B4%D0%B8%D0%BD%D1%83.jpg",
    annotation: "Мобилизационный императив: композиция усиливает решимость, а образ солдата стабилизирует чувство коллективной защиты."
  },
  {
    id: 12,
    title: "Прибалтика освобождена!",
    author: "Неизвестный художник",
    year: 1944,
    theme: "великая отечественная война",
    period: "1940-е",
    keyImages: ["солдат"],
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1944.Poster.The%20Baltic%20States%20are%20liberated%21.jpg",
    annotation: "Плакат победного нарратива: освобождение оформляется как восстановление порядка и справедливости."
  },
{
id: 13,
title: "Красный подарок белому плану",
author: "Д. С. Моор",
year: 1920,
theme: "гражданская война",
period: "1920-е",
keyImages: ["солдат", "враг"],
imageUrl: "https://aif-s3.aif.ru/images/015/487/1ecba7ef12e36e379bcaca2d84466bc4.jpg",
annotation: "Плакат усиливает мобилизацию через образы красных бойцов, противопоставляя их белогвардейским угрозам."
},
{
id: 14,
title: "Царь, поп и кулак",
author: "А. П. Апсит",
year: 1918,
theme: "гражданская война",
period: "1910-е",
keyImages: ["враг", "рабочий"],
imageUrl: "https://avatars.mds.yandex.net/i?id=0a1c4a899dc6fd05ec43751804c2bdaf_l-5293830-images-thumbs&ref=rim&n=13&w=800&h=800",
annotation: "Бинарная оппозиция классовых врагов: царь, поп и кулак как символы контрреволюции."
},
{
id: 15,
title: "Красная Армия раздавила белогвардейских паразитов",
author: "Неизвестный художник",
year: 1920,
theme: "гражданская война",
period: "1920-е",
keyImages: ["солдат", "техника"],
imageUrl: "https://catalog.shm.ru/api/spf/OXRrxH-lU-E7JZwCzzNuTT_CHqn2C-a5YT8Yj-n9erL8qCQBqOSt9myuFMR2IZWc.webp?w=1000&h=1000",
annotation: "Героизация Красной армии в борьбе с Деникиным и Колчаком через динамичную композицию."
},
{
id: 16,
title: "Ты записался добровольцем?",
author: "Д. С. Моор",
year: 1920,
theme: "гражданская война",
period: "1920-е",
keyImages: ["солдат"],
imageUrl: "https://topwar.ru/uploads/posts/2023-09/2991050_big.jpg",
annotation: "Прямой вопрос к зрителю усиливает личную ответственность за победу в Гражданской войне."
},
{
id: 17,
title: "Врангель еще жив! Добей его без пощады!",
author: "В. Н. Денисов",
year: 1920,
theme: "гражданская война",
period: "1920-е",
keyImages: ["враг", "солдат"],
imageUrl: "https://img.riamediabank.ru/images/vol1%2Fmedia%2Foriginal%2Fold%2F75%2F15%2F751506_hires_0%3A0%3A0%3A0_1400x1000_80_9_1_0J%2FQsNCy0LXQuyDQkdCw0LvQsNCx0LDQvdC%2B0LIgIzc1MTUwNg%3D%3D_75%3A89_751506-rus_ria-751506-preview_ojvb6q_8dd62ffcb3b6a6f415dcb14b21c6e617.jpg",
annotation: "Красноармейцы призываются добить последнего врага - символ окончательной победы над белогвардейцами"
},
,
{
  id: 18,
  title: "Не болтай!",
  author: "Нина Ватолина",
  year: 1941,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["женщина"],
  imageUrl: "https://omsklib.ru/files/news/2020/03/exib/plakat-75pobeda/19.jpg",
  annotation: "Плакат о военной тайне: образ женщины подчёркивает ответственность тыла за безопасность фронта."
},
{
  id: 19,
  title: "Воин Красной Армии, спаси!",
  author: "Виктор Корецкий",
  year: 1942,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["ребенок"],
  imageUrl: "https://virtualrm.spb.ru/files/images/%20Корецкий%20Воин%20Красной%20Армии,спаси!%201942%20Хромолитография%2043,9%20х%2031.preview.jpg",
  annotation: "Плакат акцентирует защиту мирных жителей и моральную обязанность солдата спасти ребенка."
},
{
  id: 20,
  title: "Всё для фронта! Всё для победы!",
  author: "Неизвестен",
  year: 1941,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["рабочие"],
  imageUrl: "https://rusmuseumvrm.ru/data/collections/engraving/gr.pl.-245/43986_mainfoto_03.jpg",
  annotation: "Мобилизационный лозунг: вся экономика и быт подчиняются задаче военной победы."
},
{
  id: 21,
  title: "Отстоим Москву!",
  author: "Неизвестен",
  year: 1941,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["солдат"],
  imageUrl: "https://sun9-71.userapi.com/s/v1/ig1/YEhJ8wfNUKrMm-ZiEb7UrNfa-F7KpP48SjDy3iJgynaXl3hy8GUYd9E3DbqkoizIZnt0v5df.jpg?quality=96&as=32x45%2C48x68%2C72x101%2C108x152%2C160x225%2C240x338%2C360x507%2C480x675%2C540x760%2C640x901%2C720x1013%2C1080x1520%2C1280x1801%2C1440x2026%2C1535x2160&from=bu&cs=640x0",
  annotation: "Плакат подчёркивает значимость обороны столицы как символа сохранения государства."
},
{
  id: 22,
  title: "Смерть немецким оккупантам!",
  author: "Неизвестен",
  year: 1942,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["враг"],
  imageUrl: "https://ir.ozone.ru/s3/multimedia-n/6301000199.jpg",
  annotation: "Антинацистская пропаганда: образ врага как объекта жёсткой агрессии и уничтожения."
},
{
  id: 23,
  title: "Наши силы неисчислимы",
  author: "В. Корецкий",
  year: 1941,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["армия"],
  imageUrl: "https://cdn.gallerix.asia/sr/_UNK/1973977528/1513340135.jpg",
  annotation: "Плакат подчёркивает мощь и массовость Красной армии как фактор неизбежной победы."
},
{
  id: 24,
  title: "Берлин будет взят!",
  author: "Неизвестен",
  year: 1945,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["армия"],
  imageUrl: "https://static.auction.ru/offer_images/cmn8/2018/12/14/11/big/I/I8UWW9OhMQK/otkrytka_1945_medal_za_vzjatie_berlina_chistaja.jpg",
  annotation: "Плакат финальной фазы войны: символический акцент на штурме столицы Третьего рейха."
},
{
  id: 25,
  title: "Освободим Европу от фашизма!",
  author: "Неизвестен",
  year: 1944,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["солдат"],
  imageUrl: "https://ic.pics.livejournal.com/balabin_1712/74266838/180433/180433_1000.jpg",
  annotation: "Плакат о наступлении и освободительной миссии Красной армии в Европе."
},
{
  id: 26,
  title: "Мстите за нас!",
  author: "В. Корецкий",
  year: 1942,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["женщина"],
  imageUrl: "https://www.grsmu.by/ru/files/megacat/image/1430/1920/1685021549.jpg",
  annotation: "Эмоционально‑мобилизационный плакат: образ жертвы призывает к мести и усилению усилий фронта."
},
{
  id: 27,
  title: "Слава героям фронта!",
  author: "Неизвестен",
  year: 1943,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["армия"],
  imageUrl: "https://img02litfund.ru/images/lots/137/137-271-3538-1-VC196056.jpg",
  annotation: "Плакат прославляет героизм солдат и формирует культ воинских заслуг."
},
{
  id: 28,
  title: "Фашизм будет уничтожен!",
  author: "Неизвестен",
  year: 1942,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["враг"],
  imageUrl: "https://cs11.pikabu.ru/post_img/big/2019/06/02/4/1559454055162223722.jpg",
  annotation: "Сильный антифашистский посыл: фашизм изображён как неизбежно обречённая идеология."
},
{
  id: 29,
  title: "Победа будет за нами!",
  author: "Неизвестен",
  year: 1941,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["армия"],
  imageUrl: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c83702e5-dc23-5279-beb3-d5726e4236a9/a2727c3d-a259-54ea-ae1f-04fe1478be35.jpg",
  annotation: "Плакат о победе: внушает уверенность и оптимизм, подчёркивая силу коллектива."
},
{
  id: 30,
  title: "Рабочий, защищай революцию!",
  author: "Неизвестен",
  year: 1919,
  theme: "гражданская война",
  period: "1920-е",
  keyImages: ["рабочие"],
  imageUrl: "https://i1.wp.com/lenin.shm.ru/wp-content/uploads/2020/11/16.jpg?fit=957%2C1500&ssl=1",
  annotation: "Плакат подчёркивает роль рабочего класса как опоры революционного режима."
},
{
  id: 31,
  title: "Красная армия непобедима",
  author: "Неизвестен",
  year: 1920,
  theme: "гражданская война",
  period: "1920-е",
  keyImages: ["армия"],
  imageUrl: "https://artchive.ru/res/media/img/oy400/work/c64/104944@2x.jpg",
  annotation: "Плакат создаёт образ абсолютной силы Красной армии как политической и моральной опоры власти."
},
{
  id: 32,
  title: "Да здравствует Советская власть!",
  author: "Неизвестен",
  year: 1918,
  theme: "революция",
  period: "1910-е",
  keyImages: ["массы"],
  imageUrl: "https://storage07.litfund.ru/images/lots/463/463-149-10725-36-Y1142595.jpg",
  annotation: "Плакат поддержки новой власти: подчёркивает легитимность и массовую поддержку советской системы."
},
{
  id: 33,
  title: "Вперёд к коммунизму!",
  author: "Неизвестен",
  year: 1920,
  theme: "революция",
  period: "1920-е",
  keyImages: ["рабочие"],
  imageUrl: "https://cs13.pikabu.ru/post_img/big/2023/05/24/5/1684912809121283820.jpg",
  annotation: "Плакат рисует идеальный будущий образ: коммунизм как цель и смысл дальнейшего развития."
},
{
  id: 34,
  title: "Рабочий класс — сила революции",
  author: "Неизвестен",
  year: 1919,
  theme: "революция",
  period: "1920-е",
  keyImages: ["рабочие"],
  imageUrl: "https://www.moscowbooks.ru/image/ap/t1/331/331680/331680.jpg",
  annotation: "Плакат подчёркивает центральную роль рабочего класса как ведущей силы революционных изменений."
},
{
  id: 35,
  title: "Вперёд на защиту революции!",
  author: "Неизвестен",
  year: 1919,
  theme: "гражданская война",
  period: "1920-е",
  keyImages: ["солдат"],
  imageUrl: "https://artchive.ru/res/media/img/oy1200/work/a93/581700@2x.jpg",
  annotation: "Плакат призывает к активной защите революции от врагов."
},
{
  id: 36,
  title: "За советскую Россию!",
  author: "Неизвестен",
  year: 1920,
  theme: "гражданская война",
  period: "1920-е",
  keyImages: ["армия"],
  imageUrl: "https://propagandahistory.ru/pics/2018/06/1528204637_7e6f.jpg",
  annotation: "Плакат подчёркивает патриотический аспект поддержки советской Республики."
},
{
  id: 37,
  title: "Смерть белогвардейцам!",
  author: "Неизвестен",
  year: 1919,
  theme: "гражданская война",
  period: "1920-е",
  keyImages: ["враг"],
  imageUrl: "https://i.pinimg.com/736x/0c/5c/cd/0c5ccdfa3312b5439e32b3d9c31771e8.jpg",
  annotation: "Антибелогвардейская пропаганда: образ белых как абсолютного врага, подлежащего уничтожению."
},
{
  id: 38,
  title: "Фашизм — враг человечества",
  author: "Неизвестен",
  year: 1942,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["враг"],
  imageUrl: "https://www.prlib.ru/sites/default/files/book_preview/4bcf14dc-9eb8-42dc-951f-d1cdd69367cc/213874_doc1_9F24AC9D-6F64-41C1-98A8-DB896E16E950.jpg",
  annotation: "Плакат представляет фашизм как всеобщую угрозу, противостоять которой должны все народы."
},
{
  id: 39,
  title: "За победу!",
  author: "Неизвестен",
  year: 1945,
  theme: "великая отечественная война",
  period: "1940-е",
  keyImages: ["армия"],
  imageUrl: "https://armedman.ru/wp-content/uploads/2015/02/Vpered-K-polnoy-pobede.jpg",
  annotation: "Победный лозунг: финальный плакат, подводящий итог борьбы и фиксирующий её триумф."
},
{
  id: 40,
  title: "Красная армия защищает границы СССР",
  author: "Неизвестен",
  year: 1939,
  theme: "советско‑финская война",
  period: "1930-е",
  keyImages: ["солдат"],
  imageUrl: "https://i.pinimg.com/736x/07/f3/03/07f303eac9aaa8fdb72a23e21597d7dd.jpg",
  annotation: "Плакат мобилизует на поддержку военной операции на северных границах, акцентируя защиту родины от внешних угроз."
},
{
  id: 41,
  title: "На страже северных рубежей",
  author: "Неизвестен",
  year: 1939,
  theme: "советско‑финская война",
  period: "1930-е",
  keyImages: ["армия"],
  imageUrl: "https://www.plakat-cccp.ru/filelibrary/administrator_/vov_/plakat/155/711/photomixSmoll_2.jpg",
  annotation: "Образ солидарности армии и народа: Красная армия изображена как опора безопасности северной части СССР."
},
{
  id: 42,
  title: "За землю Советской Карелии!",
  author: "Неизвестен",
  year: 1944,
  theme: "советско‑финская война",
  period: "1940-е",
  keyImages: ["солдат", "карта"],
  imageUrl: "https://ursa-tm.ru/forum/uploads/monthly_2025_02/large.photo_2025-02-13_13-29-12.jpg.efc67243450473eab1d9a796c8cfe202.jpg",
  annotation: "Плакат связывает военные действия с территорией Карелии, формируя ощущение борьбы за «наш» край."
},
{
  id: 43,
  title: "Против империалистической войны!",
  author: "Неизвестен",
  year: 1950,
  theme: "холодная война",
  period: "1950-е",
  keyImages: ["враг", "мировой конфликт"],
  imageUrl: "https://storage08.litfund.ru/images/lots/577s2/577s2-064-EK70-36-Y4184604.jpg",
  annotation: "Плакат пропагандирует мирное сосуществование и противостоит «империалистической» угрозе, визуализируя глобальный конфликт."
},
{
  id: 44,
  title: "Мирное сосуществование — путь к миру",
  author: "Неизвестен",
  year: 1960,
  theme: "холодная война",
  period: "1960-е",
  keyImages: ["мировой порядок", "дети"],
  imageUrl: "https://img.vz.ru/upimg/614/614247.jpg",
  annotation: "Образы детей и единого мира подчёркивают идею «мирного сосуществования» как альтернативы военной конфронтации."
},
{
  id: 45,
  title: "За ядерный контроль и мир",
  author: "Неизвестен",
  year: 1963,
  theme: "холодная война",
  period: "1960-е",
  keyImages: ["мировой порядок"],
  imageUrl: "https://blog.skillbox.by/wp-content/uploads/design/mirny-atom-v-grafike/c6abb84c6648466aae17c25451334e5b.webp",
  annotation: "Плакат связывает идею разоружения и контроля над ядерным оружием с задачей сохранения мира на планете."
}
];
// ======================
// STATE
// ======================
let selectedForCompare = []; // максимум 2

// ======================
// DOM
// ======================
const gridEl = document.getElementById("posters-grid");
const themeFilterEl = document.getElementById("theme-filter");
const periodFilterEl = document.getElementById("period-filter");
const imageFilterEl = document.getElementById("image-filter");
const resultsInfoEl = document.getElementById("results-info");

const compareCardsEl = document.getElementById("compare-cards");
const compareNotesEl = document.getElementById("compare-notes");
const compareStatusEl = document.getElementById("compare-status");

const resetFiltersBtn = document.getElementById("reset-filters");
const randomCompareBtn = document.getElementById("random-compare");
const clearCompareBtn = document.getElementById("clear-compare");

const overlayBtn = document.getElementById("overlay-btn");
const overlayPanel = document.getElementById("overlay-panel");
const overlayClose = document.getElementById("overlay-close");
const overlayImgA = document.getElementById("overlay-img-a");
const overlayImgB = document.getElementById("overlay-img-b");
const overlayRange = document.getElementById("overlay-range");
const overlayValue = document.getElementById("overlay-value");

const modalEl = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalTitleEl = document.getElementById("modal-title");
const modalImgEl = document.getElementById("modal-image");
const modalMetaEl = document.getElementById("modal-meta");
const modalAnnotationEl = document.getElementById("modal-annotation");

const toastEl = document.getElementById("toast");
let toastTimer = null;

// ======================
// TOAST
// ======================
function toast(msg) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.add("hidden"), 2200);
}

// ======================
// HELPERS (analysis templates)
// ======================
function intersect(arrA = [], arrB = []) {
  const setB = new Set(arrB);
  return arrA.filter(x => setB.has(x));
}
function unique(arr = []) {
  return [...new Set(arr)];
}
function decadeHint(period) {
  if (!period) return "";
  if (period.includes("1920")) return "авангардные решения, агитационная графика, конструктивистская динамика";
  if (period.includes("1930")) return "укрепление соцреализма, героизация труда, монументальность";
  if (period.includes("1940")) return "мобилизационный тон, образ врага, предельная выразительность";
  if (period.includes("1950")) return "послевоенная нормализация, оптимизм, идеализированный быт/труд";
  if (period.includes("1960")) return "оттепельные интонации, гуманизация образов, интерес к науке и будущему";
  return "";
}
function themeHint(theme) {
  const map = {
    "индустриализация": "риторика модернизации: техника как знак прогресса, дисциплина и коллектив",
    "война": "экстренная убеждающая коммуникация: призыв, мобилизация, поляризация «свой/чужой»",
    "космос": "образ будущего и научного прорыва: героика освоения, вера в технологический рывок",
    "мир": "гуманистический регистр: единство, восстановление, надежда",
    "культура": "репрезентация просвещения: культура как идеологически значимый ресурс",
    "быт": "нормативная модель повседневности: семья, здоровье, трудовая дисциплина",
    "пропаганда": "прямой идеологический месседж: лозунг, символы власти, типовые герои"
  };
  return map[theme] || "";
}
function imageArchetypeHint(keyImages = []) {
  const set = new Set(keyImages);
  const hints = [];
  if (set.has("рабочий")) hints.push("фигура рабочего кодирует «созидающую силу» и право на историческую субъектность");
  if (set.has("колхозница") || set.has("крестьянка")) hints.push("женский сельский образ связывает тему труда с идеей «корней» и коллективного порядка");
  if (set.has("солдат")) hints.push("солдат выступает как гарант безопасности и легитимной силы государства");
  if (set.has("враг")) hints.push("образ врага строится через контраст и дегуманизацию, усиливая эффект мобилизации");
  if (set.has("мать")) hints.push("материнская фигура вводит моральный аргумент и защитный пафос");
  if (set.has("ребенок")) hints.push("ребёнок часто выступает символом будущего и оправданием настоящих усилий");
  if (set.has("космонавт")) hints.push("космонавт — синтез героя и учёного, маркер эпохи технологического оптимизма");
  if (set.has("техника")) hints.push("техника работает как эмблема модернизации и «правильного» вектора развития");
  return hints;
}
function notesToHtml(text){
  return text
    .split("\n\n")
    .map(p => `<p>${p}</p>`)
    .join("");
}

// ======================
// FILTERS INIT
// ======================
function fillSelectOptions(selectEl, values) {
  const existing = new Set([...selectEl.querySelectorAll("option")].map(o => o.value));
  values.forEach(v => {
    if (existing.has(v)) return;
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    selectEl.appendChild(opt);
  });
}

function initFilters() {
  const themes = unique(postersData.map(p => p.theme)).sort();
  const periods = unique(postersData.map(p => p.period)).sort();
  const images = unique(postersData.flatMap(p => p.keyImages)).sort();

  fillSelectOptions(themeFilterEl, themes);
  fillSelectOptions(periodFilterEl, periods);
  fillSelectOptions(imageFilterEl, images);
}

// ======================
// FILTER LOGIC
// ======================
function getFilteredPosters() {
  const theme = themeFilterEl.value;
  const period = periodFilterEl.value;
  const image = imageFilterEl.value;

  return postersData.filter(p => {
    const okTheme = theme === "all" || p.theme === theme;
    const okPeriod = period === "all" || p.period === period;
    const okImage = image === "all" || (p.keyImages || []).includes(image);
    return okTheme && okPeriod && okImage;
  });
}

// ======================
// RENDER
// ======================
function renderPosters(list) {
  gridEl.innerHTML = "";

  resultsInfoEl.textContent = `Показано: ${list.length} из ${postersData.length}`;

  list.forEach(poster => {
    const card = document.createElement("article");
    card.className = "poster-card";

    const thumb = document.createElement("div");
    thumb.className = "poster-thumb";

    const img = document.createElement("img");
    img.src = poster.imageUrl;
    img.alt = poster.title;
    img.loading = "lazy";
    img.decoding = "async";
    img.onerror = () => {
      img.src = "https://via.placeholder.com/900x700?text=Image+not+available";
      img.classList.add("img-fallback");
    };

    thumb.appendChild(img);

    const body = document.createElement("div");
    body.className = "poster-body";

    const title = document.createElement("h3");
    title.className = "poster-title";
    title.textContent = poster.title;

    const meta = document.createElement("div");
    meta.className = "poster-meta";
    meta.textContent = `${poster.author} · ${poster.year} · ${poster.period}`;

    const tags = document.createElement("div");
    tags.className = "tags";

    const tTheme = document.createElement("span");
    tTheme.className = "tag";
    tTheme.textContent = `Тема: ${poster.theme}`;

    const tPeriod = document.createElement("span");
    tPeriod.className = "tag";
    tPeriod.textContent = `Период: ${poster.period}`;

    tags.appendChild(tTheme);
    tags.appendChild(tPeriod);

    (poster.keyImages || []).forEach(k => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = `Образ: ${k}`;
      tags.appendChild(tag);
    });

    const actions = document.createElement("div");
    actions.className = "poster-actions";

    const checkWrap = document.createElement("label");
    checkWrap.className = "compare-check";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = selectedForCompare.some(x => x.id === poster.id);
    check.addEventListener("change", () => togglePosterForCompare(poster, check));

    const checkText = document.createElement("span");
    checkText.textContent = "Выбрать для сравнения";

    checkWrap.appendChild(check);
    checkWrap.appendChild(checkText);

    const moreBtn = document.createElement("button");
    moreBtn.className = "btn btn-secondary";
    moreBtn.type = "button";
    moreBtn.innerHTML = `<i class="fa-solid fa-circle-info"></i> Аннотация`;
    moreBtn.addEventListener("click", () => showAnnotation(poster));

    actions.appendChild(checkWrap);
    actions.appendChild(moreBtn);

    body.appendChild(title);
    body.appendChild(meta);
    body.appendChild(tags);
    body.appendChild(actions);

    card.appendChild(thumb);
    card.appendChild(body);

    gridEl.appendChild(card);
  });
}

// ======================
// COMPARE
// ======================
function ensureMaxTwoSelected() {
  if (selectedForCompare.length <= 2) return;
  // снимаем самый ранний выбор
  selectedForCompare.shift();
  // перерендерим чекбоксы корректно
  renderPosters(getFilteredPosters());
}

function togglePosterForCompare(poster, checkboxEl) {
  const exists = selectedForCompare.some(p => p.id === poster.id);

  if (exists) {
    selectedForCompare = selectedForCompare.filter(p => p.id !== poster.id);
  } else {
    selectedForCompare.push(poster);
    ensureMaxTwoSelected();
    if (selectedForCompare.length > 2 && checkboxEl) checkboxEl.checked = false;
  }

  updateCompareSection();

  // Если overlay открыт и выбор стал не 2 — закрываем, чтобы не зависло
  const isOverlayOpen = overlayPanel && !overlayPanel.classList.contains("hidden");
  if (isOverlayOpen && selectedForCompare.length !== 2) closeOverlayMode();
}

function updateCompareSection() {
  compareStatusEl.textContent = `Выбрано для сравнения: ${selectedForCompare.length}/2`;

  compareCardsEl.innerHTML = "";
  selectedForCompare.forEach(p => {
    const box = document.createElement("div");
    box.className = "compare-mini";

    const img = document.createElement("img");
    img.src = p.imageUrl;
    img.alt = p.title;
    img.loading = "lazy";
    img.decoding = "async";
    img.onerror = () => {
      img.src = "https://via.placeholder.com/900x700?text=Image+not+available";
      img.classList.add("img-fallback");
    };

    const body = document.createElement("div");
    body.className = "mini-body";

    const t = document.createElement("h4");
    t.className = "mini-title";
    t.textContent = p.title;

    const m = document.createElement("div");
    m.className = "mini-meta";
    m.textContent = `${p.author} · ${p.year} · ${p.theme} · ${p.period}`;

    body.appendChild(t);
    body.appendChild(m);

    box.appendChild(img);
    box.appendChild(body);

    compareCardsEl.appendChild(box);
  });

  const notes = generateComparisonNotes();
  compareNotesEl.innerHTML = notesToHtml(notes);

  // Overlay button enable/disable
  overlayBtn.disabled = (selectedForCompare.length !== 2);
}

function generateComparisonNotes() {
  if (selectedForCompare.length !== 2) {
    return "Выберите два плаката для аналитического сравнения.";
  }

  const [a, b] = selectedForCompare;
  const commonImages = intersect(a.keyImages, b.keyImages);
  const allImages = unique([...(a.keyImages || []), ...(b.keyImages || [])]);

  const lines = [];

  lines.push(`Сравнение: «${a.title}» (${a.year}, ${a.author}) и «${b.title}» (${b.year}, ${b.author}).`);

  if (a.theme === b.theme) {
    lines.push(`Оба плаката работают в теме «${a.theme}»: ${themeHint(a.theme) || "ключевая задача — убеждение через образ и лозунг."}`);
  } else {
    lines.push(`Темы различаются: «${a.theme}» vs «${b.theme}». Это задаёт разные типы убеждающей риторики:`);
    if (themeHint(a.theme)) lines.push(`— ${a.theme}: ${themeHint(a.theme)}.`);
    if (themeHint(b.theme)) lines.push(`— ${b.theme}: ${themeHint(b.theme)}.`);
    lines.push("На уровне визуального языка это обычно влияет на степень императивности, тип героя и набор символов.");
  }

  if (a.period === b.period) {
    lines.push(`Оба относятся к периоду ${a.period}. Вероятная стилистическая рамка: ${decadeHint(a.period) || "единый идеологический и художественный контекст."}`);
  } else {
    lines.push(`Периоды различаются: ${a.period} и ${b.period}. Меняются нормы репрезентации героя и допустимые художественные приёмы.`);
    const ha = decadeHint(a.period);
    const hb = decadeHint(b.period);
    if (ha) lines.push(`— Для ${a.period}: ${ha}.`);
    if (hb) lines.push(`— Для ${b.period}: ${hb}.`);
  }

  if (commonImages.length) {
    lines.push(`Общий набор образов: ${commonImages.join(", ")} — это создаёт общую семантическую ось сравнения.`);
  } else {
    lines.push(`Общие образы не совпадают (уникальные ключи: ${allImages.join(", ")}), поэтому сравнение строится по идеологической функции, а не по одному типажу.`);
  }

  const aArche = imageArchetypeHint(a.keyImages);
  const bArche = imageArchetypeHint(b.keyImages);
  if (aArche.length) lines.push(`Плакат A: ${aArche[0]}${aArche[1] ? "; " + aArche[1] : ""}.`);
  if (bArche.length) lines.push(`Плакат B: ${bArche[0]}${bArche[1] ? "; " + bArche[1] : ""}.`);

  lines.push("Композиция: проверьте, доминирует ли центрированная фигура героя, диагональ движения или монтажное столкновение образов — это ключ к «ритму» плаката.");
  lines.push("Цветовая гамма: отметьте доминирующие 2–3 цвета и их функцию — красный как импульс/приказ, чёрный как угроза, синий как рациональность/будущее, охры как «земля/труд/быт».");
  lines.push("Лица и типаж: сравните степень идеализации (соцреалистическая «норма») и психологизацию (эмоция, взгляд). Это показывает, «приказывают» или «убеждают через сочувствие».");

  lines.push("Вывод: описывайте сходства и различия через три оси — (1) идеологическая функция темы, (2) нормы периода, (3) типаж и композиционная динамика.");

  return lines.join("\n\n");
}

// ======================
// OVERLAY MODE
// ======================
function openOverlayMode() {
  if (selectedForCompare.length !== 2) {
    toast("Для наложения выберите ровно два плаката.");
    return;
  }
  const [a, b] = selectedForCompare;

  overlayImgA.src = a.imageUrl;
  overlayImgB.src = b.imageUrl;

  overlayRange.value = 50;
  overlayImgB.style.opacity = "0.5";
  overlayValue.textContent = "50%";

  overlayPanel.classList.remove("hidden");
  overlayPanel.setAttribute("aria-hidden", "false");
  overlayPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeOverlayMode() {
  overlayPanel.classList.add("hidden");
  overlayPanel.setAttribute("aria-hidden", "true");
}

overlayBtn.addEventListener("click", openOverlayMode);
overlayClose.addEventListener("click", closeOverlayMode);
overlayRange.addEventListener("input", (e) => {
  const v = Number(e.target.value);
  overlayImgB.style.opacity = String(v / 100);
  overlayValue.textContent = `${v}%`;
});

// ======================
// MODAL
// ======================
function showAnnotation(poster) {
  modalTitleEl.textContent = poster.title;
  modalImgEl.src = poster.imageUrl;
  modalImgEl.onerror = () => {
    modalImgEl.src = "https://via.placeholder.com/900x700?text=Image+not+available";
    modalImgEl.classList.add("img-fallback");
  };

  modalMetaEl.innerHTML = `
    <div><b>Автор:</b> ${poster.author}</div>
    <div><b>Год:</b> ${poster.year}</div>
    <div><b>Тема:</b> ${poster.theme}</div>
    <div><b>Период:</b> ${poster.period}</div>
    <div><b>Образы:</b> ${(poster.keyImages || []).join(", ") || "—"}</div>
  `;
  modalAnnotationEl.textContent = poster.annotation || "Аннотация не указана.";

  modalEl.classList.remove("hidden");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalEl.classList.add("hidden");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeModal);
modalEl.addEventListener("click", (e) => {
  if (e.target === modalEl) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (!modalEl.classList.contains("hidden") && e.key === "Escape") closeModal();
});

// ======================
// UI EVENTS
// ======================
function refresh() {
  renderPosters(getFilteredPosters());
  updateCompareSection();
}

themeFilterEl.addEventListener("change", refresh);
periodFilterEl.addEventListener("change", refresh);
imageFilterEl.addEventListener("change", refresh);

resetFiltersBtn.addEventListener("click", () => {
  themeFilterEl.value = "all";
  periodFilterEl.value = "all";
  imageFilterEl.value = "all";
  toast("Фильтры сброшены.");
  refresh();
});

clearCompareBtn.addEventListener("click", () => {
  selectedForCompare = [];
  toast("Сравнение очищено.");
  refresh();
  closeOverlayMode();
});

randomCompareBtn.addEventListener("click", () => {
  const pool = [...postersData].sort(() => Math.random() - 0.5);
  selectedForCompare = [pool[0], pool[1]];
  toast("Выбраны два плаката для демонстрации сравнения.");
  refresh();
});



// ======================
// INIT
// ======================
initFilters();
refresh();
