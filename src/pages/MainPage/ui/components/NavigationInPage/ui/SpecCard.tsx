import CloseIcon from '@assets/icons/close_icon.svg?react';
import CheckIcon from '@assets/icons/check_icon.svg?react';

export const SpecCard = ({
  title,
  chars,
  style,
  parentIdx,
}: {
  title: string;
  chars: { name: string; flag: boolean }[];
  style: string;
  parentIdx: number;
}) => {
  console.log(style);
  return (
    <div
      className={`${parentIdx === 0 ? 'ring-divider rounded-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] ring-1 ring-inset' : ''} flex flex-1 flex-col`}
    >
      <h3
        className={`${style} h-[96px] pt-10 pb-[25px] text-center font-medium tracking-[-0.08em]`}
      >
        {title}
      </h3>
      <div className={`divider-style bg-accent6`} />
      <ul className="flex flex-col">
        {chars.map((el, idx) => {
          const isLast = idx === chars.length - 1 && parentIdx !== 1;

          return (
            <li key={idx}>
              <div
                className={`flex items-center gap-2 pt-[32px] pb-[31px] pl-[30px] md:pl-[20px] xl:pl-[30px] ${parentIdx === 1 && 'border-divider mr-[-1px] border-r'}`}
              >
                {el.flag ? <CheckIcon /> : <CloseIcon />}
                <span className="text-caption text-black">{el.name}</span>
              </div>
              {!isLast && <div className="divider-style" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
