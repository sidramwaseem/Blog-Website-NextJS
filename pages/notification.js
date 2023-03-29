import Image from "next/image";
import profile from "../asset/profile.jpg";
import styles from "../styles/notification.module.css";

export default function Notification(){
    return (
        <>
        <div className={styles.notifications}>
        <Image
          className={styles.notificationImage}
          src={profile}
          width={50}
          height={50}
        />
        <p><b>Allisa Charles </b>likes your Blog</p>
        </div>
        <div className={styles.notifications}>
        <Image
          className={styles.notificationImage}
          src={profile}
          width={50}
          height={50}
        />
        <p><b>Allisa Charles </b>shared your Blog</p>
        </div>
        <div className={styles.notifications}>
        <Image
          className={styles.notificationImage}
          src={profile}
          width={50}
          height={50}
        />
        <p><b>David Simpson </b>commented on your Blog</p>
        </div>
        <div className={styles.notifications}>
        <Image
          className={styles.notificationImage}
          src={profile}
          width={50}
          height={50}
        />
        <p><b>Allisa Charles </b>likes your Blog</p>
        </div>
        <div className={styles.notifications}>
        <Image
          className={styles.notificationImage}
          src={profile}
          width={50}
          height={50}
        />
        <p><b>David Simpson </b>Shared your Blog</p>
        </div>
        <div className={styles.notifications}>
        <Image
          className={styles.notificationImage}
          src={profile}
          width={50}
          height={50}
        />
        <p><b>Allisa Charles </b>commented on your Blog</p>
        </div>
        </>
    )
}