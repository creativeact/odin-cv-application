import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({ selectedDate, onChange, name }) {
  const renderMonthContent = (month, shortMonth, longMonth, day) => {
    const fullYear = new Date(day).getFullYear();
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

    return <span title={tooltipText}>{shortMonth}</span>;
  };

  const handleDateChange = (date) => {
    onChange(date, name);
  };

  return (
    <DatePicker
      showIcon
      selected={selectedDate}
      onChange={handleDateChange}
      renderMonthContent={renderMonthContent}
      showMonthYearPicker
      dateFormat="MMM yyyy"
    />
  );
}

export { DateInput };
