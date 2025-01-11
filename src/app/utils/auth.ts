import { cookies, type UnsafeUnwrappedCookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

interface UserClaims {
  name: string;
  role: "admin" | "user";
  sub: string;
  exp: number;
  userId: string;
}

interface UserData {
  userId: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

export function getUser(): UserData | null {
  const tokenCookie = (cookies() as unknown as UnsafeUnwrappedCookies).get("token");

  if (!tokenCookie?.value) {
    return null;
  }

  const claims = jwtDecode<UserClaims>(tokenCookie.value);

  return {
    userId: claims.userId,
    name: claims.name,
    email: claims.sub,
    role: claims.role,
  };
}
