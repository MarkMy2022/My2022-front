import React from 'react';
/* import { postList } from './Data'; */
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import ResultDropDown from './ResultDropDown';

const NickBlock = styled.h1`
  font-size: 32px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
`;

export default function ShowResult() {
  const dispatch = useDispatch();
  const { answer } = useSelector((state) => state.post);
  const { userId } = useSelector((state) => state.user);

  return (
    <Paper
      sx={{
        p: 4,
        margin: 'auto',
        mb: 4,
        width: '80%',
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      {' '}
      {answer.user_id === userId ? <ResultDropDown /> : null}
      <NickBlock>{answer.post_content.name}님의 2022년</NickBlock>
      <Grid container spacing={1} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                fontFamily="Pretendard-Regular"
                gutterBottom
                variant="h5"
                component="div"
                display="inline"
                boxShadow="inset 0 -10px 0 #d6432943"
              >
                사람
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                fontFamily="Pretendard-Regular"
                fontWeight="700"
              >
                1. 올해 가장 기억에 남는 사람은 누구인가요?
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                textAlign="center"
              >
                <p style={{ wordBreak: 'keep-all' }}>
                  {answer.post_content.a1}
                </p>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.d1}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* 2번쨰 질문 */}
      <Grid container spacing={1} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="Pretendard-Regular"
                display="inline"
                boxShadow="inset 0 -10px 0 #d6432943"
              >
                장소
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                fontFamily="Pretendard-Regular"
                fontWeight="700"
              >
                2. 올해 가장 기억에 남는 장소는 어디인가요?
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.a2}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.d2}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* 3번쨰 질문 */}
      <Grid container spacing={1} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="Pretendard-Regular"
                display="inline"
                boxShadow="inset 0 -10px 0 #d6432943"
              >
                소비
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                fontFamily="Pretendard-Regular"
                fontWeight="700"
              >
                3. 올해 가장 가치 있는 소비는 무엇인가요?
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.a3}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.d3}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* 4번쨰 질문 */}
      <Grid container spacing={1} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                fontFamily="Pretendard-Regular"
                gutterBottom
                variant="h5"
                component="div"
                display="inline"
                boxShadow="inset 0 -10px 0 #d6432943"
              >
                음식
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                fontFamily="Pretendard-Regular"
                fontWeight="700"
              >
                4. 올해 가장 기억에 남는 음식은 무엇인가요?
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.a4}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.d4}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* 5번쨰 질문 */}
      <Grid container spacing={1} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="Pretendard-Regular"
                display="inline"
                boxShadow="inset 0 -10px 0 #d6432943"
              >
                콘텐츠
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                fontFamily="Pretendard-Regular"
                fontWeight="700"
              >
                5. 올해 인상 깊었던 콘텐츠는 무엇인가요?
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.a5}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.d5}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* 6번쨰 질문 */}
      <Grid container spacing={1} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="Pretendard-Regular"
                display="inline"
                boxShadow="inset 0 -10px 0 #d6432943"
              >
                도전
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                fontFamily="Pretendard-Regular"
                fontWeight="700"
              >
                6. 올해 도전한 것은 무엇인가요?
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.a6}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.d6}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* 7번쨰 질문 */}
      <Grid container spacing={1} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="Pretendard-Regular"
                display="inline"
                boxShadow="inset 0 -10px 0 #d6432943"
              >
                성취
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                fontFamily="Pretendard-Regular"
                fontWeight="700"
              >
                7. 올해 성취한 것은 무엇인가요?
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.a7}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.d7}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* 8번쨰 질문 */}
      <Grid container spacing={1} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="Pretendard-Regular"
                display="inline"
                boxShadow="inset 0 -10px 0 #d6432943"
              >
                감정
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                fontFamily="Pretendard-Regular"
                fontWeight="700"
              >
                8. 올해 나를 사로잡은 감정은 무엇인가요?
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.a8}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.d8}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* 9번쨰 질문 */}
      <Grid container spacing={1} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="Pretendard-Regular"
                display="inline"
                boxShadow="inset 0 -10px 0 #d6432943"
              >
                너에게
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                fontFamily="Pretendard-Regular"
                fontWeight="700"
              >
                9. 올해 함께한 사람들에게 한마디 해주세요.
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.a9}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* 10번쨰 질문 */}
      <Grid container spacing={1} style={{ marginBottom: '2rem' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="Pretendard-Regular"
                display="inline"
                boxShadow="inset 0 -10px 0 #d6432943"
              >
                나에게
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                textAlign="center"
                fontFamily="Pretendard-Regular"
                fontWeight="700"
              >
                10. 나에게 한마디 해주세요
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontFamily="Pretendard-Regular"
              >
                {answer.post_content.a10}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
