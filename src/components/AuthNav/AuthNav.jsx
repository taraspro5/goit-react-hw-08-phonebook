import { Link } from './AuthNav.styled';
import { Grid, Typography } from '@mui/material';

export const AuthNav = () => {
  return (
    <div>
      <Grid container spacing={4} sx={{ flexGrow: 1 }}>
        <Grid item>
          <Typography sx={{ fontSize: '24px' }}>
            <Link to="/register">Register</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: '24px' }}>
            <Link to="/login">Login</Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
