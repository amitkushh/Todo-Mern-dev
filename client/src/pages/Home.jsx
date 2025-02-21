import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-7 gap-7 py-16 md:py-[90px]">
      <h2 className="text-3xl font-semibold">Add Todo</h2>
      <Input
        className="w-[300px] md:w-[600px]"
        type="text"
        placeholder="Enter title"
        required
      />
      <Textarea
        className="w-[300px] md:w-[600px]"
        placeholder="Enter your text here..."
        required
      />
      <Button>Add</Button>
    </div>
  );
}

export default Home;
