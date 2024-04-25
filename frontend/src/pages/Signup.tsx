import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    try {
      setIsLoading(true);
      await axios.post("http://localhost:5000/api/auth/signup", data);
      toast.success("Signup Successful");
      navigate(-2);
    } catch (error: any) {
      if (error.response.status === 409) {
        toast.error(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[75%] mx-auto mt-32 mb-20">
      <h2 className="text-2xl font-semibold font-headings">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-control">
          <label htmlFor="firstname">First Name</label>
          <input type="text" ref={firstNameRef} id="firstname" required />
        </div>
        <div className="form-control">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" ref={lastNameRef} id="lastname" required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>

        <div className="form-control">
          <label htmlFor="c_password">Confirm Password</label>
          <input type="password" id="c_password" required />
        </div>
        <button disabled={isLoading} className="btn-primary mt-4 w-full">
          Sign up
        </button>
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
