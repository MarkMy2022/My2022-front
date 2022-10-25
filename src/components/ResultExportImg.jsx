import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const makeImg = () => {
  const converToImg = async () => {
    // html to imageFile
    const paper = document.querySelector('.div_container > .div_paper');
    /*     const paper = document.querySelector('Container > Paper'); */

    const canvas = await html2canvas(paper);
    const imageFile = canvas.toDataURL('image/png', 1.0);

    return imageFile;
  };

  return {
    viewWithImg: async () => {
      // html to imageFile
      const imageFile = await converToImg();
    },
  };
};
export default makeImg;
