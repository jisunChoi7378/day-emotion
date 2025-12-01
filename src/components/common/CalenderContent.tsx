interface CalenderContentProps {
  children?: React.ReactNode;
  color: string;
}

const CalenderContent = ({children, color}: CalenderContentProps) => {
  const openCalendarContent = () => {
    console.log("Calendar Content Clicked");
  };
  return (
    <div
      className={`p-5 rounded-sm cursor-pointer ${color}`}
      onClick={openCalendarContent}
    >
      {children}
    </div>
  );
};

export default CalenderContent;
