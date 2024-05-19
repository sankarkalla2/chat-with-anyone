import { MessageSquarePlus } from "lucide-react";
import { Button } from "./ui/button";

const CreateChatButton = () => {
  return <Button variant={'outline'} size={'icon'}>
    <MessageSquarePlus />
  </Button>
};

export default CreateChatButton;
