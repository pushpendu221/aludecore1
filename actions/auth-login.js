"use server";
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
  try {
    const response = await fetch(
      "https://yourcloudnetwork.net/projects/aludecor/wp-json/aludecor/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "eb189995-bc6e-4703-b671-ae41e1c87f60",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      console.log("result");
      return {
        success: true,
        result: result.data,
      };
    } else {
      return {
        success: false,
        resError: result.message,
      };
    }
  } catch (error) {
    console.error(error);
  }
}
