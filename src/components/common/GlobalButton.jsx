import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function GlobalButton({ clickEvent, text1, text2 }) {
  return (
    <>
      <Button
        variant="text"
        color="error"
        startIcon={<ArrowBackIosIcon />}
        onClick={clickEvent}
      >
        {text1}
      </Button>

      <Button
        type="submit"
        variant="text"
        color="primary"
        endIcon={<ArrowForwardIosIcon />}
      >
        {text2}
      </Button>
    </>
  );
}
