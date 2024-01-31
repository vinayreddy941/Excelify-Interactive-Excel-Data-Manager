import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import * as XLSX from "xlsx"; // Import XLSX library

import "./styles.css"
const UploadPage = () => {
  const fileInputRef = useRef(null);
  const dropAreaRef = useRef(null);
  const [tableData, setTableData] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleFileSelect = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];
    if (file) {
      setFileName(file.name);
      // Render remove button
      const dropArea = dropAreaRef.current;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove File";
      removeButton.onclick = () => {
        fileInput.value = ""; // Clear the file input
        setFileName("");
        dropArea.removeChild(removeButton); // Remove the remove button
      };
      dropArea.appendChild(removeButton);
    }
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

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const fileInput = fileInputRef.current;
    fileInput.files = event.dataTransfer.files;
    if (file) {
      setFileName(file.name);
      // Render remove button
      const dropArea = dropAreaRef.current;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove File";
      removeButton.onclick = () => {
        fileInput.value = ""; // Clear the file input
        setFileName("");
        dropArea.removeChild(removeButton); // Remove the remove button
      };
      dropArea.appendChild(removeButton);
    }
  };

  useEffect(() => {
    const dropArea = dropAreaRef.current;

    document.getElementById("readButton").addEventListener("click", readExcelData);

    dropArea.addEventListener("dragover", handleDragOver);
    dropArea.addEventListener("drop", handleDrop);

    return () => {
      document.getElementById("readButton").removeEventListener("click", readExcelData);
      dropArea.removeEventListener("dragover", handleDragOver);
      dropArea.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <div className="upload">
      <Header />
      <div className="containerr">
        {/* Header Component */}
        <div className="box1">
          <ul>
            <li><i className="ri-dashboard-fill"></i> Dashboard</li>
            <li><i className="ri-file-list-3-fill"></i> Invoice</li>
            <li><i className="ri-upload-2-fill"></i> Upload</li>
            <li><i className="ri-calendar-fill"></i> Calendar</li>
            <li><i className="ri-settings-3-fill"></i> Settings</li>
            <li><i className="ri-notification-2-fill"></i> Notification</li>
            <li><i className="ri-calendar-event-fill"></i> Schedule</li>
          </ul>
        </div>

        <div className="box2">
          <h1>Upload CSV</h1>
          <div className="small-box" ref={dropAreaRef} id="dropArea">
            <img src="../public/excel.png" alt="XLSX Logo" className="xlsx-logo" />
            <label className="droop" htmlFor="fileInput">
              <p>{fileName ? fileName : "Drop your Excel sheet here or Browse"}</p>
            </label>
            <input type="file" id="fileInput" accept=".xlsx, .xls" ref={fileInputRef} onChange={handleFileSelect} />
            <div className="button-container"> {/* Added button container */}
              <a href="#" className="button" id="readButton">Read Excel Data</a>
            </div>
          </div>
        </div>
      </div>
      <div className="helop">
        <div className="box33">
          <div className="box3">
            <div className="table" id="tableContainer">
              <div className="Uploads">
                <h2>Uploads</h2>
              </div>
              <table id="dataTable">
                <thead>
                  <tr>
                    {tableData[0] && tableData[0].map((header, index) => <th key={index}>{header}</th>)}
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
        <div className="footerr">
        <Footer />
        </div>
      </div>

      
      
    </div>
  );
};

export default UploadPage;
