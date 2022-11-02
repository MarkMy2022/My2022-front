import React, { useEffect } from 'react';
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
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import TagTwoToneIcon from '@mui/icons-material/TagTwoTone';
import CollectionsTwoToneIcon from '@mui/icons-material/CollectionsTwoTone';
import { useState } from 'react';

import ModeDiary from '../components/ModeDiary';
import ModeSummary from '../components/ModeSummary';
import ModeStar from '../components/ModeStar';
import ModeNight from '../components/ModeNight';
import ModeMoonF from '../components/ModeMoonF';
import ModeMoonM from '../components/ModeMoonM';
import ModeLight from '../components/ModeLight';
import ModeSunset from '../components/ModeSunset';
import ModeHouse from '../components/ModeHouse';

const Base = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function ResultMode() {
  const ModeSummaryBtn = () => {
    setMode('summary');
  };
  const ModeDiaryBtn = () => {
    setMode('diary');
  };
  const ModeStarBtn = () => {
    setMode('star');
  };
  const diaryModeBtn = () => {};

  const [mode, setMode] = useState('');

  if (mode === '')
    return (
      <Base>
        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
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
                {/* <SummarizeTwoToneIcon /> */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={ModeSummaryBtn}>
              <CheckTwoToneIcon />
              <p>선택</p>
            </Button>
          </CardActions>
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
            <Button size="small" color="primary" onClick={ModeDiaryBtn}>
              <CheckTwoToneIcon />
              <p>선택</p>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia />
            <ModeStar />
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
              <CheckTwoToneIcon />
              <p>선택</p>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 300, marginTop: 2, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia />
            <img style={{ width: '300px' }} src={img4} alt="일기 모드" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="InfinitySans-RegularA1"
              >
                일기 모드
                <CollectionsTwoToneIcon />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={diaryModeBtn}>
              <CheckTwoToneIcon />
              <p>선택</p>
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
