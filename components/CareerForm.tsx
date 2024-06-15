"use client";
import React, { useState } from "react";

const CareerForm = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form>
      <div>
        <label>会社名</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div>
        <label>肩書・ポジション</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <div>
        <label>在籍期間</label>
        <input
          type="month"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="month"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div>
        <label>業務内容</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">作成する</button>
    </form>
  );
};

export default CareerForm;
