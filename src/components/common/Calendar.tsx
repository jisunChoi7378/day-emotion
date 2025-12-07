interface CalendarProps {
  children: React.ReactNode;
  className?: string;
  genreName?: string;
}

const Calendar = ({children, className, genreName}: CalendarProps) => {
  return (
    <div
      className={`m-5 p-5 rounded-lg shadow-md flex flex-col justify-center items-center ${className ?? "bg-[#f5a4a4]"}`}
    >
      <div>{genreName}</div>
      <div className="grid grid-cols-2 md:grid-cols-5 justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Calendar;
