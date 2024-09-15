import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Props 로 꼭 children 만 받을 필요는 없답니다.
const Layout = ({ user, children }) => {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  const handleLogout = () => {};

  return (
    <div>
      <header className="py-3 px-3">
        <nav className="flex justify-between">
          <Link to="/">홈</Link>
          <div className="space-x-4">
            <Link to="/profile">프로필</Link>
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
