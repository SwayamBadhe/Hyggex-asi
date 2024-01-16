import home from '../assets/home.png';
import greaterThan from '../assets/greaterthan.jpg';

const BreadCrumb = () => {
  return (
    <div className="mt-14">
      <div className="flex items-center">
        <img src={home} alt="" />
        <img src={greaterThan} alt="" />
        <p className="text-center text-zinc-500 text-lg font-medium font-['Inter']">
          Flashcard
        </p>
        <img src={greaterThan} alt="" />
        <p className="text-center text-zinc-500 text-lg font-medium font-['Inter']">
          Mathematics
        </p>
        <img src={greaterThan} alt="" />
        <p className="text-center text-blue-950 text-lg font-semibold font-['Inter']">
          Realation and Function
        </p>
      </div>
    </div>
  );
};
export default BreadCrumb;
