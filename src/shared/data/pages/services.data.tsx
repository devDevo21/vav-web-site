import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/hero.jpg';
import cameraFrontImg from '~/assets/images/etonement.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Nos services',
  subtitle: `Chez Vision Alpha Voyage nos services sont pensés pour répondre aux besoins uniques de chaque étudiant, avec un objectif clair : transformer vos ambitions en réalité. Découvrez comment nous pouvons vous aider à concrétiser vos rêves académiques.` ,
  callToAction: {
    text: 'Start Exploring',
    href: 'https://github.com/onwidget/tailnext',
    targetBlank: true,
  },
  backgroundImage: 'heroOneServicesPage'
  // image: {
  //   src: heroImg,
  //   alt: 'Hero TailNext',
  // },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  // header: {
  //   title: 'Nos Services',
  // },
  items: [
    {
      title: 'Accompagnement Administratif',
      description: `Nous guidons les étudiants dans la constitution et la soumission de leurs dossiers d’inscription universitaire et de demande de visa. tels que : La traduction des documents requis, La vérification de conformité avec les exigences des universités et des ambassades.`,
      icon: IconBrandTailwind,
    },
    {
      title: 'Conseil et Orientation',
      description: `Nous aidons les étudiants à identifier la filière, l’université et la ville qui correspondent le mieux à leurs objectifs académiques, professionnels et financiers. Nous fournissons des informations précises sur les programmes disponibles en Russie, les conditions d’admission et les débouchés après les études.`,
      icon: IconComponents,
    },
    {
      title: 'Recherche de Bourses',
      description: `Nous recherchons des opportunités de financement adaptées à chaque profil, telles que : Les programmes de subventions gouvernementales ou d’organisations internationales.
Nous accompagnons également les étudiants dans la préparation des dossiers pour maximiser leurs chances d’obtenir ces aides.`,
      icon: IconListCheck,
    },
    {
      title: 'Suivi et Support en Russie',
      description: 'Une fois en Russie, notre assistance ne s’arrête pas : Orientation sur les démarches locales (immatriculation auprès des autorités, cartes SIM, transport), Conseils sur l’intégration culturelle et sociale pour s’adapter rapidement à la vie russe.',
      icon: IconRocket,
    },
    {
      title: 'Recherche de jobs Étudiants',
      description:
        `Pour aider les étudiants à financer leurs études et leur séjour en Russie, nous proposons un service de recherche de jobs étudiants. Cela inclut : La mise en relation avec des employeurs locaux, Integration dans notre vaste réseau d'etudiants`,
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Services Personnalisés',
      description: `Nous savons que chaque étudiant a des besoins spécifiques. Nous proposons donc des services sur mesure tels que : Des sessions de coaching pour préparer les entretiens d’ambassade, Des solutions adaptées pour ceux qui souhaitent continuer leur parcours professionnel en Russie après leurs études.`,
      icon: IconBulb,
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  header: {
    title: 'Offres Incluses',
  },
  content:
    `Parce que nous voulons bien faire de A à Z, nous vous offrons un pack exclusif, unique pour votre procédure d'étude en Russie. Cela inclut :`,
  items: [
    {
      title: `Un an de scolarité tout frais payé`,
      description:
        `Ehh oui, vous avez très bien lu, vous ne payez aucun frais de scolarité pour votre première année d'étude en Russie peu importe la filière`,
    },
    {
      title: 'Un an de logement payé',
      description:
        `Ne vous posez plus de question sur votre hébergement en Russie, nous vous garantissons un logement à votre arrivée, valable toute votre première année d'étude`,
    },
    {
      title: `Un an d'assurance maladie payé`,
      description:
        `Nous veillons à la sécurité et au bien-être de nos étudiants en Russie. C’est pourquoi nous incluons "un an d’assurance maladie payé" dans notre pack, vous offrant une couverture complète pour vos soins de santé dès votre arrivée.`,
    },
    {
      title: 'Assistance Job - Installation + Accompagnement',
      description:
        `Nous incluons une assistance complète pour vous aider à trouver un emploi étudiant afin de financer vos études, organiser votre installation en Russie, et vous accompagner dans toutes vos démarches pour une intégration réussie et sans tracas.`,
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: true,
};

// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Main Features',
    subtitle:
      'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  },
  isImageDisplayed: true,
  image: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    alt: 'Hero TailNext',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconBulb,
    },
  ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Satisfied Client Experiences',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Answers to Common Queries',
    subtitle:
      'Etiam laoreet mi eros, vitae iaculis mi egestas blandit. Sed nisl diam, congue sed justo et, cursus sollicitudin ligula.',
  },
  columns: 1,
  items: [
    {
      title: 'Can I customize the templates to match my brand?',
      description: `Ut accumsan, massa at sagittis maximus, libero justo rhoncus metus, quis finibus neque justo quis nisi. Suspendisse sed sapien et justo iaculis faucibus.`,
      icon: IconChevronsRight,
    },
    {
      title: 'What if I need help customizing the template?',
      description: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent imperdiet ultricies ex consequat egestas.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Are there setup guides available?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Can I hire you for template customization?',
      description: `Phasellus est quam, mollis tincidunt dictum pulvinar, tempor vel justo. Mauris eu lobortis leo. Proin pretium arcu lectus, a mattis nisi fermentum quis.`,
      icon: IconChevronsRight,
    },
  ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Avez-vous des questions plus precises ?',
  subtitle:
    `Nous sommes à votre écoute pour répondre à toutes vos préoccupations spécifiques. N’hésitez pas à nous poser vos questions pour obtenir des informations claires et adaptées à vos besoins.`,
  callToAction: {
    text: 'Contactez-nous',
    href: '/contact',
  },
};
