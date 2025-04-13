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
<p>I’m a data-driven product thinker with 5+ years of experience in banking and financial services, specializing in data quality, workflow automation, and product management. I’ve worked across BNP Paribas and HSBC, where I led impactful projects that improved regulatory compliance, streamlined operations, and enhanced decision-making through data.</p>

<p>Currently, I’m pursuing a Master of Science in Data Science & AI Strategy at emlyon business school, where I’m transitioning into the world of machine learning, deep learning, and LLMs. My academic journey also includes an MBA in Finance & Analytics and a BTech in Computer Science, allowing me to connect business goals with technical execution.</p>

<p><strong>What I Bring to the Table</strong></p>
<ul>
  <li>Banking Experience: At BNP Paribas and HSBC, I led key projects in data assurance, automation, and product optimization—earning three awards, including the <em>Kaizen Award</em>.</li>
  <li>Product Thinking Meets Data Science: Developed a Product Strategy Assistant App using Streamlit + LLMs + RAG, generating real-time strategy suggestions for 5,000+ retail products by combining segmentation, KPIs, and feedback.</li>
  <li>Enterprise AI Research: Currently leading a project with BNP Paribas on the strategic adoption of open-source multimodal Enterprise RAG systems, evaluating business impact and KPIs.</li>
</ul>

<p><strong>Tools & Technologies</strong></p>
<ul>
  <li>AWS, Python, PyTorch, SQL, LLMs, Fine-tuning, Power BI, Tableau, Excel/VBA, JIRA, Git</li>
</ul>

<p><strong>My Focus</strong></p>
<p>While my foundation is rooted in data and product, my current focus is on AI-powered solutions—with an emphasis on practical impact and business alignment.</p>

<p><strong>Recent Project:</strong><br/>
<a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">AI Strategy Copilot – Retail Use Case</a><br/>
A smart assistant for retail strategy that uses LLMs and segmentation to drive planning and merchandising decisions.</p>

<p>Let’s connect and build the future together.</p>
                `,
                fr: `
<p>Je suis un professionnel orienté produit et guidé par les données, avec plus de 5 ans d'expérience dans les services bancaires et financiers, spécialisé en qualité des données, automatisation des flux de travail et gestion de produit. J'ai travaillé chez BNP Paribas et HSBC, où j'ai mené des projets à fort impact améliorant la conformité réglementaire, optimisant les opérations et favorisant la prise de décisions basée sur les données.</p>

<p>Actuellement, je poursuis un Master of Science en Data Science & Stratégie en IA à emlyon business school, où je me spécialise en machine learning, deep learning et modèles de langage (LLMs). Mon parcours académique comprend également un MBA en Finance & Analytics et un BTech en Informatique, me permettant d’aligner les objectifs business avec la mise en œuvre technique.</p>

<p><strong>Ce que j'apporte</strong></p>
<ul>
  <li>Expérience bancaire : Chez BNP Paribas et HSBC, j'ai dirigé des projets clés en assurance qualité des données, automatisation et optimisation produit — obtenant trois prix d'innovation, dont le <em>Kaizen Award</em>.</li>
  <li>Produit & Data Science : Création d'une application d'assistance à la stratégie produit avec Streamlit + LLMs + RAG, générant des recommandations pour plus de 5 000 produits de détail grâce à la segmentation, aux KPI et aux retours utilisateurs.</li>
  <li>Recherche en IA d'entreprise : Responsable d’un projet avec BNP Paribas sur l’adoption stratégique de RAG multimodaux open source, évaluant leur impact business et les KPI associés.</li>
</ul>

<p><strong>Outils & Technologies</strong></p>
<ul>
  <li>AWS, Python, PyTorch, SQL, LLMs, Fine-tuning, Power BI, Tableau, Excel/VBA, JIRA, Git</li>
</ul>

<p><strong>Mon objectif</strong></p>
<p>Bien que mes bases soient dans les données et le produit, je me concentre actuellement sur les solutions IA appliquées — avec une attention particulière à leur impact réel et leur alignement stratégique.</p>

<p><strong>Projet récent :</strong><br/>
<a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">Assistant stratégique IA – Cas d’usage Retail</a><br/>
Un assistant intelligent pour la stratégie de vente au détail, exploitant les LLMs et la segmentation pour piloter les décisions de planification et de merchandising.</p>

<p>Connectons-nous et construisons l’avenir ensemble.</p>
                `
            }
        },
        skills: {
            title: { en: "Skills", fr: "Compétences" },
            content: {
                en: `
<ul>
  <li><strong>Programming:</strong> Python, R, SQL, NoSQL, VBA (Excel Macros)</li>
  <li><strong>Libraries & Frameworks:</strong> PyTorch, TensorFlow, Keras, LangChain, Hugging Face, Scikit-learn, NumPy, Pandas</li>
  <li><strong>Data Tools:</strong> Power BI, Tableau, Advanced Excel, Power Query, Bloomberg, Reuters</li>
  <li><strong>Cloud & Platforms:</strong> AWS, GCP, Snowflake, Databricks</li>
  <li><strong>AI & ML:</strong> Machine Learning, Deep Learning, NLP, Large Language Models (LLMs), Fine-tuning, RAG architecture, Prompt Engineering</li>
  <li><strong>Version Control & DevOps:</strong> Git, GitHub, CUDA</li>
  <li><strong>Project Management:</strong> Agile, Scrum (Certified Scrum Product Owner), Jira</li>
  <li><strong>Domain Knowledge:</strong> Financial Markets, Product Management, Data Assurance, Regulatory Compliance, Retail Analytics</li>
</ul>
`,
                fr: `
<ul>
  <li><strong>Programmation :</strong> Python, R, SQL, NoSQL, VBA (Macros Excel)</li>
  <li><strong>Bibliothèques & Frameworks :</strong> PyTorch, TensorFlow, Keras, LangChain, Hugging Face, Scikit-learn, NumPy, Pandas</li>
  <li><strong>Outils de Données :</strong> Power BI, Tableau, Excel avancé, Power Query, Bloomberg, Reuters</li>
  <li><strong>Cloud & Plateformes :</strong> AWS, GCP, Snowflake, Databricks</li>
  <li><strong>IA & ML :</strong> Machine Learning, Deep Learning, NLP, Modèles de langage (LLMs), Fine-tuning, architecture RAG, Ingénierie de prompt</li>
  <li><strong>Contrôle de version & DevOps :</strong> Git, GitHub, CUDA</li>
  <li><strong>Gestion de Projet :</strong> Agile, Scrum (Product Owner certifié), Jira</li>
  <li><strong>Domaine :</strong> Marchés financiers, Gestion de produit, Assurance qualité des données, Conformité réglementaire, Analyse du retail</li>
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

document.addEventListener('DOMContentLoaded', function() {
    updateContent();
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', toggleLanguage);

    // Section tab switching logic
    document.querySelectorAll('#main-nav .nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');

            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });

            document.querySelectorAll('#main-nav .nav-link').forEach(link => {
                link.classList.remove('active');
            });

            document.getElementById(targetId).classList.add('active');
            this.classList.add('active');
        });
    });
});
