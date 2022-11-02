import { Avatar, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { orange } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { logout } from '../store/modules/users';

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    navigate('/');
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[300],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '60vh',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar sx={{ m: 3, bgcolor: orange[300] }}>#</Avatar>
            <Typography component="h1" variant="h5">
              로그 아웃 하시겠습니까?
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <LoadingButton
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, height: '3.5em' }}
                onClick={() => logoutUser()}
              >
                로그아웃
              </LoadingButton>
            </Box>
          </Box>
        </ThemeProvider>
      </Container>
      <Footer />
    </>
  );
}
