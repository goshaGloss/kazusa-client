import { Input, Button } from "../components";
import styles from "./index.module.css";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Register</h2>
        <Input type="text" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <Button type="submit">Submit</Button>
      </div>
    </div>
  );
}
