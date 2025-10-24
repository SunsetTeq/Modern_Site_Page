import { NavigationInPage } from './components/NavigationInPage';

import { useMediaQuery } from '@hooks/useMediaQuery';
import { MainHeader } from './components/NavigationInPage/ui/MainHeader';
import { RevealOnce } from '@ui/RevealOnce';
import { TrustedBy } from './components/NavigationInPage/ui/TrustedBy';
import { Benefits } from './components/NavigationInPage/ui/Benefits';
import { ParalaxImageBlock } from './components/NavigationInPage/ui/ParalaxImageBlock';
import { SeeTheBigPicture } from './components/NavigationInPage/ui/SeeTheBigPicture';
import { Specifications } from './components/NavigationInPage/ui/Specifications';
import { SpecImageBlock } from './components/NavigationInPage/ui/SpecImageBlock';

export const MainPage = () => {
  const isMobile = useMediaQuery('(max-width: 799px)');

  return (
    <div className="min-w-0 flex-1">
      {!isMobile && <NavigationInPage />}
      <RevealOnce>
        <MainHeader />
        <ParalaxImageBlock isMobile={isMobile} />
      </RevealOnce>

      <RevealOnce>
        <TrustedBy />
      </RevealOnce>
      <RevealOnce>
        <Benefits />
      </RevealOnce>
      <RevealOnce>
        <SeeTheBigPicture />
      </RevealOnce>
      <RevealOnce>
        <Specifications />
      </RevealOnce>
      <RevealOnce>
        <SpecImageBlock />
      </RevealOnce>
    </div>
  );
};
