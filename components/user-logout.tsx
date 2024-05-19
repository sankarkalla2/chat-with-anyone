import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { toast } from "sonner";

const UserLogout = () => {
  return (
    <form
      action={async () => {
        "use server";
        const res = await signOut();
        toast.success("You logout successfully");
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
};

export default UserLogout;
