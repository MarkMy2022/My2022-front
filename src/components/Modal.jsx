import styled from "styled-components";

const ModalBg = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${document.documentElement.scrollHeight}px;
  background-color: #313131df;
`;

const ModalBox = styled.div`
  width: 20rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 2rem;
`;

const Modal = ({ setModalShow }) => {
  const handleOk = () => {
    document.location.href = "/login";
  };

  const ModalTitle = styled.p`
    font-size: 1.3rem;
    padding: 0.5rem;
    color: black;
  `;

  const ModalContent = styled.p`
    font-size: 1rem;
    padding: 0.5rem;
    color: black;
  `;

  const ModalBtnBox = styled.div`
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    display: flex;
    padding: 0.5rem;
  `;

  const ModalBtn = styled.button`
    align-items: flex-start;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    width: 60px;
    height: 30px;
    cursor: pointer;
  `;

  return (
    <ModalBg>
      <ModalBox>
        <ModalTitle>로그인 이동</ModalTitle>
        <ModalContent>My 2022는 로그인 후 이용 가능합니다.</ModalContent>
        <ModalBtnBox>
          {/* <ModalBtn cancel onClick={() => setModalShow(false)}>
            취소
          </ModalBtn> */}
          <ModalBtn onClick={() => handleOk()}>확인</ModalBtn>
        </ModalBtnBox>
      </ModalBox>
    </ModalBg>
    // document.getElementById("modal")
  );
};

export default Modal;
