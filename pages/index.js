import Link from 'next/link';
import Home1 from "../asset/Home1.jpg";
import Home2 from "../asset/Home2.jpg";
import Home3 from "../asset/Home3.jpg";

import Image from "next/image";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.firstColumn}>
          <h1 className={styles.heading}>
            New Breakthrough in Cancer Research Offers Hope for More Effective
            Treatments
          </h1>
          <p className={styles.paraTag}>
            Scientists and medical researchers around the world have been
            working tirelessly to find new and more effective treatments for
            cancer, one of the most devastating diseases of our time.{" "}
          </p>
          <p className={styles.paraTag}>
            In a recent breakthrough, a team of researchers has identified a
            promising new target for cancer therapies that could help to improve
            outcomes for patients.
          </p>
          <i>-Some random person</i>

          <h1 className={styles.heading}>
            Rising Inflation Sparks Concern Among Experts
          </h1>
          <p className={styles.paraTag}>
            Inflation, the rate at which the general level of prices for goods
            and services is rising, has become a major concern for the global
            economy.{" "}
          </p>
          <i>-Some random person</i>
        </div>

        <div className={styles.secondColumn}>
          <Image
            className={styles.blogImage}
            src={Home1}
            width={400}
            height={400}
          />
          <h1 className={styles.heading}>
            New Breakthrough in Cancer Research Offers Hope for More Effective
            Treatments
          </h1>
          <p className={styles.paraTag}>
            Scientists and medical researchers around the world have been
            working tirelessly to find new and more effective treatments for
            cancer, one of the most devastating diseases of our time.{" "}
          </p>
          <p className={styles.paraTag}>
            In a recent breakthrough, a team of researchers has identified a
            promising new target for cancer therapies that could help to improve
            outcomes for patients.
          </p>
          <i>-Some random person</i>
        </div>

        <div className={styles.thirdColumn}>
          <div>
            <Image
              className={styles.blogImage}
              src={Home2}
              width={300}
              height={300}
            />
            <h1 className={styles.heading}>
              New Breakthrough in Cancer Research Offers Hope for More Effective
              Treatments
            </h1>
            <i>-Some random person</i>
          </div>
          <div>
            <Image
              className={styles.blogImage}
              src={Home3}
              width={300}
              height={300}
            />
            <h1 className={styles.heading}>
              New Breakthrough in Cancer Research Offers Hope for More Effective
              Treatments
            </h1>
            <i>-Some random person</i>
          </div>
        </div>
      </div>
      <div className={styles.socials}>
      <Link href="#">Facebook </Link>&#x2022;
      <Link href="#">Instagram</Link>&#x2022;
      <Link href="#"> Twitter</Link>
      </div>
    </>
  );
}
