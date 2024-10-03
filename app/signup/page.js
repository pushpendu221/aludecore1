"use client";
import { wpSignUp } from "@/actions/auth-actions";
import classes from "./signup.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Signup() {
  const initialState = {
    errors: {},
    success: false,
    result: null,
    resError: null,
  };
  const [state, action] = useFormState(wpSignUp, initialState);
  const router = useRouter();
  useEffect(() => {
    if (state.success && state.result) {
      // Store the token in localStorage
      localStorage.setItem("token", state.result.token);
      toast.success("Sign up successful! Redirecting...");
      // Redirect to the dashboard or any other page
      router.push("/account");
    }
    if (state.resError) {
      toast.error(state.resError);
    }
    if (state.errors && Object.keys(state.errors).length > 0) {
      Object.keys(state.errors).map((error) => {
        toast.error(state.errors[error]);
      });
    }
  }, [state, router]);
  return (
    <div className={classes.mainbody}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={classes.form_container}>
        <h1>Sign Up</h1>
        <form id="signup-form" action={action}>
          <div className={classes.form_group}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstName" />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastName" required />
            <div className="error" id="lastname-error"></div>
          </div>
          <div className={classes.form_group}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button className={classes.signup} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
