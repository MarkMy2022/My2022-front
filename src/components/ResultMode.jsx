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
  return (
    <Base>
      <Card sx={{ width: 280, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '300px' }} src={img1} alt="기본 모드" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              기본 모드
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Choose
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: 300, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '300px' }} src={img2} alt="시상 모드" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              시상 모드
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Choose
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: 300, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '300px' }} src={img3} alt="태그 모드" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              태그 모드
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Choose
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: 300, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '300px' }} src={img4} alt="일기 모드" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              일기 모드
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Choose
          </Button>
        </CardActions>
      </Card>
    </Base>
  );
}

export default ResultMode;
