/**
 * Programmatic SEO data for Wellfind Academic.
 *
 * Drives:
 *   /home-tutor-in-[locality]-patna   (SEO_LOCALITIES)
 *   /[boardOrClass]-home-tutor-patna  (SEO_CLASS_PAGES)
 *
 * Every entry carries its own intro, landmarks, schools and FAQs so the pages are
 * not near-duplicates of each other. School names are listed only as locality
 * reference points; Wellfind Academic is not affiliated with any of them.
 */

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoLocality {
  slug: string;
  name: string;
  /** Name used to pre-select the locality in the enquiry form (must match siteConfig.serviceAreas). */
  formLocality: string;
  nearbyLandmarks: string[];
  nearbySchools: string[];
  localIntro: string;
  localFaqs: SeoFaq[];
  /** Slugs of neighbouring SEO localities, used for internal linking. */
  neighbors: string[];
}

export interface SeoClassPage {
  slug: string;
  /** Short label used in links, e.g. "CBSE". */
  name: string;
  kind: "board" | "class";
  /** H1 text (without the trailing city). */
  h1: string;
  /** Pre-selected class in the enquiry form, if the page maps to exactly one class. */
  formClass?: string;
  intro: string;
  focusPoints: string[];
  /** Existing /classes/[slug] pages to link to. */
  relatedClassSlugs: string[];
  faqs: SeoFaq[];
}

