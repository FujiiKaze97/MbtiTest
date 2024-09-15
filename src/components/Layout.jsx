import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Props 로 꼭 children 만 받을 필요는 없답니다.
const Layout = ({ user, setUser, children }) => {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <header className="py-3 px-3">
        <nav className="flex justify-between">
          <Link to="/">홈</Link>
          {user ? (
            <h1 className="text-4xl font-bold my-5 text-red-500">
              {user.nickname}님 환영합니다.
            </h1>
          ) : null}
          <div className="space-x-4">
            {user ? <Link to="/results">테스트 결과</Link> : null}
            {user ? <Link to="/test">mbti테스트</Link> : null}
            {user ? <Link to="/profile">프로필</Link> : null}
            {user ? (
              <>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
