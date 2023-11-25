import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Button, Stack, TextField, Typography } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        Register
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={2} width={400}>
          <TextField label="Username" type="text" name="name" required />
          <TextField label="Email" type="email" name="email" required />
          <TextField
            label="Password"
            type="password"
            name="password"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Stack>
      </form>
    </div>
    // <form onSubmit={handleSubmit} autoComplete="off">
    //   <label>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <Button type="submit">Register</Button>
    // </form>
  );
};
