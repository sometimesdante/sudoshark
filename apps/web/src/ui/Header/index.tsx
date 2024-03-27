import Link from "next/link";
import Image from "next/image";
import Hero from "@/public/logotype.svg";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <span className="flex items-center gap-4 py-4">
        <Link href="/" className="logo">
          <Image src={Hero} width={180} height={80} alt="sudoShark Logotype" />
        </Link>
        <p className="hidden lg:block">
          The only dX focused PaaS hosting you will EVER need.
        </p>
      </span>
      <span className="flex items-center gap-4">
        <Link href="/products" className="links hidden md:block">
          Products
        </Link>
        <Link href="/help" className="links hidden md:block">
          Help
        </Link>
        <button className="button ml-4">
          <Link href="https://dash.sudoshark.com/sign-up">SIGN UP</Link>
        </button>
      </span>
    </div>
  );
}
