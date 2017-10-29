import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Accueil',
    icon: 'ion-ios-home-outline',
    link: '/pages/home',
    home: true,
  },

  {
    title: 'Résolution',
    icon: 'ion-ios-cog-outline',
    link: '/pages/resolution',
  },
  {
    title: 'Extraction de cas',
    icon: 'ion-ios-upload-outline',
    link: '/pages/case-extraction',
  },
  {
    title: 'Extraction de régles',
    icon: 'ion-ios-keypad-outline',
    link: '/pages/rule-extraction',

  },
  {
    title: 'Tableau de bord',
    icon: 'ion-ios-speedometer-outline',
    link: '/pages/dashboard',

  },
  {
    title: 'Paramètres',
    icon: 'ion-ios-settings',
    link: '/pages/settings',

  },
  {
    title: 'Apropos',
    icon: 'ion-ios-information-outline',
    link: '/pages/help',

  },
];
