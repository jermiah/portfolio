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
                en: `
<p>I’m a data-driven product thinker with 5+ years of experience in <strong>banking and financial services</strong>, specializing in <strong>data quality, workflow automation, and product management</strong>. I’ve worked across <strong>BNP Paribas and HSBC</strong>, where I led impactful projects that improved regulatory compliance, streamlined operations, and enhanced decision-making through data.</p>

<p>Currently, I’m pursuing a <strong>Master of Science in Data Science & AI Strategy</strong> at <strong>emlyon business school</strong>, where I’m transitioning into the world of <strong>machine learning, deep learning, and LLMs</strong>. My academic journey also includes an <strong>MBA in Finance & Analytics</strong> and a <strong>BTech in Computer Science</strong>, allowing me to connect business goals with technical execution.</p>

<p><strong>What I Bring to the Table</strong></p>
<ul>
  <li><strong>Banking Experience:</strong> At BNP Paribas and HSBC, I led key projects in data assurance, automation, and product optimization—earning <strong>three innovation awards</strong>, including the <em>Kaizen Award</em>.</li>
  <li><strong>Product Thinking Meets Data Science:</strong> Developed a <em>Product Strategy Assistant App</em> using Streamlit + LLMs + RAG, generating real-time strategy suggestions for 5,000+ retail products by combining segmentation, KPIs, and feedback.</li>
  <li><strong>Enterprise AI Research:</strong> Currently leading a project with BNP Paribas on the strategic adoption of open-source multimodal Enterprise RAG systems, evaluating business impact and KPIs.</li>
  <li><strong>Tools:</strong> Python, SQL, PyTorch, AWS, Power BI, Excel/VBA, Pyspark, Power Query (Certified Scrum Product Owner)</li>
</ul>

<p><strong>My Focus</strong></p>
<p>While my foundation is rooted in <strong>data and product</strong>, my current focus is on <strong>AI-powered solutions</strong>—with an emphasis on practical impact and business alignment.</p>

<p><strong>Featured Project:</strong><br/>
<a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">AI Strategy Copilot – Retail Use Case</a><br/>
A smart assistant for retail strategy that uses LLMs and segmentation to drive planning and merchandising decisions.</p>

<p>Let’s connect and build the future of <strong>data-first, human-centered financial innovation</strong>.</p>
                `,
                fr: `
<p>Je suis un professionnel orienté produit et guidé par les données, avec plus de 5 ans d'expérience dans les <strong>services bancaires et financiers</strong>, spécialisé en <strong>qualité des données, automatisation des flux de travail et gestion de produit</strong>. J'ai travaillé chez <strong>BNP Paribas et HSBC</strong>, où j'ai mené des projets à fort impact améliorant la conformité réglementaire, optimisant les opérations et favorisant la prise de décisions basée sur les données.</p>

<p>Actuellement, je poursuis un <strong>Master of Science en Data Science & Stratégie en IA</strong> à <strong>emlyon business school</strong>, où je me spécialise en <strong>machine learning, deep learning et modèles de langage (LLMs)</strong>. Mon parcours académique comprend également un <strong>MBA en Finance & Analytics</strong> et un <strong>BTech en Informatique</strong>, me permettant d’aligner les objectifs business avec la mise en œuvre technique.</p>

<p><strong>Ce que j'apporte</strong></p>
<ul>
  <li><strong>Expérience bancaire :</strong> Chez BNP Paribas et HSBC, j'ai dirigé des projets clés en assurance qualité des données, automatisation et optimisation produit — obtenant <strong>trois prix d'innovation</strong>, dont le <em>Kaizen Award</em>.</li>
  <li><strong>Produit & Data Science :</strong> Création d'une <em>application d'assistance à la stratégie produit</em> avec Streamlit + LLMs + RAG, générant des recommandations pour plus de 5 000 produits de détail grâce à la segmentation, aux KPI et aux retours utilisateurs.</li>
  <li><strong>Recherche en IA d'entreprise :</strong> Responsable d’un projet avec BNP Paribas sur l’adoption stratégique de RAG multimodaux open source, évaluant leur impact business et les KPI associés.</li>
  <li><strong>Technologies :</strong> Python, SQL, PyTorch, AWS, Power BI, Excel/VBA, Pyspark, Power Query (Certified Scrum Product Owner)</li>
</ul>

<p><strong>Mon objectif</strong></p>
<p>Bien que mes bases soient dans les <strong>données et le produit</strong>, je me concentre actuellement sur les <strong>solutions IA appliquées</strong> — avec une attention particulière à leur impact réel et leur alignement stratégique.</p>

<p><strong>Projet en vedette :</strong><br/>
<a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">Assistant stratégique IA – Cas d’usage Retail</a><br/>
Un assistant intelligent pour la stratégie de vente au détail, exploitant les LLMs et la segmentation pour piloter les décisions de planification et de merchandising.</p>

<p>Connectons-nous pour construire ensemble le futur de l’<strong>innovation financière centrée sur les données et l’humain</strong>.</p>
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

document.addEventListener('DOMContentLoaded', function() {
    updateContent();
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', toggleLanguage);
});
