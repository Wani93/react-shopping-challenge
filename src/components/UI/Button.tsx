import { MouseEventHandler } from 'react';

interface Props {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button className="px-2 rounded-lg bg-stone-300" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
