export interface ClassData {
  slug: string;
  name: string;
  stage: "Pre-Primary" | "Primary" | "Middle School" | "Secondary";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  curriculumFocus: string;
  keySubjects: string[];
  learningOutcomes: string[];
  parentConcernsAddressed: string[];
  teachingApproach: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const classesData: Record<string, ClassData> = {
  ukg: {
    slug: "ukg",
    name: "UKG (Upper Kindergarten)",
    stage: "Pre-Primary",
    metaTitle: "UKG Home Tuition in Patna | Wellfind Academic",
    metaDescription:
      "Find patient, caring home tutors for UKG in Patna. Build phonics, early numeracy, handwriting, and joyful learning habits at home with Wellfind Academic.",
    h1: "Home Tuition for UKG Students in Patna",
    summary:
      "Upper Kindergarten is a foundational year where children transition from informal play to structured early literacy and numeracy. A patient home tutor helps your child develop confidence in reading, writing, and numbers in a gentle, encouraging environment.",
    curriculumFocus:
      "Phonics, two- and three-letter word blending, English & Hindi alphabet formation, number counting (1-100), simple addition/subtraction concepts, and conversational confidence.",
    keySubjects: [
      "English (Phonics, Sight Words & Reading)",
      "Mathematics (Number Sense & Basic Shapes)",
      "Hindi (Swar, Vyanjan & Word Formation)",
      "General Awareness & Environmental Sensitivity",
      "Handwriting & Fine Motor Skills",
    ],
    learningOutcomes: [
      "Comfortable phonics decoding and beginner reading habits.",
      "Clear number recognition, counting, and simple comparisons.",
      "Proper pencil grip and neat letter formation.",
      "Positive attitude towards daily learning routines.",
    ],
    parentConcernsAddressed: [
      "Child easily gets distracted during homework.",
      "Difficulty remembering letters or phonetic sounds.",
      "Reluctance to write or slow handwriting.",
      "Building a steady routine before entering Class 1.",
    ],
    teachingApproach:
      "Interactive, patient, and activity-blended learning using flashcards, storytelling, and structured daily practice to keep young learners engaged without pressure.",
    faqs: [
      {
        question: "How long should a tuition session be for a UKG child?",
        answer:
          "For UKG learners, 45 to 60 minutes per session is generally optimal to match their natural attention span and ensure learning remains joyful.",
      },
      {
        question: "Do you have tutors specialized in early childhood instruction?",
        answer:
          "Yes, we recommend tutors with patience and experience in early childhood education who know how to engage young children gently.",
      },
      {
        question: "Can the tutor assist with school worksheets and diary tasks?",
        answer:
          "Yes, tutors routinely guide children through their daily school worksheets and homework while reinforcing underlying concepts.",
      },
    ],
  },

  "class-1": {
    slug: "class-1",
    name: "Class 1",
    stage: "Primary",
    metaTitle: "Class 1 Home Tuition in Patna | Wellfind Academic",
    metaDescription:
      "Find nurturing home tutors for Class 1 in Patna. Strengthen reading, basic arithmetic, and consistent study habits with Wellfind Academic.",
    h1: "Home Tuition for Class 1 in Patna",
    summary:
      "Class 1 marks the beginning of primary schooling with formal textbooks, notebook writing, and introductory assessments. A dedicated home tutor helps children comfortably adapt to formal schooling and master basic concepts.",
    curriculumFocus:
      "Sentence reading, spelling rules, addition and subtraction within 100, simple word problems, environmental studies, and Hindi matras.",
    keySubjects: [
      "English (Reading Comprehension & Basic Grammar)",
      "Mathematics (Addition, Subtraction & Measurement)",
      "Environmental Studies (EVS)",
      "Hindi (Matras & Sentence Formation)",
      "General Knowledge",
    ],
    learningOutcomes: [
      "Independent reading of short textbook passages.",
      "Confident mental and written addition/subtraction.",
      "Correct spelling habits and neat notebook presentation.",
      "Smooth adjustment to daily homework expectations.",
    ],
    parentConcernsAddressed: [
      "Transition from kindergarten to formal multi-subject school days.",
      "Confusion with Hindi matras or English spelling patterns.",
      "Slow reading pace affecting comprehension.",
    ],
    teachingApproach:
      "Supportive one-on-one pacing focusing on concept clarity through practical examples, regular reading practice, and steady repetition.",
    faqs: [
      {
        question: "Can one tutor teach all subjects for Class 1?",
        answer:
          "Yes, for Class 1, parents usually prefer an all-subject home tutor who manages English, Maths, EVS, and Hindi seamlessly.",
      },
      {
        question: "How often should Class 1 tuition take place?",
        answer:
          "Most families choose 4 to 5 sessions per week to maintain a consistent daily study routine.",
      },
    ],
  },

  "class-2": {
    slug: "class-2",
    name: "Class 2",
    stage: "Primary",
    metaTitle: "Class 2 Home Tuition in Patna | Wellfind Academic",
    metaDescription:
      "Engaging home tuition for Class 2 students in Patna. Boost reading fluency, multiplication basics, and writing confidence with Wellfind Academic.",
    h1: "Home Tuition for Class 2 in Patna",
    summary:
      "In Class 2, children expand their vocabulary, encounter introductory multiplication and place value, and begin expressing thoughts in written sentences. Personal tutoring ensures foundational gaps are addressed early.",
    curriculumFocus:
      "Place value, skip counting, early multiplication, reading fluency, parts of speech basics (nouns, verbs), EVS life science basics, and Hindi sentence construction.",
    keySubjects: [
      "Mathematics (Place Value, 2-Digit Math, Tables)",
      "English (Grammar, Vocabulary & Story Comprehension)",
      "EVS (Plants, Animals, Community Helpers)",
      "Hindi (Vyakaran & Reading)",
    ],
    learningOutcomes: [
      "Mastery of basic multiplication tables and place value.",
      "Fluent textbook reading with accurate pronunciation.",
      "Ability to answer questions in complete sentences.",
      "Confidence in completing school assignments independently.",
    ],
    parentConcernsAddressed: [
      "Struggling to memorize multiplication tables.",
      "Difficulty understanding word problems in Mathematics.",
      "Need for structured supervision while parents work.",
    ],
    teachingApproach:
      "Step-by-step guidance combining conceptual explanation with structured problem solving and daily reading exercises.",
    faqs: [
      {
        question: "How does home tuition help with mathematics in Class 2?",
        answer:
          "Tutors break down abstract math concepts into visual and relatable examples, helping children understand 'why' before memorizing tables or formulas.",
      },
      {
        question: "Is all-subject coaching available for Class 2?",
        answer:
          "Yes, an all-subject tutor coordinates English, Maths, EVS, and Hindi according to the school syllabus.",
      },
    ],
  },

  "class-3": {
    slug: "class-3",
    name: "Class 3",
    stage: "Primary",
    metaTitle: "Class 3 Home Tuition in Patna | Wellfind Academic",
    metaDescription:
      "Help your child excel in Class 3 with home tuition in Patna. Focus on multiplication, division, grammar, and science basics with Wellfind Academic.",
    h1: "Home Tuition for Class 3 in Patna",
    summary:
      "Class 3 introduces more demanding mathematical operations including multiplication and division, along with detailed science and social topics. A home tutor provides the steady practice needed to keep pace with school standards.",
    curriculumFocus:
      "3-digit arithmetic, division basics, fractions introduction, formal grammar (tenses, adjectives, prepositions), science inquiries, and paragraph writing.",
    keySubjects: [
      "Mathematics (Multiplication, Division, Fractions, Time)",
      "English (Grammar, Creative Writing & Comprehension)",
      "Science / EVS (Living Things, Weather, Materials)",
      "Social Studies (Introduction to Maps & Heritage)",
      "Hindi (Vyakaran & Creative Writing)",
    ],
    learningOutcomes: [
      "Fluency in 3-digit multiplication and single-digit division.",
      "Clear understanding of fractions and word problem structures.",
      "Improved written expression and grammar accuracy.",
      "Readiness for class tests and term examinations.",
    ],
    parentConcernsAddressed: [
      "Increased school homework volume causing stress.",
      "Careless errors in mathematical calculations.",
      "Struggle to write answers in own words.",
    ],
    teachingApproach:
      "Focused concept explanations followed by immediate practice, error correction, and weekly revision quizzes.",
    faqs: [
      {
        question: "Can the tutor assist with both CBSE and ICSE Class 3 syllabus?",
        answer:
          "Yes, we connect you with tutors who understand the specific pacing and textbooks of your child's board.",
      },
      {
        question: "What is the typical class frequency for Class 3?",
        answer:
          "Most parents arrange 5 days a week, approximately 1 hour per session.",
      },
    ],
  },

  "class-4": {
    slug: "class-4",
    name: "Class 4",
    stage: "Primary",
    metaTitle: "Class 4 Home Tuition in Patna | Wellfind Academic",
    metaDescription:
      "Personalized home tuition for Class 4 in Patna. Master multi-step mathematics, grammar, science experiments, and social studies with Wellfind Academic.",
    h1: "Home Tuition for Class 4 in Patna",
    summary:
      "In Class 4, textbook content becomes noticeably more academic and analytical. Students need to understand multi-step math problems and write descriptive answers. A tutor ensures clear understanding rather than rote memorization.",
    curriculumFocus:
      "Large numbers, long division, factors and multiples, fractions, geometry basics, parts of speech, reading comprehension, and scientific observations.",
    keySubjects: [
      "Mathematics (Factors, Multiples, Long Division, Decimals)",
      "Science (Human Body, Plants, Matter & Energy)",
      "English (Grammar, Composition, Comprehension)",
      "Social Studies (Indian Geography, States & Capitals)",
      "Hindi (Bhasha aur Vyakaran)",
    ],
    learningOutcomes: [
      "Systematic problem-solving in arithmetic and geometry.",
      "Clear conceptual understanding of biological and physical science chapters.",
      "Strong command over English and Hindi grammar.",
      "Independent study discipline and effective exam preparation.",
    ],
    parentConcernsAddressed: [
      "Declining marks as syllabus complexity rises.",
      "Lack of conceptual clarity leading to rote cramming.",
      "Difficulty managing multiple subjects before exams.",
    ],
    teachingApproach:
      "Concept-first instruction with active questioning, diagram practice, and regular review of school notebooks.",
    faqs: [
      {
        question: "Do you provide all-subject tutors for Class 4?",
        answer:
          "Yes, comprehensive all-subject tutors are widely preferred and available for Class 4 students.",
      },
      {
        question: "How do tutors handle exam preparation in Class 4?",
        answer:
          "Tutors review school syllabi early, create chapter-wise revision notes, and conduct mock test sessions before school exams.",
      },
    ],
  },

  "class-5": {
    slug: "class-5",
    name: "Class 5",
    stage: "Primary",
    metaTitle: "Class 5 Home Tuition in Patna | Wellfind Academic",
    metaDescription:
      "Prepare your child for middle school with Class 5 home tuition in Patna. Comprehensive coverage of Maths, Science, English, and Social Studies.",
    h1: "Home Tuition for Class 5 in Patna",
    summary:
      "Class 5 is the milestone year completing primary school. Mastering fractions, decimals, introductory algebra, and scientific reasoning sets the stage for success in middle school. A home tutor solidifies these critical concepts.",
    curriculumFocus:
      "Fractions, decimals, percentages, unitary method, area & perimeter, formal grammar, paragraph & essay writing, scientific methods, and historical timelines.",
    keySubjects: [
      "Mathematics (Fractions, Decimals, Unitary Method, Geometry)",
      "General Science (Ecosystems, Skeletal/Nervous System, Matter)",
      "Social Science (Early Humans, Freedom Movement, Continents)",
      "English (Advanced Grammar & Composition)",
      "Hindi & Optional Sanskrit",
    ],
    learningOutcomes: [
      "Confidence with fractions, decimals, and basic percentages.",
      "Strong scientific vocabulary and ability to explain natural phenomena.",
      "Well-structured essay and letter writing skills.",
      "Readiness for the increased academic demands of Class 6.",
    ],
    parentConcernsAddressed: [
      "Need to build strong mathematical foundation before middle school.",
      "Student losing interest due to challenging math concepts.",
      "Desire to build self-confidence before higher classes.",
    ],
    teachingApproach:
      "Systematic problem-solving routines, conceptual clarity through real-world applications, and structured revision tests.",
    faqs: [
      {
        question: "Is Class 5 too early for subject-specific tutors?",
        answer:
          "An all-subject tutor is usually ideal, but if your child specifically struggles with Maths and Science, we can match a tutor with strong quantitative expertise.",
      },
      {
        question: "Can the tutor help with Sanskrit or Hindi?",
        answer:
          "Yes, please specify language requirements in your inquiry so we can match a tutor equipped to guide both subjects.",
      },
    ],
  },

  "class-6": {
    slug: "class-6",
    name: "Class 6",
    stage: "Middle School",
    metaTitle: "Class 6 Home Tuition in Patna | Wellfind Academic",
    metaDescription:
      "Class 6 home tuition in Patna for CBSE, ICSE & State Board. Master introductory algebra, separate science subjects, and critical reasoning.",
    h1: "Home Tuition for Class 6 in Patna",
    summary:
      "Class 6 brings a significant jump in curriculum structure: subjects diverge into distinct branches like Algebra, Geometry, Physics, Chemistry, Biology, History, and Civics. A focused home tutor helps students navigate this transition smoothly.",
    curriculumFocus:
      "Introduction to variables and algebra, integers, ratio and proportion, basic physics and chemistry principles, plant and cell biology, and ancient civilization history.",
    keySubjects: [
      "Mathematics (Integers, Algebra, Ratio, Geometry)",
      "Science (Food, Materials, Electricity, Living Organisms)",
      "Social Science (History, Civics, Geography)",
      "English (Literature & Applied Grammar)",
      "Hindi & Sanskrit",
    ],
    learningOutcomes: [
      "Comfort with abstract algebraic notation and negative integers.",
      "Understanding scientific concepts and answering reasoning questions.",
      "Improved analytical writing in English and Social Science.",
      "Effective time-management and self-study habits.",
    ],
    parentConcernsAddressed: [
      "Sharp decline in test scores after transitioning to middle school.",
      "Confusion with abstract math concepts like integers and algebra.",
      "Struggling to manage the sheer volume of separate textbooks.",
    ],
    teachingApproach:
      "Bridge-building explanations connecting concrete examples to abstract principles, structured homework routines, and periodic assessment.",
    faqs: [
      {
        question: "Can we hire separate tutors for Maths/Science and Humanities?",
        answer:
          "Yes, while many tutors cover both Maths and Science, we can also arrange separate specialists if required.",
      },
      {
        question: "How do tutors help with NCERT textbook exercises?",
        answer:
          "Tutors ensure the student understands the underlying concepts first, guides them through exemplar problems, and verifies their solutions.",
      },
    ],
  },

  "class-7": {
    slug: "class-7",
    name: "Class 7",
    stage: "Middle School",
    metaTitle: "Class 7 Home Tuition in Patna | Wellfind Academic",
    metaDescription:
      "Find dedicated Class 7 home tutors in Patna. Strengthen fundamentals in Mathematics, Science, and Languages for CBSE, ICSE & Bihar Board.",
    h1: "Home Tuition for Class 7 in Patna",
    summary:
      "In Class 7, academic standards deepen with algebraic equations, rational numbers, heat and temperature, and chemical reactions. Having an experienced home tutor prevents misunderstandings that could hinder later board years.",
    curriculumFocus:
      "Rational numbers, simple equations, lines & angles, triangles & congruence, acids/bases/salts, nutrition, physical/chemical changes, and medieval history.",
    keySubjects: [
      "Mathematics (Rational Numbers, Simple Equations, Congruence)",
      "Science (Acids/Bases, Heat, Respiration, Motion & Time)",
      "Social Science (Medieval India, Environment, Democratic Equality)",
      "English (Advanced Grammar, Comprehension & Writing)",
      "Hindi / Sanskrit",
    ],
    learningOutcomes: [
      "Proficiency in solving linear equations and geometric proofs.",
      "Accurate understanding of chemical and physical science concepts.",
      "High comprehension skills for complex textbook passages.",
      "Consistent performance across school mid-term and annual exams.",
    ],
    parentConcernsAddressed: [
      "Difficulty solving multi-step algebraic equations.",
      "Inability to grasp abstract science concepts from large classroom lectures.",
      "Procrastination and irregular study habits.",
    ],
    teachingApproach:
      "Logical, step-by-step mathematical problem solving, interactive concept clarification in science, and regular timed practice.",
    faqs: [
      {
        question: "Do you provide tutors who follow ICSE Class 7 syllabus?",
        answer:
          "Yes, we have tutors experienced in ICSE curricula, which often feature distinct Physics, Chemistry, and Biology textbooks.",
      },
      {
        question: "What is the recommended weekly schedule for Class 7?",
        answer:
          "Parents typically opt for 4 to 6 sessions per week, depending on whether they need Maths/Science focus or all-subject assistance.",
      },
    ],
  },

  "class-8": {
    slug: "class-8",
    name: "Class 8",
    stage: "Middle School",
    metaTitle: "Class 8 Home Tuition in Patna | Wellfind Academic",
    metaDescription:
      "Expert Class 8 home tuition in Patna. Build the crucial bridge to secondary board classes with strong Maths, Science, and English preparation.",
    h1: "Home Tuition for Class 8 in Patna",
    summary:
      "Class 8 is widely considered the critical foundational bridge for secondary board schooling. Mastery of linear equations, factorization, force and friction, and cell structures is vital for success in Classes 9 and 10.",
    curriculumFocus:
      "Linear equations in one variable, factorisation, exponents, mensuration, force & pressure, sound, metals & non-metals, cell structure, and modern Indian history.",
    keySubjects: [
      "Mathematics (Factorisation, Mensuration, Linear Equations, Exponents)",
      "Science (Force, Light, Metals/Non-Metals, Cell Biology)",
      "Social Science (Modern History, Resources, Indian Constitution)",
      "English (Grammar, Formal Letters, Descriptive Essays)",
      "Hindi / Sanskrit",
    ],
    learningOutcomes: [
      "Solid algebraic foundations essential for Class 9 mathematics.",
      "Clear conceptual understanding of physics laws and chemical properties.",
      "Confidence in framing long-answer questions independently.",
      "Strong academic discipline and self-testing habits.",
    ],
    parentConcernsAddressed: [
      "Anxiety about readiness for secondary board syllabus.",
      "Struggles with word problems in linear equations and mensuration.",
      "Need to build strong conceptual base before competitive exams.",
    ],
    teachingApproach:
      "Rigorous concept clarity, extensive numerical problem practice, chapter-wise test series, and personalized doubt clearance.",
    faqs: [
      {
        question: "Why is Class 8 foundation so important?",
        answer:
          "The topics covered in Class 8 directly reappear in greater depth in Classes 9 and 10. Gaps left in Class 8 often make secondary board years significantly harder.",
      },
      {
        question: "Can we focus only on Maths and Science in Class 8?",
        answer:
          "Yes, focusing on Mathematics and Science is very popular among Class 8 students, while managing languages independently.",
      },
    ],
  },

  "class-9": {
    slug: "class-9",
    name: "Class 9",
    stage: "Secondary",
    metaTitle: "Class 9 Home Tuition in Patna | Wellfind Academic",
    metaDescription:
      "Intensive Class 9 home tuition in Patna for CBSE, ICSE & Bihar Board. Master challenging Physics, Chemistry, Biology, and Mathematics concepts at home.",
    h1: "Home Tuition for Class 9 in Patna",
    summary:
      "Class 9 presents the steepest conceptual jump in school education. Abstract laws of motion, gravitation, mole concept, and coordinate geometry require deep intellectual engagement that large coaching classes often fail to deliver individually.",
    curriculumFocus:
      "Polynomials, coordinate geometry, linear equations in two variables, triangles & circles, motion, force & laws of motion, gravitation, atoms & molecules, and tissue biology.",
    keySubjects: [
      "Mathematics (Polynomials, Coordinate Geometry, Triangles, Circles)",
      "Physics (Motion, Laws of Motion, Gravitation, Work & Energy)",
      "Chemistry (Matter, Atoms & Molecules, Structure of Atom)",
      "Biology (Cell, Tissues, Diversity / Health)",
      "English & Social Science Support",
    ],
    learningOutcomes: [
      "Complete mastery of Class 9 mathematical proofs and theorems.",
      "Ability to solve complex multi-step physics numericals.",
      "Thorough grasp of chemical nomenclature and mole calculations.",
      "Confidence heading into the Class 10 board examination year.",
    ],
    parentConcernsAddressed: [
      "Sudden dip in marks between Class 8 and Class 9.",
      "Student feeling overwhelmed by coaching institute pace.",
      "Inability to complete school assignments and NCERT exemplar questions.",
    ],
    teachingApproach:
      "Subject-specialist mentoring focusing on deep conceptual derivation, continuous problem-solving, and regular chapter-end testing.",
    faqs: [
      {
        question: "Do you have tutors specialized in Class 9 Science and Maths?",
        answer:
          "Yes, we connect parents with subject specialists who have extensive experience teaching Class 9 secondary curricula.",
      },
      {
        question: "Can the tutor assist with NCERT Exemplar and reference books?",
        answer:
          "Yes, tutors routinely guide students through NCERT, Exemplar, and standard reference materials like R.D. Sharma or R.S. Aggarwal.",
      },
      {
        question: "How does home tuition compare to coaching institutes for Class 9?",
        answer:
          "In home tuition, 100% of the teacher's time is dedicated to your child, allowing immediate doubt clearance without peer pressure or travel fatigue.",
      },
    ],
  },

  "class-10": {
    slug: "class-10",
    name: "Class 10",
    stage: "Secondary",
    metaTitle: "Class 10 Home Tuition in Patna (Board Prep) | Wellfind Academic",
    metaDescription:
      "Experienced Class 10 home tuition in Patna for CBSE, ICSE & BSEB. Board exam strategy, concept clarity, sample papers, and doubt clearing with Wellfind Academic.",
    h1: "Home Tuition for Class 10 in Patna (Board Preparation)",
    summary:
      "Class 10 is a defining academic year culminating in board examinations. Personalized home tuition provides the structured study regimen, targeted doubt clearance, and previous-year question practice required to maximize board exam results.",
    curriculumFocus:
      "Real numbers, quadratic equations, arithmetic progressions, trigonometry, statistics, light (reflection & refraction), electricity, carbon compounds, life processes, and board sample papers.",
    keySubjects: [
      "Mathematics (Trigonometry, Quadratics, Geometry, Statistics)",
      "Science (Electricity, Magnetic Effects, Carbon Compounds, Life Processes)",
      "Social Science (History, Economics, Political Science, Geography)",
      "English & Hindi (Board Exam Strategy & Writing Skills)",
    ],
    learningOutcomes: [
      "Comprehensive syllabus completion ahead of pre-board examinations.",
      "Mastery of board question formats, step-marking, and time allocation.",
      "Extensive practice with previous 10 years' board question papers.",
      "Calm, disciplined exam mindset with reduced anxiety.",
    ],
    parentConcernsAddressed: [
      "Board exam stress and fear of mathematics or physics numericals.",
      "Lack of individual attention in large school or coaching batches.",
      "Need for structured revision schedules and realistic sample testing.",
    ],
    teachingApproach:
      "Goal-oriented board preparation: timely syllabus coverage, chapter-wise mock tests, rigorous answer-writing review, and focused doubt resolution.",
    faqs: [
      {
        question: "When should we arrange a home tutor for Class 10?",
        answer:
          "Starting at the beginning of the academic year is ideal to complete the syllabus by November or December, leaving ample time for sample papers and revision.",
      },
      {
        question: "Does the tutor conduct mock board exams?",
        answer:
          "Yes, tutors conduct timed chapter tests and full-syllabus mock papers adhering to the latest board marking schemes.",
      },
      {
        question: "Do you support ICSE and Bihar Board Class 10 as well as CBSE?",
        answer:
          "Yes, we match teachers based on their proven experience with your child's specific board examination requirements.",
      },
    ],
  },
};

