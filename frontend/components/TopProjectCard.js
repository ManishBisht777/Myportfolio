import Link from "next/link";
import styles from "../styles/TopProjectCard.module.css";

const TopProjectCard = ({ image, name, id, link }) => {
  return (
    <Link href={`${link}`} target="_blank" rel="noreferrer">
      <div className={styles.imagecontainer}>
        <div className={styles.imagediv}>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <h2 className={styles.projectnumber}>{id}</h2>
      </div>
    </Link>
  );
};

export default TopProjectCard;
