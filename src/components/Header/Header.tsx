import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Template
          </Typography>

          <IconButton
            aria-label="Go to GitHub repository"
            color="inherit"
            component={Link}
            href="https://github.com/remarkablemark/react-typescript-mui-parcel-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
