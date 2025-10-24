import Logo1 from '@assets/icons/trustedLogo/logo_1.svg?react';
import Logo2 from '@assets/icons/trustedLogo/logo_2.svg?react';
import Logo3 from '@assets/icons/trustedLogo/logo_3.svg?react';
import Logo4 from '@assets/icons/trustedLogo/logo_4.svg?react';
import Logo5 from '@assets/icons/trustedLogo/logo_5.svg?react';
import Logo6 from '@assets/icons/trustedLogo/logo_6.svg?react';

import CabelIcon from '@assets/icons/benefitsLogo/cabel_icon.svg?react';
import EarthIcon from '@assets/icons/benefitsLogo/earth_icon.svg?react';
import SpeachIcon from '@assets/icons/benefitsLogo/speach_icon.svg?react';
import ChartIcon from '@assets/icons/benefitsLogo/chart_icon.svg?react';

import bigPicture from '@assets/img/big_picture.jpg';

export const logoList = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

export const benefitList = [
  {
    icon: CabelIcon,
    title: 'Amplify Insights',
    description:
      'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
  },
  {
    icon: EarthIcon,
    title: 'Control Your Global Presence',
    description:
      'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
  },
  {
    icon: SpeachIcon,
    title: 'Remove Language Barriers',
    description:
      'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
  },
  {
    icon: ChartIcon,
    title: 'Visualize Growth',
    description:
      'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
  },
];

export const seeTheBigPictureData = {
  title: 'See the Big Picture',
  description:
    "Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.",
  list: [
    'Spot Trends in Seconds: No more digging through numbers. ',
    'Get Everyone on the Same Page: Share easy-to-understand reports with your team. ',
    'Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.',
    'Your Global Snapshot: Get a quick, clear overview of your entire operation.',
  ],
  img: bigPicture,
};
