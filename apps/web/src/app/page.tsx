import Image from "next/image";
import Hero from "@/public/hero.svg";
import Button from "@/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center mx-auto">
      <div>
        <div className="text-center">
          <div>
            <Image
              src={Hero}
              width={640}
              height={480}
              alt="Illustration Project Manager"
            />
          </div>
          <h1 className="text-4xl mb-6">
            Out now: Hosting like a <b className="text-teal-400">Breeze</b>
          </h1>
          <Button text="Extra! Extra! Read all about it!" href={"/products"} />
        </div>
      </div>
    </main>
  );
}
