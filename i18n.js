/* =========================================================
   i18n — English is the source text in the HTML, Italian and Korean live here.
   Switching only swaps text, so the page works without this file too.
   ========================================================= */

(() => {
  "use strict";

  const it = {
    "a11y.skip": "Vai al contenuto",
    "a11y.brand": "Fabio Valentino, torna all'inizio",
    "a11y.nav": "Navigazione principale",
    "a11y.language": "Lingua",
    "a11y.menu": "Apri il menu",
    "a11y.menuClose": "Chiudi il menu",
    "a11y.top": "Torna in alto",
    "a11y.technologies": "Tecnologie",

    "nav.profile": "Profilo",
    "nav.experience": "Esperienza",
    "nav.skills": "Competenze",
    "nav.beyond": "Oltre",
    "nav.education": "Formazione",
    "nav.contact": "Contatti",

    "hero.eyebrow": "Torino, Italia · Disponibile per nuovi progetti",
    "hero.role": "Developer &amp; Data Engineer",
    "hero.lede": "Progetto e sviluppo microservizi, procedure batch e pipeline dati. Dal Java enterprise al cloud, con un debole per i sistemi Linux e le cose fatte bene.",
    "hero.cta.mail": "Scrivimi",
    "hero.cta.timeline": "Guarda il percorso",

    "stats.experience": "Esperienza",
    "stats.years": "&nbsp;anni",
    "stats.focus": "Focus",
    "stats.focus.value": "Programmazione e architettura",
    "stats.stack": "Stack",
    "stats.stack.value": "Python · Node · Rust · Java",

    "profile.kicker": "01 — Profilo",
    "profile.title": "Chi sono",
    "profile.p1": "Sono un developer con oltre <span data-experience-years>15</span> anni di esperienza nella costruzione di software per il settore bancario e industriale. Ho lavorato su tutto il ciclo di vita del software: analisi dei requisiti, redazione di documentazione funzionale, sviluppo backend e frontend, integrazione continua e rapporti con i fornitori.",
    "profile.p2": "Oggi, in Intesa Sanpaolo, mi occupo di microservizi e procedure batch che lavorano su grandi volumi di dati, tra Google Cloud, BigQuery, PostgreSQL e Teradata. Nel tempo ho mantenuto la stessa abitudine: imparare in fretta, scavare a fondo, lasciare il codice un po' più ordinato di come l'ho trovato.",
    "profile.factsAria": "In sintesi",

    "facts.role.label": "Ruolo attuale",
    "facts.role.value": "Developer &amp; Data Engineer",
    "facts.role.sub": "Intesa Sanpaolo · dal 2021",
    "facts.spec.label": "Specialità",
    "facts.spec.value": "Microservizi, batch e big data",
    "facts.spec.sub": "Java, Spring, Python, SQL",
    "facts.passions.label": "Passioni",
    "facts.passions.value": "Linux e self-hosting",
    "facts.passions.sub": "Server personali, automazione, homelab",
    "facts.languages.label": "Lingue",
    "facts.languages.value": "Italiano · Inglese C1 · Coreano ~A1",
    "facts.languages.sub": "Uso professionale quotidiano",
    "facts.online.label": "Online",
    "facts.online.sub": "Progetti personali e profilo professionale",

    "exp.kicker": "02 — Percorso",
    "exp.title": "Esperienza professionale",
    "common.present": "oggi",

    "job1.title": "Developer &amp; Data Engineer",
    "job1.company": "Intesa Sanpaolo · Torino",
    "job1.b1": "Sviluppo di nuovi microservizi e procedure batch.",
    "job1.b2": "Procedure Big Data su grandi volumi transazionali.",
    "job1.b3": "Documentazione funzionale e rapporti con i fornitori.",
    "job1.b4": "Reperibilità notturna e supporto agli ambienti di produzione.",

    "job2.title": "Programmatore",
    "job2.company": "RGI · Torino",
    "job2.b1": "Software batch in Java e backend applicativo.",
    "job2.b2": "Web service con protocolli SOAP e REST.",
    "job2.b3": "Sviluppo frontend in Angular 8 e AngularJS.",
    "job2.b4": "Estrazione e manipolazione dati su Oracle, script Unix.",
    "job2.b5": "Setup e manutenzione della continuous integration su GitLab.",

    "job3.title": "Software Developer",
    "job3.company": "Capgemini · Torino",
    "job3.b1": "Software batch in Java e web service SOAP.",
    "job3.b2": "Frontend e backend in Java e JavaScript.",
    "job3.b3": "Estrazione dati su Oracle, script Unix.",
    "job3.b4": "Coordinamento di un piccolo team.",

    "job4.title": "Software Developer",
    "job4.company": "Betacom, consulente presso RGI · Torino",
    "job4.b1": "Software batch in Java, web service SOAP e REST.",
    "job4.b2": "Frontend e backend in Java e JavaScript.",
    "job4.b3": "Estrazione dati su Oracle e DB2, script Unix.",
    "job4.b4": "Referente tecnico di un piccolo progetto.",

    "job5.title": "Software Developer",
    "job5.company": "SCAI · Torino",
    "job5.b1": "Sviluppo frontend e backend in Java e JavaScript.",

    "job6.title": "Software Developer",
    "job6.company": "SCAI · Torino",
    "job6.b1": "Interfacce grafiche in JavaScript.",
    "job6.b2": "Software frontend e backend in Java e JavaScript.",
    "job6.b3": "Procedure batch in Java.",

    "skills.kicker": "03 — Competenze",
    "skills.title": "Cosa so fare",
    "skills.languages": "Linguaggi",
    "skills.data": "Dati e Cloud",
    "skills.frameworks": "Framework",
    "skills.devops": "DevOps e Tooling",

    "strength.1.title": "Apprendimento continuo",
    "strength.1.body": "Imparo in fretta nuovi linguaggi e ambienti: gran parte di ciò che so l'ho costruita da autodidatta, approfondendo e aggiornandomi sulle tecnologie che uso.",
    "strength.2.title": "Sistemi e infrastruttura",
    "strength.2.body": "Passione per Linux e l'informatica in generale, con ottima padronanza della riga di comando e gestione di server personali nel tempo libero.",
    "strength.3.title": "Lavoro di squadra",
    "strength.3.body": "Esperienza come referente tecnico e coordinatore di piccoli gruppi, abituato al confronto con colleghi e fornitori.",

    "beyond.kicker": "04 — Oltre il lavoro",
    "beyond.title": "Quello che ho imparato da solo",
    "beyond.1.title": "Linguaggi oltre il lavoro",
    "beyond.1.body": "Oltre a Java, ho imparato da solo altri linguaggi e paradigmi — Python, Rust, Node.js e Bash — costruendo strumenti, automazioni e piccoli servizi. Imparo partendo da un problema reale e risolvendolo come si deve.",
    "beyond.2.title": "Linux e reti",
    "beyond.2.body": "Linux è il mio ambiente quotidiano: shell e systemd, container, reverse proxy, DNS, routing, VPN e servizi self-hosted sul mio hardware. Mi interessa capire cosa succede sotto il livello applicativo.",
    "beyond.3.title": "La sicurezza come approccio",
    "beyond.3.body": "Studio sicurezza informatica e la metto in pratica: hardening, privilegio minimo, segmentazione di rete, gestione dei segreti e analisi delle vulnerabilità, con OWASP come riferimento. Guardo ogni sistema chiedendomi come può fallire e chi potrebbe volerlo far fallire.",

    "edu.kicker": "05 — Formazione",
    "edu.title": "Studi e certificazioni",
    "edu.1.title": "Oracle Certified Associate — Java SE 7 Programmer",
    "edu.1.place": "Torino, Italia",
    "edu.2.title": "Cisco IT Essentials",
    "edu.2.place": "Immaginazione e Lavoro, Torino",
    "edu.3.title": "Diploma di scuola superiore in Informatica",
    "edu.3.place": "ITIS Pininfarina, Moncalieri",

    "lang.title": "Lingue",
    "lang.italian": "Italiano",
    "lang.native": "Madrelingua",
    "lang.english": "Inglese",
    "lang.listening": "Ascolto",
    "lang.reading": "Lettura",
    "lang.speaking": "Produzione orale",
    "lang.interaction": "Interazione",
    "lang.writing": "Scrittura",
    "lang.korean": "Coreano",
    "lang.koreanNote": "Leggo l'hangul e conosco parecchi vocaboli; grammatica e frasi complesse sono ancora in lavorazione.",

    "contact.kicker": "06 — Contatti",
    "contact.title": "Parliamone.",
    "contact.lede": "Per una collaborazione, una proposta o semplicemente per scambiare due righe su un progetto.",
    "contact.location": "Torino, Italia",

    "footer.note": "Fatto a mano, senza framework.",

    "meta.title": "Fabio Valentino — Developer &amp; Data Engineer",
    "meta.description": "Fabio Valentino, developer e data engineer a Torino. Microservizi, big data e applicazioni web: Java, Python, Angular, Google Cloud, BigQuery."
  };

  const ko = {
    "a11y.skip": "본문으로 이동",
    "a11y.brand": "파비오 발렌티노, 맨 위로 이동",
    "a11y.nav": "주 메뉴",
    "a11y.language": "언어",
    "a11y.menu": "메뉴 열기",
    "a11y.menuClose": "메뉴 닫기",
    "a11y.top": "맨 위로",
    "a11y.technologies": "기술",

    "nav.profile": "소개",
    "nav.experience": "경력",
    "nav.skills": "기술",
    "nav.beyond": "업무 밖",
    "nav.education": "학력",
    "nav.contact": "연락",

    "hero.eyebrow": "이탈리아 토리노 · 새로운 프로젝트 제안 환영",
    "hero.role": "개발자 &amp; 데이터 엔지니어",
    "hero.lede": "마이크로서비스와 배치 프로세스, 데이터 파이프라인을 설계하고 개발합니다. 엔터프라이즈 Java에서 클라우드까지, 리눅스 시스템과 제대로 만든 것에 애정을 가지고 일합니다.",
    "hero.cta.mail": "메일 보내기",
    "hero.cta.timeline": "경력 보기",

    "stats.experience": "경력",
    "stats.years": "년 이상",
    "stats.focus": "중심 분야",
    "stats.focus.value": "프로그래밍과 아키텍처",
    "stats.stack": "스택",
    "stats.stack.value": "Python · Node · Rust · Java",

    "profile.kicker": "01 — 소개",
    "profile.title": "저에 대해",
    "profile.p1": "은행과 산업 분야의 소프트웨어를 만들어 온 <span data-experience-years>15</span>년 넘는 경력을 가진 개발자입니다. 요구사항 분석, 기능 문서 작성, 백엔드와 프런트엔드 개발, 지속적 통합, 협력사 커뮤니케이션까지 소프트웨어 생애주기 전반을 다뤄 왔습니다.",
    "profile.p2": "현재 인테사 산파올로에서 Google Cloud, BigQuery, PostgreSQL, Teradata를 넘나들며 대용량 데이터를 처리하는 마이크로서비스와 배치 프로세스를 담당하고 있습니다. 그동안 한 가지 습관은 그대로입니다. 빠르게 배우고, 깊이 파고들고, 코드를 처음보다 조금 더 깔끔하게 남겨 두는 것.",
    "profile.factsAria": "한눈에 보기",

    "facts.role.label": "현재 직무",
    "facts.role.value": "개발자 &amp; 데이터 엔지니어",
    "facts.role.sub": "인테사 산파올로 · 2021년부터",
    "facts.spec.label": "전문 분야",
    "facts.spec.value": "마이크로서비스, 배치, 빅데이터",
    "facts.spec.sub": "Java, Spring, Python, SQL",
    "facts.passions.label": "관심사",
    "facts.passions.value": "리눅스와 셀프호스팅",
    "facts.passions.sub": "개인 서버, 자동화, 홈랩",
    "facts.languages.label": "언어",
    "facts.languages.value": "이탈리아어 · 영어 C1 · 한국어 ~A1",
    "facts.languages.sub": "이탈리아어와 영어는 업무에서 매일 사용",
    "facts.online.label": "온라인",
    "facts.online.sub": "개인 프로젝트와 커리어 프로필",

    "exp.kicker": "02 — 경력",
    "exp.title": "경력 사항",
    "common.present": "현재",

    "job1.title": "개발자 &amp; 데이터 엔지니어",
    "job1.company": "인테사 산파올로 · 토리노",
    "job1.b1": "신규 마이크로서비스와 배치 프로세스 개발.",
    "job1.b2": "대용량 트랜잭션을 처리하는 빅데이터 프로세스.",
    "job1.b3": "기능 문서 작성과 협력사 커뮤니케이션.",
    "job1.b4": "야간 당직과 운영 환경 지원.",

    "job2.title": "프로그래머",
    "job2.company": "RGI · 토리노",
    "job2.b1": "Java 기반 배치 소프트웨어와 애플리케이션 백엔드.",
    "job2.b2": "SOAP와 REST 프로토콜 기반 웹 서비스.",
    "job2.b3": "Angular 8과 AngularJS 프런트엔드 개발.",
    "job2.b4": "Oracle 데이터 추출과 가공, 유닉스 스크립트.",
    "job2.b5": "GitLab 기반 지속적 통합 구축과 유지보수.",

    "job3.title": "소프트웨어 개발자",
    "job3.company": "카프제미니 · 토리노",
    "job3.b1": "Java 기반 배치 소프트웨어와 SOAP 웹 서비스.",
    "job3.b2": "Java와 JavaScript로 프런트엔드와 백엔드 개발.",
    "job3.b3": "Oracle 데이터 추출, 유닉스 스크립트.",
    "job3.b4": "소규모 팀 조율.",

    "job4.title": "소프트웨어 개발자",
    "job4.company": "베타콤, RGI 파견 · 토리노",
    "job4.b1": "Java 기반 배치 소프트웨어, SOAP와 REST 웹 서비스.",
    "job4.b2": "Java와 JavaScript로 프런트엔드와 백엔드 개발.",
    "job4.b3": "Oracle과 DB2 데이터 추출, 유닉스 스크립트.",
    "job4.b4": "소규모 프로젝트의 기술 리드.",

    "job5.title": "소프트웨어 개발자",
    "job5.company": "SCAI · 토리노",
    "job5.b1": "Java와 JavaScript로 프런트엔드와 백엔드 개발.",

    "job6.title": "소프트웨어 개발자",
    "job6.company": "SCAI · 토리노",
    "job6.b1": "JavaScript 기반 사용자 인터페이스.",
    "job6.b2": "Java와 JavaScript로 프런트엔드와 백엔드 소프트웨어 개발.",
    "job6.b3": "Java 기반 배치 프로세스.",

    "skills.kicker": "03 — 기술",
    "skills.title": "할 수 있는 일",
    "skills.languages": "프로그래밍 언어",
    "skills.data": "데이터 &amp; 클라우드",
    "skills.frameworks": "프레임워크",
    "skills.devops": "DevOps &amp; 도구",

    "strength.1.title": "꾸준한 학습",
    "strength.1.body": "새로운 언어와 환경을 빠르게 익힙니다. 제가 아는 것의 상당 부분은 독학으로 쌓은 것이고, 사용하는 기술은 항상 더 깊이 파고들며 최신 상태로 유지합니다.",
    "strength.2.title": "시스템과 인프라",
    "strength.2.body": "리눅스와 컴퓨터 전반에 대한 애정이 있어 명령줄에 능숙하고, 여가 시간에 개인 서버 여러 대를 직접 운영해 왔습니다.",
    "strength.3.title": "팀워크",
    "strength.3.body": "기술 리드와 소규모 팀 조율 경험이 있으며, 동료와 협력사와 함께 일하는 데 익숙합니다.",

    "beyond.kicker": "04 — 업무 밖",
    "beyond.title": "혼자서 배운 것들",
    "beyond.1.title": "업무 밖의 언어들",
    "beyond.1.body": "Java 외에도 Python, Rust, Node.js, Bash 같은 언어와 패러다임을 독학했습니다. 실제 문제를 붙잡고 도구와 자동화, 작은 서비스를 만들면서 제대로 해결하는 방식으로 배웁니다.",
    "beyond.2.title": "리눅스와 네트워크",
    "beyond.2.body": "리눅스는 제 일상 환경입니다. 셸과 systemd, 컨테이너, 리버스 프록시, DNS, 라우팅, VPN, 그리고 제 하드웨어에서 돌리는 셀프호스팅 서비스까지 다룹니다. 애플리케이션 계층 아래에서 무슨 일이 일어나는지 알고 싶어 합니다.",
    "beyond.3.title": "보안을 대하는 태도",
    "beyond.3.body": "정보 보안을 공부하고 실천합니다. 하드닝, 최소 권한, 네트워크 분리, 시크릿 관리, 취약점 분석을 OWASP를 기준으로 다룹니다. 모든 시스템을 보며 ‘어떻게 실패할 수 있는가, 누가 실패시키려 할 수 있는가’를 먼저 생각합니다.",

    "edu.kicker": "05 — 학력",
    "edu.title": "학력 및 자격",
    "edu.1.title": "Oracle Certified Associate — Java SE 7 Programmer",
    "edu.1.place": "이탈리아 토리노",
    "edu.2.title": "Cisco IT Essentials",
    "edu.2.place": "Immaginazione e Lavoro, 토리노",
    "edu.3.title": "정보과학 고등학교 졸업",
    "edu.3.place": "ITIS Pininfarina, 몬칼리에리",

    "lang.title": "언어",
    "lang.italian": "이탈리아어",
    "lang.native": "모국어",
    "lang.english": "영어",
    "lang.listening": "듣기",
    "lang.reading": "읽기",
    "lang.speaking": "말하기",
    "lang.interaction": "대화",
    "lang.writing": "쓰기",
    "lang.korean": "한국어",
    "lang.koreanNote": "한글을 읽을 수 있고 어휘도 상당히 알고 있습니다. 문법과 복잡한 문장 구성은 아직 공부 중입니다.",

    "contact.kicker": "06 — 연락",
    "contact.title": "이야기해 봅시다.",
    "contact.lede": "협업 제안이나 프로젝트에 대한 이야기를 나누고 싶다면 언제든 연락 주세요.",
    "contact.location": "이탈리아 토리노",

    "footer.note": "프레임워크 없이 직접 만들었습니다.",

    "meta.title": "파비오 발렌티노 — 개발자 &amp; 데이터 엔지니어",
    "meta.description": "토리노에서 활동하는 개발자 겸 데이터 엔지니어 파비오 발렌티노. 마이크로서비스, 빅데이터, 웹 애플리케이션: Java, Python, Angular, Google Cloud, BigQuery."
  };

  const dicts = { it, ko };
  const storageKey = "fv-lang";
  const nodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const ariaNodes = Array.from(document.querySelectorAll("[data-i18n-aria-label]"));
  const english = new Map();

  nodes.forEach((node) => english.set(node, node.innerHTML));
  const englishAria = new Map();
  ariaNodes.forEach((node) => englishAria.set(node, node.getAttribute("aria-label") || ""));
  const englishTitle = document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  const englishDesc = metaDesc ? metaDesc.getAttribute("content") : "";

  const readInitial = () => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    const stored = (() => {
      try { return localStorage.getItem(storageKey); } catch (e) { return null; }
    })();
    const candidate = (fromUrl || stored || "en").toLowerCase().slice(0, 2);
    return dicts[candidate] ? candidate : "en";
  };

  let current = readInitial();

  const apply = (lang, persist) => {
    current = dicts[lang] ? lang : "en";
    const dict = dicts[current] || null;

    nodes.forEach((node) => {
      const key = node.dataset.i18n;
      const source = english.get(node);
      const value = dict && dict[key] !== undefined ? dict[key] : source;
      if (node.innerHTML !== value) node.innerHTML = value;
    });

    ariaNodes.forEach((node) => {
      const key = node.dataset.i18nAriaLabel;
      const value = dict && dict[key] !== undefined ? dict[key] : englishAria.get(node);
      if (value) node.setAttribute("aria-label", value);
    });

    document.documentElement.lang = current;
    document.title = dict && dict["meta.title"] ? dict["meta.title"].replace(/&amp;/g, "&") : englishTitle;
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        dict && dict["meta.description"] ? dict["meta.description"] : englishDesc
      );
    }

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      const active = btn.dataset.lang === current;
      btn.setAttribute("aria-pressed", String(active));
      btn.classList.toggle("active", active);
    });

    if (persist) {
      try { localStorage.setItem(storageKey, current); } catch (e) { /* private mode */ }
    }

    document.dispatchEvent(new CustomEvent("fv:langchange", { detail: { lang: current, dict: dict || {} } }));
  };

  window.fvI18n = {
    get lang() { return current; },
    t(key, fallback) {
      const dict = dicts[current];
      if (dict && dict[key] !== undefined) return dict[key];
      return fallback;
    }
  };

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.dataset.lang, true));
  });

  apply(current, false);
})();
