import cascadeLogo from './src/assets/cascade-custom-bike-logo.png';
import evil from './src/assets/brand-evil.png';
import pivot from './src/assets/brand-pivot.png';
import santacruz from './src/assets/brand-santacruz.png';
import transition from './src/assets/brand-transition.png';
import yeti from './src/assets/brand-yeti.png';

export const config = {
  theme: {
    primaryColor: "7F7F7F",
    secondaryColor: "0392EB",
    accentColor: "#000",
    logo: cascadeLogo,
  },
  bikes: {
    brands: [
      {
        id: 1,
        name: 'Yeti',
        logo: yeti,
      },
      {
        id: 2,
        name: 'Transition',
        logo: transition,
      },
      {
        id: 3,
        name: 'Santa Cruz',
        logo: santacruz,
      },
      {
        id: 4,
        name: 'Pivot',
        logo: pivot,
      },
      {
        id: 5,
        name: 'Evil',
        logo: evil,
      },
    ]
  }
}