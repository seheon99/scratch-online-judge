interface ButtonProps {
  primary: boolean;
  children: React.ReactNode;
}

function Button({ primary, children }: ButtonProps) {
  return <button>{children}</button>;
}

export default Button;
