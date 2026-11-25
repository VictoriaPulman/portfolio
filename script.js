/* =============================================================================
   ДАННЫЕ САЙТА — редактируем ТОЛЬКО этот файл
   ============================================================================= */

/* -----------------------------------------------------------------------------
   1) НАВЫКИ (const skills)
   -----------------------------------------------------------------------------
   Пошаговая инструкция:
   1. Найди ниже блок const skills = [ ... ].
   2. Чтобы добавить навык — скопируй любую строку вида { name: "...", percent: 80 }
      и вставь её на новую строку внутри квадратных скобок.
   3. В кавычках укажи название навыка, а в percent — число от 0 до 100 (без знака %).
   4. Между элементами обязательна запятая. После последнего элемента запятая не нужна.
   5. Чтобы изменить порядок — просто поменяй строки местами: они выводятся сверху вниз.
   6. Для фото/картинок этот массив не используется, путь указывать не нужно.
------------------------------------------------------------------------------ */
const skills = [
  { name: "Power BI и визуализация данных", percent: 80 },
  { name: "UX-проектирование дашбордов", percent: 80 },
  { name: "SQL (JOIN, CTE, агрегация, оконные функции)", percent: 75 },
  { name: "Excel / Google Таблицы (сводные, формулы)", percent: 75 },
  { name: "Продуктовые метрики и A/B-тесты", percent: 70 },
  { name: "Python (pandas, seaborn, matplotlib)", percent: 60 }
];

