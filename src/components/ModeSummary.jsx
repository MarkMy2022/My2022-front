import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

export default function ModeSummary() {
  const { answer } = useSelector((state) => state.post);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'GongGothicMedium',
  }));

  return (
    <div
      className="wrap"
      style={{
        backgroundColor: '#f3ece3',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
        width: '90%',
        paddingTop: '5%',
        paddingBottom: '10%',
        margin: 'auto',
        marginTop: '1rem',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Grid
          justifyContent="center"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        >
          <Grid item xs={8}>
            <Item
              style={{
                backgroundColor: '#FFF',
                padding: '0.5rem',
                margin: '1rem',
                fontSize: '1.2rem',
                color: 'black',
              }}
            >
              {answer.post_content.name}님의 2022년 🧸💖
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item
              style={{
                backgroundColor: '#f1685e',
                color: 'black',
                fontFamily: 'GongGothicMedium',
              }}
            >
              #사람
            </Item>
            <Item>{answer.post_content.a1}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item
              style={{
                backgroundColor: '#f1685e',
                color: 'black',
              }}
            >
              #장소
            </Item>
            <Item>{answer.post_content.a2}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #소비
            </Item>
            <Item>{answer.post_content.a3}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #음식
            </Item>
            <Item>{answer.post_content.a4}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #콘텐츠
            </Item>
            <Item>{answer.post_content.a5}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #도전
            </Item>
            <Item>{answer.post_content.a6}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #성취
            </Item>
            <Item>{answer.post_content.a7}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #감정
            </Item>
            <Item>{answer.post_content.a8}</Item>
          </Grid>
          <Grid item xs={10}>
            <Item style={{ backgroundColor: '#3b2b57 ', color: 'white' }}>
              🏆 너에게 🏆
            </Item>
            <Item>{answer.post_content.a9}</Item>
          </Grid>
          <Grid item xs={10}>
            <Item style={{ backgroundColor: '#3b2b57 ', color: 'white' }}>
              🏆 나에게 🏆
            </Item>
            <Item>{answer.post_content.a10}</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
