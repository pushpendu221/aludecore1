import classes from "./signup.module.css";
export default function Signup() {
  return (
    <div className={classes.mainbody}>
      <div className={classes.form_container}>
        <h1>Sign Up</h1>
        <form id="signup-form" novalidate>
          <div className={classes.form_group}>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <div className="error" id="email-error"></div>
          </div>
          <div className={classes.form_group}>
            <label for="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" required />
            <div className="error" id="firstname-error"></div>
          </div>
          <div className={classes.form_group}>
            <label for="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" required />
            <div className="error" id="lastname-error"></div>
          </div>
          <div className={classes.form_group}>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <div className="error" id="password-error"></div>
          </div>
          <button className={classes.signup} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
