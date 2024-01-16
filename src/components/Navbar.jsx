import hyggex_logo from '../assets/Component 40.png';

const Navbar = () => {
  return (
    <nav className="bg-white pt-4">
      <div className="container flex justify-between items-center">
        <div className="text-white font-bold text-xl h-[39px] w-[191px]">
          <img src={hyggex_logo} alt="" />
        </div>
        <div className="ml-auto flex gap-10 items-center">
          <div className="text-neutral-700 text-lg font-normal font-['Inter']">
            Home
          </div>
          <div className="text-neutral-700 text-lg font-normal font-['Inter']">
            Flashcard
          </div>
          <div className="text-neutral-700 text-lg font-normal font-['Inter']">
            Contact
          </div>
          <p className="text-neutral-700 text-lg font-normal font-['Inter']">
            FAQ
          </p>
          <div className="w-32 h-12 px-10 py-[13px] bg-gradient-to-b from-blue-950 to-blue-800 rounded-[32px] justify-center items-center gap-2.5 inline-flex">
            <p className="text-white text-lg font-medium font-['Inter']">
              Login
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
