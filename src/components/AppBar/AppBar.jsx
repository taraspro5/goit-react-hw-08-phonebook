import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { AppBar as AppBarHeader, Toolbar } from '@mui/material';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarHeader position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBarHeader>
  );
};
