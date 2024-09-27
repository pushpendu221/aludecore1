"use server";
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
  try {
    const response = await fetch(
      "https://yourcloudnetwork.net/projects/aludecor/wp-json/aludecor/v1/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "eb189995-bc6e-4703-b671-ae41e1c87f60",
        },
        body: JSON.stringify({
          username: email,
          first_name: firstName,
          last_name: lastName,
          password: password,
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    if (result.ok) {
      console.log("result");
      // Store the token in sessionStorage
      sessionStorage.setItem("token", result.data.token);
      // Redirect the user to the dashboard or any protected route
      router.push("/login");
    } else {
      console.error(result.message);
    }
  } catch (error) {
    // .then((response) => response.json())
    // .then((data) => console.log(data));

    //console.log(result);
    console.error(error);
  }
}
