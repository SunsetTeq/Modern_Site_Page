import { specsData } from '@pages/MainPage/config/constants';
import { ButtonUniversal } from '@ui/ButtonUniversal';
import { SpecCard } from './SpecCard';

export const Specifications = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div
        id="specifications"
        className="divider-style bg-accent6 mb-20 scroll-mt-[87px] md:scroll-mt-0"
      />
      <div className="mb-30 flex w-full flex-1 flex-col items-center justify-center gap-5">
        <div className="flex max-w-[720px] flex-1 flex-col items-center justify-center gap-[30px] text-center md:gap-10">
          <span className="text-caption">Specs</span>
          <h2 className="text-heading1">{specsData.title}</h2>
          <span className="text-paragraph-style">{specsData.description}</span>
          <div className="w-fit">
            <ButtonUniversal title="Discover more" />
          </div>
        </div>

        <div className="w-full min-w-0 overflow-x-auto overflow-y-hidden">
          <div className="flex min-w-[720px]">
            {specsData.cards.map((el, idx) => {
              const style =
                idx === 0
                  ? 'font-dmsans text-[1.607rem]'
                  : idx === 1
                    ? 'font-rethink-sans text-[1.429rem] text-accent5'
                    : 'font-reddit-mono text-[1.353rem] text-accent5';
              return (
                <SpecCard
                  key={idx}
                  title={el.title}
                  chars={el.chars}
                  style={style}
                  parentIdx={idx}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