export const SEO_LOCALITIES: SeoLocality[] = [
  {
    slug: "boring-road",
    name: "Boring Road",
    formLocality: "Boring Road",
    nearbyLandmarks: [
      "Boring Road Chauraha",
      "Boring Canal Road",
      "Anandpuri",
      "Hanuman Nagar",
    ],
    nearbySchools: [
      "St. Karen's Secondary School",
      "Notre Dame Academy",
      "DAV Public School",
      "Loyola High School",
    ],
    localIntro:
      "Boring Road is one of Patna's busiest residential-and-coaching belts, and parents here usually want a tutor who can fit around school hours and crowded schedules. Wellfind Academic matches a verified one-to-one home tutor for your child's class and subjects, so lessons happen at your home without the daily commute through Boring Road Chauraha traffic.",
    localFaqs: [
      {
        question: "Do you provide home tutors near Boring Road Chauraha and Canal Road?",
        answer:
          "Yes. We shortlist tutors who can reach homes around Boring Road Chauraha, Boring Canal Road and Anandpuri comfortably, so sessions start on time and stay consistent.",
      },
      {
        question: "Can a Boring Road tutor help with school exams as well as concepts?",
        answer:
          "Yes. Tutors plan around your child's school syllabus (CBSE, ICSE or Bihar Board), cover concept gaps first and then move to revision, class tests and exam practice.",
      },
      {
        question: "How soon can a home tutor start in Boring Road?",
        answer:
          "After you share class, subjects and timing, we review tutor availability for Boring Road and contact you with suitable options, usually within 24 to 48 hours, followed by a demo class.",
      },
    ],
    neighbors: ["kankarbagh", "bailey-road", "patliputra", "rajendra-nagar"],
  },
  {
    slug: "kankarbagh",
    name: "Kankarbagh",
    formLocality: "Kankarbagh",
    nearbyLandmarks: [
      "Kankarbagh Main Road",
      "Lohianagar",
      "Hanuman Nagar",
      "Kankarbagh Colony",
    ],
    nearbySchools: [
      "DAV Public School",
      "Carmel High School",
      "Patna Central School",
      "Kendriya Vidyalaya",
    ],
    localIntro:
      "Kankarbagh is a large, densely settled colony area where many families look for reliable academic support beyond the school day. Wellfind Academic connects Kankarbagh parents with verified home tutors for UKG to Class 10, so your child gets focused one-to-one attention inside the home they already study in.",
    localFaqs: [
      {
        question: "Which parts of Kankarbagh do your home tutors cover?",
        answer:
          "We match tutors across Kankarbagh Main Road, Lohianagar, Hanuman Nagar and the neighbouring colonies. Share your exact area in the enquiry form so we can check tutor proximity.",
      },
      {
        question: "Is a home tutor better than a coaching class in Kankarbagh?",
        answer:
          "Coaching suits some students, but one-to-one tuition lets the tutor work at your child's pace, repeat weak topics and give individual feedback, which large batches usually cannot.",
      },
      {
        question: "Can I change the tutor if the fit is not right?",
        answer:
          "Yes. Every match starts with a demo, and if the tutor is not the right fit, tell us and Wellfind Academic will arrange another suitable option.",
      },
    ],
    neighbors: ["boring-road", "rajendra-nagar", "bailey-road", "kadamkuan"],
  },
  {
    slug: "rajendra-nagar",
    name: "Rajendra Nagar",
    formLocality: "Rajendra Nagar",
    nearbyLandmarks: [
      "Rajendra Nagar Terminal",
      "Dinkar Golambar",
      "Arya Kumar Road",
      "Kankarbagh Road crossing",
    ],
    nearbySchools: [
      "Patna Central School",
      "St. Joseph's Convent School",
      "DAV Public School",
      "Kendriya Vidyalaya",
    ],
    localIntro:
      "Rajendra Nagar families often balance school, travel and board preparation, which makes flexible home tutoring especially useful. Wellfind Academic arranges verified one-to-one tutors around Rajendra Nagar, Dinkar Golambar and Arya Kumar Road so lessons fit your child's routine instead of the other way round.",
    localFaqs: [
      {
        question: "Do you have tutors near Rajendra Nagar Terminal and Dinkar Golambar?",
        answer:
          "Yes. We look at the distance between the tutor and your home and shortlist tutors who can travel to Rajendra Nagar, Dinkar Golambar and Arya Kumar Road regularly.",
      },
      {
        question: "Can I get a Class 10 board-exam tutor in Rajendra Nagar?",
        answer:
          "Yes. For Class 9 and 10 we match tutors experienced with board-pattern practice, previous-year papers and subject-wise revision plans.",
      },
      {
        question: "Can sessions be scheduled after school hours?",
        answer:
          "Yes. Evening and late-evening slots are the most popular, and morning or weekend timings can be arranged depending on tutor availability.",
      },
    ],
    neighbors: ["kankarbagh", "boring-road", "patliputra", "rajapull"],
  },
  {
    slug: "bailey-road",
    name: "Bailey Road",
    formLocality: "Bailey Road",
    nearbyLandmarks: [
      "Bailey Road Chauraha",
      "Jagdeo Path",
      "Raja Bazar",
      "Hartali Mor",
    ],
    nearbySchools: [
      "St. Michael's High School",
      "Notre Dame Academy",
      "DPS Patna",
      "Loyola High School",
    ],
    localIntro:
      "Bailey Road and the Jagdeo Path-Raja Bazar stretch are home to many working parents who want a dependable tutor without managing logistics themselves. Wellfind Academic handles tutor shortlisting, demo classes and follow-up, so your child receives structured one-to-one learning at home in the Bailey Road area.",
    localFaqs: [
      {
        question: "Do you cover Raja Bazar, Jagdeo Path and Hartali Mor?",
        answer:
          "Yes. Tutors are matched across Bailey Road, Jagdeo Path, Raja Bazar and Hartali Mor depending on your exact address and your child's class and subject needs.",
      },
      {
        question: "I work full-time. Can Wellfind coordinate with the tutor for me?",
        answer:
          "Yes. We coordinate the demo, schedule and follow-up so you do not have to chase tutors, and you can reach us on WhatsApp or phone whenever you need.",
      },
      {
        question: "Which subjects are available for Bailey Road students?",
        answer:
          "Mathematics, Science, English, Hindi, Social Science, Sanskrit and Computer for UKG to Class 10, as well as all-subject support for younger classes.",
      },
    ],
    neighbors: ["boring-road", "patliputra", "rajapull", "kankarbagh"],
  },
  {
    slug: "patliputra",
    name: "Patliputra",
    formLocality: "Patliputra",
    nearbyLandmarks: [
      "Patliputra Colony",
      "Patliputra Golambar",
      "Patliputra Station Road",
      "Sri Krishna Nagar",
    ],
    nearbySchools: [
      "Notre Dame Academy",
      "St. Karen's Secondary School",
      "DAV Public School",
      "Loyola High School",
    ],
    localIntro:
      "Patliputra Colony is a quieter, well-planned residential area where parents tend to prefer personal, home-based learning over crowded batches. Wellfind Academic matches Patliputra families with verified tutors for UKG to Class 10 and keeps the tutoring process managed and transparent from the first demo class onward.",
    localFaqs: [
      {
        question: "Are tutors available inside Patliputra Colony and nearby blocks?",
        answer:
          "Yes. We shortlist tutors who can reach Patliputra Colony, Golambar and Sri Krishna Nagar regularly, so travel time does not eat into your child's session.",
      },
      {
        question: "Can I request a specific teaching style or tutor gender?",
        answer:
          "You can mention a tutor gender preference and any teaching-style needs in the enquiry form. We try to match them wherever availability allows.",
      },
      {
        question: "Do you help with early classes like UKG to Class 3?",
        answer:
          "Yes. Early-class tutors focus on reading, writing, basic mathematics and building study habits through patient, activity-based teaching.",
      },
    ],
    neighbors: ["boring-road", "bailey-road", "rajendra-nagar", "saguna-mor"],
  },
  {
    slug: "danapur",
    name: "Danapur",
    formLocality: "Danapur",
    nearbyLandmarks: [
      "Danapur Cantt",
      "Danapur Railway Station",
      "Khagaul Road",
      "Saguna Mor",
    ],
    nearbySchools: [
      "DPS Patna",
      "St. Michael's High School",
      "Kendriya Vidyalaya Danapur",
      "St. Karen's Secondary School",
    ],
    localIntro:
      "Danapur is spread across a long corridor, so a tutor who can actually reach your home matters as much as a good teacher. Wellfind Academic checks locality fit before sharing a tutor profile, helping Danapur parents find reliable one-to-one home tuition around Danapur Cantt, Khagaul Road and Saguna Mor.",
    localFaqs: [
      {
        question: "Do you cover both Danapur Cantt and the Khagaul Road side?",
        answer:
          "Yes. We match tutors for Danapur Cantt, Khagaul Road and the Saguna Mor stretch. Share your exact colony so we only shortlist tutors who can reach you.",
      },
      {
        question: "Will the tutor teach as per CBSE or Bihar Board?",
        answer:
          "Yes. We match tutors to your child's board, whether CBSE, ICSE or Bihar State Board, and the lesson plan follows that school syllabus.",
      },
      {
        question: "What if my child needs help only in Maths and Science?",
        answer:
          "That is common. You can choose specific subjects in the form, and we will look for a tutor strong in exactly those.",
      },
    ],
    neighbors: ["saguna-mor", "khagaul", "patliputra", "phulwari-sharif"],
  },
  {
    slug: "kadamkuan",
    name: "Kadamkuan",
    formLocality: "Kadamkuan",
    nearbyLandmarks: [
      "Kadamkuan Chauraha",
      "Nala Road",
      "Sahityakar Colony",
      "Gandhi Maidan side",
    ],
    nearbySchools: [
      "St. Joseph's Convent School",
      "Patna Central School",
      "DAV Public School",
      "Carmel High School",
    ],
    localIntro:
      "Kadamkuan sits close to the old city and Gandhi Maidan, where lanes are narrow and travel for students can be tiring. Home tuition removes that stress, and Wellfind Academic helps Kadamkuan families find verified one-to-one tutors for UKG to Class 10 who can come to Nala Road, Sahityakar Colony and nearby areas.",
    localFaqs: [
      {
        question: "Can tutors reach narrow lanes around Nala Road and Sahityakar Colony?",
        answer:
          "Yes. We tell tutors your exact area in advance and only shortlist those comfortable with the route, so sessions run on schedule.",
      },
      {
        question: "Is demo class free before I commit to a tutor?",
        answer:
          "We arrange a 2-day demo so your child and you can judge the teaching style before regular classes begin. Check the current terms with our team on call or WhatsApp.",
      },
      {
        question: "Do you support students who are weak in English?",
        answer:
          "Yes. Tutors can focus on grammar, reading, writing and spoken confidence alongside regular school subjects, with simple explanations and regular practice.",
      },
    ],
    neighbors: ["kankarbagh", "rajendra-nagar", "rajapull", "boring-road"],
  },
  {
    slug: "khagaul",
    name: "Khagaul",
    formLocality: "Khagaul",
    nearbyLandmarks: [
      "Khagaul Railway Colony",
      "Khagaul Road",
      "Khagaul Bazaar",
      "Saguna-Khagaul stretch",
    ],
    nearbySchools: [
      "DPS Patna",
      "Kendriya Vidyalaya Danapur",
      "St. Michael's High School",
      "St. Karen's Secondary School",
    ],
    localIntro:
      "Khagaul families, including many in Railway Colony, often have to travel a long way for quality coaching. Wellfind Academic brings one-to-one tutoring to your door in Khagaul, with verified tutors matched on class, subject, timing and distance so learning stays regular rather than getting skipped.",
    localFaqs: [
      {
        question: "Do you provide home tutors inside Khagaul Railway Colony?",
        answer:
          "Yes, subject to tutor availability. Mention Railway Colony or your exact area in the form and we will check which tutors can reach you regularly.",
      },
      {
        question: "Can siblings be taught together?",
        answer:
          "In many cases yes, especially when the children are in nearby classes. Tell us the classes and subjects, and we will suggest a suitable arrangement.",
      },
      {
        question: "How are tutor fees decided for Khagaul?",
        answer:
          "Fees depend on class, number of subjects, weekly sessions and tutor experience. You select a budget range in the form, and we suggest tutors who fit it.",
      },
    ],
    neighbors: ["danapur", "saguna-mor", "phulwari-sharif", "patliputra"],
  },
  {
    slug: "phulwari-sharif",
    name: "Phulwari Sharif",
    formLocality: "Phulwari Sharif",
    nearbyLandmarks: [
      "AIIMS Patna Road",
      "Phulwari Sharif Station",
      "Ashiana-Digha side",
      "Hartali Chowk",
    ],
    nearbySchools: [
      "Don Bosco Academy",
      "St. Michael's High School",
      "Kendriya Vidyalaya",
      "DAV Public School",
    ],
    localIntro:
      "Phulwari Sharif is growing quickly along AIIMS Road, and many new families are still looking for trusted tutors nearby. Wellfind Academic helps Phulwari Sharif parents find verified one-to-one home tutors for UKG to Class 10, with managed matching, a demo class and follow-up instead of a one-off referral.",
    localFaqs: [
      {
        question: "Do you have tutors near AIIMS Patna Road?",
        answer:
          "We match tutors for Phulwari Sharif and the AIIMS Road belt based on availability. Share your exact area and we will confirm which tutors can reach you.",
      },
      {
        question: "My child is new to the school. Can a tutor help them catch up?",
        answer:
          "Yes. A tutor can start from the topics your child has missed, build a catch-up plan and then align with the school's ongoing syllabus.",
      },
      {
        question: "Can parents track progress?",
        answer:
          "Yes. Wellfind Academic coordinates feedback after demo and regular classes, so you can raise concerns early and keep learning on track.",
      },
    ],
    neighbors: ["khagaul", "danapur", "rajapull", "saguna-mor"],
  },
  {
    slug: "rajapull",
    name: "Rajapull",
    formLocality: "Rajapull",
    nearbyLandmarks: [
      "Rajapull Chauraha",
      "Bailey Road side",
      "Gola Road crossing",
      "Rajapul Bazaar",
    ],
    nearbySchools: [
      "St. Michael's High School",
      "Notre Dame Academy",
      "DPS Patna",
      "Loyola High School",
    ],
    localIntro:
      "Rajapull connects central Patna with the Bailey Road corridor, and parents here usually want convenient, time-efficient tuition. Wellfind Academic matches verified home tutors for Rajapull families across UKG to Class 10, so your child studies at home in a calm environment with a teacher chosen for their class and subjects.",
    localFaqs: [
      {
        question: "Is Rajapull covered by Wellfind home tutors?",
        answer:
          "Yes. We match tutors around Rajapull Chauraha and the Bailey Road side. Add your colony in the enquiry form for the best match.",
      },
      {
        question: "Can I get a tutor for just one subject?",
        answer:
          "Yes. Many parents book a tutor for a single subject such as Maths or English, and we match a specialist in that subject.",
      },
      {
        question: "What happens after I submit the enquiry?",
        answer:
          "Our team reviews tutor availability for your area, contacts you with options and arranges a demo class. Regular tuition begins only after you are comfortable with the fit.",
      },
    ],
    neighbors: ["bailey-road", "rajendra-nagar", "kadamkuan", "boring-road"],
  },
  {
    slug: "saguna-mor",
    name: "Saguna Mor",
    formLocality: "Saguna Mor",
    nearbyLandmarks: [
      "Saguna Mor Chauraha",
      "Danapur-Khagaul Road",
      "Ramjaipal Nagar side",
      "Patliputra Colony link road",
    ],
    nearbySchools: [
      "DPS Patna",
      "St. Michael's High School",
      "St. Karen's Secondary School",
      "Kendriya Vidyalaya Danapur",
    ],
    localIntro:
      "Saguna Mor is a busy junction linking Patliputra, Danapur and Khagaul, so parents in the area benefit from tutors who come home rather than the other way round. Wellfind Academic shortlists verified one-to-one tutors for Saguna Mor families, matched to class, subject, board and timing.",
    localFaqs: [
      {
        question: "Do you cover homes around Saguna Mor Chauraha?",
        answer:
          "Yes. We match tutors across the Saguna Mor, Danapur and Khagaul stretch. Share your colony in the form so we shortlist tutors who can reach you easily.",
      },
      {
        question: "Can I get a tutor for both Class 9 and Class 10 subjects?",
        answer:
          "Yes. For secondary classes we look for tutors strong in the specific subjects and board pattern your child follows.",
      },
      {
        question: "How is a Wellfind tutor different from a neighbourhood tutor?",
        answer:
          "Wellfind Academic reviews qualification, subject fit and locality fit before connecting you, arranges a demo and stays in touch for feedback, so quality does not depend on a single personal reference.",
      },
    ],
    neighbors: ["danapur", "khagaul", "patliputra", "phulwari-sharif"],
  },
];

