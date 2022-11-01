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

const Base = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function ResultMode({ no }) {
  const primaryModeBtn = () => {
    window.location.href = `/resultmode?post_id=${no}`;
  };
  const prizeModeBtn = () => {
    window.location.href = `/resultmode?post_id=${no}`;
  };
  const tagModeBtn = () => {
    window.location.href = `/resultmode?post_id=${no}`;
  };
  const diaryModeBtn = () => {
    window.location.href = `/resultmode?post_id=${no}`;
  };

  return (
    <Base>
      <Card sx={{ width: 280, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '300px' }} src={img1} alt="기본 모드" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              기본 모드
              <SummarizeTwoToneIcon />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={primaryModeBtn}>
            <CheckTwoToneIcon />
            <p>선택</p>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: 300, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '300px' }} src={img2} alt="시상 모드" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              시상 모드
              <EmojiEventsTwoToneIcon />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={prizeModeBtn}>
            <CheckTwoToneIcon />
            <p>선택</p>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: 300, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '300px' }} src={img3} alt="태그 모드" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              태그 모드
              <TagTwoToneIcon />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={tagModeBtn}>
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
}

export default ResultMode;
