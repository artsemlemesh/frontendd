import RocketLine from "./RocketLine";
import DesignerButton from "./SingleBtn";

function Line() {


  return (
    <div className="flex justify-center mt-4 2lg:mt-0 2lg:-translate-x-64 2lg:translate-y-28 ">
      <DesignerButton label="Начать путешествие" />
      {/* <RocketLine/> */}
    </div>
  );
}


export default Line;