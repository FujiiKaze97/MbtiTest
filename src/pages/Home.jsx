import React from "react";
import { Link } from "react-router-dom";

const Home = (user) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">무료 성격 테스트</h1>
      <p className="mt-4 text-base">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      {user ? 
      <Link to="/test" className="text-blue-500 hover:underline mt-2 block">
      MBTI 테스트 하러가기
    </Link>
      : (
        <Link to="/login" className="text-blue-500 hover:underline mt-2 block">
          로그인하기
        </Link>
      )}
    </div>
  );
};

export default Home;
