interface TextButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

const TextButton = (props: TextButtonProps) => {
  return (
    <button
      className={`${props.className}`}
      type="button"
      onClick={(e) => (props.onClick ? props.onClick(e) : undefined)}
    >
      {props.text}
    </button>
  );
};

export default TextButton;
