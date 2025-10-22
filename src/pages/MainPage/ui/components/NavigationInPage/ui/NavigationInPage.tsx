import { navList } from '@constants/constants';
import { ButtonUniversal } from '@ui/ButtonUniversal';

export const NavigationInPage = () => {
  return (
    <nav className="font-dmsans flex w-full items-center justify-start pb-[72px]">
      <div className="flex-1 text-[1.875rem] font-medium tracking-[-0.05em]">
        Area
      </div>
      <div className="fixed left-1/2 z-50 -translate-x-1/2 rounded-[50px] bg-white/40 px-6 py-5 backdrop-blur-md">
        <ul className="text-link flex flex-1 justify-center gap-[27px]">
          {navList.map((item, idx) => (
            <li key={idx}>
              <a
                className={
                  'hover:text-accent6 cursor-pointer transition-colors duration-200'
                }
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ButtonUniversal isBright={true} title="Learn More" />
    </nav>
  );
};
