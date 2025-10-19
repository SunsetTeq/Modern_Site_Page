import { NavigationInPage } from './components/NavigationInPage';
import desktopIpad from '@assets/img/desktop_Ipad.png';
import mobileIphone from '@assets/img/mobile_iphone.png';

import { useMediaQuery } from '@hooks/useMediaQuery';

export const MainPage = () => {
  const isMobile = useMediaQuery('(max-width: 799px)');
  return (
    <div className="flex-1">
      {!isMobile && <NavigationInPage />}
      <div className="flex w-full items-center justify-center text-center">
        <h1 className="text-display">Browse everything.</h1>
      </div>
      <div className="mt-[-35px] grid overflow-hidden rounded-3xl md:mt-[9px] xl:mt-[19px]">
        <div className="bg-accent3 h-[362px] w-full self-end rounded-3xl [grid-area:1/1]" />
        <img
          src={isMobile ? mobileIphone : desktopIpad}
          alt="Dashboard preview"
          className={`z-10 -mx-px block justify-self-center [grid-area:1/1] ${!isMobile ? 'translate-y-12 md:w-[min(720px,92vw)] xl:w-[min(947px,92vw)] xl:translate-y-16' : 'w-[min(270px,92vw)] translate-y-25'} object-cover object-center`}
        />
      </div>
    </div>
  );
};
