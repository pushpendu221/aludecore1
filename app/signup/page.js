"use client";
import { wpSignUp } from "@/actions/auth-actions";
import classes from "./signup.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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

      // Redirect to the dashboard or any other page
      router.push("/account");
    }
  }, [state.success, state.result, router]);
  return (
    <div className={classes.mainbody}>
      <div className={classes.form_container}>
        <h1>Sign Up</h1>
        <form id="signup-form" action={action}>
          <div className={classes.form_group}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            {state.errors?.email && (
              <div className={classes.error} id="email-error">
                {state.errors.email}
              </div>
            )}
          </div>
          <div className={classes.form_group}>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstName" />
            {state.errors?.firstName && (
              <div className={classes.error} id="firstName-error">
                {state.errors.firstName}
              </div>
            )}
          </div>
          <div className={classes.form_group}>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastName" required />
            <div className="error" id="lastname-error"></div>
          </div>
          <div className={classes.form_group}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            {state.errors?.password && (
              <div className={classes.error} id="password-error">
                {state.errors.password}
              </div>
            )}
          </div>
          {state?.resError && (
            <div className={classes.error} id="message-error">
              {state.resError}
            </div>
          )}
          <button className={classes.signup} type="submit">
            Sign Up
          </button>
          {state.resError && <p className="error">{state.resError}</p>}
        </form>
      </div>
    </div>
  );
}
