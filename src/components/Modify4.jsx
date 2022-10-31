import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, TextField, Typography } from '@material-ui/core';

const ModifyContainer = styled.form`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Modify4() {
  const classes = useStyles();

  return (
    <ModifyContainer>
      <form
        className={classes.form}
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            readOnly
            value={anwser.a1}
          />
        </Box>
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          <TextField
            multiline
            rows={3}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            label="상세 답변"
            name="d1"
            defaultValue={modalData.title}
            required
          />
        </Box>

        <TextField
          id="outlined-multiline-static"
          label="내용"
          multiline
          rows={4}
          defaultValue={modalData.contents}
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <br />
        <br />
        <p>작성자 : {modalData.writer.accountId}</p>
        <p>작성일 : {modalData.createdAt}</p>
        <Button type="submit" color="primary" className={classes.submit}>
          Save
        </Button>
        <Button onClick={() => setIsModify(false)}>Back</Button>
        <Button
          onClick={() => {
            setIsModify(false);
            handleClose();
          }}
        >
          Close
        </Button>
      </form>
    </ModifyContainer>
  );
}
