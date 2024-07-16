"use client";

import { useRegister } from "@/default/default";
import { Input, Button } from "../components";
import styles from "./index.module.css";
import { InternalHandlerRegisterRequest } from "@/models";
import { useForm } from "react-hook-form";

export default function Page() {
  const { trigger: registerRequest } = useRegister();
  const { register, handleSubmit } = useForm<InternalHandlerRegisterRequest>();

  const onSubmit = (data: InternalHandlerRegisterRequest) => {
    registerRequest(data);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.heading}>Register</h2>
        <Input {...register("name")} type="text" placeholder="Name" />
        <Input {...register("email")} type="text" placeholder="Email" />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <Input
          {...register("passwordConfirmation")}
          type="passwordConfirmation"
          placeholder="Password confirmation"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
