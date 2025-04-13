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
        overview: { title: { en: "Overview", fr: "Aperçu" }, content: { ... } },
        skills: { ... },
        education: { ... },
        experience: { ... },
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
        extras: {
            title: { en: "Extras", fr: "Extras" },
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

function updateContent() { ... }

function toggleLanguage() { ... }

document.addEventListener('DOMContentLoaded', function() { ... });
