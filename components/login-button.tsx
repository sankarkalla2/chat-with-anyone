"use client"
import Link from "next/link";
import { Button } from "./ui/button";

const LoginButton = () => {
  return ( 
    <Link href={'/sign-in'}>
      <Button variant={'link'} className="border" size={'sm'}>Login</Button>
    </Link>
   );
}
 
export default LoginButton;