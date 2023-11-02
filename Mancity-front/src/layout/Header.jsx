import { Link } from "react-router-dom";

function Header() {
    return(
        // 헤더부분에 네비바를 만들어서 클릭시 페이지 이동을 시킵니다.
        // 페이지를 스크롤 해서 보여줄 경우 네비바를 고정시키려고 합니다.
        <div>
            <h1>헤더 입니다.</h1>
            <ul>
                <li><Link>소개</Link></li>
                <li><Link>회칙</Link></li>
                <li><Link>가입방법</Link></li>
                <li><Link>연락방법</Link></li>
            </ul>
        </div>
    );
}

export default Header;