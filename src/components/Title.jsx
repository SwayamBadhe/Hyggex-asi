const Title = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-14 flex gap-10 pb-3 text-xl font-medium font-['Inter']">
        <p className="relative font-bold text-blue-950">
          Study
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-950"></span>
        </p>

        <p className="pb-3 text-zinc-500 text-xl font-medium font-['Inter']">
          Quiz
        </p>
        <p className="pb-3 text-zinc-500 text-xl font-medium font-['Inter']">
          Test
        </p>
        <p className="pb-3 text-zinc-500 text-xl font-medium font-['Inter']">
          Game
        </p>
        <p className="pb-3 text-zinc-500 text-xl font-medium font-['Inter']">
          Others
        </p>
      </div>
    </div>
  );
};
export default Title;
