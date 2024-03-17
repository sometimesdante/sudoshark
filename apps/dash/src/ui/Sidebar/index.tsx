import Link from "next/link";
import { ThemeSwitch } from "@/ui/Components/ThemeSwitch";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Hero from "@/public/SudoShark.svg";

export default function Sidebar() {
  return (
    <>
      <div className="h-screen bg-canvas-alt-light dark:bg-canvas-alt-dark px-8 py-12 shadow-xl whitespace-nowrap">
        <div className="flex flex-col h-full justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Link href="/">
              <Image
                src={Hero}
                width={120}
                height={80}
                alt="sudoShark Logotype"
                className="-ml-1 mb-4"
              />
            </Link>
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
