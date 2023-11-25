import { Button, Stack, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div
      style={{
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography component="h1" variant="h2" sx={{ marginBottom: '5px' }}>
        Login
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={2} width={400}>
          <TextField label="Email" type="email" name="email" required />
          <TextField
            label="Password"
            type="password"
            name="password"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </Stack>
      </form>
    </div>
    // <form onSubmit={handleSubmit} autoComplete="off">
    //   <label>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Log In</button>
    // </form>
  );
};
