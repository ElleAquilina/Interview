import type { Contact } from '../../contact'

interface ListPeopleProps {
    contacts: Contact[]
}

export default function ListPeople({ contacts }: ListPeopleProps) {
    return (
        <div className='flex flex-col'>
            <h1>People:</h1>
            <table className="table-auto text-left">
                <thead>
                    <tr>
                        <th className='border border-gray-300 p-3'>Name</th>
                        <th className='border border-gray-300 p-3'>Phone</th>
                        <th className='border border-gray-300 p-3'>Email</th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map((contact: Contact) => (
                    <tr key={contact.srno} >
                        <td className='border border-gray-300 p-3'>{contact.name}</td>
                        <td className='border border-gray-300 p-3'>{contact.phone}</td>
                        <td className='border border-gray-300 p-3'>{contact.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}