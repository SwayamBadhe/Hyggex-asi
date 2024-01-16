import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';

const Dropdown = ({ string, drop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[848px] mt-4 relative">
      <div
        className="w-full px-6 py-[17px] rounded-xl border border-blue-600 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">
          {string}
        </div>
        {isOpen && <p>{drop}</p>}
        <div
          className={`absolute right-6 top-[50%] transform -translate-y-1/2 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="mt-14">
      <div
        className="text-blue-950
      text-5xl
      font-bold
      font-['Inter']
      tracking-tight"
      >
        FAQ
      </div>
      <Dropdown
        string="Can education flashcards be used for all age groups?"
        drop="Yes education flash cards can be tailored to different age groups and learning levels. There are flash cards designed for a preschoolers elementary school students high school students and even for college level and adult learners"
      />
      <Dropdown
        string="How do education flashcards work?"
        drop="Education of flash cards work by presenting a question or a prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly reinforcing their memory and announcing learning through repetition"
      />
      <Dropdown
        string="Can education flashcards be used for test preparation?"
        drop="Education of flash cards work by presenting a question or a prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly reinforcing their memory and announcing learning through repetition"
      />
    </div>
  );
};
export default FAQ;
