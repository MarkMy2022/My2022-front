import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaUserFriends,
  FaRegListAlt,
  FaPencilAlt,
  FaEllipsisV,
} from 'react-icons/fa';
import { useState } from 'react';
import { deletePost } from '../modules/post';
import { posted } from '../modules/users';
import axios from 'axios';

const DropdownMenu = styled.div`
  width: 100%;
  position: relative;
  text-align: end;
  padding: 1rem 0;

  & > .menu {
    background-color: #fff;
    border-radius: 8px;
    position: absolute;
    top: 30px;
    right: 5%;
    width: 35%;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 1;

    @media all and (max-width: 390px) {
      width: 100px;
      right: 3%;
      margin-top: 3%;
    }
  }

  & .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  & .lists {
    margin-top: 1rem;
    width: auto;
    list-style: none;
    padding: 0;
  }

  & .list {
    font-size: 1rem;
    color: #222;
    text-align: center;
    margin-bottom: 1rem;
    padding: 0;
    cursor: pointer;
  }
`;

const MenuBtn = styled(FaEllipsisV)`
  color: #333;
  font-size: 150%;
  cursor: pointer;
  /* padding: 1rem; */
`;

export default function ResultDropDown() {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { answer } = useSelector((state) => state.post);
  const { userId, havePost } = useSelector((state) => state.user);

  const onMenuActive = () => {
    setIsActive(!isActive);
  };

  const onModifyEvent = () => {
    navigate(`/modify/${answer.post_id}`);
  };

  const deleteP = async () => {
    const request = await axios
      .delete(`http://localhost:4000/posts/${answer.post_id}/delete`)
      .then((res) => {
        console.log(res.data.message);
        return res.data.message;
      });
    dispatch(deletePost(request));
    dispatch(posted(false));
    navigate(`/`);
  };

  return (
    <DropdownMenu>
      <MenuBtn onClick={onMenuActive} />
      <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul className="lists">
          <li className="list" onClick={onModifyEvent}>
            수정하기
          </li>
          <li className="list" onClick={deleteP}>
            삭제하기
          </li>
        </ul>
      </nav>
    </DropdownMenu>
  );
}
