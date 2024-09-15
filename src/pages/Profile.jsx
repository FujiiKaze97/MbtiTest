import React, { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const reponse = await updateProfile({ nickname });
      setUser({ ...user, nickname: reponse.nickname });
      alert("프로필이 업데이트되었습니다.");
    } catch (e) {
      alert("닉네임 변경에 실패하였습니다.");
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label>닉네임</label>
            <input onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
