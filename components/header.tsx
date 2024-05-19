import Image from "next/image";
import Logo from "./logo";
import { DarkModeToggle } from "./dark-mode";
import UserButton from "./user-button";
import LoginButton from "./login-button";
import { auth } from "@/auth";
import { MessagesSquare } from "lucide-react";
import Link from "next/link";
import CreateChatButton from "./create-chat";

const Header = async () => {
  const session = await auth();
  return (
    <header className="sticky top-0 dark:bg-gray-900 z-50">
      <nav className="flex max-w-7xl items-center mx-auto p-3 pl-2">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          {session?.user ? (
            <div className="flex items-center  gap-x-4">
              <Link href={"/chat"}>
                <MessagesSquare />
              </Link>
              <CreateChatButton />
            </div>
          ) : (
            <Link href={"/pricing"}>Pricing</Link>
          )}

          <DarkModeToggle />
          {session?.user ? <UserButton /> : <LoginButton />}
        </div>
      </nav>
      {/* upgrade banner */}
    </header>
  );
};

export default Header;
