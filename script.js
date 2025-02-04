/* script.js */
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
                en: "I am a seasoned data scientist with five years of experience in data management, product management, and financial markets. My expertise spans across banking, e-commerce, pharma, and QSR, where I have tackled complex challenges in credit risk, market mix modeling, and AI-driven analytics to deliver impactful solutions. Currently pursuing a Master of Science in Data Science and Artificial Intelligence Strategy at Emlyon Business School, I am further honing my expertise in machine learning, deep learning, and large language models (LLMs). My strong academic foundation includes an MBA in Finance & Analytics and a BTech in Computer Science and Engineering, equipping me with both technical proficiency and business acumen. With a diverse skill set encompassing Python, AWS, SQL, PyTorch, HIVE, Pyspark, VBA/Macros, Advanced Excel, Power Query, and Power BI, I specialize in predictive modeling, deep learning, and AI-driven automation. My past roles include leading data assurance projects, optimizing workflows, and enhancing regulatory compliance at HSBC and BNP Paribas. Notably, my contributions in automating key workflows reduced errors by 95% and processing time by 80%, earning the prestigious Kaizen Award for Innovation. I am also a Certified Scrum Product Owner, skilled in managing agile workflows and product development, ensuring seamless data-driven decision-making processes.",
                fr: "Je suis un data scientist expérimenté avec cinq ans d'expérience en gestion des données, gestion de produit et marchés financiers. Mon expertise couvre la banque, le commerce électronique, la pharmacie et la restauration rapide (QSR), où j'ai relevé des défis complexes liés au risque de crédit, à la modélisation du mix marketing et à l'analyse basée sur l'IA pour fournir des solutions percutantes. Actuellement en train de poursuivre un Master of Science en Science des Données et Stratégie d'Intelligence Artificielle à l'Emlyon Business School, j'affine encore mon expertise en apprentissage automatique, apprentissage profond et modèles de langage de grande envergure (LLMs). Ma solide formation académique comprend un MBA en Finance & Analytics et un BTech en Informatique et Ingénierie, me dotant à la fois de compétences techniques et d'une compréhension approfondie du business. Avec un ensemble de compétences diversifié incluant Python, AWS, SQL, PyTorch, HIVE, Pyspark, VBA/Macros, Excel avancé, Power Query et Power BI, je me spécialise dans la modélisation prédictive, l'apprentissage profond et l'automatisation basée sur l'IA. Mes précédents rôles ont impliqué la direction de projets d'assurance qualité des données, l'optimisation des flux de travail et l'amélioration de la conformité réglementaire chez HSBC et BNP Paribas. Notamment, mes contributions à l'automatisation des flux de travail clés ont permis de réduire les erreurs de 95 % et le temps de traitement de 80 %, ce qui m'a valu le prestigieux prix Kaizen pour l'Innovation. Je suis également Certified Scrum Product Owner, compétent dans la gestion des flux de travail agiles et du développement produit, garantissant une prise de décision fluide et basée sur les données."
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
            
            const contentElement = section.querySelector('p, ul, div');
            if (contentElement) {
                contentElement.textContent = translations.sections[sectionKey].content[lang];
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

document.addEventListener('DOMContentLoaded', function() {
    updateContent();
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', toggleLanguage);
});
