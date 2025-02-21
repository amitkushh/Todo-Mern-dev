import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center px-7 gap-7 py-16 md:py-[90px]">
      <h2 className="text-3xl font-semibold">Login</h2>
      <form className="flex flex-col justify-center items-center gap-5 bg-main p-10 rounded-md">
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
        <Button>Login</Button>
      </form>
    </div>
  );
}

export default Login;
