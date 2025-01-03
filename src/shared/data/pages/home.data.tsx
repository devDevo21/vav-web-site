import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
const heroImg = '/images/hero.jpg';
const nextJsLogo = '/images/nextjs-logo.png';
const reactLogo = '/images/react-logo.png';
const tailwindCssLogo = '/images/tailwind-css-logo.png';
const typescriptLogo = '/images/typescript-logo.png';
const cameraFrontImg = '/images/camera-front.jpg';
const cameraBackImg = '/images/camera-back.jpg';
const etudiantsGroup = '/images/etudiants.jpg';
const etudierruss = '/images/africaine.jpg'
const personel1 = '/images/personel1.png';
const personel2 = '/images/personel2.png';
const personel3 = '/images/personel3.png';
const personel5 = '/images/personel5.png';
const personel4 = '/images/personel4.png';
const pdg = '/images/pdg2.png';
const secg = '/images/secg.jpg';
const modepass = '/images/modepass.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    // <div>
    //   Free template for <span className="hidden md:inline">starts a website using</span> <span>Next.js</span> +{' '}
    //   <span className="sm:whitespace-nowrap">Tailwind CSS</span>
    // </div>
    <div>
      Votre <span className="text-white">voyage </span> pour la <span className='text-blue-600'>Fédération de Russie</span> commence {' '}
      <span className="sm:whitespace-nowrap text-red-500">ICI</span>
    </div>
  ),
  subtitle: (
    <>
      {/* <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          TailNext
        </span>{' '}
        is a production ready template to start your new website using <em>Next.js</em> + <em>Tailwind CSS</em>.
      </span>{' '}
      It has been designed following Best Practices, SEO, Accessibility, Dark Mode, great Page Speed, image
      optimization. */}

      <span className='text-white'>
        {`Étudier en Russie, c'est choisir une éducation de qualité reconnue mondialement, à des coûts abordables, tout en découvrant une culture riche et diversifiée.`}
      </span>
    </>
  ),
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
    targetBlank: true,
  },
  callToAction2: {
    text: 'En savoir plus',
    href: '/about',
  },
  backgroundImage: 'heroOneHomePage'
  // image: {
  //   src: heroImg,
  //   alt: 'Hero TailNext',
  // },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">TailNext</span>
      </>
    ),
    subtitle:
      "Elevating Your Digital Presence: Discover the Synergies Unleashed in Our Platform's Core Strengths, from Seamless Integration to Open Collaboration.",
    tagline: 'Features',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description:
        'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Ready-to-use Components',
      description:
        'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
      icon: IconComponents,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Best Practices',
      description:
        'By prioritizing maintainability and scalability through coding standards and design principles, your website stays robust and efficient.',
      icon: IconListCheck,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Excellent Page Speed',
      description:
        'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        "Boost online visibility with our SEO-friendly website. Effective strategies and practices enhance your website's search engine ranking, making it easier for users to find your content.",
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Open to new ideas and contributions',
      description:
        'We welcome new ideas and contributions to our platform. Whether you have feature suggestions, want to contribute code, or share insights, our platform is open for collaboration.',
      icon: IconBulb,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Pourquoi venir étudier en Russie ? ',
    // subtitle: 'Quando cetero his ne, eum admodum sapientem ut',
    // tagline: 'Content',
  },
  content:
    `Le choix de la russie pour les etudes, c’est choisir d'accéder à une formation de qualité, à des opportunités professionnelles uniques et à une immersion culturelle dans l’un des pays les plus fascinants au monde.`,
  items: [
    {
      title: 'Éducation de qualité reconnue mondialement',
      description:
        `Les universités russes figurent parmi les meilleures au monde, offrant des programmes innovants et des diplômes reconnus internationalement.`,
    },
    {
      title: 'Coûts abordables',
      description:
        `Les frais de scolarité et le coût de la vie en Russie sont compétitifs par rapport à d'autres destinations d'études, rendant l'éducation accessible à un plus grand nombre d'étudiants.`,
    },
    {
      title: 'Diversité des programmes',
      description:
        `Que ce soit en russe ou en anglais, les universités proposent une vaste gamme de programmes adaptés à différents intérêts et spécialités.`,
    },
    {
      title: 'Opportunités professionnelles',
      description:
        `En tant qu'étudiant en Russie, vous pouvez acquérir une expérience professionnelle grâce à des jobs étudiants, stages ou partenariats avec des entreprises locales et internationales.`,
    },
  ],
  image: {
    src: etudiantsGroup,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    `Terminer ses études en Russie ouvre la porte à de nombreuses opportunités, tant en Russie qu'à l'international. Les diplômés bénéficient de diplômes reconnus, d'une expertise recherchée et de réseaux professionnels pour lancer leur carrière ou poursuivre leurs projets.`,
  items: [
    {
      title: 'Travailler en Russie',
      description: `Les diplômés étrangers peuvent obtenir un permis de travail pour rester en Russie et travailler dans leur domaine.`
    },
    // {
    //   title: 'Enseignement et traduction',
    //   description: `Les diplômés maîtrisant le russe et leur langue maternelle peuvent devenir enseignants, traducteurs ou interprètes, un métier très demandé dans le commerce international et la diplomatie.`
    // },
    {
      title: 'Carrière internationale',
      description: `La Russie ayant des partenariats avec de nombreuses entreprises internationales, les diplômés peuvent accéder à des emplois dans des entreprises ou organisations opérant à l'échelle mondiale.`
    },
    {
      title: 'Entrepreneuriat',
      description: `La Russie offre des opportunités pour lancer une entreprise, avec des soutiens locaux pour les diplômés étrangers dans des domaines comme l’innovation, les technologies ou le commerce.`
    },
    // {
    //   title: 'Cu imperdiet posidonium sed',
    // },
    // {
    //   title: 'Nulla omittam sadipscing mel ne',
    // },
  ],
  image: {
    src: etudierruss,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: modepass,
    alt: 'Steps image',
  },
  header: {
    title: `Nous traitons votre procédure en 05 étapes`,
  },
  items: [
    {
      title: 'Étape 1',
      step: 'L’étude de dossier',
      description:
        `Cette étape consiste à examiner les documents soumis par l'étudiant (diplômes, relevés de notes, etc.) afin de vérifier leur conformité et leur admissibilité à un programme d'études en Russie. elle dure généralement 1 à 2 semaines`,
      icon: IconArrowDown,
    },
    {
      title: 'Étape 2',
      step: 'L’admission',
      description:
        `Cette étape consiste à votre acceptation dans une université en Russie après l'examen de votre dossier et la validation de vos qualifications.`,
      icon: IconArrowDown,
    },
    {
      title: 'Étape 3',
      step: 'Le contrat d’étude',
      description:
        `L'étape du contrat d'étude consiste à signer un accord officiel entre l'étudiant et l'établissement d'enseignement en Russie, précisant les conditions de la formation, les frais, ainsi que les obligations des deux parties.`,
      icon: IconArrowDown,
    },
    {
      title: 'Étape 4',
      step: 'La lettre d’invitation',
      description:
        `Consiste à obtenir un document officiel émis par une institution académique russe, invitant l'étudiant à venir étudier en Russie. Cette lettre est nécessaire pour entamer la procédure de demande de visa étudiant. elle est disponible dans un délai de 6 semaines`,
      icon: IconArrowDown,
    },
    {
      title: 'Étape 5',
      step: `l'interview à l'ambassade`,
      description:
        `Elle consiste à deposer votre dossier complet aupres d'un agent consulaire pour vérifier les informations de votre dossier, évaluer votre projet d'études en Russie et s'assurer de votre éligibilité pour le visa étudiant.`,
      icon: IconArrowDown,
    },
    {
      title: `Obtention du visa d'étude`,
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'Ce que disent nos clients sur nous',
    // subtitle:
    //   'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Nkoua Thierry',
      job: 'Etudiant en Ingénierie Logicielle',
      testimonial: `Je suis vraiment reconnaissant envers Vision Alpha Voyage. Non seulement ils m'ont accompagné dans toutes les démarches pour obtenir mon visa et mon inscription en Russie, mais ils m'ont aussi aidé à décrocher une bourse d'études qui a couvert une grande partie de mes frais.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Nkoua Thierry',
      },
      href: '/',
    },
    {
      name: 'Mbarga Audrey',
      job: 'Etudiante Médecine généraliste',
      testimonial: `Vision Alpha Voyage m'a facilité toutes les démarches pour rejoindre une université de médecine en Russie. Ils ont non seulement simplifié le processus, mais ils m'ont aussi aidée à bien m'intégrer. Je recommande vivement leurs services à tous les étudiants ambitieux.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Mbarga Audrey',
      },
      href: '/',
    },
    {
      name: 'Tchouamo Steve',
      job: 'Etudiant en Banque et Finance',
      testimonial: `Grâce à Vision Alpha Voyage, j'ai pu réaliser mon rêve d'étudier en Russie. Ils m'ont guidé tout au long de mes démarches et m'ont même trouvé un job étudiant dans un café, ce qui m’a permis de couvrir mes frais tout en poursuivant mes études en gestion d'entreprise.`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tchouamo Steve',
      },
      href: '/',
    },
    // {
    //   name: 'Sarah Johnson',
    //   job: 'Business Owner',
    //   testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
    //   image: {
    //     src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    //     alt: 'Sarah Johnson',
    //   },
    //   href: '/',
    // },
    // {
    //   name: 'Keith Young',
    //   job: 'Freelance Developer',
    //   testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
    //   image: {
    //     src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    //     alt: 'Keith Young',
    //   },
    //   href: '/',
    // },
    // {
    //   name: 'Lisa Gordon',
    //   job: 'Project Manager',
    //   testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
    //   image: {
    //     src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    //     alt: 'Lisa Gordon',
    //   },
    //   href: '/',
    // },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Questions fréquemments demandées',
    subtitle:
      'Ici nous répondons avec le plus de précision possible aux questions fréquemment posées par nos prospects ',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'Quel est la durée de la procédure ?',
      description: `La durée de la procédure est estimée à quatre (04) mois. Cela signifie que toutes les étapes nécessaires, depuis le dépôt de la demande jusqu'à la finalisation, prennent environ ce laps de temps. Cependant, cette durée peut varier en fonction des spécificités du dossier ou des délais administratifs éventuels.`,
    },
    {
      title: 'Quels documents sont nécessaires pour un visa étudiant ?',
      description: `Les documents nécessaires pour démarrer votre procédure sont : scan du passeport et de l'original du diplôme (Baccalauréat, Licence, Master) et/ou le relevé de notes... À noter que les diplômes de licence et de master doivent être délivrés par une université d'État (Licence ou Master académique ).`,
    },
    {
      title: "Offrez-vous des services de traduction ou de légalisation ?",
      description: `Vision Alpha Voyage propose un service de traduction des documents en langue russe. Cependant, nous n’assurons pas la légalisation des documents auprès de l’ambassade de Russie au Cameroun. Vous devrez effectuer cette étape directement auprès des autorités compétentes.`,
    },
    {
      title: "Quel est le cout total de la procédure ?",
      description: `Le coût total de la procédure s'élève à 3 200 000 FCFA. Ce montant inclut : une année scolaire / un an de logement / un an d'assurance maladie / assistance job / installation + accompagnement / renouvellement, le tout assurée par Vision Alpha Voyage... toute fois, Le prix peut être ajusté en fonction des besoins spécifiques de chaque profil.`,
    },
    {
      title: 'La procédure étudiante concerne tous les niveaux d’études ?',
      description: `Oui, La procédure concerne tous les trois cycles du système LMD à savoir : Licence (Bachelor), Master, Doctorat `,
    },
    {
      title: 'Puis-je effectuer des jobs étudiants en Russie avec un visa étudiant ?',
      description: `Chez Vision Alpha Voyage, nous offrons des solutions sur mesure qui permettent aux étudiants de travailler en Russie avec un visa étudiant, leur offrant ainsi l'opportunité de couvrir leurs frais de scolarité.`,
    },
    {
      title: 'Que pouvez-vous nous dire concernant le cout de vie en Russie ?',
      description: `Sachant que la Russie est une grande fédération, le coût de vie diffère en fonction des villes qui se caractérisent notamment par leur taille et leur singularité. C’est-à-dire qu’il reste logiquement plus élevé dans les grandes métropoles comme Moscou, St Pétersbourg, Rostov, etc… Mais il reste à retenir que le coût de vie en Russie, dans l’ensemble, reste abordable et voire moins cher en Russie comparé au reste du monde.`,
    },
    {
      title: 'Que pouvez-vous nous dire concernant les bourses en Russie ?',
      description: `Par rapport aux bourses, la Russie offre chaque année des bourses aux étudiants ayant déjà terminé la classe préparatoire de langue russe. Ces bourses sont généralement disponibles pour les trois cycles (licence, master et doctorat )`,
    },
    {
      title: `Quelle est la durée de l'année préparatoire de langue ?`,
      description: `La durée des cours de langues ou classe préparatoire est d'un (01) an suivie de l’intégration en faculté proprement dite.`,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Les menbres de notre équipe',
    // subtitle:
    //   'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Joskel Arthur Mboda',
      occupation: 'PDG Fondateur',
      image: {
        src: pdg,
        alt: 'Joskel Arthur Mboda',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'DEGOUTIO Grace Canleine',
      occupation: 'Directrice  Général',
      image: {
        src: secg,
        alt: 'DEGOUTIO Grace Canleine',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'CHAMDJOU Axel',
      occupation: 'Responsable Design',
      image: {
        src: personel3,
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'DONGMO Nelie',
      occupation: `Secrétaire en Russie`,
      image: {
        src: personel1,
        alt: 'DONGMO Nelie',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'NDONGUEP Louise',
      occupation: 'Administrateur',
      image: {
        src: personel4,
        alt: 'NDONGUEP Louise',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'LEKANE Loïc',
      occupation: 'Responsable Informatique',
      image: {
        src: personel2,
        alt: 'LEKANE Loïc',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'TCHIAZÉ Belmine',
      occupation: 'Chargée clientèle Yaoundé',
      image: {
        src: personel5,
        alt: 'TCHIAZÉ Belmine',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    tagline: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'News Letters',
  subtitle:
    'Gardez un contact permanent avec vision alpha voyage en recevant des informations pertinentes sur les services, actualités, promotions, ou mises à jour importantes.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    // {
    //   title: 'Get template',
    //   description: 'Aliquam sodales est lectus, quis.',
    //   href: 'https://github.com/onwidget/tailnext',
    // },
    // {
    //   title: 'Learn more',
    //   description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
    //   href: '/',
    // },
    {
      title: 'Abonnement',
      description: 'En renseignant votre adresse email, vous acceptez de recevoir les nouveautés, les offres et promotions etc...',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Votre addresse email',
        },
        btn: {
          title: 'Je souscris',
          type: 'submit',
        },
      },
    },
  ],
};
