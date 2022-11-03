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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const CenterPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function ResultMode({ no }) {
  /*****Start Img Saving function*****/
  const cardRef = useRef();
  //사진으로 저장하기 버튼 이벤트
  const onImgDownBtn = () => {
    const mode = cardRef.current;
    domtoimage.toBlob(mode).then((blob) => {
      saveAs(blob, 'result.png');
    });
  };
  /*****End Img Saving function *****/

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
      <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
        <CardActionArea className="mode">
          <CardMedia />
          <ModeNight />
          {/* <img style={{ width: '300px' }} src={img1} alt="기본 모드" /> */}
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              모드1
              {/* <SummarizeTwoToneIcon /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CenterPosition>
          <CardActions>
            <Button size="small" color="primary" onClick={onImgDownBtn}>
              <SaveAltIcon />
              <p>사진으로 저장</p>
            </Button>
          </CardActions>
        </CenterPosition>
      </Card>

      <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          {/* <img style={{ width: '300px' }} src={img2} alt="시상 모드" /> */}
          <ModeHouse />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              모드2
              {/* <EmojiEventsTwoToneIcon /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={prizeModeBtn}>
            <SaveAltIcon />
            <p>사진으로 저장</p>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          {/*           <img style={{ width: '300px' }} src={img3} alt="태그 모드" /> */}
          <ModeMoonF />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              모드3
              {/* <TagTwoToneIcon /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={tagModeBtn}>
            <SaveAltIcon />
            <p>사진으로 저장</p>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          {/*           <img style={{ width: '300px' }} src={img3} alt="태그 모드" /> */}
          <ModeMoonM />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              모드4
              {/* <TagTwoToneIcon /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={tagModeBtn}>
            <SaveAltIcon />
            <p>사진으로 저장</p>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          {/*           <img style={{ width: '300px' }} src={img3} alt="태그 모드" /> */}
          <ModeLight />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              모드5
              {/* <TagTwoToneIcon /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={tagModeBtn}>
            <SaveAltIcon />
            <p>사진으로 저장</p>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          {/*           <img style={{ width: '300px' }} src={img3} alt="태그 모드" /> */}
          <ModeSunset />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              모드6
              {/* <TagTwoToneIcon /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={tagModeBtn}>
            <SaveAltIcon />
            <p>사진으로 저장</p>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          {/*           <img style={{ width: '300px' }} src={img3} alt="태그 모드" /> */}
          <ModeSummary />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              모드7
              {/* <TagTwoToneIcon /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={tagModeBtn}>
            <SaveAltIcon />
            <p>사진으로 저장</p>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          {/* <img style={{ width: '300px' }} src={img4} alt="일기 모드" /> */}
          <ModeDiary />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="InfinitySans-RegularA1"
            >
              모드8
              {/* <CollectionsTwoToneIcon /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={diaryModeBtn}>
            <SaveAltIcon />
            <p>사진으로 저장</p>
          </Button>
        </CardActions>
      </Card>
    </Base>
  );
}

export default ResultMode;
