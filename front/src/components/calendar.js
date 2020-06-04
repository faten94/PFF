import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
    const [startDate, setStartDate] =
    React.useState(new Date());
    return (
        <div>
        <DatePicker selected={startDate}
        onChange={date => setStartDate(date)}/>
        </div>
    );
    // console.log(date)
};
export default Calendar
