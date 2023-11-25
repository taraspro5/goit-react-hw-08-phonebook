import { useDispatch, useSelector } from 'react-redux';
import { Button, List, ListItem } from './ContactsList.styled';
import {
  selectError,
  selectIsLoading,
  selectToRenderContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contactsOperation';
import { Loader } from 'components/Loader/Loader';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactsAfterFilter = useSelector(selectToRenderContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error === 'Rejected' ? (
        <p>Something went wrong! Try again.</p>
      ) : (
        <List>
          {contactsAfterFilter.map(contact => {
            return (
              <ListItem key={contact.id}>
                {contact.name}: {contact.number}
                <Button onClick={() => dispatch(deleteContact(contact.id))}>
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};
