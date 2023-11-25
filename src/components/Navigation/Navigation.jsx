import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Grid, Typography } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Grid container spacing={4}>
        <Grid item>
          <Typography sx={{ fontSize: '24px' }}>
            <NavLink to="/">Home</NavLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: '24px' }}>
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          </Typography>
        </Grid>
      </Grid>
    </nav>
  );
};
