import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ResultExport from './ResultExport';
import css from '../App.css';
import makePdf from './ResultExport';

function Result2() {
  const pdf = makePdf();

  const onDownloadBtn = async (e) => {
    e.preventDefault();
    await pdf.viewWithPdf();
  };

  return (
    <div className="div_container">
      <div className="div_paper">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officiis
          at iure sapiente maxime provident possimus dolorum eveniet illo nisi
          ullam, animi sunt nobis, error consequatur quos facere. Perspiciatis,
          harum.
        </div>
      </div>
      <button onClick={onDownloadBtn}>pdf로 저장하기</button>
    </div>
  );
}

export default Result2;
