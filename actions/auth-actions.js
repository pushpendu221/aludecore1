"use server";
import Apicall from "@/lib/apicall";
export async function wpSignUp(state, formData) {
  //1. validate fields
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a proper Email address";
  }
  if (password.trim().length < 8) {
    errors.password = "Please enter a password greater than 8 characters";
  }
  if (firstName == "") {
    errors.firstName = "Please enter your FirstName";
  }
  // if (firstName || lastName || email || password) {
  //   errors.fields = "Please fillup the fields";
  // }
  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }
  //2. Storing in Wp Db
  let response = Apicall(
    "user/register",
    "POST",
    {
      "Content-Type": "application/json",
      "x-api-key": "eb189995-bc6e-4703-b671-ae41e1c87f60",
    },
    {
      username: email,
      first_name: firstName,
      last_name: lastName,
      password: password,
    }
  );

  return response;
}
