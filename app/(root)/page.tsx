import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="dark:darkmode-bg"></div>
      <div className="lightmode-bg"></div>

      <div className="py-12 sm:px-20 lg:px-40">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
            Chat with Anyone, anywhere
          </h1>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-center dark:text-gray-300">
          You speak your language, they speak their language
          <span className="text-indigo-600 font-medium ml-1">
            Let AI handle the transition
          </span>
        </p>
        <div className="pt-10 flex items-center justify-center gap-x-6">
          <Link href={"/chat"}>
            <Button className="px-10" variant={"premium"}>
              Get Started
            </Button>
          </Link>
          <Link href={"/pricing"} className="text-sm">
            <Button
              className="text-gray-900 dark:text-gray-300"
              variant={"link"}
            >
              Pricing
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
