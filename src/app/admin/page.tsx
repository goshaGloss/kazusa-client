import styles from "./course-list.module.css";
import Table from "@/app/components/table/table";
export default function CourseList() {
  const data = [
    {
      id: 0,
      courseId: 12,
      name: "Введение в ИИ",
      duration: "1 час",
      price: 130,
    },
    {
      id: 1,
      courseId: 12,
      name: "Введение в ИИ",
      duration: "1 час",
      price: 130,
    },
    {
      id: 2,
      courseId: 8,
      name: "Машинное обучение",
      duration: "2 часа",
      price: 200,
    },
    {
      id: 3,
      courseId: 8,
      name: "Машинное обучение",
      duration: "2 часа",
      price: 200,
    },
    {
      id: 4,
      courseId: 5,
      name: "Глубокое обучение",
      duration: "3 часа",
      price: 250,
    },
    {
      id: 5,
      courseId: 5,
      name: "Глубокое обучение",
      duration: "3 часа",
      price: 250,
    },
    {
      id: 6,
      courseId: 17,
      name: "Нейронные сети",
      duration: "2.5 часа",
      price: 180,
    },
    {
      id: 7,
      courseId: 17,
      name: "Нейронные сети",
      duration: "2.5 часа",
      price: 180,
    },
    {
      id: 8,
      courseId: 21,
      name: "Обработка естественного языка",
      duration: "2 часа",
      price: 200,
    },
    {
      id: 9,
      courseId: 21,
      name: "Обработка естественного языка",
      duration: "2 часа",
      price: 200,
    },
    {
      id: 10,
      courseId: 3,
      name: "Рекомендательные системы",
      duration: "1.5 часа",
      price: 150,
    },
    {
      id: 11,
      courseId: 3,
      name: "Рекомендательные системы",
      duration: "1.5 часа",
      price: 150,
    },
    {
      id: 12,
      courseId: 10,
      name: "Компьютерное зрение",
      duration: "2 часа",
      price: 190,
    },
    {
      id: 13,
      courseId: 10,
      name: "Компьютерное зрение",
      duration: "2 часа",
      price: 190,
    },
    {
      id: 14,
      courseId: 14,
      name: "Робототехника",
      duration: "3 часа",
      price: 250,
    },
    {
      id: 15,
      courseId: 14,
      name: "Робототехника",
      duration: "3 часа",
      price: 250,
    },
    {
      id: 16,
      courseId: 9,
      name: "Автоматизация процессов",
      duration: "2.5 часа",
      price: 180,
    },
    {
      id: 17,
      courseId: 9,
      name: "Автоматизация процессов",
      duration: "2.5 часа",
      price: 180,
    },
    {
      id: 18,
      courseId: 7,
      name: "Обучение с подкреплением",
      duration: "2 часа",
      price: 200,
    },
    {
      id: 19,
      courseId: 7,
      name: "Обучение с подкреплением",
      duration: "2 часа",
      price: 200,
    },
  ];

  const columns = Object.keys(data[0]);
  return (
    <div className={styles.courseList}>
      <div className={styles.courseContainer}>
        <p className={styles.courseContainerTitle}>Course List</p>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
