import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { Grid, Typography, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item>
          <Typography sx={{ fontSize: '24px' }}>
            Welcome, {user.name}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => dispatch(logOut())}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
