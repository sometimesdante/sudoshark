import Link from "next/link";
import { ThemeSwitch } from "@/ui/Buttons/ThemeSwitch";

export default function Sidebar() {
  return (
    <>
      <div className="top-0 sticky h-full">
        <div className="flex flex-col gap-4">
          <Link href="/">Dashboard</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Domain Control</Link>
          <Link href="/">Support</Link>
          <ThemeSwitch />
          <Link href="/">Settings</Link>
          <Link href="/">Logout</Link>
        </div>
      </div>
    </>
  );
}
