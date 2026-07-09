export const CONTACT = {
  name: "Corey Heckel",
  title: "Machine Learning Engineer",
  email: "coreyheckel3@gmail.com",
  phone: "(914) 336-7015",
  location: "Port Chester, NY",
  github: "https://github.com/coreyheckel3",
  linkedin: "https://www.linkedin.com/in/corey-heckel-991218271",
  resume: "/resume.pdf",
};

export type SkillCategory = {
  slug: string;
  name: string;
  blurb: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    slug: "programming-languages",
    name: "Programming Languages",
    blurb: "Languages I reach for across ML, backend, web, and embedded work.",
    skills: ["Python", "Go", "Groovy", "JavaScript", "TypeScript", "C#", "C++", "Java", "R", "Scala", "MATLAB", "Arduino", "HTML", "CSS"],
  },
  {
    slug: "machine-learning-ai",
    name: "Machine Learning & AI",
    blurb: "Classical ML, deep learning, and applied generative AI in production.",
    skills: [
      "Recommendation Systems", "Retrieval-Augmented Generation", "Agentic AI", "Prompt Engineering",
      "Embedding-Based Retrieval", "Demand Forecasting", "Model Evaluation", "Fine Tuning",
      "LangChain", "LangGraph", "MLflow", "FAISS", "CVXPY", "Cursor",
      "Linear Regression", "Logistic Regression", "Time Series", "ARIMA",
      "Linear Discriminant Analysis", "Decision Trees", "Random Forest", "Ensemble Learning",
      "Bias–Variance Tradeoff", "Support Vector Machines", "Bayesian Learning",
      "Unsupervised Learning", "Mixture of Gaussians", "Dimensionality Reduction",
      "K-Nearest Neighbors", "K-Means Clustering", "Naive Bayes",
      "Deep Learning", "Neural Networks", "Convolutional Neural Networks",
      "Attention", "Transformers", "PyTorch", "TensorFlow", "Keras", "Scikit-learn",
      "Hugging Face", "Vector Databases", "A/B Testing", "Feature Engineering",
    ],
  },
  {
    slug: "natural-language-processing",
    name: "Natural Language Processing",
    blurb: "From classical text pipelines to modern transformer architectures.",
    skills: [
      "Sentiment Analysis", "Text Classification", "Tokenization",
      "Named Entity Recognition", "Dependency Parsing", "Word Embeddings",
      "Text Similarity", "Language Modeling", "BERT", "GloVe", "Word2Vec",
      "TF-IDF", "SpaCy", "Cohere", "Seq2Seq", "Encoder–Decoder",
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    blurb: "Shipping, scaling, and observing services across AWS and beyond.",
    skills: [
      "AWS", "Lambda", "SageMaker", "API Gateway", "REST APIs", "S3", "EMR",
      "CloudWatch", "Docker", "Databricks", "Spark", "Jenkins", "Airflow",
      "Terraform", "Terragrunt", "IoT", "CI/CD", "GitHub Actions",
    ],
  },
  {
    slug: "database-query",
    name: "Database & Query Languages",
    blurb: "Relational, document, graph, and managed data stores.",
    skills: ["PostgreSQL", "DynamoDB", "MongoDB", "GraphQL", "Firebase", "Lakebase", "Airtable", "SQL", "Redis"],
  },
  {
    slug: "web-technologies",
    name: "Web Technologies",
    blurb: "Full-stack web — React-first, comfortable everywhere else.",
    skills: [
      "React", "Next.js", "Node.js", "Express", "Flask", "Mongoose", "jQuery",
      "Axios", "Angular", "Socket.IO", "Bootstrap", "Redis", "Gulp", "Vue",
      "Tailwind CSS", "Figma", "Webflow", "Handlebars", "OAuth", "Redux",
      "Vite", "Phaser", "Mailgun",
    ],
  },
  {
    slug: "testing-qa",
    name: "Testing & QA",
    blurb: "Confidence through tests, linting, and production observability.",
    skills: [
      "Unit Testing", "Automated Lambda Tests", "CircleCI", "Jenkins",
      "Postman", "Linting", "Pre-commit Hooks", "CloudWatch", "SignalFx",
      "Splunk", "Integration Testing", "Load Testing",
    ],
  },
  {
    slug: "data-viz",
    name: "Data Visualization & Analysis",
    blurb: "Turning data into decisions through dashboards and notebooks.",
    skills: [
      "Pandas", "NumPy", "Spark", "SciPy", "Matplotlib", "Plotly", "Seaborn",
      "Power BI", "Excel", "Adobe", "Dashboards", "Tableau", "Statsmodels",
    ],
  },
  {
    slug: "documentation",
    name: "Documentation & Productivity",
    blurb: "Tools for keeping work organized, traceable, and shareable.",
    skills: [
      "Jira", "Confluence", "UML", "LaTeX", "Overleaf", "Lucidchart",
      "Jupyter", "Notion", "Linear", "Markdown", "Mermaid",
    ],
  },
  {
    slug: "engineering-craft",
    name: "Engineering Craft",
    blurb: "Cross-cutting practices that show up in every project I ship.",
    skills: [
      "Versioning", "Python Packaging", "API Wrappers", "Data Migrations",
      "Infrastructure Migrations", "Prototyping", "Structured Logging",
      "Load Testing", "Cost Optimization", "Code Review", "Mentorship",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
  tech?: string[];
  sites?: { label: string; url: string }[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Machine Learning Engineer II",
    company: "Nike",
    period: "Mar 2025 — Present",
    bullets: [
      "Developed and deployed multiple production recommendation models from 0 to 1, driving a 23.7% increase in Add-to-Cart rate, 13.3% lift in average order value, and $245M in incremental revenue.",
      "Designed and deployed an AI-powered Draft Order tool for Account Executives, reducing order drafting time from 2–5 days to under 1 hour and saving 600,000+ hours of AE time annually.",
      "Led a cross-functional effort to eliminate dead-end searches using embedding-based similarity matching across the product catalog, increasing product discovery coverage from 0% to 95% of search traffic.",
      "Migrated recommendation system serving from Databricks to AWS, cutting operating costs by 90%, latency by ~50%, and scaling throughput from 200 RPS to 550+ RPS.",
      "Designed and implemented a delta egress pipeline that reduced AWS egress and storage costs by 55% by replacing full-table daily transfers with incremental processing.",
    ],
    tech: ["Python", "Go", "PyTorch", "AWS", "SageMaker", "Lambda", "S3", "DynamoDB", "EC2", "EMR", "API Gateway", "Databricks", "Spark", "Airflow", "Docker", "Jenkins", "Terraform", "Terragrunt", "CloudWatch", "SignalFx", "Splunk", "Firehose", "Jira", "Confluence", "Recommendation Systems", "Embedding-Based Retrieval", "Two-Tower Models", "FAISS", "MLflow", "Demand Forecasting", "Order Optimization", "Agentic AI", "GenAI", "LangChain", "LangGraph", "Model Evaluation", "A/B Testing", "Feature Engineering", "Cursor", "Cost Optimization"],
  },
  {
    role: "Software Engineer (Contract)",
    company: "Posh",
    period: "Jan 2025 — Present",
    bullets: [
      "Designed and developed custom marketing websites in Webflow for Posh's event-organizer clients to showcase events and drive ticket sales, contributing to higher conversion rates.",
      "Implemented Meta Pixel and event tracking to capture ad performance data, enabling accurate attribution and informing campaign spend.",
      "Integrated Google Analytics across client sites, surfacing insights on traffic sources, unique visitors, and user behavior to guide marketing decisions.",
      "Collaborated with clients to align website design with brand identity, event goals, and ticket sales objectives.",
      "Revamped Pug templates for Mailgun to apply new branding, enhancing email consistency and engagement.",
    ],
    tech: ["Webflow", "Pug", "Mailgun", "Meta Pixel", "Google Analytics", "HTML", "CSS", "JavaScript", "Notion", "Linear", "Laylo", "Airtable", "CMS"],
    sites: [
      { label: "Vesper NYC", url: "https://vespernyc.com" },
      { label: "Paraiso NYC", url: "https://paraisonyc.com" },
      { label: "Riva Sunset", url: "https://rivasunset.com" },
      { label: "Pied Piper Productions", url: "https://piedpiperproductions.com" },
      { label: "Downtown Bar Fest", url: "https://downtownbarfest.com" },
      { label: "My House Como", url: "https://myhousecomo.com" },
      { label: "Mirari Presents", url: "https://miraripresents.com" },
      { label: "Palma Day Club", url: "https://palmadayclub.com" },
      { label: "Azure Day Party", url: "https://azuredayparty.com" },
      { label: "Above Ten", url: "https://aboveten.com" },
    ],
  },
  {
    role: "Graduate Research Assistant",
    company: "Stevens Institute of Technology",
    period: "May 2023 — Dec 2024",
    bullets: [
      "Developed an augmented reality system in C# that empowers blind users to write using audio feedback, achieving 90% handwriting recognition accuracy.",
      "Enhanced handwriting accuracy by 30% by targeting faults in handwriting attempts identified by CNNs.",
    ],
    tech: ["C#", "Unity", "Augmented Reality", "Convolutional Neural Networks", "PyTorch", "Accessibility"],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Stevens Institute of Technology",
    period: "May 2022 — Aug 2022",
    bullets: [
      "Conducted a case study of 800+ participants analyzing how dashboard visuals affect strategic decision making — simplistic visuals increased decision speed by 15% and task completion by 5%.",
      "Optimized an artillery dashboard for the Department of Defense using insights from the case study.",
    ],
    tech: ["Dashboards", "Data Visualization", "User Research", "A/B Testing", "Statistical Analysis"],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Stevens Institute of Technology",
    period: "May 2021 — Aug 2021",
    bullets: [
      "Analyzed high-speed motion capture data to evaluate joint movement and biomechanical inefficiencies, contributing to a 15% reduction in deceleration injury risk.",
      "Developed MATLAB scripts to process kinematic data and optimize pitching mechanics, improving velocity, accuracy, and efficiency by up to 10%.",
    ],
    tech: ["MATLAB", "Motion Capture", "Biomechanics", "Signal Processing", "Data Analysis"],
  },
  {
    role: "Graduate Course Assistant — SSW 625: AI for Software Engineering",
    company: "Stevens Institute of Technology",
    period: "Sep 2024 — Dec 2024",
    bullets: [
      "Assisted the professor with tool installation and setup, assignment grading, and student inquiries.",
    ],
    tech: ["Java", "Maven", "GitHub", "Remote Desktop"],
  },
  {
    role: "Lead Game Developer — Island Escape (Personal)",
    company: "Independent",
    period: "May 2023 — Present",
    bullets: [
      "Building an open-world, survival, story-mode game where the player crash-lands on an island, interacts with natives, explores, and gathers resources to build a ship.",
      "Designed terrain and developed shaders to simulate ocean tide and waves.",
      "Developed inventory and storage systems plus user–wildlife interactions.",
    ],
    tech: ["Unity", "C#", "HLSL Shaders", "Game Design", "Terrain Systems"],
  },
  {
    role: "Lead Designer & Developer — coreyheckel.dev (this site)",
    company: "Personal",
    period: "2026",
    bullets: [
      "Designed and built this portfolio from scratch on TanStack Start (React 19 + TypeScript + Vite).",
      "Custom editorial design system with semantic Tailwind v4 tokens — no off-the-shelf templates.",
      "Static-first content architecture with file-based routing, accessible navigation, and a freelance contact surface.",
    ],
    tech: ["TanStack Start", "React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Figma"],
  },
];

export type EducationEntry = {
  degree: string;
  school: string;
  period: string;
  gpa: string;
  awards: string[];
  courses: { group: string; items: string[] }[];
};

export const EDUCATION: EducationEntry[] = [
  {
    degree: "Master of Science, Machine Learning",
    school: "Stevens Institute of Technology",
    period: "May 2024 — Dec 2024",
    gpa: "3.97",
    awards: ["Pinnacle Scholar", "Dean's List", "High Honor"],
    courses: [
      {
        group: "Machine Learning & AI",
        items: [
          "Machine Learning", "Artificial Intelligence",
          "Machine Learning: Fundamentals & Applications", "Deep Learning",
          "Natural Language Processing", "Applied Machine Learning",
          "Applied Statistics with Applications in Finance", "Big Data Technologies",
        ],
      },
    ],
  },
  {
    degree: "Bachelor of Engineering, Software Engineering",
    school: "Stevens Institute of Technology",
    period: "Sep 2020 — May 2024",
    gpa: "3.72",
    awards: ["Pinnacle Scholar", "Phi Sigma Kappa", "Club Baseball", "Dean's List", "High Honor", "Order of the Engineer"],
    courses: [
      {
        group: "Software Engineering",
        items: [
          "Individual Software Engineering", "Object Oriented Software Engineering",
          "Modeling & Simulation", "Software Engineering Design",
          "Software Requirements Engineering", "Agile Methods for Software Development",
          "Software Testing, Quality Assurance & Maintenance",
          "Software Cost Estimation & Metrics", "Systems Engineering Architecture",
        ],
      },
      {
        group: "Domain Electives",
        items: [
          "Web Programming I", "Web Programming II",
          "Database Management Systems", "C++ Programming in Finance",
          "Visualizing Society",
        ],
      },
      {
        group: "Economics & Finance",
        items: [
          "Engineering Economics", "Logistics & Supply Chain Management",
          "Entrepreneurial Thinking", "C++ Programming in Finance",
          "Applied Statistics with Applications in Finance",
        ],
      },
      {
        group: "General Engineering",
        items: [
          "Engineering Graphics", "Engineering Experiences",
          "Seminar in Mechanical Engineering", "Introduction to Systems Thinking",
          "Field Sustainable Systems with Sensors", "Circuits & Systems",
          "Structural Performance & Failure", "Mechanics of Solids",
          "Systems with Analog Circuits", "Materials Selection & Process Optimization",
          "Materials Processing",
        ],
      },
      {
        group: "Mathematics",
        items: [
          "Differential Calculus", "Integral Calculus",
          "Series, Vectors, Functions & Surfaces", "Multivariable Calculus",
          "Differential Equations", "Discrete Mathematics",
          "Probability & Statistics",
        ],
      },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  role: string;
  period: string;
  tech: string[];
  summary: string;
  details: string;
  metric?: string;
  category: "ML" | "Web" | "Game" | "Hardware";
};

export const PROJECTS: Project[] = [
  {
    slug: "sonicscript",
    name: "SonicScript",
    role: "Graduate Researcher — Stevens Institute of Technology",
    period: "May 2023 — Dec 2024",
    category: "ML",
    metric: "90% recognition accuracy",
    tech: ["C#", "Unity", "Augmented Reality", "CNNs", "PyTorch", "Audio Feedback", "Accessibility", "HCI"],
    summary: "Augmented reality writing system that empowers blind users to write with real-time audio feedback.",
    details:
      "SonicScript is an AR system built in C# and Unity that lets blind users write in the air and receive real-time audio guidance. A CNN-based handwriting recognizer reaches 90% accuracy, and a fault-targeting feedback loop identifies specific stroke errors — improving handwriting accuracy by an additional 30% over the baseline model.",
  },
  {
    slug: "toxic-comment-classifier",
    name: "Toxic Comment Classifier",
    role: "NLP Engineer",
    period: "Nov 2024 — Dec 2024",
    category: "ML",
    tech: ["Python", "PyTorch", "TensorFlow", "Keras", "BERT", "GloVe", "GRU", "LSTM", "RNN", "Scikit-learn", "Kaggle"],
    summary: "Engineered and compared RNN, GRU, LSTM, and BERT models to classify online comments as toxic or acceptable.",
    details:
      "Used NLP techniques to accurately classify toxic comments. The team engineered and compared RNNs using GloVe, BERT, GRUs, and LSTMs — each leveraging different ML concepts — to predict whether a comment includes toxic language or is acceptable for online presence.",
  },
  {
    slug: "house-price-prediction",
    name: "House Price Prediction",
    role: "Machine Learning Engineer",
    period: "Nov 2024 — Dec 2024",
    category: "ML",
    tech: ["Python", "PySpark", "Scikit-learn", "CatBoost", "Random Forest", "Gradient Boosting", "LDA", "Matplotlib", "Seaborn"],
    summary: "Team project estimating house prices on a 3,000-sample Kaggle dataset — CatBoost delivered the best performance.",
    details:
      "Focused on data cleaning and feature engineering, then trained and evaluated Linear Regression, Random Forest, and CatBoost. CatBoost delivered the strongest performance, demonstrating ML's potential for accurate, data-driven real estate pricing.",
  },
  {
    slug: "bankruptcy-prediction",
    name: "Bankruptcy Prediction Model",
    role: "Machine Learning Engineer",
    period: "Jul 2024 — Aug 2024",
    category: "ML",
    metric: "98% accuracy",
    tech: ["Python", "Scikit-learn", "Logistic Regression", "Decision Trees", "Random Forest", "Gradient Boosting", "SVM", "Stacking Classifier", "SMOTE"],
    summary: "Stacked ensemble predicting bankrupt companies with 98% accuracy on financial data.",
    details:
      "Stacked Logistic Regression, Decision Trees, Random Forest, Gradient Boosting, and SVMs to predict company bankruptcy. The model iterates through kFold values 3–10 and combinations of base learners, selecting the best fit by lowest bias² and variance, with accuracy as the tiebreaker.",
  },
  {
    slug: "fraud-detection",
    name: "Fraudulent Transaction Detection",
    role: "Machine Learning Engineer",
    period: "May 2024 — Aug 2024",
    category: "ML",
    metric: "99.9% accuracy",
    tech: ["Python", "R", "Scikit-learn", "Logistic Regression", "Decision Trees", "Random Forest", "SMOTE"],
    summary: "Logistic regression and tree-based classifiers detecting fraudulent credit card transactions.",
    details:
      "Trained and tuned classification models in R and Python to detect fraudulent credit card transactions. The work was scoped to statistical methods from the Statistics With Applications in Finance course, achieving very high precision and recall on imbalanced data via SMOTE.",
  },
  {
    slug: "arpu-forecast",
    name: "ARPU Forecast — Africa",
    role: "Machine Learning Engineer",
    period: "May 2024 — Jul 2024",
    category: "ML",
    tech: ["Python", "Pandas", "GeoPandas", "NumPy", "Matplotlib", "Linear Regression", "Polynomial Regression", "ARIMA"],
    summary: "Forecasted ARPU and economic trends for African countries through 2035 to study the digital divide.",
    details:
      "Aggregated and cleaned unstructured financial and economic data from multiple sources to build a custom dataset, then trained, tested, and compared linear regression, polynomial regression, and ARIMA time-series models to produce a high-accuracy, generalized forecast.",
  },
  {
    slug: "echolab",
    name: "EchoLab",
    role: "Full Stack Engineer",
    period: "Feb 2024 — May 2024",
    category: "Web",
    tech: ["React", "Socket.IO", "Agora", "TailwindCSS", "Express", "MongoDB", "Redis", "Docker", "AWS"],
    summary: "Collaborative coding platform with voice chat, real-time rooms, and Docker-sandboxed code execution.",
    details:
      "EchoLab lets users collaboratively code in rooms with voice chat. User and room data are stored in MongoDB; code outputs are cached in Redis. Live updates are synchronized via Socket.IO. Submitted code runs in Docker images, and the platform is deployed on AWS Lambda.",
  },
  {
    slug: "course-review",
    name: "Student Course Review",
    role: "Web Developer",
    period: "Oct 2023 — Dec 2023",
    category: "Web",
    tech: ["Node.js", "Express", "Handlebars", "jQuery", "Bootstrap", "MongoDB"],
    summary: "Course search and review platform built with the Node/Express/Handlebars stack.",
    details:
      "Enables users to search university courses and leave reviews. All user, university, and course data lives in MongoDB. Built with Node, Express, and Handlebars, with jQuery for async data fetching. The team practiced agile with weekly sprints.",
  },
  {
    slug: "gedcom",
    name: "GEDCOM Parser",
    role: "Data Engineer & Scrum Master",
    period: "Sep 2023 — Nov 2023",
    category: "ML",
    tech: ["Python", "Excel", "Unit Test"],
    summary: "Python tool to analyze and extract genealogical data from GEDCOM datasets.",
    details:
      "Developed in Python to extract and analyze GEDCOM data. Ran weekly sprints with backlog, burndown, and velocity tracked in Excel. Built unit tests to validate every extraction against user stories.",
  },
  {
    slug: "irwin",
    name: "Irwin — Survey Platform",
    role: "Full Stack Developer",
    period: "Jan 2023 — May 2023",
    category: "Web",
    tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Auth0", "Bootstrap"],
    summary: "MERN-stack web survey system supporting authoring, taking, and analyzing surveys.",
    details:
      "Comprehensive survey system letting users create, edit, take, and analyze surveys. Built on the MERN stack with Auth0 for authentication. Owners can cleanly export responses to Excel for further analysis.",
  },
  {
    slug: "electoral-college",
    name: "Electoral College Map",
    role: "Lead Web Developer",
    period: "Mar 2023 — May 2023",
    category: "Web",
    tech: ["JavaScript", "HTML", "CSS"],
    summary: "Interactive map that lets users reallocate electoral votes by district to explore reform scenarios.",
    details:
      "Interactive visualization for exploring changes to the electoral voting system. Users can allocate votes from each district to a preferred candidate instead of winner-take-all by state, and import 2016/2020 results to see how outcomes would shift.",
  },
  {
    slug: "ducks-stress-lane",
    name: "Ducks In The Stress Lane",
    role: "Lead Game Developer",
    period: "Feb 2023 — Mar 2023",
    category: "Game",
    tech: ["JavaScript", "Phaser", "Node.js", "Express"],
    summary: "Stevens-themed reimagining of Jones In The Fast Lane — graduate while juggling health, hunger, sanity, and grades.",
    details:
      "Independently developed in Phaser, Node, and Express. Players make daily decisions — studying, napping, dining, the gym — that affect health, hunger, sanity, and grades. Successful runs end with graduation.",
  },
  {
    slug: "theres-options",
    name: "There's Options",
    role: "Full Stack Developer",
    period: "Feb 2022 — Apr 2022",
    category: "Web",
    tech: ["React", "Polygon API", "CSS", "Figma"],
    summary: "React app helping beginner traders explore top stocks, market news, and notable investor positions.",
    details:
      "Assists beginner traders with impactful decisions by surfacing top-performing stocks, market news, and notable investor positions. Domain filters let users compare stocks across sectors. UI designed in Figma; team ran weekly agile sprints.",
  },
  {
    slug: "arduino-robot",
    name: "Arduino Obstacle Robot",
    role: "Lead Software Engineer",
    period: "Feb 2021 — May 2021",
    category: "Hardware",
    tech: ["Arduino", "WeMos", "Ultrasonic Sensors", "SolidWorks"],
    summary: "Autonomous robot navigating an arena while avoiding obstacles, with a custom SolidWorks chassis.",
    details:
      "Assembled and programmed a robot with a WeMos board and ultrasonic sensors to navigate to a series of locations while avoiding obstacles. Chassis modeled in SolidWorks to mount hardware components.",
  },
  {
    slug: "iot-weather-sensor",
    name: "IoT Weather Sensor",
    role: "Lead Software Engineer",
    period: "Sep 2020 — Dec 2020",
    category: "Hardware",
    tech: ["Arduino", "WeMos", "IoT", "LabVIEW", "SolidWorks"],
    summary: "Collected humidity, light, and temperature data and streamed it to an IoT server with LabVIEW dashboards.",
    details:
      "Used a WeMos board and weather kit to collect humidity, light intensity, and temperature data over time. Sent the data to an IoT server and visualized it via LabVIEW dashboards.",
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  authors: string;
  url: string;
  summary: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title: "Exploring the Effectiveness of ChatGPT in Python Code Generation",
    venue: "IEEE ICMI",
    year: "2026",
    authors: "Heckel, C., et al.",
    url: "https://ieeexplore.ieee.org/document/11539810",
    summary:
      "Peer-reviewed study evaluating ChatGPT's ability to generate correct, idiomatic Python across a range of prompt styles and task difficulties.",
  },
];
