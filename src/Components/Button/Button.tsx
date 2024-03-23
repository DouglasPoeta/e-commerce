interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  text: string;
  onClick: () => void;
}

export default function Button({ text, type, onClick, ...rest }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} type={type} {...rest}>
        {text}
      </button>
    </>
  );
}
