import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ResultExport from './ResultExport';
import css from '../App.css';
import makePdf from './ResultExport';
import makeImg from './ResultExportImg';

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

  return (
    <div className="div_container">
      <div className="div_paper">테스트용</div>
      <button onClick={onDownloadBtn}>pdf로 저장하기</button>
      <button onClick={onDownloadBtn2}>사진으로 저장하기</button>
    </div>
  );
}

export default Result3;
