/* =========================================================
   i18n — English is the source text in the HTML, Italian lives here.
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
    "stats.years": "anni",
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
    "facts.languages.value": "Italiano · Inglese C1",
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
    "edu.3.title": "Diploma di istruzione secondaria in Informatica",
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

    "contact.kicker": "06 — Contatti",
    "contact.title": "Parliamone.",
    "contact.lede": "Per una collaborazione, una proposta o semplicemente per scambiare due righe su un progetto.",
    "contact.location": "Torino, Italia",

    "footer.note": "Fatto a mano, senza framework.",

    "meta.title": "Fabio Valentino — Developer &amp; Data Engineer",
    "meta.description": "Fabio Valentino, developer e data engineer a Torino. Microservizi, big data e applicazioni web: Java, Python, Angular, Google Cloud, BigQuery."
  };

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
    return candidate === "it" ? "it" : "en";
  };

  let current = readInitial();

  const apply = (lang, persist) => {
    current = lang === "it" ? "it" : "en";
    const dict = current === "it" ? it : null;

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
      if (current === "it" && it[key] !== undefined) return it[key];
      return fallback;
    }
  };

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.dataset.lang, true));
  });

  apply(current, false);
})();
