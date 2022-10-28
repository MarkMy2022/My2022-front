import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Pretendard-Regular';
  }

  ul, ol{
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
  
  body {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    /* width: 35%; */
    width: 600px;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    height: 98vh;
    background-color: white;

    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.05);
    /* overflow: hidden; */

    @media only screen and (max-width: 600px) {
        width: 95vw;
        /* height: 90vh; */
    }
   
    @font-face {
    font-family: 'InfinitySans-RegularA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff') format('woff');
    font-weight: normal;
    font-style: normal;

    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'GangwonEduSaeeum_OTFMediumA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduSaeeum_OTFMediumA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'ACCchildrensky';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112-2@1.0/ACCchildrensky.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

}



  }
`;

export default GlobalStyle;
