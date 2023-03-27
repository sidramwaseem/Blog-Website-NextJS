import Blog1 from "../asset/blog1.jpg";
import Blog2 from "../asset/blog2.jpg";
import Blog3 from "../asset/blog3.jpg";
import Image from "next/image";
import styles from "../styles/collection.module.css";

export default function Collection() {
  return (
    <>
      <div className={styles.Blogs}>
        <div className={styles.blogContainer}>
          <Image
            className={styles.blogImage}
            src={Blog1}
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
            src={Blog2}
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
            src={Blog3}
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
