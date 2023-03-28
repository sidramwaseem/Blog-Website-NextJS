import Blog4 from "../asset/blog4.jpg";
import Blog5 from "../asset/blog5.jpg";
import Blog6 from "../asset/blog6.jpg";
import Image from "next/image";
import styles from "../styles/popular.module.css";

export default function Popular() {
  return (
    <>
      <div className={styles.Blogs}>
        <div className={styles.blogContainer}>
          <Image
            className={styles.blogImage}
            src={Blog4}
            width={300}
            height={300}
          />
          <p className={styles.blogText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper enim nec interdum venenatis. Donec condimentum, ex vitae
            imperdiet hendrerit, elit dolor sollicitudin urna, sit amet posuere
            ante velit eu libero.{" "}
          </p>
          <button className={styles.blogButton}>Read More</button>
        </div>

        <div className={styles.blogContainer}>
          <Image
            className={styles.blogImage}
            src={Blog5}
            width={300}
            height={300}
          />
          <p className={styles.blogText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper enim nec interdum venenatis. Donec condimentum, ex vitae
            imperdiet hendrerit, elit dolor sollicitudin urna, sit amet posuere
            ante velit eu libero.{" "}
          </p>
          <button className={styles.blogButton}>Read More</button>
        </div>
        <div className={styles.blogContainer}>
          <Image
            className={styles.blogImage}
            src={Blog6}
            width={300}
            height={300}
          />
          <p className={styles.blogText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper enim nec interdum venenatis. Donec condimentum, ex vitae
            imperdiet hendrerit, elit dolor sollicitudin urna, sit amet posuere
            ante velit eu libero.{" "}
          </p>
          <button className={styles.blogButton}>Read More</button>
        </div>
      </div>
    </>
  );
}
