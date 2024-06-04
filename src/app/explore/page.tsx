import styles from "./explore.module.css";
import Banner from "@/app/explore/components/banner";
import { Course } from "@/app/explore/components/course-grid";
import CourseCard from "@/app/explore/components/course-card/course-card";

const mockData: Course[] = new Array(40).fill({
  title: "Sociology 101",
  description:
    "This course introduces students to the methods and theories used by sociologists to explore the nature of society. Selected topics may include culture, socialization, social interaction, groups, social organization, deviance, social institutions, and social stratification.",
  id: Math.random() * 100,
  price: "1000$",
  image: "/course-placeholder.png",
});

export default function ExplorePage() {
  return (
    <>
      <div className={styles.explore}>
        <Banner />
        <div className={styles.courseGrid}>
          {mockData.map(({ id, title, description, image }) => (
            <CourseCard
              key={id}
              id={id}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
