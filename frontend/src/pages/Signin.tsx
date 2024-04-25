import axios from "axios";
import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        data
      );
      toast.success(response.data.message);
    } catch (error: any) {
      if (error.response.status === 404) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className=" rounded-md  fixed top-[20%] left-[50%] transform  -translate-x-1/2 w-1/3 py-8 px-6 max-md:w-[75%] max-lg:w-1/2 bg-white z-10">
      <h2 className="text-2xl font-semibold font-headings">Sign In</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required ref={passwordRef} />
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
