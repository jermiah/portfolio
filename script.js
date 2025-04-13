let isEnglish = true;

const translations = {
    name: {
        en: "Jermiah Jerome",
        fr: "Jermiah Jerome"
    },
    title: {
        en: "Data Scientist | AI & ML Engineer",
        fr: "Scientifique des Données | Ingénieur IA & ML"
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
<p>I’m a data-driven product thinker with 5+ years of experience in banking and financial services, specializing in data quality, workflow automation, and product management. I’ve contributed to strategic initiatives at BNP Paribas and HSBC, delivering projects that improved regulatory compliance, streamlined operations, and enhanced decision-making through data.</p>

<p>Currently, I’m pursuing a Master of Science in Data Science & AI Strategy at emlyon business school, where I’m expanding my capabilities in machine learning, deep learning, and large language models (LLMs). My academic journey also includes an MBA in Finance & Analytics and a BTech in Computer Science, enabling me to bridge business objectives with technical innovation.</p>

<h4>What I Bring to the Table</h4>
<ul>
  <li><strong>Banking Expertise:</strong> Led impactful initiatives at BNP Paribas and HSBC focused on data assurance, process automation, and regulatory reporting — with multiple recognitions for innovation and delivery.</li>
  <li><strong>Product & Strategy Innovation:</strong> Developed a <em>Product Strategy Assistant App</em> using LLMs and Retrieval-Augmented Generation (RAG). This tool generated dynamic strategic recommendations for 3,000+ retail products by integrating performance KPIs, customer segmentation insights, and feedback-driven learning loops.</li>
  <li><strong>AI Research & Thought Leadership:</strong> Leading an in-company research project at BNP Paribas titled: <em>“Strategic Adoption of Open-Source Multimodal Enterprise RAG: Challenges, KPIs, and Business Impact.”</em></li>
</ul>

<h4>Featured Project</h4>
<p>
Product Strategy Assistant App Demo :
<a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">
GrandView by Prosol
</a>
</p>

<p>Let’s connect and build the future of AI-powered strategy and innovation together. <br>
Want to see awards, communities, and hackathons? Check out the Showcase section.</p>

                `,
                fr: `
<p>Je suis un professionnel orienté produit et données, avec plus de 5 ans d'expérience dans les services bancaires et financiers. Mon expertise porte sur la qualité des données, l'automatisation des workflows et la gestion de produit. J’ai mené des projets stratégiques chez BNP Paribas et HSBC, améliorant la conformité réglementaire, l'efficacité opérationnelle et la prise de décision basée sur les données.</p>

<p>Je poursuis actuellement un Master of Science en Data Science & Stratégie en IA à emlyon business school, où je renforce mes compétences en machine learning, deep learning et modèles de langage (LLMs). Mon parcours inclut également un MBA en Finance & Analytics ainsi qu’un BTech en Informatique, me permettant de faire le lien entre les enjeux business et la technologie.</p>

<h4>Ce que j’apporte</h4>
<ul>
  <li><strong>Expérience bancaire :</strong> Projets d’impact chez BNP Paribas et HSBC en assurance des données, automatisation et reporting réglementaire — avec plusieurs reconnaissances pour l’innovation et la performance.</li>
  <li><strong>Innovation produit & stratégie :</strong> Créateur de l’<em>Assistant Stratégique Produit</em>, une application développée avec LLMs et RAG. Elle génère des recommandations stratégiques dynamiques pour plus de 3 000 produits retail, en combinant indicateurs de performance, segmentation client et boucles de retour utilisateur.</li>
  <li><strong>Recherche en IA :</strong> Responsable d’un projet de recherche en entreprise chez BNP Paribas : <em>“Adoption stratégique du RAG multimodal open-source en entreprise : enjeux, KPIs et impact business.”</em></li>
</ul>

<h4>Projet en vedette</h4>
<p>
Démo de l’Assistant Stratégique Produit :
<a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">
GrandView by Prosol
</a>
</p>

<p>Connectons-nous et construisons ensemble l’avenir de la stratégie augmentée par l’IA.<br>
Tu veux découvrir les prix, hackathons et communautés ? Va voir la section Showcase.</p>

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
  <li><strong><a href="https://em-lyon.com/en" target="_blank">emlyon business school</a> × <a href="https://www.mcgill.ca/" target="_blank">McGill University</a></strong> – MSc in Data Science & AI Strategy<br/>2024–2025 · Paris, France & Montreal, Canada<br/><em>emlyon: CGE Accredited, EQUIS/AMBA/AACSB Triple Crown, #4 in France for Business Studies<br/>McGill: Top Canadian public university known for AI research and global excellence</em></li>
  <li><strong><a href="https://tsm.ac.in" target="_blank">Thiagarajar School of Management</a></strong> – MBA in Finance & Analytics<br/>2019–2021 · Madurai, India<br/><em>NAAC Accredited, Ranked among top private B-schools in South India</em></li>
  <li><strong><a href="https://www.nitt.edu/" target="_blank">National Institute of Technology, Tiruchirappalli</a></strong> – BTech in Computer Science and Engineering<br/>2014–2018 · Tiruchirappalli, India<br/><em>Top 10 Engineering Institutes in India (NIRF Rankings)</em></li>
</ul>
`,
                fr: `
<ul>
  <li><strong><a href="https://em-lyon.com/fr" target="_blank">emlyon business school</a> × <a href="https://www.mcgill.ca/" target="_blank">Université McGill</a></strong> – MSc en Data Science & Stratégie IA<br/>2024–2025 · Paris, France & Montréal, Canada<br/><em>emlyon : Accréditée CGE, Triple accréditation EQUIS/AMBA/AACSB, #4 en France<br/>McGill : Université publique canadienne reconnue pour la recherche en IA</em></li>
  <li><strong><a href="https://tsm.ac.in" target="_blank">Thiagarajar School of Management</a></strong> – MBA en Finance & Analytics<br/>2019–2021 · Madurai, Inde<br/><em>École accréditée NAAC, reconnue parmi les meilleures écoles du Sud de l'Inde</em></li>
  <li><strong><a href="https://www.nitt.edu/" target="_blank">Institut national de technologie de Tiruchirappalli</a></strong> – BTech en informatique<br/>2014–2018 · Tiruchirappalli, Inde<br/><em>Top 10 des instituts d’ingénierie en Inde (classements NIRF)</em></li>
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
    projects: {
            title: { en: "Projects", fr: "Projets" },
            content: {
                en: `
<h4>In-Company Projects</h4>
<ul>
  <li><strong>AI Strategy Copilot @ <a href="https://www.prosol.fr/" target="_blank">Prosol</a></strong>: A Streamlit + LLM-powered assistant for retail product strategy using RAG, unsupervised learning, feedback loops, and advanced prompt engineering. <a href="https://github.com/jermiah/Product-Strategy-App/blob/main/README.md" target="_blank">View Code</a> | <a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">See Demo</a></li>
  <li><strong>Business White Paper Research @ <a href="https://group.bnpparibas/" target="_blank">BNP Paribas</a></strong>: "Strategic Adoption of Open-Source Multimodal Enterprise RAG: Challenges, KPIs, and Business Impact." Focused on evaluating use cases, performance benchmarks, and implementation pathways for enterprise AI agents in banking.</li>
</ul>

<h4>Machine Learning & Data Science Projects <a href="https://github.com/jermiah/machine_learning/blob/main/README.md" target="_blank" style="font-size:0.75em; font-weight:normal; margin-left:8px;">(View code)</a></h4>
<ul>
  <li><strong>Bankruptcy Prediction</strong>: Built classification models using ensemble techniques (Logistic Regression + XGBoost) to detect bankruptcy in imbalanced datasets.</li>
  <li><strong>Length of Stay Prediction</strong>: Developed classification models using Random Forest, XGBoost, and CatBoost to estimate hospital stay duration and optimize healthcare resource allocation.</li>
  <li><strong>Cool Wipes - Linear Programming</strong>: Supply chain optimization using Gurobi for optimal plant location and demand satisfaction.</li>
</ul>

<h4>Deep Learning Projects <a href="https://github.com/jermiah/deep_learning/blob/main/README.md" target="_blank" style="font-size:0.75em; font-weight:normal; margin-left:8px;">(View code)</a></h4>
<ul>
  <li><strong>Speaker Recognition</strong>: Speaker identification using ECAPA-TDNN embeddings and a hybrid approach combining classification (neural network) and verification (cosine similarity). Features Gradio demo, audio preprocessing with torchaudio, and SpeechBrain embeddings.</li>
  <li><strong>Sentiment Classification (BERT)</strong>: NLP classification using fine-tuned BERT on IMDb movie review sentiments. Built with HuggingFace Transformers, includes tokenization, attention masking, and model evaluation.</li>
  <li><strong>Image Classification</strong>: Image recognition using transfer learning (ResNet). Features data augmentation, training visualization, and evaluation metrics for custom datasets.</li>
</ul>

<h4>Upcoming Project</h4>
<p><strong>Frugal AI</strong>: Designing a lightweight, offline assistant for Edge Devices using on-device LLMs for real-time translation and explanation in zero connectivity environments.</p>
`,
                fr: `
<h4>Projets en entreprise</h4>
<ul>
  <li><strong>AI Strategy Copilot chez <a href="https://www.prosol.fr/" target="_blank">Prosol</a></strong> : Assistant IA basé sur Streamlit + LLM pour la stratégie produit retail, intégrant RAG, apprentissage non supervisé, boucles de rétroaction et ingénierie de prompt avancée. <a href="https://github.com/jermiah/Product-Strategy-App/blob/main/README.md" target="_blank">Voir le code</a> | <a href="https://www.linkedin.com/posts/jermiah-jerome_ai-retail-streamlit-activity-7313457551096827904-baIb" target="_blank">Voir la démo</a></li>
  <li><strong>Recherche stratégique chez <a href="https://group.bnpparibas/" target="_blank">BNP Paribas</a></strong> : "Adoption stratégique des RAG open-source multimodaux en entreprise : défis, KPIs et impact business." Livre blanc axé sur les cas d’usage, les benchmarks de performance et les voies d’implémentation des agents IA en banque.</li>
</ul>

<h4>Projets de Machine Learning et Data Science <a href="https://github.com/jermiah/machine_learning/blob/main/README.md" target="_blank" style="font-size:0.75em; font-weight:normal; margin-left:8px;">(Voir le code)</a></h4>
<ul>
  <li><strong>Prédiction de faillite</strong> : Modèles de classification utilisant des techniques d'ensemble (régression logistique + XGBoost) pour détecter les faillites dans des jeux de données déséquilibrés.</li>
  <li><strong>Durée de séjour hospitalier</strong> : Modèles de classification avec Random Forest, XGBoost et CatBoost pour estimer la durée d’hospitalisation des patients et améliorer l'allocation des ressources.</li>
  <li><strong>Cool Wipes - Programmation linéaire</strong> : Optimisation de la chaîne logistique via Gurobi.</li>
</ul>

<h4>Projets de Deep Learning <a href="https://github.com/jermiah/deep_learning/blob/main/README.md" target="_blank" style="font-size:0.75em; font-weight:normal; margin-left:8px;">(Voir le code)</a></h4>
<ul>
  <li><strong>Reconnaissance vocale</strong> : Identification des locuteurs à partir d’audios à l’aide d’ECAPA-TDNN. Combine classification (réseau neuronal) et vérification par similarité (cosine). Démo Gradio, traitement audio avec torchaudio et embeddings SpeechBrain.</li>
  <li><strong>Classification des sentiments (BERT)</strong> : Classification NLP avec BERT fine-tuné sur les avis de films IMDb. Utilisation des Transformers HuggingFace, tokenisation, masquage d'attention et évaluation du modèle.</li>
  <li><strong>Classification d’images</strong> : Reconnaissance d’images avec transfert d’apprentissage (ResNet). Augmentation des données, visualisation de l'entraînement et évaluation sur jeux de données personnalisés.</li>
</ul>

<h4>Projet à venir</h4>
<p><strong>Frugal AI</strong> : Conception d’un assistant léger et hors ligne pour dispositifs Edge, utilisant des LLMs embarqués pour la traduction et l’explication en temps réel en l’absence de connectivité.</p>
`
            }
        },
        education: {
            title: { en: "Education", fr: "Éducation" },
            content: {
                en: `
<ul>
  <li><strong><a href="https://em-lyon.com/en" target="_blank">emlyon business school</a> × <a href="https://www.mcgill.ca/" target="_blank">McGill University</a></strong> – MSc in Data Science & AI Strategy<br/>2024–2025 · Paris, France & Montreal, Canada<br/><em>emlyon: CGE Accredited, EQUIS/AMBA/AACSB Triple Crown, #4 in France for Business Studies<br/>McGill: Top Canadian public university known for AI research and global excellence</em></li>
  <li><strong><a href="https://tsm.ac.in" target="_blank">Thiagarajar School of Management</a></strong> – MBA in Finance & Analytics<br/>2019–2021 · Madurai, India<br/><em>NAAC Accredited, Ranked among top private B-schools in South India</em></li>
  <li><strong><a href="https://www.nitt.edu/" target="_blank">National Institute of Technology, Tiruchirappalli</a></strong> – BTech in Computer Science and Engineering<br/>2014–2018 · Tiruchirappalli, India<br/><em>Top 10 Engineering Institutes in India (NIRF Rankings)</em></li>
</ul>
`,
                fr: `
<ul>
  <li><strong><a href="https://em-lyon.com/fr" target="_blank">emlyon business school</a> × <a href="https://www.mcgill.ca/" target="_blank">Université McGill</a></strong> – MSc en Data Science & Stratégie IA<br/>2024–2025 · Paris, France & Montréal, Canada<br/><em>emlyon : Accréditée CGE, Triple accréditation EQUIS/AMBA/AACSB, #4 en France<br/>McGill : Université publique canadienne reconnue pour la recherche en IA</em></li>
  <li><strong><a href="https://tsm.ac.in" target="_blank">Thiagarajar School of Management</a></strong> – MBA en Finance & Analytics<br/>2019–2021 · Madurai, Inde<br/><em>École accréditée NAAC, reconnue parmi les meilleures écoles du Sud de l'Inde</em></li>
  <li><strong><a href="https://www.nitt.edu/" target="_blank">Institut national de technologie de Tiruchirappalli</a></strong> – BTech en informatique<br/>2014–2018 · Tiruchirappalli, Inde<br/><em>Top 10 des instituts d’ingénierie en Inde (classements NIRF)</em></li>
</ul>
`
            }
        },
        education: {
            title: { en: "Education", fr: "Éducation" },
            content: {
                en: `
<ul>
  <li><strong><a href="https://em-lyon.com/en" target="_blank">emlyon business school</a> × <a href="https://www.mcgill.ca/" target="_blank">McGill University</a></strong> – MSc in Data Science & AI Strategy<br/>2024–2025 · Paris, France & Montreal, Canada<br/><em>emlyon: CGE Accredited, EQUIS/AMBA/AACSB Triple Crown, #4 in France for Business Studies<br/>McGill: Top Canadian public university known for AI research and global excellence</em></li>
  <li><strong><a href="https://tsm.ac.in" target="_blank">Thiagarajar School of Management</a></strong> – MBA in Finance & Analytics<br/>2019–2021 · Madurai, India<br/><em>NAAC Accredited, Ranked among top private B-schools in South India</em></li>
  <li><strong><a href="https://www.nitt.edu/" target="_blank">National Institute of Technology, Tiruchirappalli</a></strong> – BTech in Computer Science and Engineering<br/>2014–2018 · Tiruchirappalli, India<br/><em>Top 10 Engineering Institutes in India (NIRF Rankings)</em></li>
</ul>
`,
                fr: `
<ul>
  <li><strong><a href="https://em-lyon.com/fr" target="_blank">emlyon business school</a> × <a href="https://www.mcgill.ca/" target="_blank">Université McGill</a></strong> – MSc en Data Science & Stratégie IA<br/>2024–2025 · Paris, France & Montréal, Canada<br/><em>emlyon : Accréditée CGE, Triple accréditation EQUIS/AMBA/AACSB, #4 en France<br/>McGill : Université publique canadienne reconnue pour la recherche en IA</em></li>
  <li><strong><a href="https://tsm.ac.in" target="_blank">Thiagarajar School of Management</a></strong> – MBA en Finance & Analytics<br/>2019–2021 · Madurai, Inde<br/><em>École accréditée NAAC, reconnue parmi les meilleures écoles du Sud de l'Inde</em></li>
  <li><strong><a href="https://www.nitt.edu/" target="_blank">Institut national de technologie de Tiruchirappalli</a></strong> – BTech en informatique<br/>2014–2018 · Tiruchirappalli, Inde<br/><em>Top 10 des instituts d’ingénierie en Inde (classements NIRF)</em></li>
</ul>
`
            }
        },

        
 showcase : {
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

    // ✅ Set initial theme toggle label
    const isLight = document.body.classList.contains('light-mode');
    document.getElementById('mode-toggle').innerHTML = `<span class="button-icon">${isLight ? '🌑' : '☀️'}</span> ${isLight ? 'Dark mode' : 'Light mode'}`;

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