/* -----------------------------------------------------------------------------
   2) ПРОЕКТЫ (const projects)
   -----------------------------------------------------------------------------
   Пошаговая инструкция:
   1. Найди ниже блок const projects = [ ... ].
   2. Чтобы добавить работу — скопируй целиком один блок { ... } вместе с фигурными
      скобками и вставь его на новую строку внутри квадратных скобок.
   3. Заполни поля:
      - title      — название работы;
      - category   — одна из категорий: "SQL / Python", "BI и дашборды", "UX-дизайн"
                     (именно она используется в фильтрах);
      - image      — путь к скриншоту, например "assets/projects/work4.png";
      - url        — ссылка на GitHub или другой источник;
      - did        — коротко «что делала» для карточки;
      - why        — коротко «для чего» для карточки;
      - tools      — инструменты через запятую (показывается в модальном окне);
      - conclusion — итог / вывод (показывается в модальном окне).
   4. Путь к картинке: положи файл в папку assets/projects/ и напиши
      "assets/projects/ИМЯ_ФАЙЛА.png" (поддерживаются jpg, png, webp).
      Если файл ещё не загружен — автоматически появится SVG-заглушка с подсказкой.
   5. Порядок вывода = порядок блоков в массиве: первый блок — самая левая карточка.
      Чтобы поменять местами — вырежи блок и вставь в нужное место.
   6. Связь с фильтрами идёт по точному совпадению строки category.
------------------------------------------------------------------------------ */
const projects = [
  {
    title: "Финансовая и продуктовая аналитика продаж селлера на Wildberries (Power BI)",
    category: "BI и дашборды",
    image: "assets/projects/work1.png",
    url: "https://github.com/VictoriaPulman/projects#1-финансовая-и-продуктовая-аналитика-продаж-на-wildberries-power-bi",
    did: "Объединила PostgreSQL и Google Таблицы в Power Query, построила модель «снежинка» (9 таблиц, 0 двунаправленных связей), написала 11 мер на DAX (SUMX, DATEADD) и собрала многостраничный дашборд в фирменном стиле WB.",
    why: "Заменить ручные сводки в Excel и дать руководителю инструмент одного окна для контроля выручки, комиссии, логистики, возвратов и динамики по артикулам и регионам.",
    tools: "Power BI, Power Query, DAX, PostgreSQL, Google Sheets",
    conclusion: "На примере среза за март 2022 (выручка 6,30 млн ₽, 20 278 заказов): комиссия WB составила 10,85% (682,7 тыс. ₽), логистика — 1,33 млн ₽, валовый убыток -7,42 млн ₽ (рентабельность -117,78%) из-за продаж ниже себестоимости. Выявлены лидеры роста (supplierArticle 87: +132,4 тыс. ₽), падения (supplierArticle 430: -176,8 тыс. ₽) и ключевой регион продаж — ЦФО (2,03 млн ₽)."
  },
  {
    title: "Продуктовый и операционный анализ EdTech-платформы менторства (SQL + Python + Power BI)",
    category: "SQL / Python",
    image: "assets/projects/work2.png",
    url: "https://github.com/VictoriaPulman/Diplom#Анализ-операционной-эффективности-образовательной-платформы",
    did: "Написала SQL-запросы с CTE и оконными функциями в DBeaver, провела EDA и проверку 4 продуктовых гипотез на Python (pandas, seaborn), построила модель прогноза найма и 5-страничный дашборд в Power BI с What-If симулятором.",
    why: "Выявить точки оттока учеников и наставников, оценить утилизацию базы менторов и рассчитать потребность в найме экспертов при росте аудитории.",
    tools: "SQL (PostgreSQL, DBeaver), Python (pandas, matplotlib, seaborn), Power BI (DAX, Power Query, What-If)",
    conclusion: "Из 2 509 учеников 26,4% (662 чел.) ушли на этапе онбординга без попыток бронирования (0 заявок), при этом дефицита менторов нет (4,03 менти на 1 наставника). Медианный цикл возврата на 2-ю сессию — 46 дней у учеников и 25 дней у менторов. Модель показала: повышение утилизации текущей базы с 0,5 до 1,0 сессии в неделю закроет приток 500 активных менти (167,34 сессии/нед.) внутренним резервом без затрат на наём 334 новых экспертов."
  },
  {
    title: "Продуктовый анализ e-commerce: воронка, когортный Retention и проверка гипотез (SQL + Python)",
    category: "SQL / Python",
    image: "assets/projects/work3.png",
    url: "https://github.com/VictoriaPulman/projects#3-продуктовый-анализ-e-commerce-воронка-когортный-retention-и-проверка-гипотез-sql--python",
    did: "На основе логов кликстрима с Kaggle (датасет Michael Kechinov за декабрь 2019, 3,5 млн событий) написала SQL-запросы (CTE, оконные функции) в DBeaver, построила тепловую карту когортного Retention в Python (pandas, seaborn) и проверила гипотезу о влиянии бренда на средний чек (тест Манна-Уитни).",
    why: "Найти узкие места воронки покупок, выявить проблемные бренды с высокой долей отказов из корзины и оценить возвращаемость клиентов.",
    tools: "SQL (PostgreSQL, DBeaver), Python (pandas, seaborn, matplotlib, scipy)",
    conclusion: "Сквозная конверсия в покупку составила 7,16% (25 613 из 357 801 посетителя), при этом 54,2% пользователей удаляют товары из корзины (антилидер — masura с долей удалений 73,71%). Недельный Retention стабилизируется на уровне 4,5–6,2% в первые 4 недели. Тест Манна-Уитни подтвердил статистически значимый рост медианного чека для брендовых заказов: $27,93 против $18,33 (+52%, p < 0,001)."
  },
  {
    title: "Операционный дашборд продаж, оборачиваемости и контроля складских остатков (Excel)",
    category: "Excel",
    image: "assets/projects/work4.png",
    url: "https://github.com/VictoriaPulman/projects#4-операционный-дашборд-продаж-оборачиваемости-и-контроля-складских-остатков-excel",
    did: "Обработала 73 100 записей ритейла в Power Query и Excel, добавила расчёт чистой выручки, потерь на скидках и оборачиваемости в днях, классифицировала статусы остатков формулами (ЕСЛИ) и собрала интерактивный дашборд со сводными таблицами, комбинированной диаграммой и срезами.",
    why: "Дать отделу закупок и коммерческому директору инструмент контроля товарных запасов для предотвращения упущенной выручки из-за дефицита (Out-of-Stock) и заморозки капитала в неликвидах.",
    tools: "Excel (Power Query, сводные таблицы, логические формулы, сводные диаграммы, срезы)",
    conclusion: "За анализируемый период совокупная выручка составила $494,97 млн при объёме продаж 9,98 млн единиц. Лидеры по выручке — Furniture ($100,23 млн) и Groceries ($99,95 млн). Диагностика склада выявила критическую зону риска: 66% позиций (48 412 записей) находятся в зоне дефицита (< 3 дней запаса), 30% (22 029) — в норме, и лишь 4% (2 659) — в затоваривании (> 30 дней)."
  },
  {
    title: "Комплексная аналитика продаж, ABC-анализ ассортимента и оценка менеджеров (Power BI)",
    category: "BI и дашборды",
    image: "assets/projects/work5.png",
    url: "https://github.com/VictoriaPulman/projects#2-комплексная-аналитика-продаж-abc-анализ-ассортимента-и-оценка-менеджеров-power-bi",
    did: "Очистила справочник покупателей от дублей в Power Query, спроектировала модель «снежинка», написала меры DAX (включая ABC-анализ) и реализовала динамический переключатель метрик (Switch) для перестройки всех графиков одним кликом.",
    why: "Дать руководителю отдела продаж инструмент для оценки рентабельности, контроля логистических затрат по категориям товаров и выявления менеджеров, заключающих убыточные сделки.",
    tools: "Power BI, Power Query, DAX (Switch, ABC-анализ), Data Modeling",
    conclusion: "За январь–апрель 2022 выручка составила 1,10 млн ₽, прибыль — 253,78 тыс. ₽ (рентабельность 23%, АКБ — 173 клиента, ср. чек — 1,93 тыс. ₽), пик пришёлся на март (0,36 млн ₽). Корпоративный сегмент приносит 70,78% выручки. ABC-анализ показал: группа A даёт ~70% выручки (771,9 тыс. ₽) при минимальной логистике (930), а группа C забирает больше половины логистических затрат (2 370 из 4 405). Выявлено 277 убыточных заказов на сумму -51,6 тыс. ₽."
  }

];

