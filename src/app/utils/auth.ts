interface User {
  username: string;
  email: string;
  role: "admin" | "user";
}

export function getUser(): User | null {
  // TODO

  // const token = cookies().get('token')

  // if (!token) {
  //     return null
  // }

  // const claims = getClaims(parseJwt(token))

  // return {
  //     username: claims.username,
  //     email: claims.email,
  //     role: claims.role
  // }

  return {
    username: "Alnur",
    email: "alnurzhanibek@kazusa.kz",
    role: "admin",
  };
}
