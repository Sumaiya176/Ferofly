import React from "react";

const DateComponent = () => {
  return (
    <div>
      <DatePicker
        selected={date}
        onSelect={handleDateSelect} //when day is clicked
        onChange={handleDateChange} //only when value has changed
      />
    </div>
  );
};

export default DateComponent;
