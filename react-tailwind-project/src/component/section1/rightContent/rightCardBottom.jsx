import RightCardBottomBtn from "./rightCardBottomBtn"
import RightCardBottomText from "./RightCardBottomText"

const RightCardBottom = ({ text, buttonText ,bgColor}) => {
  return (
    <div>
      <RightCardBottomText text={text} />
      <RightCardBottomBtn buttonText={buttonText} bgColor={bgColor} />
    </div>
  );
};
export default RightCardBottom;
