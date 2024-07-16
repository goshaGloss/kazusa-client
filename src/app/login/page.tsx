"use client";

import { useLogin } from "@/default/default";
import { Input, Button } from "../components";
import styles from "./index.module.css";
import { InternalHandlerLoginRequest } from "@/models";
import { useForm } from "react-hook-form";

export default function Page() {
  const { trigger: login } = useLogin();
  const { register, handleSubmit } = useForm<InternalHandlerLoginRequest>();

  const onSubmit = (data: InternalHandlerLoginRequest) => {
    login(data);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.heading}>Login</h2>
        <Input {...register("email")} type="text" placeholder="Email" />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
