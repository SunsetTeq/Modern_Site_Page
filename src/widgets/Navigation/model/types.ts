export interface IconButtonProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  DURATION: number;
}

export interface BurgerContentProps {
  open: boolean;
  DURATION: number;
  LIST_DELAY: number;
  STAGGER: number;
}
