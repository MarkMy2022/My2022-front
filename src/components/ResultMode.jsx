import React, { useRef } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
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
  const onImgDownBtn = (num) => {
    let option = {
      quality: 0.99,
    };
    const mode = cardRef.current;
    domtoimage
      .toBlob(document.querySelector(`.mode${num}`), option)
      .then((blob) => {
        saveAs(blob, `result-${num}.png`);
      });
  };
  /*****End Img Saving function *****/

  const [mode, setMode] = useState('');

  if (mode === '')
    return (
      <Base style={{ display: 'flex' }}>
        {/* 1 */}
        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea className="mode1">
            <CardMedia />
            <CardContent>
              <ModeSummary />
            </CardContent>
          </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="InfinitySans-RegularA1"
          >
            요약 모드
          </Typography>
          <CenterPosition>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onImgDownBtn('1')}
              >
                <SaveAltIcon />
                <p>사진으로 저장</p>
              </Button>
            </CardActions>
          </CenterPosition>
        </Card>

        {/* 2 */}
        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea className="mode2">
            <CardMedia />
            <CardContent>
              <ModeDiary />
            </CardContent>
          </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="InfinitySans-RegularA1"
          >
            그림일기 모드
          </Typography>
          <CenterPosition>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onImgDownBtn('2')}
              >
                <SaveAltIcon />
                <p>사진으로 저장</p>
              </Button>
            </CardActions>
          </CenterPosition>
        </Card>

        {/* 3 */}
        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea className="mode3">
            <CardMedia />

            <CardContent>
              {' '}
              <ModeStar />
            </CardContent>
          </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="InfinitySans-RegularA1"
          >
            별빛 모드
          </Typography>
          <CenterPosition>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onImgDownBtn('3')}
              >
                <SaveAltIcon />
                <p>사진으로 저장</p>
              </Button>
            </CardActions>
          </CenterPosition>
        </Card>

        {/* 4 */}
        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea className="mode4">
            <CardMedia />

            <CardContent>
              <ModeSunset />
            </CardContent>
          </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="InfinitySans-RegularA1"
          >
            선셋 모드
          </Typography>
          <CenterPosition>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onImgDownBtn('4')}
              >
                <SaveAltIcon />
                <p>사진으로 저장</p>
              </Button>
            </CardActions>
          </CenterPosition>
        </Card>

        {/* 5 */}
        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea className="mode5">
            <CardMedia />
            <CardContent>
              <ModeNight />
            </CardContent>
          </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="InfinitySans-RegularA1"
          >
            불꽃놀이 모드
          </Typography>
          <CenterPosition>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onImgDownBtn('5')}
              >
                <SaveAltIcon />
                <p>사진으로 저장</p>
              </Button>
            </CardActions>
          </CenterPosition>
        </Card>

        {/* 6 */}
        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea className="mode6">
            <CardMedia />
            <CardContent>
              <ModeMoonF />
            </CardContent>
          </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="InfinitySans-RegularA1"
          >
            달빛 모드
          </Typography>
          <CenterPosition>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onImgDownBtn('6')}
              >
                <SaveAltIcon />
                <p>사진으로 저장</p>
              </Button>
            </CardActions>
          </CenterPosition>
        </Card>

        {/* 7 */}
        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea className="mode7">
            <CardMedia />
            <CardContent>
              <ModeMoonM />
            </CardContent>
          </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="InfinitySans-RegularA1"
          >
            달빛 모드2
          </Typography>
          <CenterPosition>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onImgDownBtn('7')}
              >
                <SaveAltIcon />
                <p>사진으로 저장</p>
              </Button>
            </CardActions>
          </CenterPosition>
        </Card>

        {/* 8 */}
        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea className="mode8">
            <CardMedia />
            <CardContent>
              <ModeLight />
            </CardContent>
          </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="InfinitySans-RegularA1"
          >
            라이트 모드
          </Typography>
          <CenterPosition>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onImgDownBtn('8')}
              >
                <SaveAltIcon />
                <p>사진으로 저장</p>
              </Button>
            </CardActions>
          </CenterPosition>
        </Card>

        {/* 9 */}
        <Card sx={{ width: '90%', marginTop: 2, marginBottom: 2 }}>
          <CardActionArea className="mode9">
            <CardMedia />
            <CardContent>
              <ModeHouse />
            </CardContent>
          </CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="InfinitySans-RegularA1"
          >
            집 모드
          </Typography>
          <CenterPosition>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => onImgDownBtn('9')}
              >
                <SaveAltIcon />
                <p>사진으로 저장</p>
              </Button>
            </CardActions>
          </CenterPosition>
        </Card>
      </Base>
    );
}

export default ResultMode;
