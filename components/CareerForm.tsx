"use client";
import React, { useState } from "react";

const CareerForm = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="max-w-4xl mx-auto my-12">
      <h1 className="text-2xl font-bold mb-6">経歴の作成</h1>
      <div className="p-8 bg-white shadow-md rounded-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              会社名
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="month"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <div className="border-t border-b py-6">
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="見出しとなるタイトルを入力してください"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="業務内容を入力してください"
                rows={4}
              ></textarea>
            </div>
            {/* <div className="mb-6 border-b py-6">
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="見出しとなるタイトルを入力してください"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="業務内容を入力してください"
                rows={4}
              ></textarea>
            </div> */}
            <div className="my-8 flex justify-center">
              <button
                type="button"
                className="border border-black text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                主なプロジェクト・業務内容を追加する
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mr-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              作成する
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              キャンセル
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
