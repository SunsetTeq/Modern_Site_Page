import { showTo } from '@pages/MainPage/config/constants';
import { ButtonUniversal } from '@ui/ButtonUniversal';

export const HowTo = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col pb-30">
        <div
          id="how-to"
          className="divider-style bg-accent6 mb-20 scroll-mt-[87px] md:scroll-mt-0"
        />
        <div className="flex flex-col gap-y-10 md:flex-row md:items-center">
          <p className="text-heading1 flex-1">{showTo.title}</p>
          <div className="w-fit">
            <ButtonUniversal title="Discover more" />
          </div>
        </div>
        <div className="divider-style bg-accent6 mt-20" />
        <div className="flex min-w-0 flex-1 gap-5 overflow-x-auto overflow-y-hidden pb-5">
          {showTo.cards.map((el, idx) => (
            <div className="flex min-w-[240px] flex-1 flex-col gap-5" key={idx}>
              <p className="text-display-statistics text-accent6 py-[40px]">
                {(idx + 1).toString().padStart(2, '0')}
              </p>
              <h4 className="text-heading3">{el.title}</h4>
              <p className="text-paragraph-style">{el.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-10">
        <img
          src={showTo.img}
          alt="Гора у воды"
          className="block h-[600px] w-full rounded-[30px] object-cover object-center md:h-[664.29px]"
        />
      </div>
    </div>
  );
};
