import React from "react";
import Card from "./Card/Card";
import SearchIcon from "@mui/icons-material/Search";
import "./Students.css";
import Row from "./row/Row";

const Students = () => {
  return (
    <div className="students-wrapper">
      <div className="students-content">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="students-table">
        <div className="students-header">
          <div className="title">
            <h2 className="students-title">Hamma O'quvchilar</h2>
            <span className="students-span">Faol o'quvchilar</span>
          </div>

          <form className="students-form">
            <div className="students-form-search">
              <SearchIcon className="students-search" />
              <input
                type="text"
                className="students-input"
                placeholder="Qidiruv"
              />
            </div>

            <div className="students-select-wrapper">
              <span className="students-status">Short Status: </span>
              <select className="students-select">
                <option value="faol">Faol</option>
                <option value="faol emas">Faol Emas</option>
              </select>
            </div>
          </form>
        </div>

        <table className="table">
          <thead>
            <tr>
              <td>F.I.O</td>
              <td>Yo'nalish</td>
              <td>Telefon nomer</td>
              <td>To'lov</td>
              <td>Guruh</td>
              <td>Status</td>
            </tr>
          </thead>

          <tbody>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
