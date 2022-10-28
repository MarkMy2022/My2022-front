import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function GlobalButton() {
  return (
    <>
      <Button variant="text" color="error" startIcon={<ArrowBackIosIcon />}>
        뒤로가기
      </Button>

      <Button variant="text" color="primary" endIcon={<ArrowForwardIosIcon />}>
        저장하기
      </Button>
    </>
  );
}
