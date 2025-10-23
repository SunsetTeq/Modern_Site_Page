import { navList } from '@constants/constants';
import { ButtonUniversal } from '@ui/ButtonUniversal';

export const NavigationInPage = () => {
  return (
    <nav className="font-dmsans flex w-full items-center justify-start pb-[72px]">
      <div className="flex-1 text-[1.875rem] font-medium tracking-[-0.05em]">
        Area
      </div>

      <div className="y-center fixed left-1/2 z-50 -translate-x-1/2">
        <div
          className={`relative rounded-[50px] px-6 py-5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[50px] before:bg-white/40 before:backdrop-blur-md before:content-['']`}
        >
          <ul className="text-link relative z-10 flex flex-1 justify-center gap-[27px]">
            {navList.map((item, idx) => (
              <li key={idx}>
                <a
                  className="hover:text-accent6 cursor-pointer transition-colors duration-200"
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ButtonUniversal isBright={true} title="Learn More" />
    </nav>
  );
};
