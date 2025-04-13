let isEnglish = true;

const translations = {
    name: {
        en: "Jermiah Jerome",
        fr: "Jermiah Jerome"
    },
    title: {
        en: "Data Scientist",
        fr: "Scientifique des Données"
    },
    nav: {
        overview: { en: "Overview", fr: "Aperçu" },
        skills: { en: "Skills", fr: "Compétences" },
        education: { en: "Education", fr: "Éducation" },
        experience: { en: "Experience", fr: "Expérience" },
        certification: { en: "Certification", fr: "Certification" },
        projects: { en: "Projects", fr: "Projets" },
        showcase: { en: "Showcase", fr: "Showcase" }
    },
    sections: {
         overview: {
            title: { en: "Overview", fr: "Aperçu" },
            content: {
                en: `
<p>I’m a data-driven product thinker with 5+ years of experience in banking and financial services, specializing in data quality, workflow automation, and product management. I’ve worked across BNP Paribas and HSBC, where I led impactful projects that improved regulatory compliance, streamlined operations, and enhanced decision-making through data.</p>
<p>Currently, I’m pursuing a Master of Science in Data Science & AI Strategy at emlyon business school, where I’m transitioning into the world of machine learning, deep learning, and LLMs. My academic journey also includes an MBA in Finance & Analytics and a BTech in Computer Science, allowing me to connect business goals with technical execution.</p>
<p>What I Bring to the Table</p>
<ul>
  <li>Banking Experience: At BNP Paribas and HSBC, I led key projects in data assurance, automation, and product optimization—earning three awards including the Antares Award and two Spirit of Kaizen Awards.</li>
  <li>Product & Strategy: Designed an AI Strategy Copilot App using LLMs, RAG, and Streamlit for retail product planning across 5,000+ SKUs.</li>
  <li>Research: Leading a strategic project at BNP Paribas on the adoption of open-source enterprise AI agents using multimodal models and RAG frameworks.</li>
</ul>
<p>Recent Project:<br/>
<a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">AI Strategy Copilot – Retail Use Case</a></p>
<p>Let’s connect and build the future together.</p>
                `,
                fr: `
<p>Je suis un professionnel axé sur les produits et les données, avec plus de 5 ans d'expérience dans les services bancaires et financiers, spécialisé dans la qualité des données, l'automatisation des workflows et la gestion de produit. J'ai travaillé chez BNP Paribas et HSBC, où j'ai mené des projets à fort impact améliorant la conformité réglementaire, rationalisant les opérations et facilitant la prise de décision basée sur les données.</p>
<p>Je poursuis actuellement un Master of Science en Data Science & Stratégie en IA à emlyon business school, où je me spécialise en machine learning, deep learning et modèles de langage (LLMs). Mon parcours comprend également un MBA en Finance & Analytics et un BTech en Informatique.</p>
<p>Ce que j'apporte</p>
<ul>
  <li>Expérience bancaire : Projets menés chez BNP Paribas et HSBC sur la qualité des données, l'automatisation, et l'optimisation produit — récompensés par trois prix dont le Prix Antares et deux Prix Spirit of Kaizen.</li>
  <li>Produit & stratégie : Conception d'une application de stratégie IA avec LLMs, RAG et Streamlit pour la planification de 5 000 produits de retail.</li>
  <li>Recherche : Projet stratégique chez BNP Paribas sur l'intégration de modèles open-source multimodaux pour les agents IA d'entreprise.</li>
</ul>
<p>Projet récent :<br/>
<a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">Assistant stratégique IA – Cas d’usage Retail</a></p>
<p>Connectons-nous et construisons l’avenir ensemble.</p>
                `
            }
        },
        skills: {
    title: { en: "Skills", fr: "Compétences" },
    content: {
        en: `
<h4>Expertise</h4>
<ul>
  <li>Business Intelligence & Data Analysis</li>
  <li>Data Visualization</li>
  <li>Big Data & Data Science</li>
  <li>Machine Learning</li>
  <li>Deep Learning</li>
  <li>Natural Language Processing (NLP)</li>
  <li>Large Language Models (LLM)</li>
  <li>Prompt Engineering</li>
  <li>Financial Markets</li>
  <li>Artificial Intelligence Strategy</li>
</ul>
<h4>Professional</h4>
<ul>
  <li>Product Management</li>
  <li>Tech Project Management</li>
  <li>Problem Solving & Decision Making</li>
  <li>Collaboration and Teamwork</li>
  <li>Stakeholder Management</li>
  <li>Team Management & Leadership</li>
  <li>Technical Communication</li>
</ul>
<h4>Technical</h4>
<ul>
  <li>Python, R, SQL, NoSQL, VBA/Macros, Scala, DAX</li>
  <li>PyTorch, TensorFlow, Keras, LangChain, LoRA, QLoRA</li>
  <li>Git, GitHub, CUDA, Hugging Face</li>
  <li>GCP, AWS, Snowflake, Databricks</li>
  <li>Power BI, Tableau, Advanced Excel</li>
  <li>Bloomberg, Reuters</li>
</ul>
`,
        fr: `
<h4>Expertise</h4>
<ul>
  <li>Business Intelligence et analyse de données</li>
  <li>Visualisation de données</li>
  <li>Big Data et Data Science</li>
  <li>Apprentissage automatique</li>
  <li>Apprentissage profond</li>
  <li>Traitement du langage naturel (NLP)</li>
  <li>Modèles de langage (LLM)</li>
  <li>Prompt Engineering</li>
  <li>Marchés financiers</li>
  <li>Stratégie en intelligence artificielle</li>
</ul>
<h4>Professionnel</h4>
<ul>
  <li>Gestion de produit</li>
  <li>Gestion de projets technologiques</li>
  <li>Résolution de problèmes & prise de décision</li>
  <li>Collaboration et travail d'équipe</li>
  <li>Gestion des parties prenantes</li>
  <li>Management d'équipe et leadership</li>
  <li>Communication technique</li>
</ul>
<h4>Technique</h4>
<ul>
  <li>Python, R, SQL, NoSQL, VBA/Macros, Scala, DAX</li>
  <li>PyTorch, TensorFlow, Keras, LangChain, LoRA, QLoRA</li>
  <li>Git, GitHub, CUDA, Hugging Face</li>
  <li>GCP, AWS, Snowflake, Databricks</li>
  <li>Power BI, Tableau, Excel Avancé</li>
  <li>Bloomberg, Reuters</li>
</ul>
`
    }
},
        education: {
    title: { en: "Education", fr: "Éducation" },
    content: {
        en: `
<ul>
  <li><strong>emlyon business school</strong> – MSc in Data Science & AI Strategy<br/>2024–2025 · Lyon & Paris, France</li>
  <li><strong>Thiagarajar School of Management</strong> – MBA in Finance & Analytics<br/>2019–2021 · Madurai, India</li>
  <li><strong>National Institute of Technology, Tiruchirappalli</strong> – BTech in Computer Science and Engineering<br/>2014–2018 · Tiruchirappalli, India</li>
</ul>
`,
        fr: `
<ul>
  <li><strong>emlyon business school</strong> – MSc en Data Science & Stratégie IA<br/>2024–2025 · Lyon & Paris, France</li>
  <li><strong>Thiagarajar School of Management</strong> – MBA en Finance & Analytics<br/>2019–2021 · Madurai, Inde</li>
  <li><strong>Institut national de technologie de Tiruchirappalli</strong> – BTech en informatique<br/>2014–2018 · Tiruchirappalli, Inde</li>
</ul>
`
    }
},
experience: {
            title: { en: "Experience", fr: "Expérience" },
            content: {
                en: `
<ul>
  <li><strong>HSBC, India — Assistant Manager - Product Management</strong> (12/2022 – 08/2024)<br/>
  Ensured compliance and mitigated regulatory risks for global e-communication and audio communication surveillance across two products, minimizing operational vulnerabilities.<br/>
  Led data assurance projects including deployments, migrations, and integrations, reducing data issues by 80%, optimizing workflows to ensure data accuracy, reliability, and regulatory compliance, and maintaining seamless data delivery by global stakeholders.<br/>
  Configured JIRA for issue backlogs and custodian processes, streamlining workflows and improving operational efficiency by 20%. Designed and automated global KPI dashboards for data quality reporting, collectively saving 0.2 FTE annually while enhancing transparency across stakeholders.
  </li>
  <li><strong>BNP Paribas GSO, India — Data Quality Associate</strong> (06/2021 – 10/2022)<br/>
  Conducted data profiling and implemented a Data Quality process for Trade Reference Data in asset creation, ensuring 100% precision in NAV calculation.<br/>
  Analyzed data errors and developed dashboards to enhance quality processes.<br/>
  Automated workflows, reducing errors by 95% and processing time by 80%, earning the Kaizen Award for Innovation.
  </li>
  <li><strong>Enprou Technologies India Pvt. Ltd. — Project Finance Trainee</strong> (05/2018 – 06/2019)<br/>
  Performed cash flow analysis and forecasted requirements to ensure smooth financial operations.<br/>
  Optimized inventory and procurement processes, minimizing wastage and avoiding project delays.
  </li>
</ul>
`,
                fr: `
<ul>
  <li><strong>HSBC, Inde — Assistant Manager - Gestion de Produit</strong> (12/2022 – 08/2024)<br/>
  Assuré la conformité et réduit les risques réglementaires pour la surveillance des communications électroniques et audio à l'échelle mondiale sur deux produits, minimisant les vulnérabilités opérationnelles.<br/>
  Dirigé des projets d'assurance des données incluant déploiements, migrations et intégrations, réduisant les problèmes de données de 80% et garantissant la fiabilité pour les parties prenantes mondiales.<br/>
  Configuré JIRA pour la gestion des backlogs et processus de conservation, améliorant l'efficacité de 20%. Conçu des tableaux de bord KPI automatisés pour la qualité des données, économisant 0.2 ETP par an.
  </li>
  <li><strong>BNP Paribas GSO, Inde — Data Quality Associate</strong> (06/2021 – 10/2022)<br/>
  Réalisé du profilage de données et mis en place un processus de qualité des données pour les données de référence dans la création d'actifs, assurant une précision de 100% dans le calcul de la valeur liquidative (NAV).<br/>
  Analysé les erreurs de données et développé des tableaux de bord pour améliorer les processus qualité.<br/>
  Automatisé des workflows, réduisant les erreurs de 95% et le temps de traitement de 80%, recevant le prix Kaizen pour l'innovation.
  </li>
  <li><strong>Enprou Technologies India Pvt. Ltd. — Stagiaire en finance de projet</strong> (05/2018 – 06/2019)<br/>
  Réalisé des analyses de trésorerie et prévisions pour garantir la fluidité des opérations financières.<br/>
  Optimisé les processus d'inventaire et d'approvisionnement, minimisant les gaspillages et évitant les retards de projets.
  </li>
</ul>
`
            }
        },
        certification: {
    title: { en: "Certifications", fr: "Certifications" },
    content: {
        en: `
<ul>
  <li>Certified Scrum Product Owner – Scrum.org</li>
  <li>AWS Certified Cloud Practitioner – Amazon Web Services</li>
  <li>AWS Machine Learning Specialty – Coming May 2025</li>
</ul>
`,
        fr: `
<ul>
  <li>Certified Scrum Product Owner – Scrum.org</li>
  <li>AWS Certified Cloud Practitioner – Amazon Web Services</li>
  <li>AWS Spécialité Machine Learning – Prévu pour mai 2025</li>
</ul>
`
    }
},
        
 : {
            title: { en: "Showcase", fr: "Showcase" },
            content: {
                en: `
                        <ul>
                          <li><strong>Awards:</strong>
                            <ul>
                              <li><em>Antares Award for Outstanding Performance:</em> Recognized for consistent excellence in delivery and impact at BNP Paribas.</li>
                              <li><em>Spirit of Kaizen – Process Automation:</em> Awarded for automating and optimizing key workflows, enhancing efficiency.</li>
                              <li><em>Spirit of Kaizen – Data Quality Report:</em> Recognized for improving regulatory data quality reporting at BNP Paribas.</li>
                              <li><em>National Talent Search Examination (NTSE) Scholar:</em> Awarded by NCERT (India) for academic excellence in 2012.</li>
                            </ul>
                          </li>
                          <li>2nd Place – District Level Roller Skating Competition</li>
                          <li>2nd Place – District Level Chess Tournament</li>
                          <li>Community Builder – Creator of the Paris AI & Tech Community<br/>
                              <a href="https://www.linkedin.com/posts/jermiah-jerome_paris-ai-tech-community-members-activity-7303817496346730496-QNPT" target="_blank">See community post</a></li>
                          <li>Hackathon & Innovation Challenge Participant:
                            <ul>
                              <li>L'Oréal Brandstorm 2025</li>
                              <li>Novartis AI Hackathon</li>
                              <li>Sopra Steria AI Challenge</li>
                            </ul>
                          </li>
                          <li>Workshops & Summits:
                            <ul>
                              <li>Google Gemini Workshop</li>
                              <li>Web Summit Lisbon</li>
                              <li>AWS Summit Paris</li>
                              <li>AI Developers Meetup – Station F</li>
                              <li>French State of AI – Google Paris</li>
                            </ul>
                          </li>
                        </ul>
                        `,
                fr: `
                    <ul>
                      <li><strong>Récompenses :</strong>
                        <ul>
                          <li><em>Prix Antares pour performance exceptionnelle :</em> Reconnu pour l'excellence constante chez BNP Paribas.</li>
                          <li><em>Esprit Kaizen – Automatisation des processus :</em> Pour l'automatisation de flux de travail clés et l'amélioration de l'efficacité.</li>
                          <li><em>Esprit Kaizen – Rapport sur la qualité des données :</em> Pour l'amélioration des rapports réglementaires de qualité des données.</li>
                          <li><em>Boursier NTSE :</em> Prix du National Talent Search Examination par le NCERT (Inde) en 2012.</li>
                        </ul>
                      </li>
                      <li>2e place – Compétition de roller au niveau district</li>
                      <li>2e place – Tournoi d'échecs au niveau district</li>
                      <li>Créateur de communauté – Fondateur de la communauté Paris AI & Tech<br/>
                          <a href="https://www.linkedin.com/posts/jermiah-jerome_paris-ai-tech-community-members-activity-7303817496346730496-QNPT" target="_blank">Voir le post LinkedIn</a></li>
                      <li>Participation à des hackathons et concours d'innovation :
                        <ul>
                          <li>L'Oréal Brandstorm 2025</li>
                          <li>Hackathon IA – Novartis</li>
                          <li>Défi IA – Sopra Steria</li>
                        </ul>
                      </li>
                      <li>Ateliers & Sommets :
                        <ul>
                          <li>Atelier Google Gemini</li>
                          <li>Web Summit Lisbonne</li>
                          <li>AWS Summit Paris</li>
                          <li>AI Developers Meetup – Station F</li>
                          <li>French State of AI – Google Paris</li>
                        </ul>
                      </li>
                    </ul>
                    `

            }
        }
     
    }
};