export const SEO_CLASS_PAGES: SeoClassPage[] = [
  {
    slug: "cbse",
    name: "CBSE",
    kind: "board",
    h1: "CBSE Home Tutors",
    intro:
      "CBSE follows the NCERT syllabus, with a strong focus on concept clarity, application-based questions and regular assessments. Wellfind Academic matches Patna parents with verified one-to-one tutors who teach strictly to the CBSE pattern from UKG to Class 10.",
    focusPoints: [
      "NCERT-aligned lesson plans and chapter-wise revision",
      "Practice with CBSE-style sample papers and application questions",
      "Support for internal assessments, projects and periodic tests",
      "Class 10 board preparation with timed paper practice",
    ],
    relatedClassSlugs: ["class-9", "class-10", "class-8"],
    faqs: [
      {
        question: "Do your tutors teach strictly from the NCERT syllabus?",
        answer:
          "Yes. For CBSE students, tutors plan lessons around NCERT textbooks and the latest school syllabus, adding extra practice where your child needs it.",
      },
      {
        question: "Can a CBSE tutor help with Class 10 board exam preparation?",
        answer:
          "Yes. Tutors help with chapter revision, sample-paper practice and answer-writing so your child is comfortable with the board pattern.",
      },
      {
        question: "Which CBSE subjects can I choose?",
        answer:
          "Mathematics, Science, English, Hindi, Social Science, Sanskrit and Computer, or an all-subject plan for primary classes.",
      },
    ],
  },
  {
    slug: "icse",
    name: "ICSE",
    kind: "board",
    h1: "ICSE Home Tutors",
    intro:
      "ICSE places more emphasis on English language skills, detailed subject knowledge and written expression. Wellfind Academic finds Patna parents verified one-to-one home tutors who understand the ICSE pattern and help children handle its depth with confidence.",
    focusPoints: [
      "Strong grammar, comprehension and composition practice",
      "Detailed subject explanations for Science, Maths and Social Studies",
      "Guidance on ICSE-style long-answer writing",
      "Regular tests and revision before school exams",
    ],
    relatedClassSlugs: ["class-9", "class-10", "class-7"],
    faqs: [
      {
        question: "Do you have tutors who know the ICSE pattern?",
        answer:
          "Yes. We match tutors with ICSE teaching experience for your child's class and subjects, based on availability in your Patna locality.",
      },
      {
        question: "Can a tutor improve my child's English for ICSE?",
        answer:
          "Yes. Tutors can work on grammar, vocabulary, reading comprehension and writing, which matter in every ICSE subject.",
      },
      {
        question: "Is ICSE tuition available for primary classes too?",
        answer:
          "Yes. We support UKG to Class 10 across boards, including ICSE-pattern schools, depending on tutor availability.",
      },
    ],
  },
  {
    slug: "bihar-board",
    name: "Bihar Board",
    kind: "board",
    h1: "Bihar Board Home Tutors",
    intro:
      "Many Patna students follow the Bihar School Examination Board syllabus, with Hindi-medium and English-medium textbooks. Wellfind Academic matches one-to-one home tutors who teach to the BSEB pattern, helping students prepare steadily for school exams and the Class 10 board.",
    focusPoints: [
      "Lessons aligned to the BSEB syllabus and textbooks",
      "Hindi-medium and English-medium explanation as needed",
      "Previous-year question practice for Class 10 board exams",
      "Regular revision plans for terms and annual exams",
    ],
    relatedClassSlugs: ["class-9", "class-10", "class-8"],
    faqs: [
      {
        question: "Can I get a Hindi-medium tutor for Bihar Board?",
        answer:
          "Yes. Mention your preferred medium of instruction in the enquiry form and we will look for a tutor comfortable teaching in that language.",
      },
      {
        question: "Do tutors help with Bihar Board Class 10 exams?",
        answer:
          "Yes. Tutors help with chapter revision, previous-year question practice and answer-writing so your child feels prepared for the board exam.",
      },
      {
        question: "Is Bihar Board tuition available across Patna?",
        answer:
          "We match tutors across our Patna service areas such as Boring Road, Kankarbagh, Danapur and Bailey Road, depending on availability.",
      },
    ],
  },
  {
    slug: "class-10",
    name: "Class 10",
    kind: "class",
    h1: "Class 10 Home Tutors",
    formClass: "Class 10",
    intro:
      "Class 10 is a board-exam year, and consistent one-to-one guidance can make a real difference in confidence and scores. Wellfind Academic matches Patna students with verified Class 10 home tutors for CBSE, ICSE and Bihar Board who focus on concept strength, practice and revision.",
    focusPoints: [
      "Subject-wise revision schedules built backwards from the exam date",
      "Previous-year and sample-paper practice under timed conditions",
      "Doubt solving in Maths, Science and Social Science",
      "Answer-writing and time-management coaching",
    ],
    relatedClassSlugs: ["class-10", "class-9"],
    faqs: [
      {
        question: "When should Class 10 home tuition start?",
        answer:
          "Earlier is better. Starting at the beginning of the session gives time to fix weak chapters before the revision phase, but we also support students who join closer to the exams.",
      },
      {
        question: "Can I choose a tutor for specific Class 10 subjects?",
        answer:
          "Yes. You can select only Maths, Science or any combination, and we look for tutors strong in those subjects for your child's board.",
      },
      {
        question: "How many sessions per week are recommended?",
        answer:
          "It depends on your child's needs, but 4 to 6 sessions a week is common during Class 10. The schedule is agreed with the tutor directly.",
      },
    ],
  },
  {
    slug: "class-9",
    name: "Class 9",
    kind: "class",
    h1: "Class 9 Home Tutors",
    formClass: "Class 9",
    intro:
      "Class 9 is the foundation for Class 10, and the jump in difficulty surprises many students. Wellfind Academic matches Patna families with verified Class 9 home tutors who build strong basics in Maths and Science so that Class 10 feels manageable.",
    focusPoints: [
      "Strengthening Algebra, Geometry, Physics and Chemistry fundamentals",
      "Regular assignments and chapter tests to maintain consistency",
      "Support for the transition from middle school to secondary level",
      "Early exposure to board-style questions",
    ],
    relatedClassSlugs: ["class-9", "class-10"],
    faqs: [
      {
        question: "Why is Class 9 tuition important?",
        answer:
          "Many Class 10 topics build directly on Class 9 concepts. Fixing gaps early reduces pressure in the board year.",
      },
      {
        question: "Can the tutor help my child with school homework?",
        answer:
          "Yes. Tutors help with homework and assignments while also teaching the concepts behind them, so your child learns rather than just completes tasks.",
      },
      {
        question: "Is a demo class available for Class 9?",
        answer:
          "Yes. We arrange a demo so you and your child can judge the tutor's approach before starting regular classes.",
      },
    ],
  },
  {
    slug: "class-6-to-8",
    name: "Class 6 to 8",
    kind: "class",
    h1: "Class 6 to 8 Home Tutors",
    intro:
      "The middle-school years introduce more subjects, longer chapters and higher expectations. Wellfind Academic finds Patna parents verified home tutors for Class 6 to 8 who build clear concepts, steady study habits and exam confidence before secondary classes begin.",
    focusPoints: [
      "Concept-first teaching in Maths, Science and English",
      "Homework support and weekly practice routines",
      "Building study habits and time management",
      "Preparation for school tests and half-yearly or annual exams",
    ],
    relatedClassSlugs: ["class-6", "class-7", "class-8"],
    faqs: [
      {
        question: "Can one tutor teach all subjects for Class 6 to 8?",
        answer:
          "Sometimes. Many parents choose one tutor for Maths and Science and another for languages. We suggest the best arrangement for your child's needs.",
      },
      {
        question: "How does tuition help beyond homework?",
        answer:
          "Tutors revisit weak topics, build regular practice habits and prepare your child for the greater subject depth of Class 9 and 10.",
      },
      {
        question: "Do you cover all boards for Class 6 to 8?",
        answer:
          "Yes. We match tutors for CBSE, ICSE and Bihar Board students depending on the school syllabus.",
      },
    ],
  },
  {
    slug: "primary-ukg-to-5",
    name: "Primary (UKG to Class 5)",
    kind: "class",
    h1: "Primary Home Tutors (UKG to Class 5)",
    intro:
      "Young learners need patience, encouragement and a gentle pace. Wellfind Academic matches Patna parents with verified home tutors for UKG to Class 5 who make reading, writing and basic Maths enjoyable and build the habits children need for later classes.",
    focusPoints: [
      "Reading, writing and phonics for early learners",
      "Basic Maths, tables and number sense through simple activities",
      "Homework help and daily revision routines",
      "Regular feedback so parents stay informed",
    ],
    relatedClassSlugs: ["ukg", "class-1", "class-3", "class-5"],
    faqs: [
      {
        question: "How long should a primary class tuition session be?",
        answer:
          "Younger children usually do best with shorter sessions of about an hour, with short breaks. The tutor and parent agree on timing together.",
      },
      {
        question: "Do you provide tutors for UKG?",
        answer:
          "Yes. UKG tutors focus on alphabets, early reading, numbers and drawing skills through gentle, play-based teaching.",
      },
      {
        question: "Can parents be present during the session?",
        answer:
          "Yes. Sessions happen at your home, so parents can sit in, especially in the first few classes, and share feedback anytime.",
      },
    ],
  },
];

