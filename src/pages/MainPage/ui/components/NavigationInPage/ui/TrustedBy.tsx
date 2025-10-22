import { logoList } from '@pages/MainPage/config/constants';

export const TrustedBy = () => {
  return (
    <div className="my-[50px] flex-1">
      <div className="flex flex-1 flex-col gap-[30px]">
        <span className="font-dmsans text-paragraph text-[0.938rem] font-normal tracking-[-0.05em]">
          Trusted by:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-10">
          {logoList.map((Logo, idx) => (
            <div className="p-5" key={idx}>
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
