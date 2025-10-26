import { navList } from '@constants/constants';
import Logo from '@assets/icons/footer_logo.svg?react';

export const Footer = () => {
  return (
    <div className="flex flex-1 flex-col gap-20 pb-5">
      <ul className="flex flex-col gap-[27px] md:flex-row">
        {navList.map(
          (el, idx) =>
            idx != navList.length - 1 && (
              <div className="text-link" key={el.id}>
                <a
                  href={`#${el.id}`}
                  className="hover:text-accent6 cursor-pointer transition-colors duration-200"
                >
                  {el.label}
                </a>
              </div>
            ),
        )}
      </ul>
      <div className="text-caption flex w-full items-end gap-10">
        <Logo />
        <p className="flex gap-4">
          <span>© Area.</span>
          <span>2025</span>
        </p>
        <span className="flex-1 text-right">All Rights Reserved</span>
      </div>
    </div>
  );
};
