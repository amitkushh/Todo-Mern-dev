import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center items-center py-5 px-7 ">
      <Menubar>
        <MenubarMenu>
          <Link to="/">
            <MenubarTrigger className="cursor-pointer">Home</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link to="/sign-up">
            <MenubarTrigger className="cursor-pointer">Sign up</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link to="/login">
            <MenubarTrigger className="cursor-pointer">Login</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default Navbar;
