import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

interface UserClaims {
  name: string;
  role: "admin" | "user";
  sub: string;
  exp: number;
}

interface UserData {
  name: string;
  email: string;
  role: "admin" | "user";
}

export function getUser(): UserData | null {
  const tokenCookie = cookies().get("token");

  if (!tokenCookie?.value) {
    return null;
  }

  const claims = jwtDecode<UserClaims>(tokenCookie.value);

  return {
    name: claims.name,
    email: claims.sub,
    role: claims.role,
  };
}
