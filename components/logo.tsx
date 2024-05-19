import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="overflow-hidden">
      <div className="flex items-center w-72 h-14 gap-x-2">
        <Image src={"/logoipsum-292.svg"} height={40} width={40} alt="log" />
        <h1 className="text-2xl font-bold font-sans hidden md:flex">Universal Chat</h1>
      </div>
    </Link>
  );
};

export default Logo;
