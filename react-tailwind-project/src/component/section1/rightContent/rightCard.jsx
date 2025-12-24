import RightCardAbsolute from "./rightCardAbsolute";
import RightCardImg from "./rightCardImg";

const RightCard = ({ card }) => {
  const { imgUrl,...other} = card;
  return (
    <div className="h-full shrink-0 overflow-hidden  relative rounded-xl w-55">
        <RightCardImg imgUrl={imgUrl} />
        <RightCardAbsolute 
            card={other}
        />
    </div>
  );
};

export default RightCard;
