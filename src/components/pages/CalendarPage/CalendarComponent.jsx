import "./Calendar.scss";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import axios from "axios";
import moment from "moment/moment";

function CalendarComponent({ setFilteredData }) {
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState([]);
  const [dataDates, setDataDates] = useState([]);
  const [dataDate, setDataDate] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}courses/get-main`)
      .then((res) => {
        // setFilteredData(res.data.data.result);
        setData(res.data.data.result);
      });
  }, []);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      const dateStr = data[i].created_on;
      const dateObj = moment(dateStr).format("DD-MM-YYYY");
      setDataDates((prev) => [...prev, dateObj]);
    }
  }, [data]);

  useEffect(() => {
    const filteredData = data.filter((obj) => {
      const objDate = moment(obj.created_on).format("YYYY-MM-DD"); // extract the date from the object and format it as YYYY-MM-DD
      return objDate === moment(value).format("YYYY-MM-DD"); // compare the formatted date to the current date
    });

    setFilteredData(filteredData);
  }, [value]);

  const highlightTile = ({ date }) => {
    if (dataDates.find((d) => d === moment(date).format("DD-MM-YYYY"))) {
      return "highlight";
    }
    return "";
  };

  const locale = {
    months: [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ],
    weekdaysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  };

  return (
    <Calendar
      // locale={}
      tileClassName={highlightTile}
      onChange={onChange}
      value={value}
    />
  );
}

export default CalendarComponent;
