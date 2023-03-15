// import React, { useState } from "react";

// const Calendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   const renderDays = () => {
//     return days.map((day, index) => {
//       return (
//         <div key={index} className="day">
//           {day}
//         </div>
//       );
//     });
//   };

//   const renderCells = () => {
//     const monthStart = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       1
//     );
//     const monthEnd = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() + 1,
//       0
//     );
//     const startDate = new Date(
//       monthStart.getFullYear(),
//       monthStart.getMonth(),
//       monthStart.getDate() - monthStart.getDay()
//     );
//     const endDate = new Date(
//       monthEnd.getFullYear(),
//       monthEnd.getMonth(),
//       monthEnd.getDate() + (6 - monthEnd.getDay())
//     );
//     const daysArray = [];
//     let currentDay = startDate;
//     while (currentDay <= endDate) {
//       daysArray.push(currentDay);
//       currentDay = new Date(
//         currentDay.getFullYear(),
//         currentDay.getMonth(),
//         currentDay.getDate() + 1
//       );
//     }
//     return daysArray.map((day, index) => {
//       return (
//         <div key={index} className="cell">
//           {day.getDate()}
//         </div>
//       );
//     });
//   };

//   const handlePrevClick = () => {
//     setCurrentDate(
//       new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
//     );
//   };

//   const handleNextClick = () => {
//     setCurrentDate(
//       new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
//     );
//   };

//   return (
//     <div className="calendar">
//       <div className="header">
//         <div className="prev" onClick={handlePrevClick}>
//           &#x3c;
//         </div>
//         <div className="month">{months[currentDate.getMonth()]}</div>
//         <div className="next" onClick={handleNextClick}>
//           &#x3e;
//         </div>
//       </div>
//       <div className="days">{renderDays()}</div>
//       <div className="cells">{renderCells()}</div>
//     </div>
//   );
// };

// export default Calendar;
import "./Calendar.scss";
import { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import AsideFilter from "../../AsideFilter/AsideFilter";

export const FilterWrapper = () => {
  return (
    <div className="calendar-header-filter">
      <div>
        <img src="/images/filter.png" alt="" />
      </div>
      <p>фильтр</p>
    </div>
  );
};

const Calendar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <section className="calendar">
        <div className="calendar__container">
          <h1 className="calendar__title">Календарь</h1>
          <div className="calendar__header-wrapper">
            <div onClick={() => setIsActive(true)}>
              <FilterWrapper />
            </div>
            <div className="calendar__header-currentData">
              <span>
                <HiOutlineChevronLeft />
              </span>
              <p>февраль, 2023</p>
              <span>
                <HiOutlineChevronRight />
              </span>
            </div>
          </div>
          <div>
            <div className="calendar__date-wrapper">
              <div className="calendar__weekDay">
                <p>06</p>
                <span>понедельник</span>
              </div>
              <div className="calendar__hour-info">
                <p>12:00</p>
                <h3>Corem ipsum dolor </h3>
                <span>Porem ipsum dolor </span>
              </div>
              <div className="calendar__hour-info">
                <p>12:00</p>
                <h3>Corem ipsum dolor </h3>
                <span>Porem ipsum dolor </span>
              </div>
            </div>
            <div className="calendar__date-wrapper">
              <div className="calendar__weekDay">
                <p>06</p>
                <span>понедельник</span>
              </div>
              <div className="calendar__hour-info">
                <p>12:00</p>
                <h3>Corem ipsum dolor </h3>
                <span>Porem ipsum dolor </span>
              </div>
              <div className="calendar__hour-info">
                <p>12:00</p>
                <h3>Corem ipsum dolor </h3>
                <span>Porem ipsum dolor </span>
              </div>
            </div>
            <div className="calendar__date-wrapper">
              <div className="calendar__weekDay">
                <p>06</p>
                <span>понедельник</span>
              </div>
              <div className="calendar__hour-info">
                <p>12:00</p>
                <h3>Corem ipsum dolor </h3>
                <span>Porem ipsum dolor </span>
              </div>
              <div className="calendar__hour-info">
                <p>12:00</p>
                <h3>Corem ipsum dolor </h3>
                <span>Porem ipsum dolor </span>
              </div>
            </div>
            <div className="calendar__date-wrapper">
              <div className="calendar__weekDay">
                <p>06</p>
                <span>понедельник</span>
              </div>
              <div className="calendar__hour-info">
                <p>12:00</p>
                <h3>Corem ipsum dolor </h3>
                <span>Porem ipsum dolor </span>
              </div>
              <div className="calendar__hour-info">
                <p>12:00</p>
                <h3>Corem ipsum dolor </h3>
                <span>Porem ipsum dolor </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AsideFilter isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Calendar;
