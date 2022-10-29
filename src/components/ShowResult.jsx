import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

//icon
import Diversity1TwoToneIcon from '@mui/icons-material/Diversity1TwoTone';
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import DinnerDiningTwoToneIcon from '@mui/icons-material/DinnerDiningTwoTone';
import MovieTwoToneIcon from '@mui/icons-material/MovieTwoTone';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import AddReactionTwoToneIcon from '@mui/icons-material/AddReactionTwoTone';
import AccessibilityTwoToneIcon from '@mui/icons-material/AccessibilityTwoTone';
import WcTwoToneIcon from '@mui/icons-material/WcTwoTone';

/* const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
}); */

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 4,
        margin: 'auto',
        mb: 4,
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      {/* 1번쨰 질문 */}
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 140 }}>
            <Diversity1TwoToneIcon fontSize="large" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                사람
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                1. 올해 가장 기억에 남는 사람은 누구인가요?
              </Typography>
              <Typography variant="body3" color="text.secondary">
                간단 답변
              </Typography>
              <Typography variant="body2" color="text.secondary">
                상세 답변
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />

      {/* 2번쨰 질문 */}
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 140 }}>
            <PlaceTwoToneIcon fontSize="large" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                장소
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                2. 올해 가장 기억에 남는 장소는 어디인가요?
              </Typography>
              <Typography variant="body3" color="text.secondary">
                간단 답변
              </Typography>
              <Typography variant="body2" color="text.secondary">
                상세 답변
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />

      {/* 3번쨰 질문 */}
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 140 }}>
            <ShoppingBagTwoToneIcon fontSize="large" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                소비
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                3. 올해 가장 가치 있는 소비는 무엇인가요?
              </Typography>
              <Typography variant="body3" color="text.secondary">
                간단 답변
              </Typography>
              <Typography variant="body2" color="text.secondary">
                상세 답변
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />

      {/* 4번쨰 질문 */}
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 140 }}>
            <DinnerDiningTwoToneIcon fontSize="large" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                음식
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                4. 올해 가장 기억에 남는 음식은 무엇인가요?
              </Typography>
              <Typography variant="body3" color="text.secondary">
                간단 답변
              </Typography>
              <Typography variant="body2" color="text.secondary">
                상세 답변
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />

      {/* 5번쨰 질문 */}
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 140 }}>
            <MovieTwoToneIcon fontSize="large" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                콘텐츠
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                5. 올해 인상 깊었던 콘텐츠는 무엇인가요?
              </Typography>
              <Typography variant="body3" color="text.secondary">
                간단 답변
              </Typography>
              <Typography variant="body2" color="text.secondary">
                상세 답변
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />

      {/* 6번쨰 질문 */}
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 140 }}>
            <WhatshotTwoToneIcon fontSize="large" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                도전
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                6. 올해 도전한 것은 무엇인가요?
              </Typography>
              <Typography variant="body3" color="text.secondary">
                간단 답변
              </Typography>
              <Typography variant="body2" color="text.secondary">
                상세 답변
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />

      {/* 7번쨰 질문 */}
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 140 }}>
            <EmojiEventsTwoToneIcon fontSize="large" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                성취
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                7. 올해 성취한 것은 무엇인가요?
              </Typography>
              <Typography variant="body3" color="text.secondary">
                간단 답변
              </Typography>
              <Typography variant="body2" color="text.secondary">
                상세 답변
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />

      {/* 8번쨰 질문 */}
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 140 }}>
            <AddReactionTwoToneIcon fontSize="large" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                감정
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                8. 올해 나를 사로잡은 감정은 무엇인가요?
              </Typography>
              <Typography variant="body3" color="text.secondary">
                간단 답변
              </Typography>
              <Typography variant="body2" color="text.secondary">
                상세 답변
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />

      {/* 9번쨰 질문 */}
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 140 }}>
            <AccessibilityTwoToneIcon fontSize="large" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                너에게,
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                9. 올해 함께한 사람들에게 한마디 해주세요.
              </Typography>

              <Typography variant="body2" color="text.secondary">
                상세 답변
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />

      {/* 10번쨰 질문 */}
      <Grid container spacing={5}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 140 }}>
            <WcTwoToneIcon fontSize="large" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                나에게,
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                10. 나에게 한마디 해주세요
              </Typography>

              <Typography variant="body2" color="text.secondary">
                상세 답변
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
