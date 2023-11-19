import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { AddForm } from 'components/Form/Form';

const Contacts = () => {
  return (
    <main>
      <h2>Contacts</h2>
      <AddForm />
      <Filter />
      <ContactsList />
    </main>
  );
};

export default Contacts;
