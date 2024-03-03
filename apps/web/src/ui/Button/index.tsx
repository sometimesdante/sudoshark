import Link from "next/link";

const Button = ({ href, text }: { href: string; text: string }) => {
  return (
    <button className="button">
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default Button;
