interface ButtonProps {
  title: string;
  label: string;
  onClick?: () => void;
}
const Button = ({ title, label, onClick }: ButtonProps) => {
  return (
    <>
      <button
        title={title}
        onClick={() => {
          alert("aa");
           
        }}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
