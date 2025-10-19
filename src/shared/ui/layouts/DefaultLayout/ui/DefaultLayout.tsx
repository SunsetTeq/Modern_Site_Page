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
          <div className="flex p-2 md:p-10">{<MainPage />}</div>
        </div>
      </div>
    </main>
  );
};
