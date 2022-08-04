import Link from "next/link";
import styles from "../styles/TopProjectCard.module.css";

const TopProjectCard = ({ image, name, id, link }) => {
  return (
    <a href={`${link}`} target="_blank">
      <div className={styles.imagecontainer}>
        <div className={styles.imagediv}>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <h2 className={styles.projectnumber}>{id}</h2>
      </div>
    </a>
  );
};

export default TopProjectCard;
