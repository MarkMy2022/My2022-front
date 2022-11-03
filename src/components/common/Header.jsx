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
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/users';

const HeaderContainer = styled.header`
  width: 100%;
  /* top: 5%; */
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const DropdownMenu = styled.div`
  width: 10%;
  & > .menu {
    background-color: #fff;
    border-radius: 15px;
    position: absolute;
    top: 8%;
    right: 5%;
    width: 50%;
    height: 50%;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 1;
    @media all and (max-width: 415px) {
      width: 70%;
      margin-top: 3%;
    }
  }
  & .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  & .lists {
    /* width: auto; */
    list-style: none;
    padding: 5%;
    margin: 10% 0;
  }
  & .user_circle {
    color: lightgray;
    text-align: start;
    display: flex;
    align-items: center;
    margin-top: 5%;
    margin-left: 5%;
    cursor: pointer;
  }
  & .list {
    font-size: 1rem;
    text-align: start;
    margin: 10%;
  }
  & .intro {
    font-size: 1rem;
    text-align: start;
    margin: 10%;
    cursor: pointer;
  }
  & .inquiry {
    font-size: 1rem;
    text-align: start;
    margin: 10%;
    cursor: pointer;
  }
  & hr {
    margin: 10%;
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
  margin: 10%;
  right: 3%;
  font-size: 1.3rem;
  cursor: pointer;
`;

const UserName = styled.span`
  font-size: 1rem;
  color: lightgray;
`;

const PleaseLogin = styled(Link)`
  font-size: 1.3rem;
  color: lightgray;
`;

const UserCircle = styled(FaUserCircle)`
  font-size: 2.5rem;
  margin-right: 5%;
`;

const MenuBtn = styled(FaBars)`
  color: #333;
  font-size: 150%;
  transition: box-shadow 0.4s ease;
  cursor: pointer;
`;

function Header() {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const { userId, havePost, userName } = useSelector((state) => state.user);

  const onMenuActive = () => {
    setIsActive(!isActive);
  };

  const logoutUser = () => {
    dispatch(logout());
    // navigate('/');
  };

  return (
    <HeaderContainer>
      <DropdownMenu>
        <MenuBtn onClick={onMenuActive} />
        <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <CancelBtn onClick={onMenuActive} />
          <ul className="lists">
            <li className="user_circle">
              <UserCircle />
              {userId ? (
                <UserName>{userName}</UserName>
              ) : (
                <PleaseLogin to="/login">로그인 하세요.</PleaseLogin>
              )}
            </li>
            <li className="list">
              <ListItm to="/" onClick={onMenuActive}>
                홈
              </ListItm>
            </li>
            <li className="list">
              {userId && havePost ? (
                <ListItm to={`/result/${userId}`} onClick={onMenuActive}>
                  {' '}
                  MY 2022 보기{' '}
                </ListItm>
              ) : userId && !havePost ? (
                <ListItm to={`/write`} onClick={onMenuActive}>
                  {' '}
                  MY 2022 만들기{' '}
                </ListItm>
              ) : (
                <ListItm to={`/login`} onClick={onMenuActive}>
                  {' '}
                  MY 2022 만들기{' '}
                </ListItm>
              )}
            </li>
            <li className="list">
              {userId ? (
                <ListItm to={`/`} onClick={logoutUser}>
                  로그아웃
                </ListItm>
              ) : null}
            </li>
            <hr />
            <li className="intro">MY 2022 소개</li>
            <li className="inquiry">문의 하기</li>
          </ul>
        </nav>
      </DropdownMenu>
    </HeaderContainer>
  );
}

export default Header;