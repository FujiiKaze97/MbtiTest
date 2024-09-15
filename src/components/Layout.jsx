
// Props 로 꼭 children 만 받을 필요는 없답니다. 
const Layout = ({ children }) => {
    const navigate = useNavigate();
  
    useEffect(() => {
      
    }, []);
  
    const handleLogout = () => {
  
    };
  
    return (
      <div>
        <header>
          <nav>
            <Link to="/">
              홈
            </Link>
            <div className="space-x-4">
              {user ? (
                <>
                  <button onClick={handleLogout}>
                    로그아웃
                  </button>
                </>
              ) : (
                <Link to="/login">
                  로그인
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container mx-auto pt-10 main">{children}</main>
      </div>
    );
  };
  
  export default Layout;
  