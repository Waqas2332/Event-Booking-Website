import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className=" rounded-md  fixed top-[20%] left-[50%] transform  -translate-x-1/2 w-1/3 py-8 px-6 max-md:w-[75%] max-lg:w-1/2 bg-white z-10">
      <h2 className="text-2xl font-semibold font-headings">Sign In</h2>
      <form className="mt-4">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <button className="btn-primary mt-4 w-full">Sign in</button>
        <div className="text-center mt-4">
          <Link className="text-sm cursor-pointer" to="/auth/signup">
            Don't have an account?{" "}
            <span className="italic text-primary underline">Signup Now</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
