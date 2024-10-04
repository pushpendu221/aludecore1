import Apicall from "@/lib/apicall";

export default async function ValidateToken(token) {
  const response = Apicall("token/validate", "POST", {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  });
  return response;
}
