import Link from "next/link";
import { ThemeSwitch } from "@/ui/Components/ThemeSwitch";
import { UserButton } from "@clerk/nextjs";

export default function Sidebar() {
  return (
    <>
      <div className="fixed h-full bg-slate-50 dark:bg-slate-900 px-8 py-12">
        <div className="flex flex-col h-full justify-between gap-4">
          <div className="flex flex-col gap-4">
            <Link href="/">Dashboard</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/domains">Domains</Link>
            <Link href="https://www.sudoshark.com/help" target="_blank">
              Support
            </Link>
            <Link href="/billing">Billing</Link>
          </div>
          <div className="flex flex-col gap-4">
            <ThemeSwitch />
            <Link href="/settings">Settings</Link>
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
}
