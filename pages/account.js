import Image from "next/image";
import profile from "../asset/profile.jpg";
import styles from "../styles/account.module.css";

export default function Account() {
  return (
    <div className={styles.account}>
      <h1>Profile</h1>
      <div className={styles.profilePicture}>
        <Image
          className={styles.accountImage}
          src={profile}
          width={150}
          height={150}
        />
        <div className={styles.pictureBtns}>
        <button className={styles.btn1}>Change Picture</button>
        <button className={styles.btn2}>Delete Picture</button>
        </div>
      </div>
      <div className={styles.profileForm}>
      <label className={styles.label}>Full Name: </label><b className={styles.input}>Sidra Waseem</b>
      <label className={styles.label}>Email: </label><b className={styles.input}>myemail@gmail.com</b>
      <label className={styles.label}>Location: </label><b className={styles.input}>Karachi, Pakistan</b>
      <label className={styles.label}>Bio: </label><b className={styles.input}>Undergrad SoftwareEngineer || React Developer || UI/UX Designer</b>
      <div className={styles.updateBtns}>
        <button className={styles.btn1}>Update Account</button>
        <button className={styles.btn2}>Save Update</button>
        </div>
      </div>
    </div>
  );
}
