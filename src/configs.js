import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Hang Kévin',
  subTitle: 'Dev portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'HK folioV2.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* The difference between a novice and a master is that a master has failed more times than a novice had tried.",
        '* I hate perfection. To be perfect is to be unable to improve any further.',
        '* If you don’t take risks, you can’t create a future.',
        '* Don’t give up, there’s no shame in falling down! The true shame is to not stand up again!',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'headache max lvl.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'still growing...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://haloriginee.github.io/Porfolio/HK_WebDev.pdf',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      footer: '(And also this web-app)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/yoyo.png',
            websiteURL: 'https://nha-que-movies.herokuapp.com/',
          },
          {
            url: 'websites-preview/yoyo1.png',
            websiteURL: 'https://haloriginee.github.io/DazooMusics/',
          },
          {
            url: 'websites-preview/yoyo2.png',
            websiteURL:
              'https://phokingdex.herokuapp.com/',
          },
          {
            url: 'websites-preview/yoyo3.png',
            websiteURL: 'https://nhaquemusics.herokuapp.com/',
          },
          {
            url: 'websites-preview/yoyo4.png',
            websiteURL: 'https://geojourney.herokuapp.com/',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/phoking',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/Haloriginee',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:herezy2006@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
