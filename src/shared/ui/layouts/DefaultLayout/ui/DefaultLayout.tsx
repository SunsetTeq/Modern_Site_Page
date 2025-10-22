import { MainPage } from '@pages/MainPage';
import styles from './styles.module.css';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { Navigation } from '@widgets/Navigation';

export const DefaultLayout = () => {
  const isMobile = useMediaQuery('(max-width: 799px)');
  return (
    <main>
      <div className={styles.wrapper}>
        {/* <Sidebar /> */}
        <div className={styles.container}>
          {isMobile && <Navigation />}
          <div className="flex px-4 pt-2 pb-5 md:px-10 md:py-5">
            {<MainPage />}
          </div>
        </div>
      </div>
    </main>
  );
};
