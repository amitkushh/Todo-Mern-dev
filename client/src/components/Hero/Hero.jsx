import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-7 py-16 md:py-[90px]">
      <h1 className="text-4xl text-center font-semibold md:text-6xl md:max-w-[800px] leading-[110%] md:leading-[120%]">
        Crush Your Tasks!{" "}
        <span className="text-main shadow-lg">To-Do List!</span>
      </h1>
      <p className="text-center md:max-w-[500px]">
        Stay organized, stay productive! Turn chaos into clarity with a to-do
        list that helps you focus, prioritize, and get things done—effortlessly.
      </p>
      <Link to="/sign-up">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}

export default Hero;
