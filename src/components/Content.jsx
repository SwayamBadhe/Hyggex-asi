import bulb from '../assets/bulb.png';
import speaker from '../assets/speaker.png';
import next from '../assets/next.png';
import prev from '../assets/prev.jpg';
import zoom from '../assets/zoom.png';
import undo from '../assets/undo.png';
import logo from '../assets/logo.png';
import hyggex_name from '../assets/hyggex_name.png';
import add from '../assets/add.png';

const Content = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-14">
        <div className="bg-gradient-to-bl from-blue-900 via-blue-900 to-blue-600 rounded-3xl w-[700px] h-[390px] text-white relative">
          <img src={bulb} alt="" className="absolute top-8 left-8 w-8 h-8" />
          <img
            src={speaker}
            alt=""
            className="absolute top-8 right-8 w-8 h-8"
          />

          {/* Content inside the blue box */}
          <p className="text-3xl font-bold flex items-center justify-center h-full text-white font-['Lato'] tracking-wide">
            9 + 6 + 7x - 2x - 3
          </p>
        </div>
        <div className="justify-start items-center gap-36 inline-flex mt-8">
          <img src={undo} alt="" />
          <div className="justify-start items-center gap-11 flex">
            <img src={prev} alt="" />
            <div className="text-gray-800 text-2xl font-bold font-['Inter']">
              01/10
            </div>
            <img src={next} alt="" />
          </div>
          <img src={zoom} alt="" />
        </div>
      </div>
      <div className="flex items-center mt-12">
        <img src={logo} alt="" />
        <div className="flex flex-col items-center">
          <p className="text-zinc-500 text-xs font-bold font-['Inter']">
            Published by
          </p>
          <img src={hyggex_name} alt="" className="mt-2" />
        </div>
        <div className="ml-auto mr-14 flex items-center">
          <img src={add} alt="" />
          <p className="ml-7 text-blue-950 text-[28px] font-semibold font-[Inter]">
            Create Flashcard
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
