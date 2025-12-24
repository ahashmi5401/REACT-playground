import RightCard from "./rightCard";
import { cards } from "../../../data/Section1Data/rightCardsData.js";
import styles from "./rightContent.module.css";

const RightCards = () => {
  return (
    <div
      id="rightCards"
      className={`h-full w-3/5 flex flex-nowrap overflow-x-auto gap-4 pr-2 ${styles.rightCards}`}
    >
      {cards.map((card, index) => (
        <RightCard key={index} card={card} />
      ))}
    </div>
  );
};

export default RightCards;