export const SEO_CITY = "Patna";

export function getSeoLocality(slug: string): SeoLocality | undefined {
  return SEO_LOCALITIES.find((item) => item.slug === slug);
}

export function getSeoClassPage(slug: string): SeoClassPage | undefined {
  return SEO_CLASS_PAGES.find((item) => item.slug === slug);
}

export function getSeoLocalityPath(slug: string): string {
  return `/home-tutor-in-${slug}-patna`;
}

export function getSeoClassPath(slug: string): string {
  return `/${slug}-home-tutor-patna`;
}

const LOCALITY_PATH_PATTERN = /^home-tutor-in-([a-z0-9-]+)-patna$/;
const CLASS_PATH_PATTERN = /^([a-z0-9-]+)-home-tutor-patna$/;

export type ParsedSeoSlug =
  | { type: "locality"; data: SeoLocality }
  | { type: "class"; data: SeoClassPage };

/** Resolves a single root path segment (e.g. "home-tutor-in-boring-road-patna") to its SEO page data. */
export function parseSeoSlug(segment: string): ParsedSeoSlug | null {
  const localityMatch = LOCALITY_PATH_PATTERN.exec(segment);
  if (localityMatch) {
    const data = getSeoLocality(localityMatch[1]);
    return data ? { type: "locality", data } : null;
  }

  const classMatch = CLASS_PATH_PATTERN.exec(segment);
  if (classMatch) {
    const data = getSeoClassPage(classMatch[1]);
    return data ? { type: "class", data } : null;
  }

  return null;
}

export function getAllSeoSlugs(): string[] {
  return [
    ...SEO_LOCALITIES.map((item) => `home-tutor-in-${item.slug}-patna`),
    ...SEO_CLASS_PAGES.map((item) => `${item.slug}-home-tutor-patna`),
  ];
}
