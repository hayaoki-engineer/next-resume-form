"use client";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/config"; // Firebaseの設定ファイルをインポート
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"; // Firestoreメソッドをインポート
import "./customStyles.css"; // カスタムCSSファイルをインポート

const CareerList = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const fetchCareers = async () => {
      const querySnapshot = await getDocs(collection(db, "careers"));
      const careersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCareers(careersData);
    };

    fetchCareers();
  }, []);

  const handleDelete = async(id) => {
    await deleteDoc(doc(db, 'careers', id));
    setCareers(careers.filter(career => career.id !== id));
    alert('データが削除されました！');
  }

  return (
    <div className="container">
      <h1 className="heading">職務経歴書</h1>
      {careers.map((career) => (
        <div
          key={career.id}
          className="career-entry mb-6 p-4 bg-white shadow-md rounded-lg"
        >
          <h2 className="text-xl font-bold">{career.company}</h2>
          <p className="text-gray-700">{career.position}</p>
          <p className="text-gray-500">
            {career.startDate} - {career.isCurrent ? "現在" : career.endDate}
          </p>
          <div className="mt-4">
            {career.projects.map((project, index) => (
              <div key={index} className="project-entry mb-2">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleDelete(career.id)}
            className="remove-button mt-4 text-red-500"
          >
            削除
          </button>
        </div>
      ))}
    </div>
  );
};

export default CareerList;
