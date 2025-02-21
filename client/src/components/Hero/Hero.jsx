import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-7 py-16 md:py-[90px]">
      <h1 className="text-5xl text-center font-semibold md:text-6xl md:max-w-[800px] leading-[110%] md:leading-[120%]">
        Master Your Day with the Ultimate{" "}
        <span className="text-main shadow-lg">To-Do List!</span>
      </h1>
      <p className="text-center md:max-w-[500px]">
        Tired of forgetting tasks or feeling overwhelmed? Stay on top of
        everything with a to-do list that works for you! Organize, prioritize,
        and conquer your day—one task at a time.{" "}
      </p>
      <Link to="/sign-up">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}

export default Hero;
