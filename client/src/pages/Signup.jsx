import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Signup() {
  return (
    <div className="flex flex-col justify-center items-center px-7 gap-7 py-16 md:py-[90px]">
      <h2 className="text-3xl font-semibold">Sign Up</h2>
      <form className="flex flex-col justify-center items-center gap-5 bg-main p-10 rounded-md">
        <Input
          className="w-[200px]"
          type="text"
          placeholder="Username"
          required
        />
        <Input
          className="w-[200px]"
          type="email"
          placeholder="Email"
          required
        />
        <Input
          className="w-[200px]"
          type="password"
          placeholder="Password"
          required
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
}

export default Signup;
