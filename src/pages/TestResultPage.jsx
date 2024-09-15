import React, { useEffect, useState } from "react";
import { getTestResults } from "../api/testResult";
import TestResultList from "../components/TestResultList";

const TestResult = ({ user }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

  //결과 셋팅하는 함수
  const fetchResults = async () => {
    const data = await getTestResults();
    console.log(data);
    setResults(data);
  };

  return (
    <div className="w-full flex flex-col TestResultList -center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        <TestResultList
          results={results}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TestResult;
