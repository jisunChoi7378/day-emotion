interface CalendarProps {
  children: React.ReactNode;
}

const Calendar = ({children}: CalendarProps) => {
  return (
    <div className="bg-[#f5a4a4] m-5 p-5 rounded-lg shadow-md">{children}</div>
  );
};

export default Calendar;
