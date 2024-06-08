import { Button, Input } from "@/app/components";
import styles from "./index.module.css";
import { TextArea } from "@/app/components/textarea/textarea";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Create Module</h2>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="number" name="price" placeholder="Price" />
        <TextArea name="description" placeholder="Description" />
        <Button type="submit">Create</Button>
      </div>
    </div>
  );
}
