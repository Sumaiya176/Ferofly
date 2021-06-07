import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './Schedule.css'

import "react-datepicker/dist/react-datepicker.css";

const Schedule = () => {
    const [startDate, setStartDate] = useState(null);
    return (
     <div className="date-box">
          <DatePicker
          className="date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        isClearable
        placeholderText="DD MM YYYY"
      />
       <DatePicker
          className="date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        isClearable
        placeholderText="DD MM YYYY"
      />
      <button className="search-btn">Search</button>
     </div>
  );
};

export default Schedule;
