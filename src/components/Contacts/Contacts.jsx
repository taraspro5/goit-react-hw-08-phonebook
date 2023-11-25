import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsSearchName } from 'components/ContactsSearchName/ContactsSearchName';
import { Container } from './Contacts.styled';

export const Contacts = () => {
  return (
    <Container>
      <h2>Contacts</h2>
      <ContactsSearchName />
      <ContactsList />
    </Container>
  );
};
