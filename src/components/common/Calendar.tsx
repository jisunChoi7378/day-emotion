interface CalendarProps {
  children: React.ReactNode;
  genreName?: string;
}

const Calendar = ({ children, genreName }: CalendarProps) => {
  return (
    <div className="m-5 p-5 flex flex-col justify-center items-center bg-[#ffffff55] rounded-lg shadow-lg">
      <div className="text-black text-xl">{genreName}</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Calendar;