/* -----------------------------------------------------------------------------
   3) СЕРТИФИКАТЫ (const certificates)
   -----------------------------------------------------------------------------
   Пошаговая инструкция:
   1. Найди ниже блок const certificates = [ ... ].
   2. Чтобы добавить сертификат — скопируй любой блок { ... } и вставь его
      на новую строку внутри квадратных скобок.
   3. Заполни поля:
      - title     — название курса;
      - badge     — направление: "BI", "SQL", "Аналитика" или "UI/UX";
      - platform  — платформа (Google, Coursera и т.д.);
      - year      — год выпуска;
      - credentialId — номер сертификата (Credential ID);
      - image     — путь к скану, например "assets/certificates/cert3.jpg";
      - verifyUrl — ссылка для проверки подлинности.
   4. Путь к картинке: положи файл в папку assets/certificates/ и укажи
      "assets/certificates/ИМЯ_ФАЙЛА.jpg". Пока файла нет — появится аккуратная
      SVG-заглушка с текстом о том, куда именно его положить.
   5. Порядок вывода = порядок блоков в массиве: первый — самый важный,
      затем дополнительные. Просто меняй строки местами.
   6. Запятые между блоками обязательны, после последнего — не нужна.
------------------------------------------------------------------------------ */
const certificates = [
  {
    title: "Профессия «Аналитик данных» (в процессе обучения)",
    badge: "Data Analytics",
    platform: "Eduson Academy",
    year: "2026",
    credentialId: "Дипломный проект защищён / в процессе",
    image: "",
    verifyUrl: "https://eduson.academy/data-analyst"
  },
  {
    title: "SQL для анализа данных: практический тренажёр",
    badge: "SQL",
    platform: "Simulative",
    year: "2026",
    credentialId: "ID_SIMULATIVE",
    image: "assets/certificates/cert2.jpg",
    verifyUrl: "https://simulative.ru"
  },
  {
    title: "Python for Data Analysis",
    badge: "Python",
    platform: "Sololearn",
    year: "2026",
    credentialId: "CC-9AM8NFJA",
    image: "assets/certificates/cert3.jpg",
    verifyUrl: "https://www.sololearn.com/certificates/CC-9AM8NFJA"
  },
    {
    title: "SQL for Data Analysis",
    badge: "SQL",
    platform: "Sololearn",
    year: "2026",
    credentialId: "CC-JNDSOGXE",
    image: "assets/certificates/cert4.jpg",
    verifyUrl: "https://www.sololearn.com/certificates/CC-JNDSOGXE"
  },
  {
    title: "Foundations of User Experience (UX) Design",
    badge: "UX",
    platform: "Google (Coursera)",
    year: "2026",
    credentialId: "J646SB1A3VO0",
    image: "assets/certificates/cert1.png",
    verifyUrl: "https://www.coursera.org/verify/J646SB1A3VO0"
  }
];


