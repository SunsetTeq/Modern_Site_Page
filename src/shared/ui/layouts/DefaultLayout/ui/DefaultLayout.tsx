import { MainPage } from '@pages/MainPage';
import styles from './styles.module.css';
import { Navigation } from '@widgets/Navigation';

export const DefaultLayout = () => {
  return (
    <main>
      <div className={styles.wrapper}>
        {/* <Sidebar /> */}
        <div className={styles.container}>
          <Navigation />
          <div className="flex p-2 md:p-10">{<MainPage />}</div>
        </div>
      </div>
    </main>
  );
};
