"use client";

import Auth from "@/lib/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  let result = {};
  async function fetchData() {
    const token = localStorage.getItem("token");
    result = await Auth(token);
    console.log(result);
    if (result?.success) {
      // Redirect to the dashboard or any other page
      router.push("/account");
    }
    console.log(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>Login Page</>
    //   <div className={classes.mainbody}>
    //     <div className={classes.form_container}>
    //       <h1>Sign Up</h1>
    //       <form id="signup-form" action={action}>
    //         <div className={classes.form_group}>
    //           <label htmlFor="email">Email:</label>
    //           <input type="email" id="email" name="email" required />
    //           {state.errors?.email && (
    //             <div className={classes.error} id="email-error">
    //               {state.errors.email}
    //             </div>
    //           )}
    //         </div>
    //         <div className={classes.form_group}>
    //           <label htmlFor="password">Password:</label>
    //           <input type="password" id="password" name="password" required />
    //           {state.errors?.password && (
    //             <div className={classes.error} id="password-error">
    //               {state.errors.password}
    //             </div>
    //           )}
    //         </div>
    //         {state.errors && (
    //           <div className={classes.error} id="message-error">
    //             {Object.keys(state.errors).map((error) => (
    //               <li key={error}>{state.errors[error]}</li>
    //             ))}
    //           </div>
    //         )}
    //         <button className={classes.signup} type="submit" disabled={pending}>
    //           {pending ? "Loading...." : "Sign Up"}
    //         </button>
    //       </form>
    //     </div>
    //   </div>
  );
}
