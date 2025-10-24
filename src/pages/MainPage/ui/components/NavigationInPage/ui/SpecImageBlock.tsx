import { specsData } from '@pages/MainPage/config/constants';

export const SpecImageBlock = () => {
  return (
    <div className="mb-30 flex flex-1 flex-col gap-x-5 gap-y-10 xl:flex-row">
      <div className="min-w-0 flex-1">
        <div className="h-[343px] w-full overflow-hidden rounded-[30px] md:h-[720px] xl:h-full">
          <img
            src={specsData.quote.img}
            alt="quote img"
            className="block h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="divider-style" />
        <div className="flex min-w-0 flex-col items-start justify-center gap-[50px] pt-[42px] xl:py-[140px] xl:pl-[50px]">
          <h3 className="text-heading2">{specsData.quote.text}</h3>
          <div>
            <p className="text-paragraph-style text-black">
              {specsData.quote.author}
            </p>
            <p className="text-caption">{specsData.quote.ps}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
