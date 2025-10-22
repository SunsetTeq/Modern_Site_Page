import { benefitList } from '@pages/MainPage/config/constants';
import mountain from '@assets/img/mountain.jpg';

export const Benefits = () => {
  return (
    <div className="mb-30 flex-1">
      <div
        id="benefits"
        className={`divider-style mb-20 scroll-mt-[87px] md:scroll-mt-0`}
      />
      <div className="flex flex-col gap-[50px]">
        <span className="text-caption">Benefits</span>
        <h2 className="text-heading1">We’ve cracked the code.</h2>
        <span className="text-paragraph-style">
          Area provides real insights, without the data overload.
        </span>
      </div>
      <div className="mt-[50px] mb-[60px] flex flex-wrap gap-5">
        {benefitList.map((el, idx) => (
          <div
            className="flex min-w-[285px] grow basis-[285px] flex-col gap-5 py-[40px]"
            key={idx}
          >
            <div className="divider-style mb-5" />
            <el.icon />
            <h4 className="text-heading3">{el.title}</h4>
            <span className="text-paragraph-style">{el.description}</span>
          </div>
        ))}
      </div>
      <img
        src={mountain}
        alt="Горный пейзаж"
        className="block h-[600px] w-full rounded-[30px] object-cover object-center xl:h-[620px]"
      />
    </div>
  );
};
