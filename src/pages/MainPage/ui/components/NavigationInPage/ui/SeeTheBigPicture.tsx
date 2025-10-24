import { seeTheBigPictureData } from '@pages/MainPage/config/constants';
import { ButtonUniversal } from '@ui/ButtonUniversal';
import React from 'react';

export const SeeTheBigPicture = () => {
  return (
    <div className="mb-30 flex flex-col gap-5 xl:flex-row">
      <div className="mb-15 flex-1">
        <div className={`divider-style mb-15`} />
        <div className="flex flex-col gap-10">
          <h2 className="text-heading1">{seeTheBigPictureData.title}</h2>
          <span className="text-paragraph-style max-w-[626px]">
            {seeTheBigPictureData.description}
          </span>
          <div>
            {seeTheBigPictureData.list.map((el, idx) => (
              <React.Fragment key={idx}>
                <div className={`divider-style`} />
                <div className="flex max-w-[626px] gap-[30px] py-5">
                  <span className="text-paragraph-style">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-paragraph-style text-black">{el}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="w-fit">
            <ButtonUniversal title="Discover more" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="h-[385.01px] w-full overflow-hidden rounded-[30px] md:h-[744px] xl:h-full">
          <img
            src={seeTheBigPictureData.img}
            alt="Big Picture"
            className="block h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};
