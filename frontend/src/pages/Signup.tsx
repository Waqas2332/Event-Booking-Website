import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-[75%] mx-auto mt-32 mb-20">
      <h2 className="text-2xl font-semibold font-headings">Sign Up</h2>
      <form className="mt-4">
        <div className="form-control">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" required />
        </div>
        <div className="form-control">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>

        <div className="form-control">
          <label htmlFor="c_password">Confirm Password</label>
          <input type="password" id="c_password" required />
        </div>
        <button className="btn-primary mt-4 w-full">Sign up</button>
        <div className="text-center mt-4">
          <Link to="/auth/signin" className="text-sm cursor-pointer">
            Already have an account?{" "}
            <span className="italic text-primary underline">Signin Now</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
