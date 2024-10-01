export default async function Auth(token) {
  try {
    const response = await fetch(
      "https://yourcloudnetwork.net/projects/aludecor/wp-json/aludecor/v1/token/validate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const result = await response.json();
    //  console.log(result);
    if (response.ok) {
      return {
        success: true,
        result: result.data,
      };
    } else {
      return {
        success: false,
      };
    }
  } catch (error) {
    // .then((response) => response.json())
    // .then((data) => console.log(data));

    //console.log(result);
    console.error(error);
  }
}
