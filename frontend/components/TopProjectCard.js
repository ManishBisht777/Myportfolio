import Image from "next/image";
import styles from "../styles/TopProjectCard.module.css";

const TopProjectCard = ({ image, name, id }) => {
  return (
    <div className={styles.imagecontainer}>
      <Image
        src={image}
        alt={name}
        height={220}
        width={220}
        objectFit="cover"
      />
      <h2 className={styles.projectnumber}>{id}</h2>
    </div>
  );
};

export default TopProjectCard;
