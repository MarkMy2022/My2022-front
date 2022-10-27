import styled from 'styled-components';

const StyleTitle = styled.header`
  color: #000000;
  font-size: 2rem;
  width: 300px;
  text-align: center;
  margin: 1rem;
`;

const TitleNick = ({ username }) => {
  // const { username } = props; // 구조분해 예시 기본
  return <StyleTitle>{username}의 2022</StyleTitle>;
};

export default TitleNick;
