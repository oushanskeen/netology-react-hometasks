//import React from "react";
import "../../css/datepicker.css";
import { cutMonthToWeeks  } from "./utils";
import { calendarArray }  from "./calendarUtils";
// db
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

const serialiseDate = _now => {
  const prepared = _now.toString().split(" ");
  return {
    weekDay: prepared[0],
    month: prepared[1],
    date: prepared[2],
    year: prepared[3]
  };
};

const date = () => ({
  weekday: weekDays[serialiseDate(now).weekDay][0],
  day: serialiseDate(now).date,
  monthClaim: months[serialiseDate(now).month][1],
  year: serialiseDate(now).year,
  monthDenote: months[serialiseDate(now).month][0]
});

/*
const pureMonth = [
  27, 28, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 1, 2, 3
];
*/
const pureMonth = calendarArray(date().year, date().month);
console.log("pure month: ", cutMonthToWeeks(pureMonth,[]));
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
const CalendarHead = ({ date }) => (
  <>
    <div className="ui-datepicker-material-header">
      <div className="ui-datepicker-material-day">{date().weekday}</div>
      <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{date().day}</div>
        <div className="ui-datepicker-material-month">{date().monthClaim}</div>
        <div className="ui-datepicker-material-year">{date().year}</div>
      </div>
    </div>
    <div className="ui-datepicker-header">
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{date().monthDenote}</span>&nbsp;
        <span class="ui-datepicker-year">{date().year}</span>
      </div>
    </div>
  </>
);
const CalendarFoot = ({ date }) => (
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
      {cutMonthToWeeks(pureMonth,[]).map(e => (
        <tr>
          {e.map(ee => (
            <td>{ee}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
const Calendar = ({ _date }) => (
  <div className="ui-datepicker">
    <CalendarHead date={date} />
    <CalendarFoot date={date} />
  </div>
);

export default Calendar;
