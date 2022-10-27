import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaUserFriends,
  FaRegListAlt,
  FaPencilAlt,
} from 'react-icons/fa';

const HeaderContainer = styled.header`
  /* position: relative; */
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// const NavBar = styled.nav`
//   width: 40%;
//   height: 60px;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   background-color: #fff;
// `;

// const MenuLink = styled(NavLink)`
//   text-decoration: none;

//   &:visited {
//     color: gray;
//   }
// `;

// const MyPage = styled(FaUserFriends)`
//   color: gray;
//   font-size: 32px;
// `;

// const WritePage = styled(FaRegListAlt)`
//   color: gray;
//   font-size: 32px;
// `;

// const ModifyPage = styled(FaPencilAlt)`
//   color: gray;
//   font-size: 24px;
// `;

const DropdownMenu = styled.div`
  /* position: absolute;
  top: 10px;
  right: -250px; */
  /* width: 300px; */
  width: 20%;
  position: relative;

  & > .menu {
    background-color: #fff;
    border-radius: 8px;
    position: absolute;
    top: 40px;
    right: 20px;
    width: 300px;
    height: 450px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 1;

    @media all and (max-width: 390px) {
      right: 30px;
    }
  }

  & .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  & .lists {
    margin-top: 50px;
    width: auto;
    list-style: none;
    padding: 0;
  }

  & .user_circle {
    font-size: 20px;
    color: lightgray;
    text-align: start;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
  }

  & .list {
    font-size: 20px;
    color: #222;
    text-align: start;
    margin-top: 20px;
    margin-left: 20px;
  }

  & .intro {
    font-size: 16px;
    color: #222;
    text-align: start;
    margin-left: 20px;
    cursor: pointer;
  }

  & .inquiry {
    font-size: 16px;
    color: #222;
    text-align: start;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
  }

  & hr {
    margin: 20px;
  }
`;

const ListItm = styled(Link)`
  text-decoration: none;

  &:visited {
    color: #222;
  }
`;

const CancelBtn = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
`;
const UserCircle = styled(FaUserCircle)`
  font-size: 32px;
`;

const MenuBtn = styled(FaBars)`
  color: #333;
  font-size: 32px;
  transition: box-shadow 0.4s ease;
  cursor: pointer;
`;

function Header() {
  const [isActive, setIsActive] = useState(false);

  const onMenuActive = () => {
    setIsActive(!isActive);
  };

  return (
    <HeaderContainer>
      <DropdownMenu>
        <MenuBtn onClick={onMenuActive} />
        <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <CancelBtn onClick={onMenuActive} />
          <ul className="lists">
            <li className="user_circle">
              <UserCircle /> 로그인 하세요.
            </li>
            <li className="list">
              <ListItm to="/" onClick={onMenuActive}>
                홈
              </ListItm>
            </li>
            <li className="list">
              <ListItm to="/" onClick={onMenuActive}>
                마이페이지
              </ListItm>
            </li>
            <hr />
            <li className="intro">나만의 시상식 소개</li>
            <li className="inquiry">문의 하기</li>
          </ul>
        </nav>
      </DropdownMenu>
    </HeaderContainer>
  );
}

export default Header;
