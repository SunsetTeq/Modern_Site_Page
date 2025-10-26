import { connectData } from '@pages/MainPage/config/constants';
import { ButtonUniversal } from '@ui/ButtonUniversal';

export const Connect = () => {
  return (
    <div className="justify-ceter flex min-w-0 flex-1 flex-col items-center">
      <div
        id="contuct-us"
        className="divider-style bg-accent6 mb-30 scroll-mt-[87px] md:scroll-mt-0"
      />

      <div className="flex w-[343px] flex-col items-center justify-center gap-10 text-center md:w-[520px] xl:w-[600px]">
        <h2 className="text-heading1 w-full">{connectData.title}</h2>
        <p className="text-paragraph-style w-full">{connectData.description}</p>
        <button className="w-full">
          <ButtonUniversal isBright title="Learn More" />
        </button>
      </div>

      <div id="contuct-us" className="divider-style bg-accent6 mt-30" />
    </div>
  );
};
