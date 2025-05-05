import { useState } from 'react'
import './App.css'
import AddPerson from "./components/AddPerson/AddPerson";
import ListPeople from "./components/ListPeople/ListPeople"
import {type Contact, contactListExample} from "./contact.ts"

function App() {
    const [contacts, setContacts] = useState<Contact[]>(contactListExample)

    function addContact(contact: Contact) {
        setContacts((prev) => [...prev, contact])
    }

    return (
    <>
      <div className='flex flex-row gap-10'>
          <AddPerson addContact={addContact}/>
          <ListPeople contacts={contacts} />
      </div>
    </>
  )
}

export default App
