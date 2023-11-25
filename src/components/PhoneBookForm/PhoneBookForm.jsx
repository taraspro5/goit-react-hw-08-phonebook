import { Formik, Field, ErrorMessage } from 'formik';
import {
  Button,
  FormContainer,
  Label,
  StyledForm,
} from './PhoneBookForm.styled';
// import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperation';
import { Typography } from '@mui/material';

// const phoneBookSchema = Yup.object({
//   name: Yup.string().required('Required!').min(2, 'Too short!'),
//   number: Yup.number().required('Required!').min(10, 'Too short!'),
// });

export const PhoneBookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <FormContainer>
      <Typography component="h1" variant="h2" sx={{ marginBottom: '5px' }}>
        Phonebook
      </Typography>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        // validationSchema={phoneBookSchema}
        onSubmit={(values, form) => {
          console.log(values);
          const isContactInBook = contacts.find(
            contact => contact.name === values.name
          );
          if (isContactInBook) {
            alert(`${values.name} is already in contacts.`);
          } else {
            dispatch(addContact(values));
          }
          form.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            <label>Name</label>
            <Field type="name" name="name" required />
            <ErrorMessage name="name" component="div" />
          </Label>

          <Label>
            <label>Number</label>
            <Field
              type="phone"
              name="number"
              placeholder="+XX(XXX)-XXX-XX-XX"
              required
            />
            <ErrorMessage name="number" component="div" />
          </Label>

          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </FormContainer>
  );
};
