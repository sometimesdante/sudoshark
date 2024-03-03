import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span></span>
      <span className="flex items-baseline gap-4 py-2">
        <Link
          href="https://status.sudoshark.com/"
          target="_blank"
          className="links"
        >
          Uptime Monitor
        </Link>
        <Link href="/contact" className="links">
          Contact
        </Link>
      </span>
    </div>
  );
}