/* =============================================================================
   SVG-ЗАГЛУШКА ДЛЯ ВСЕХ ИЗОБРАЖЕНИЙ
   ============================================================================= */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Возвращает data:image/svg+xml строку строгой нейтральной заглушки.
 * Светло-голубой фон, тонкая пунктирная рамка, текст-подсказка.
 */
function makePlaceholder(message) {
  const safe = escapeHtml(message || "assets/");
  const lines = safe.split(" ").reduce(function (acc, word) {
    const last = acc.length - 1;
    if (last >= 0 && (acc[last] + " " + word).length <= 42) {
      acc[last] += " " + word;
    } else {
      acc.push(word);
    }
    return acc;
  }, []);

  const textSvg = lines
    .map(function (line, i) {
      return '<text x="400" y="' + (232 + i * 19) + '" text-anchor="middle" ' +
        'font-family="Inter, Arial, sans-serif" font-size="13" fill="#475569">' +
        line + "</text>";
    })
    .join("");

  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="460" viewBox="0 0 800 460">' +
      '<rect width="800" height="460" fill="#EFF6FF"/>' +
      '<rect x="18" y="18" width="764" height="424" rx="12" fill="none" ' +
        'stroke="#93C5FD" stroke-width="2" stroke-dasharray="8 6"/>' +
      '<text x="400" y="204" text-anchor="middle" font-family="Inter, Arial, sans-serif" ' +
        'font-size="15" font-weight="600" fill="#1D4ED8">Файл ещё не загружен</text>' +
      textSvg +
      '<text x="400" y="292" text-anchor="middle" font-family="Inter, Arial, sans-serif" ' +
        'font-size="11" fill="#94A3B8">Положите изображение в указанную папку assets/</text>' +
    "</svg>";

  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/** Общий onerror-обработчик для всех картинок на странице. */
function handleImageError(img, hint) {
  if (!img || img.dataset.fallbackApplied === "1") return;
  img.dataset.fallbackApplied = "1";
  img.src = makePlaceholder(hint);
  img.alt = "Заглушка: " + hint;
}

/* =============================================================================
   РЕНДЕР НАВЫКОВ
   ============================================================================= */
function renderSkills() {
  const host = document.getElementById("skills-list");
  if (!host) return;

  host.innerHTML = skills
    .map(function (skill) {
      const percent = Math.max(0, Math.min(100, Number(skill.percent) || 0));
      return (
        '<div class="skill-item">' +
          '<div class="skill-head">' +
            '<span class="skill-name">' + escapeHtml(skill.name) + "</span>" +
            '<span class="skill-percent">' + percent + "%</span>" +
          "</div>" +
          '<div class="skill-bar">' +
            '<div class="skill-fill" style="width: ' + percent + '%;"></div>' +
          "</div>" +
        "</div>"
      );
    })
    .join("");
}

/* =============================================================================
   СОСТОЯНИЕ ФИЛЬТРОВ И СЛАЙДЕРОВ
   ============================================================================= */
const PROJECT_CATEGORIES = ["Все", "SQL / Python", "BI и дашборды", "Excel", "UX-дизайн"];

let activeProjectFilter = "Все";
let visibleProjects = [];
let visibleCertificates = certificates.slice();
let currentProjectIndex = 0;
let currentCertificateIndex = 0;

/** Возвращает отфильтрованный список проектов. */
function getFilteredProjects() {
  if (activeProjectFilter === "Все") return projects.slice();
  return projects.filter(function (p) {
    return p.category === activeProjectFilter;
  });
}

/* =============================================================================
   РЕНДЕР ПРОЕКТОВ И ФИЛЬТРОВ
   ============================================================================= */
function renderProjectFilters() {
  const host = document.getElementById("project-filters");
  if (!host) return;

  host.innerHTML = PROJECT_CATEGORIES.map(function (cat) {
    const active = cat === activeProjectFilter ? " active" : "";
    return (
      '<button type="button" class="filter-btn' + active + '" data-filter="' +
      escapeHtml(cat) + '">' + escapeHtml(cat) + "</button>"
    );
  }).join("");

  host.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      activeProjectFilter = btn.dataset.filter;
      renderProjectFilters();
      renderProjects();
      const track = document.getElementById("projects-track");
      if (track) track.scrollLeft = 0;
    });
  });
}

