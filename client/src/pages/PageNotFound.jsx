import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screen flex flex-col gap-1 justify-center items-center">
      <p className="text-xl font-bold">404</p>
      <p className="text-xl">Page Not Found</p>
      <p>
        Go to{" "}
        <Link to="/">
          <span className="font-bold text-md text-main">Home page</span>
        </Link>
      </p>
    </div>
  );
}

export default PageNotFound;
