"use client";

import ValidateToken from "@/component/validateToken";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import classes from "../signup/signup.module.css";
import { useFormState } from "react-dom";
import { wplogin } from "@/actions/auth-login";

export default function Login() {
  const initialState = {
    errors: {},
    success: false,
    result: null,
    resError: null,
  };
  const [state, action] = useFormState(wplogin, initialState);
  const router = useRouter();
  let result = {};
  async function fetchData() {
    const token = localStorage.getItem("token");
    result = await ValidateToken(token);

    //console.log(result);
    if (result?.success) {
      console.log("reachedd1!!", result);
      // Redirect to the dashboard or any other page
      router.push("/account");
    }
    if (state.success && state.result) {
      console.log("reachedd2!!");
      // Store the token in localStorage
      localStorage.setItem("token", state.result.token);
      router.push("/account");
    }
  }

  useEffect(() => {
    fetchData();
  }, [state, router]);

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
            Login Now
          </button>
          {state.resError && <p className="error">{state.resError}</p>}
        </form>
      </div>
    </div>
  );
}