function projectCardHtml(project, index) {
  return (
    '<article class="project-card" data-index="' + index + '">' +
      '<div class="card-image-wrap">' +
        '<img src="' + escapeHtml(project.image) + '" ' +
          'alt="Скриншот: ' + escapeHtml(project.title) + '" ' +
          'onerror="handleImageError(this, ' +
          JSON.stringify("Скриншот проекта: " + project.image).replace(/"/g, "&quot;") +
          ')" />' +
      "</div>" +
      '<div class="card-content">' +
        '<span class="card-category">' + escapeHtml(project.category) + "</span>" +
        '<h3 class="card-title">' + escapeHtml(project.title) + "</h3>" +
        '<p class="card-line"><strong>Что делала:</strong> ' + escapeHtml(project.did) + "</p>" +
        '<p class="card-line"><strong>Для чего:</strong> ' + escapeHtml(project.why) + "</p>" +
        '<div class="card-action">' +
          '<button type="button" class="btn btn-primary" data-open-project="' + index + '">' +
            "Открыть на весь экран ↗" +
          "</button>" +
        "</div>" +
      "</div>" +
    "</article>"
  );
}

function renderProjects() {
  const track = document.getElementById("projects-track");
  if (!track) return;

  visibleProjects = getFilteredProjects();
  currentProjectIndex = 0;

  if (visibleProjects.length === 0) {
    track.innerHTML =
      '<div class="card" style="padding:20px;color:var(--muted);">' +
      "В этой категории пока нет работ." +
      "</div>";
    return;
  }

  track.innerHTML = visibleProjects.map(projectCardHtml).join("");

  track.querySelectorAll(".project-card").forEach(function (card) {
    card.addEventListener("click", function () {
      openProjectModal(Number(card.dataset.index));
    });
  });
}


/* =============================================================================
   РЕНДЕР СЕРТИФИКАТОВ
   ============================================================================= */
function certificateCardHtml(cert, index) {
  return (
    '<article class="certificate-card" data-index="' + index + '">' +
      '<div class="card-image-wrap">' +
        '<img src="' + escapeHtml(cert.image) + '" ' +
          'alt="Сертификат: ' + escapeHtml(cert.title) + '" ' +
          'onerror="handleImageError(this, ' +
          JSON.stringify("Сертификат: " + cert.image).replace(/"/g, "&quot;") +
          ')" />' +
      "</div>" +
      '<div class="card-content">' +
        '<span class="card-category">' + escapeHtml(cert.badge) + "</span>" +
        '<h3 class="card-title">' + escapeHtml(cert.title) + "</h3>" +
        '<p class="card-line">' + escapeHtml(cert.platform) + " • " + escapeHtml(cert.year) + "</p>" +
        '<p class="cert-id">ID: ' + escapeHtml(cert.credentialId) + "</p>" +
      "</div>" +
    "</article>"
  );
}

function renderCertificates() {
  const track = document.getElementById("certificates-track");
  if (!track) return;

  visibleCertificates = certificates.slice();
  currentCertificateIndex = 0;
  track.innerHTML = visibleCertificates.map(certificateCardHtml).join("");

  track.querySelectorAll(".certificate-card").forEach(function (card) {
    card.addEventListener("click", function () {
      openCertificateModal(Number(card.dataset.index));
    });
  });
}

/* =============================================================================
   МОДАЛЬНОЕ ОКНО ПРОЕКТА
   ============================================================================= */
const projectModal = document.getElementById("project-modal");

function renderProjectModal() {
  const body = document.getElementById("project-modal-body");
  const nav = document.getElementById("project-modal-nav");
  const project = visibleProjects[currentProjectIndex];
  if (!body || !nav || !project) return;

  const total = visibleProjects.length;

  body.innerHTML =
    '<span class="modal-kicker">' + escapeHtml(project.category) + "</span>" +
    '<h2 class="modal-title" id="pm-title">' + escapeHtml(project.title) + "</h2>" +
    '<div class="modal-grid">' +
      '<img class="modal-shot" src="' + escapeHtml(project.image) + '" ' +
        'alt="' + escapeHtml(project.title) + '" ' +
        'onerror="handleImageError(this, ' +
        JSON.stringify("Скриншот проекта: " + project.image).replace(/"/g, "&quot;") +
        ')" />' +
      "<div>" +
        '<div class="modal-section"><h4>Что делала</h4><p>' + escapeHtml(project.did) + "</p></div>" +
        '<div class="modal-section"><h4>Для чего</h4><p>' + escapeHtml(project.why) + "</p></div>" +
        '<div class="modal-section"><h4>Инструменты и выводы</h4><p>' +
          escapeHtml(project.tools) + "<br />" + escapeHtml(project.conclusion) +
        "</p></div>" +
        '<div class="modal-github-wrap">' +
          '<a class="btn btn-github" href="' + escapeHtml(project.url) + '" ' +
            'target="_blank" rel="noopener">Перейти к проекту на GitHub ↗</a>' +
        "</div>" +
      "</div>" +
    "</div>";

  nav.innerHTML =
    '<button type="button" class="btn btn-outline" id="pm-prev"' +
      (total < 2 ? " disabled" : "") + ">← Предыдущий проект</button>" +
    '<span style="font-size:12px;color:var(--muted);">' +
      (currentProjectIndex + 1) + " / " + total +
    "</span>" +
    '<button type="button" class="btn btn-outline" id="pm-next"' +
      (total < 2 ? " disabled" : "") + ">Следующий проект →</button>";

  const prev = document.getElementById("pm-prev");
  const next = document.getElementById("pm-next");
  if (prev) prev.addEventListener("click", function () { stepProject(-1); });
  if (next) next.addEventListener("click", function () { stepProject(1); });
}

function openProjectModal(index) {
  currentProjectIndex = index;
  renderProjectModal();
  openModal(projectModal);
}

function stepProject(direction) {
  if (visibleProjects.length < 2) return;
  currentProjectIndex =
    (currentProjectIndex + direction + visibleProjects.length) % visibleProjects.length;
  renderProjectModal();
}

/* =============================================================================
   МОДАЛЬНОЕ ОКНО СЕРТИФИКАТА
   ============================================================================= */
const certificateModal = document.getElementById("certificate-modal");

function renderCertificateModal() {
  const body = document.getElementById("certificate-modal-body");
  const nav = document.getElementById("certificate-modal-nav");
  const cert = visibleCertificates[currentCertificateIndex];
  if (!body || !nav || !cert) return;

  const total = visibleCertificates.length;

  body.innerHTML =
    '<span class="modal-kicker">' + escapeHtml(cert.badge) + "</span>" +
    '<h2 class="modal-title" id="cm-title">' + escapeHtml(cert.title) + "</h2>" +
    '<img class="modal-shot modal-cert-shot" src="' + escapeHtml(cert.image) + '" ' +
      'alt="Сертификат: ' + escapeHtml(cert.title) + '" ' +
      'onerror="handleImageError(this, ' +
      JSON.stringify("Сертификат: " + cert.image).replace(/"/g, "&quot;") +
      ')" />' +
    '<p class="card-line" style="margin-top:14px;">' +
      escapeHtml(cert.platform) + " • " + escapeHtml(cert.year) +
    "</p>" +
    '<p class="modal-id">Credential ID: <strong>' + escapeHtml(cert.credentialId) + "</strong></p>" +
    '<div class="modal-github-wrap">' +
      '<a class="btn btn-primary" href="' + escapeHtml(cert.verifyUrl) + '" ' +
        'target="_blank" rel="noopener">Проверить подлинность ↗</a>' +
    "</div>";

  nav.innerHTML =
    '<button type="button" class="btn btn-outline" id="cm-prev"' +
      (total < 2 ? " disabled" : "") + ">← Предыдущий</button>" +
    '<span style="font-size:12px;color:var(--muted);">' +
      (currentCertificateIndex + 1) + " / " + total +
    "</span>" +
    '<button type="button" class="btn btn-outline" id="cm-next"' +
      (total < 2 ? " disabled" : "") + ">Следующий →</button>";

  const prev = document.getElementById("cm-prev");
  const next = document.getElementById("cm-next");
  if (prev) prev.addEventListener("click", function () { stepCertificate(-1); });
  if (next) next.addEventListener("click", function () { stepCertificate(1); });
}

function openCertificateModal(index) {
  currentCertificateIndex = index;
  renderCertificateModal();
  openModal(certificateModal);
}

function stepCertificate(direction) {
  if (visibleCertificates.length < 2) return;
  currentCertificateIndex =
    (currentCertificateIndex + direction + visibleCertificates.length) % visibleCertificates.length;
  renderCertificateModal();
}

/* =============================================================================
   УПРАВЛЕНИЕ МОДАЛЬНЫМИ ОКНАМИ
   ============================================================================= */
function openModal(modal) {
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) closeBtn.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) closeModal(overlay);
  });
});

