import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import "./styles.css";
import * as XLSX from "xlsx";

const UploadPage = () => {
  const fileInputRef = useRef(null);
  const dropAreaRef = useRef(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fileInput = fileInputRef.current;
    const dropArea = dropAreaRef.current;

    const handleFileSelect = (event) => {
      const fileInput = event.target;
      const fileText = document.getElementById("fileText");

      if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        fileText.textContent = fileName;
      }
    };

    const handleDragOver = (event) => {
      event.preventDefault();
    };

    const handleDrop = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      const fileInput = fileInputRef.current;
      fileInput.files = event.dataTransfer.files;
      handleFileSelect(event);
    };

    const readExcelData = () => {
      const fileInput = fileInputRef.current;

      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];

        const reader = new FileReader();
        reader.onload = function (e) {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });

          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];

          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

          setTableData(jsonData);
        };

        reader.readAsBinaryString(file);
      }
    };

    fileInput.addEventListener("change", handleFileSelect);
    document
      .getElementById("readButton")
      .addEventListener("click", readExcelData);

    dropArea.addEventListener("dragover", handleDragOver);
    dropArea.addEventListener("drop", handleDrop);

    return () => {
      fileInput.removeEventListener("change", handleFileSelect);
      document
        .getElementById("readButton")
        .removeEventListener("click", readExcelData);
      dropArea.removeEventListener("dragover", handleDragOver);
      dropArea.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <div className="upload">
      <div className="containerr">
        <div className="box1">
          <ul>
            <li>
              <i className="ri-dashboard-fill"></i> Dashboard
            </li>
            <li>
              <i className="ri-file-list-3-fill"></i> Invoice
            </li>
            <li>
              <i className="ri-upload-2-fill"></i> Upload
            </li>
            <li>
              <i className="ri-calendar-fill"></i> Calendar
            </li>
            <li>
              <i className="ri-settings-3-fill"></i> Settings
            </li>
            <li>
              <i className="ri-notification-2-fill"></i> Notification
            </li>
            <li>
              <i className="ri-calendar-event-fill"></i> Schedule
            </li>
          </ul>
        </div>

        <div className="box2">
          <h1>Upload CSV</h1>

          <div className="small-box" ref={dropAreaRef} id="dropArea">
            <img
              src="../public/excel.png"
              alt="XLSX Logo"
              className="xlsx-logo"
            />
            <label htmlFor="fileInput">
              <p id="fileText">Drop your Excel sheet here or Browse</p>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept=".xlsx, .xls"
              ref={fileInputRef}
            />
            <a href="#" className="button" id="readButton">
              Read Excel Data
            </a>
          </div>
        </div>
      </div>

      <div className="box33">
        <div className="box3">
          <div className="table" id="tableContainer">
            <div className="Uploads">
              <h2>Uploads</h2>
            </div>
            <table id="dataTable">
              <thead>
                <tr>
                  {tableData[0] &&
                    tableData[0].map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {tableData.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
