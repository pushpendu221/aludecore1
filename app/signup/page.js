"use client";
import { wpSignUp } from "@/actions/auth-actions";
import classes from "./signup.module.css";
import { useFormState } from "react-dom";

export default function Signup() {
  const [state, action, pending] = useFormState(wpSignUp, {});

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
          {state.errors && (
            <div className={classes.error} id="message-error">
              {Object.keys(state.errors).map((error) => (
                <li key={error}>{state.errors[error]}</li>
              ))}
            </div>
          )}
          <button className={classes.signup} type="submit" disabled={pending}>
            {pending ? "Loading...." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
