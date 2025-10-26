import LinkButton from '@assets/icons/link_button.svg?react';
import { githubRepo } from '@constants/Links';

export const ButtonUniversal = ({
  title,
  isBright,
}: {
  title: string;
  isBright?: boolean;
}) => {
  return (
    <a
      className={`button group ${isBright ? 'button--bright' : 'button--dim'}`}
      href={githubRepo}
      target="_blank"
    >
      {title}
      {isBright && (
        <div className="flex h-full items-center">
          <LinkButton
            className="translate-y-0 transition-transform duration-200 ease-linear group-hover:-translate-y-1"
            width={6}
            height={6.01}
          />
        </div>
      )}
    </a>
  );
};
