import { FaAngleDown } from 'react-icons/fa6';

const Dropdown = ({ string }) => {
  return (
    <div className="w-[848px] h-[58px] px-6 py-[17px] rounded-xl border border-blue-600 items-center gap-[366px] inline-flex mt-12">
      <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">
        {string}
      </div>
      <FaAngleDown className="ml-auto" />
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
      <Dropdown string="Can education flashcards be used for all age groups?" />
      <Dropdown string="How do education flashcards work?" />
      <Dropdown string="Can education flashcards be used for test preparation?" />
    </div>
  );
};
export default FAQ;
