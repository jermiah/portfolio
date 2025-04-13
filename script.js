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
        extras: { en: "Extras", fr: "Extras" }
    },
    sections: {
        overview: {
            title: { en: "Overview", fr: "Aperçu" },
            content: {
                en: `
<p>I’m a data-driven product thinker with 5+ years of experience in banking and financial services, specializing in data quality, workflow automation, and product management. I’ve worked across BNP Paribas and HSBC, where I led impactful projects that improved regulatory compliance, streamlined operations, and enhanced decision-making through data.</p>
<p>Currently, I’m pursuing a Master of Science in Data Science & AI Strategy at emlyon business school, where I’m transitioning into the world of machine learning, deep learning, and LLMs. My academic journey also includes an MBA in Finance & Analytics and a BTech in Computer Science, allowing me to connect business goals with technical execution.</p>
<p><strong>What I Bring to the Table</strong></p>
<ul>
  <li>Banking Experience: At BNP Paribas and HSBC, I led key projects in data assurance, automation, and product optimization—earning three awards including the Antares and Spirit of Kaizen Awards.</li>
  <li>Product & Strategy: Designed an AI Strategy Copilot App using LLMs, RAG, and Streamlit for retail product planning across 5000+ SKUs.</li>
  <li>Research: Leading a project at BNP Paribas on the adoption of open-source enterprise AI agents using RAG & multi-modal models.</li>
</ul>
<p><strong>Tools & Technologies</strong>: Python, SQL, AWS, PyTorch, Excel/VBA, Power BI, Tableau, Git, Streamlit, JIRA, LLMs, Fine-tuning, RAG architecture</p>
<p><strong>Recent Project:</strong><br/>
<a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">AI Strategy Copilot – Retail Use Case</a></p>
<p>Let’s connect and build the future together.</p>
                `,
                fr: `
<p>Je suis un professionnel axé sur les produits et les données, avec plus de 5 ans d'expérience dans les services bancaires et financiers, spécialisé dans la qualité des données, l'automatisation des workflows et la gestion de produit. J'ai travaillé chez BNP Paribas et HSBC, où j'ai mené des projets impactants améliorant la conformité réglementaire, rationalisant les opérations et facilitant la prise de décision.</p>
<p>Je poursuis actuellement un Master of Science en Data Science & Stratégie en Intelligence Artificielle à emlyon business school, me spécialisant dans le machine learning, deep learning et les modèles de langage (LLMs). Mon parcours comprend également un MBA en Finance & Analytics et un BTech en Informatique.</p>
<p><strong>Ce que j'apporte</strong></p>
<ul>
  <li>Expérience bancaire : conduite de projets en automatisation, assurance qualité, optimisation de produit, avec des prix comme le Antares et Spirit of Kaizen.</li>
  <li>Produit & stratégie : développement d’une application AI Strategy Copilot avec LLMs, RAG et Streamlit pour la planification de produits de détail.</li>
  <li>Recherche : projet en cours chez BNP Paribas sur l’adoption de RAG open source multimodal pour les agents d’entreprise.</li>
</ul>
<p><strong>Outils & Technologies</strong> : Python, SQL, AWS, PyTorch, Excel/VBA, Power BI, Tableau, Git, Streamlit, JIRA, LLMs, Fine-tuning, architecture RAG</p>
<p><strong>Projet récent :</strong><br/>
<a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">Assistant stratégique IA – Cas d’usage Retail</a></p>
<p>Connectons-nous et construisons l’avenir ensemble.</p>
                `
            }
        },
        skills: {
            title: { en: "Skills", fr: "Compétences" },
            content: {
                en: `
<ul>
  <li>Programming: Python, SQL, VBA</li>
  <li>Libraries: NumPy, Pandas, Scikit-learn, PyTorch, Matplotlib</li>
  <li>Tools: Power BI, Tableau, Excel (Advanced), JIRA, Git, Power Query, Streamlit</li>
  <li>Cloud & Automation: AWS, Web scraping, Automation (macros/scripts)</li>
  <li>AI Specialization: LLMs, Fine-tuning, RAG architecture</li>
  <li>Domains: Financial Markets, Product Management, Retail Analytics, Data Assurance</li>
  <li>Methodologies: Agile, Scrum (Certified Scrum Product Owner)</li>
</ul>
`,
                fr: `
<ul>
  <li>Programmation : Python, SQL, VBA</li>
  <li>Librairies : NumPy, Pandas, Scikit-learn, PyTorch, Matplotlib</li>
  <li>Outils : Power BI, Tableau, Excel (avancé), JIRA, Git, Power Query, Streamlit</li>
  <li>Cloud & Automatisation : AWS, Web scraping, automatisation (macros/scripts)</li>
  <li>Spécialisation en IA : LLMs, Fine-tuning, architecture RAG</li>
  <li>Secteurs : marchés financiers, gestion de produit, analytique retail, assurance qualité des données</li>
  <li>Méthodologies : Agile, Scrum (Certified Scrum Product Owner)</li>
</ul>
`
            }
        }
        // Add education, experience, certification, extras blocks here (as you already have them)
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

document.addEventListener('DOMContentLoaded', function () {
    updateContent();
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', toggleLanguage);
});
