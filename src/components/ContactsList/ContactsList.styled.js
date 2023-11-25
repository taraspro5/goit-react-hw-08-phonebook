import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 350px;
`;

export const ListItem = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  padding: 3px 5px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 3px;
  margin-left: 7px;
  background-color: transparent;
  border: 1px solid red;
  border-radius: 4px;
`;