function updateContent() {
    const lang = isEnglish ? 'en' : 'fr';
    document.getElementById('name').textContent = translations.name[lang];
    document.getElementById('title').textContent = translations.title[lang];

    const navLinks = document.querySelectorAll('#main-nav .nav-link');
    navLinks.forEach(link => {
        const key = link.getAttribute('data-target');
        link.textContent = translations.nav[key][lang];
    });

    Object.keys(translations.sections).forEach(sectionKey => {
        const section = document.getElementById(sectionKey);
        if (section) {
            const titleElement = section.querySelector('h3');
            if (titleElement) {
                titleElement.textContent = translations.sections[sectionKey].title[lang];
            }

            const contentElement = section.querySelector('.section-content');
            if (contentElement) {
                contentElement.innerHTML = translations.sections[sectionKey].content[lang];
            }
        }
    });
}

function toggleLanguage() {
    isEnglish = !isEnglish;
    updateContent();
    const langToggle = document.getElementById('lang-toggle');
    langToggle.innerHTML = `<span class="button-icon">🌐</span> ${isEnglish ? 'Translate to French' : 'Traduire en anglais'}`;
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.innerHTML = `<span class="button-icon">${isLight ? '🌑' : '☀️'}</span> ${isLight ? 'Dark mode' : 'Light mode'}`;

    // Optional: Update WebGL background mode if defined
    if (typeof updateBackgroundMode === 'function') {
        updateBackgroundMode(isLight);
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('#main-content .section');
    sections.forEach(section => section.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    updateContent();
    showSection('overview'); // Show Overview by default

    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', toggleLanguage);

    // Theme toggle
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', toggleMode);

    // Navigation tab switching
    const navLinks = document.querySelectorAll('#main-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);

            // Active nav styling
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Copy contact info to clipboard
    const emailInfo = document.getElementById('email-info');
    const phoneInfo = document.getElementById('phone-info');

    [emailInfo, phoneInfo].forEach(el => {
        el.addEventListener('click', function () {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                alert(`Copied to clipboard: ${text}`);
            });
        });
    });
});
