export default async function Apicall(apicall, method, headers, body = {}) {
  try {
    const response = await fetch(
      `https://yourcloudnetwork.net/projects/aludecor/wp-json/aludecor/v1/${apicall}`,
      {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const result = await response.json();
    //console.log(result);
    if (response.ok) {
      return {
        success: true,
        result: result.data,
      };
    } else {
      return {
        resError: result.message,
      };
    }
  } catch (error) {
    console.error(error);
  }
}
