"use client";
import React, { useState } from "react";
import { Career, Project } from "../types/career";
import "./customStyles.css"; // カスタムCSSファイルをインポート
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";

const CareerForm = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCurrent, setIsCurrent] = useState(false);
  const [projects, setProjects] = useState<Project[]>(
    [
      { title: '', description: '' }
    ]
  )

  const handleProjectChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newProjects = [...projects];
    newProjects[index][event.target.name] = event.target.value;
    setProjects(newProjects);
  };

  // プロジェクトの入力フォームを追加
  const handleAddProject = () => {
    setProjects([...projects, { title: "", description: "" }]);
  }

  // プロジェクトの入力フォームを削除
  const handleRemoveProject = (index: number) => {
    alert("主なプロジェクト・業務内容を削除してよろしいですか？")
    const newProjects = projects.filter((project, i) => i !== index);
    setProjects(newProjects);
  }

  // 入力したデータをFirestoreに送信
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const careerData: Career = {
      company,
      position,
      startDate,
      endDate: isCurrent ? "" : endDate,
      isCurrent,
      projects,
    };

    try {
      await addDoc(collection(db, "careers"), careerData);
      // フォームのリセットや成功メッセージの表示
      setCompany("");
      setPosition("");
      setStartDate("");
      setEndDate("");
      setIsCurrent(false);
      setProjects([{ title: "", description: "" }]);
      alert("経歴が保存されました");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };


  return (
    <div className="container">
      <h1 className="heading">経歴の作成</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              会社名
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="input"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              肩書・ポジション
            </label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="input"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              在籍期間
            </label>
            <div className="flex space-x-4">
              <input
                type="month"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="input"
              />
              <input
                type="month"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="input"
              />
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">現在在籍している</span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-4">
              主なプロジェクト・業務内容
            </label>
            {projects.map((project, index) => (
              <div key={index} className="border-t border-b py-6">
                <input
                  type="text"
                  name="title"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="input mb-8"
                  placeholder="見出しとなるタイトルを入力してください"
                />
                <textarea
                  name="description"
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="input"
                  placeholder="業務内容を入力してください"
                  rows={4}
                ></textarea>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleRemoveProject(index)}
                    className="remove-button mt-4"
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
            <div className="my-8 flex justify-center">
              <button
                type="button"
                onClick={handleAddProject}
                className="button"
              >
                主なプロジェクト・業務内容を追加する
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="submit-button mr-8">
              作成する
            </button>
            <button type="button" className="cancel-button">
              キャンセル
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
