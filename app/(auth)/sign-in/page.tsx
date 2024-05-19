import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const Login = () => {
  return (
    <form
      className="rounded p-8 shadow-md dark:bg-gray-900"
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <Button
        className="flex items-center gap-x-2 text-xl"
        variant={"outline"}
        type="submit"
      >
        Login with Google
      </Button>
    </form>
  );
};

export default Login;
