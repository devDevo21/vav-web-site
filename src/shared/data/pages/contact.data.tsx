import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Get in touch with us',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Thank you for considering us for your project! We're excited to hear from you.`}</span>{' '}
      {`Our team can assist you in building your dream website.`}
    </>
  ),
  tagline: 'Demo Contact Page',
};

// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contactez-nous',
    subtitle: (
      <>
        {/* Please take a moment to fill out this form.{' '} */}
        <span className="hidden md:inline">{`Merci de prendre quelques instants pour remplir ce formulaire. Nous pourrons ainsi mieux comprendre vos besoins et démarrer le processus en douceur..`}</span>
      </>
    ),
  },
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
    title: 'Laissez-nous un mail dès maintenant !',
    inputs: [
      {
        type: 'text',
        label: 'Nom',
        name: 'nom',
        autocomplete: 'off',
        placeholder: 'entrez votre nom',
        required: true
      },
      {
        type: 'text',
        label: 'Prenom',
        name: 'prenom',
        autocomplete: 'off',
        placeholder: 'entrez votre prenom',
        required: true
      },
      {
        type: 'email',
        label: 'Adresse Email ',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'entrez votre adresse mail',
        required: true
      },
      {
        type: 'tel',
        label: 'Numero de telephone ',
        name: 'telephone',
        autocomplete: 'on',
        placeholder: 'entrez votre numero de telephone',
        required: true
      },
    ],
    radioBtns: {
      //label: 'What is the reason for your contact?',
      radios: [
        // {
        //   label: 'General inquiries',
        // },
        // {
        //   label: 'Technical help',
        // },
        // {
        //   label: 'Claims',
        // },
        // {
        //   label: 'Others',
        // },
      ],
    },
    selectInput: {
      name: 'niveau',
      label: 'Niveau d\'etude',
      options: [
        'LICENCE',
        'BACCALAURÉAT',
        'MASTER',
        'DOCTORAT'
      ]
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'Quel sont vos préocupations ?',
      name: 'description',
      placeholder: 'Détaillez-nous toutes vos préoccupations...',
    },
    checkboxes: [
      {
        name: 'auteur',
        label: 'Ce projet de voyage me concerne directement',
        value: true,
      },
      // {
      //   name : 'auteur',
      //   label: 'Do you want to receive monthly updates by email?',
      //   value: '',
      // },
    ],
    btn: {
      title: 'Envoyer',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: ' Centre de support',
    // subtitle: 'Looking for something in particular?',
  },
  items: [
    // {
    //   title: 'Have a question?',
    //   description: 'See our frequently asked questions',
    //   icon: IconHelp,
    //   callToAction: {
    //     text: 'Go to FAQ page',
    //     href: '/faqs',
    //   },
    // },
    {
      title: 'Vous avez une question ?',
      description: `N'hesitez pas a nous laisser un message whatsapp`,
      icon: IconMessages,
      callToAction: {
        text: 'Ecrivez-nous',
        href: '+79191743605',
      },
    },
    // {
    //   title: 'Get help',
    //   description: 'Speak to our team today',
    //   icon: IconHeadset,
    //   callToAction: {
    //     text: 'Call us',
    //     href: '/',
    //   },
    // },
  ],
};
