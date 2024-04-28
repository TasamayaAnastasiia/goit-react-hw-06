import Contact from '../Contact/Contact.jsx';
import style from './ContactList.module.css';
import { selectContacts, selectNameFilter } from '../../redux/constant.js';
import { useSelector } from 'react-redux';

const ContactList = () => {
    
    const list = useSelector(selectContacts);
    const nameSearch = useSelector(selectNameFilter);
    let filtrList = [];
    if (list) {
        filtrList = list.filter((contact) =>
        contact.name.toLowerCase().includes(nameSearch.trim().toLowerCase()));
    }

    return (
       <ul className={style.listContacts}>
            {
                filtrList.length !== 0 && (
                    filtrList.map(contact => (<li key={contact.id}><Contact list={contact}/></li>
                )))
            }
       </ul>
    );
}
export default ContactList;