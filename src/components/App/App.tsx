import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Header from '../Header';

export default function App() {
  return (
    <>
      <Header />
      <br />

      <Container component="main">
        <Typography>Welcome to React TypeScript Parcel!</Typography>
      </Container>
    </>
  );
}
