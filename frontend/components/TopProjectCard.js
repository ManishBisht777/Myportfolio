import styles from "../styles/TopProjectCard.module.css";
import Image from "next/image";

const TopProjectCard = ({ image, name, id }) => {
  return (
    <div className={styles.imagecontainer}>
      <div className={styles.imagediv}>
        <Image
          src={image}
          alt={name}
          height={250}
          width={220}
          objectFit="cover"
        />
      </div>
      <h2 className={styles.projectnumber}>{id}</h2>
    </div>
  );
};

export default TopProjectCard;
