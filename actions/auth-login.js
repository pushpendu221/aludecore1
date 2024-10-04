"use server";
import Apicall from "@/lib/apicall";
export async function wplogin(state, formData) {
  //1. validate fields
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a proper Email address";
  }
  if (password == "") {
    errors.password = "Please enter a proper password";
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
    "user/login",
    "POST",
    {
      "Content-Type": "application/json",
      "x-api-key": "eb189995-bc6e-4703-b671-ae41e1c87f60",
    },
    {
      username: email,
      password: password,
    }
  );
  //console.log(response.data);
  return response;
}
