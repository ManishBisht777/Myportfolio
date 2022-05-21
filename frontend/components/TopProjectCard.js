import styles from "../styles/TopProjectCard.module.css";
import Image from "next/image";

const TopProjectCard = ({ image, name, id }) => {
  return (
    <div className={styles.imagecontainer}>
      <div className={styles.imagediv}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <h2 className={styles.projectnumber}>{id}</h2>
    </div>
  );
};

export default TopProjectCard;
