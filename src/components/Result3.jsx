import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ResultExport from './ResultExport';
import css from '../App.css';
import makePdf from './ResultExport';
import makeImg from './ResultExportImg';
import QuestionForm from './common/QuestionForm';

const Container = styled.div`
  width: 100%;
  border-radius: 2px;
  background-color: darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #904545;
`;

const QuestionsContainer = styled.ul`
  width: 100%;
  background-color: #fff;
  list-style: none;
  /* overflow-y: scroll; */
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const PdfButton = styled.button`
  width: 120px;
  height: 40px;
  background: #df6a38;
  color: white;
  margin-left: 10px;
  border: none;
  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
    color: rgb(255, 255, 255, 100);
    cursor: pointer;
  }
`;
const PicButton = styled.button`
  width: 120px;
  height: 40px;
  background: #2959d4;
  color: white;
  border: none;
  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
    color: rgb(255, 255, 255, 100);
    cursor: pointer;
  }
`;

const NicknameInputContainer = styled.div`
  width: 320px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .nickname_input {
    width: 100px;
    height: 40px;
    border: none;
    outline: 2px solid orange;
    font-size: 32px;

    &:focus {
      outline: 2px solid #c17900;
    }

    &::placeholder {
      font-size: 16px;
    }
  }

  & .input_text {
    font-size: 32px;
    font-weight: 600;
  }
`;
/* Start Print Result */
function Result3(title, question, answer) {
  const pdf = makePdf();
  const image = makeImg();

  const onDownloadBtn = async (e) => {
    e.preventDefault();
    await pdf.viewWithPdf();
  };

  const onDownloadBtn2 = async (e) => {
    e.preventDefault();
    await image.viewWithImg();
    console.log('클릭');
    console.log(image);
  };

  /*  Start 질문 객체 선언  */
  const questions = [
    {
      title: '장소',
      question: '1.올해 가장 기억에 남는 장소는 어디인가요?',
    },
    {
      title: 'Flex',
      question: '2.올해 가장 기억에 남는 소비는 무엇인가요?',
    },
    {
      title: '사람',
      question: '3.올해 내 삶에 가장 기여한 사람은 누구인가요?',
    },
    {
      title: '나',
      question: '4.올해 나를 사로잡은 감정은 무엇인가요?',
    },
  ];
  /*  End 질문 객체 선언  */

  /* Start 몽고 DB에서 데이터 로드하는 모듈 */
  /*  const dispatch = useDispatch();

  function makeData(survey, explanation) {
    const initData = { survey: [], explanation: {} };
    if (initData.survey.length === 0) {
      for (let i = 0; i < survey.length; i = i + 2) {
        initData.survey.push({
          question: survey[i].QUESTION_TEXT,
          answer: [
            {
              text: survey[i].ANSWER_TEXT,
              result: survey[i].RESULT,
            },
            {
              text: survey[i + 1].ANSWER_TEXT,
              result: survey[i + 1].RESULT,
            },
          ],
        });
      }

      for (let i = 0; i < explanation.length; i++) {
        initData.explanation[explanation[i].MBTI_TYPE] = {
          explanation: explanation[i].EXPLANATION,
          img: explanation[i].IMG_SRC,
        };
      }
    }
    return initData;
  }

  async function mongoFetchData() {
    const resCount = await fetch('http://localhost:4000/mongo/counts');
    if (resCount.status === 200) {
      const num = await resCount.json();
      if (num[0].counts !== 0) setCounts(num[0].counts);
    } else {
      throw new Error('통신 이상');
    }
    //전체 데이터 받아오기
    const resData = await fetch('http://localhost:4000/mongo/getdata');
    if (resData.status === 200) {
      const data = await resData.json();
      if (data[0].survey.length !== 0) {
        dispatch(init(data[0]));
      }
    } else {
      throw new Error('통신 이상');
    }
  }

  useEffect(() => {
    //sqlFetchData();
    mongoFetchData();
  }, []); */
  /* End 몽고 DB에서 데이터 로드하는 모듈 */

  return (
    <Container className="div_container">
      <Paper className="div_paper">
        <QuestionsContainer>
          <NicknameInputContainer>
            <input
              className="nickname_input"
              type="text"
              placeholder="닉네임을 입력하세요."
            />
            <span className="input_text">님의 2022년</span>
          </NicknameInputContainer>
          {questions.map((question, index) => (
            <QuestionForm
              key={index}
              title={question.title}
              question={question.question}
            />
          ))}
        </QuestionsContainer>
        <ButtonBlock>
          <PdfButton onClick={onDownloadBtn}>pdf로 저장하기</PdfButton>
          <PicButton onClick={onDownloadBtn2}>사진으로 저장하기</PicButton>
        </ButtonBlock>
      </Paper>
    </Container>
  );
}
/* End Print Result */

export default Result3;
