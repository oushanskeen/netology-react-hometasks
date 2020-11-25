//import React from "react";
import "../../css/datepicker.css";

const weekDays = {
  Mon: ["Понедельник", "Пн"],
  Tue: ["Вторник", "Вт"],
  Wed: ["Среда", "Ср"],
  Thu: ["Четверг", "Чт"],
  Fri: ["Пятница", "Пт"],
  Sat: ["Суббота", "Сб"],
  Sun: ["Воскресенье", "Вс"]
};
const months = {
  Jan: ["Январь", "ЯНВАРЯ"],
  Feb: ["Февраль", "ФЕВРАЛЯ"],
  Mar: ["Март", "МАРТА"],
  Apr: ["Апрель", "АПРЕЛЯ"],
  May: ["Май", "МАЯ"],
  Jun: ["Июнь", "ИЮНЯ"],
  Jul: ["Июль", "ИЮЛЯ"],
  Aug: ["Август", "АВГУСТА"],
  Sep: ["Сентябрь", "СЕНТЯБРЯ"],
  Oct: ["Октябрь", "ОКТЯБРЯ"],
  Nov: ["Ноябрь", "НОЯБРЯ"],
  Dec: ["Декабрь", "ДЕКАБРЯ"]
};

const now = new Date(2017, 2, 8);
const current = () => {
  const prepared = now.toString().split(" ");
  return {
    weekDay: prepared[0],
    month: prepared[1],
    date: prepared[2],
    year: prepared[3]
  };
};

const data = [
  weekDays[current().weekDay][0],
  current().date,
  months[current().month][1],
  current().year,
  months[current().month][0],
  current().year
];

const splittedMonth = [
  [27, 28, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 1, 2, 3]
];
/*
          <td className="ui-datepicker-other-month">27</td>
          <td className="ui-datepicker-other-month">28</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <td>6</td>
          <td>7</td>
          <td className="ui-datepicker-today">8</td>
*/
const CalendarHead = () => (
  <>
    <div className="ui-datepicker-material-header">
      <div className="ui-datepicker-material-day">{data[0]}</div>
      <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{data[1]}</div>
        <div className="ui-datepicker-material-month">{data[2]}</div>
        <div className="ui-datepicker-material-year">{data[3]}</div>
      </div>
    </div>
    <div className="ui-datepicker-header">
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{data[4]}</span>&nbsp;
        <span class="ui-datepicker-year">{data[5]}</span>
      </div>
    </div>
  </>
);
const CalendarFoot = () => (
  <table className="ui-datepicker-calendar">
    <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col className="ui-datepicker-week-end" />
      <col className="ui-datepicker-week-end" />
    </colgroup>
    <thead>
      <tr>
        {Object.values(weekDays).map(day => (
          <th scope="col" title={day[0]}>
            {day[1]}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {splittedMonth.map(e => (
        <tr>
          {e.map(ee => (
            <td>{ee}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
const Calendar = () => (
  <div className="ui-datepicker">
    <CalendarHead />
    <CalendarFoot />
  </div>
);

export default Calendar;
