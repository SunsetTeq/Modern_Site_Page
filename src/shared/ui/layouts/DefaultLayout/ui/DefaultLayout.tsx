import { MainPage } from '@pages/MainPage';
import styles from './styles.module.css';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { Navigation } from '@widgets/Navigation';
import { Footer } from '@widgets/Footer';

export const DefaultLayout = () => {
  const isMobile = useMediaQuery('(max-width: 799px)');
  return (
    <main>
      <div className={styles.wrapper}>
        {/* <Sidebar /> */}
        <div className={styles.container}>
          {isMobile && <Navigation />}
          <div className="pb:5 flex min-w-0 flex-col gap-10 px-4 pt-2 md:px-10 md:py-5">
            {<MainPage />}
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};