document.querySelectorAll("[data-close-modal]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    closeModal(btn.closest(".modal-overlay"));
  });
});

document.addEventListener("keydown", function (event) {
  const projectOpen = projectModal && projectModal.classList.contains("open");
  const certificateOpen = certificateModal && certificateModal.classList.contains("open");

  if (event.key === "Escape") {
    if (projectOpen) closeModal(projectModal);
    else if (certificateOpen) closeModal(certificateModal);
    return;
  }

  if (event.key === "ArrowLeft") {
    if (projectOpen) stepProject(-1);
    else if (certificateOpen) stepCertificate(-1);
  }

  if (event.key === "ArrowRight") {
    if (projectOpen) stepProject(1);
    else if (certificateOpen) stepCertificate(1);
  }
});

/* =============================================================================
   ПРОКРУТКА СЛАЙДЕРОВ
   ============================================================================= */
function bindScrollButton(buttonId, trackId, direction) {
  const button = document.getElementById(buttonId);
  const track = document.getElementById(trackId);
  if (!button || !track) return;

  button.addEventListener("click", function () {
    const card = track.querySelector(".project-card, .certificate-card");
    const step = card ? card.getBoundingClientRect().width + 20 : 320;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  });
}

/* =============================================================================
   ФОРМА ОБРАТНОЙ СВЯЗИ (mailto:)
   ============================================================================= */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzwKVTGWP5mrShevjirFmc_1bi-kFwNb4SP482tRmPg3w8uze5tmPbl50tC95f_X5-Z/exec";

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Отправка...";

    const payload = {
      name: document.getElementById("cf-name").value.trim(),
      contact: document.getElementById("cf-contact").value.trim(),
      message: document.getElementById("cf-message").value.trim()
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });

      form.reset();
      btn.textContent = "✓ Сообщение отправлено!";
      setTimeout(function () {
        btn.disabled = false;
        btn.textContent = originalText;
      }, 4000);
    } catch (error) {
      btn.disabled = false;
      btn.textContent = originalText;
      alert("Не удалось отправить сообщение. Попробуйте связаться по email или телефону.");
    }
  });
}


/* =============================================================================
   ЗАПУСК
   ============================================================================= */
document.addEventListener("DOMContentLoaded", function () {
  renderSkills();
  renderProjectFilters();
  renderProjects();
  renderCertificates();

  bindScrollButton("projects-prev", "projects-track", -1);
  bindScrollButton("projects-next", "projects-track", 1);
  bindScrollButton("certificates-prev", "certificates-track", -1);
  bindScrollButton("certificates-next", "certificates-track", 1);

  initContactForm();
});
