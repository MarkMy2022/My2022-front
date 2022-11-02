import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import img1 from '../assets/img/primary_img(resultPage).JPG';
import img2 from '../assets/img/prize(resultPage).JPG';
import img3 from '../assets/img/tag(resultPage).JPG';
import img4 from '../assets/img/pic_img(resultPage).png';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { FullscreenExit } from '@material-ui/icons';
import GlobalStyle from './GlobalStyle';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useState } from 'react';

// 다른 모드로 보기 컴포넌트(9개)
import ModeDiary from '../components/ModeDiary';
import ModeSummary from '../components/ModeSummary';
import ModeStar from '../components/ModeStar';
import ModeNight from '../components/ModeNight';
import ModeMoonF from '../components/ModeMoonF';
import ModeMoonM from '../components/ModeMoonM';
import ModeLight from '../components/ModeLight';
import ModeSunset from '../components/ModeSunset';
import ModeHouse from '../components/ModeHouse';

/*****Start 컴포넌트 저장 모듈*****/
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
/*****End 컴포넌트 저장 모듈*****/

const Base = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-wrap: 'wrap';
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-between; */
  align-items: center;
  margin: 0 auto;
`;

const CenterPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function ResultMode({}) {
  /*****Start Img Saving function*****/
  const cardRef = useRef();
  //사진으로 저장하기 버튼 이벤트
  const onImgDownBtn = () => {
    const mode = cardRef.current;
    domtoimage.toBlob(document.querySelector('.mode')).then((blob) => {
      saveAs(blob, 'result.png');
    });
  };
  /*****End Img Saving function *****/

  // const ResultMode = () => {
  const ModeSummaryBtn = () => {
    setMode('summary');
  };
  const ModeDiaryBtn = () => {
    setMode('diary');
  };

  const ModediaryBtn = () => {
    setMode('diary');
  };

  const ModeStarBtn = () => {
    setMode('star');
  };

  const ModeNightBtn = () => {
    setMode('night');
  };

  const ModeMoonFBtn = () => {
    setMode('MoonF');
  };

  const ModeMoonMBtn = () => {
    setMode('MoonM');
  };

  const ModeLightBtn = () => {
    setMode('light');
  };
  const ModeSunsetBtn = () => {
    setMode('sunset');
  };
  const ModeHouseBtn = () => {
    setMode('house');
  };

  const [mode, setMode] = useState('');

  if (mode === '')
    return (
      <Base style={{ display: 'flex' }}>
        <Card
          sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}
          onClick={ModeSummaryBtn}
        >
          <CardActionArea className="mode">
            <CardMedia />
            <ModeSummary />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="InfinitySans-RegularA1"
              >
                요약 모드
              </Typography>
            </CardContent>
          </CardActionArea>
          <CenterPosition>
            <CardActions>
              <Button size="small" color="primary" onClick={ModeSummaryBtn}>
                <SaveAltIcon />
                <p>사진으로 저장</p>
              </Button>
            </CardActions>
          </CenterPosition>
        </Card>

        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia />
            <ModeDiary />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="InfinitySans-RegularA1"
              >
                그림일기 모드
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ModediaryBtn}>
              <SaveAltIcon />
              <p>사진으로 저장</p>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia />
            <ModeStar />
            {/* <ModeMoonF /> */}
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="InfinitySans-RegularA1"
              >
                별빛 모드
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ModeStarBtn}>
              <SaveAltIcon />
              <p>사진으로 저장</p>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia />
            <ModeSunset />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="InfinitySans-RegularA1"
              >
                선셋 모드
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ModeSunsetBtn}>
              <SaveAltIcon />
              <p>사진으로 저장</p>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia />
            <ModeNight />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="InfinitySans-RegularA1"
              >
                불꽃놀이 모드
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ModeNightBtn}>
              <SaveAltIcon />
              <p>사진으로 저장</p>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia />
            <ModeMoonF />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="InfinitySans-RegularA1"
              >
                달빛 모드
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ModeMoonFBtn}>
              <SaveAltIcon />
              <p>사진으로 저장</p>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia />
            <ModeMoonM />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="InfinitySans-RegularA1"
              >
                달빛 모드 2
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ModeMoonMBtn}>
              <SaveAltIcon />
              <p>사진으로 저장</p>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia />

            <ModeLight />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="InfinitySans-RegularA1"
              >
                라이트 모드
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ModeLightBtn}>
              <SaveAltIcon />
              <p>사진으로 저장</p>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia />
            <ModeHouse />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="InfinitySans-RegularA1"
              >
                집 모드
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ModeHouseBtn}>
              <SaveAltIcon />
              <p>사진으로 저장</p>
            </Button>
          </CardActions>
        </Card>
      </Base>
    );
  else if (mode === 'summary') return <ModeSummary />;
  else if (mode === 'diary') return <ModeDiary />;
  else if (mode === 'star') return <ModeStar />;
  else if (mode === 'night') return <ModeNight />;
  else if (mode === 'light') return <ModeLight />;
  else if (mode === 'sunset') return <ModeSunset />;
  else if (mode === 'house') return <ModeHouse />;
  else if (mode === 'moonF') return <ModeMoonF />;
  else if (mode === 'moonM') return <ModeMoonM />;
}

export default ResultMode;
