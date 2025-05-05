import {useState} from 'react'
import type { Contact } from '../../contact.ts'
import { contactSchema } from '../../contactSchema.ts'
import { fromError } from 'zod-validation-error'
import { v4 as uuid } from 'uuid'

interface AddPersonProps {
    addContact: (contact: Contact) => void
}

export default function AddPerson({ addContact }: AddPersonProps) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState<string | null>(null)

    function submit() {
        const contact: Contact = { srno: uuid().toString(), name, phone, email }
        const validate = contactSchema.safeParse(contact)

        if (validate.success) {
            console.log('validation success')
            addContact(contact)
        } else {
            // Validation error
            console.log(fromError(validate.error).toString())
            setError(fromError(validate.error).toString())
        }
    }


    return (
        <div className='flex flex-col'>
            <h1>Add Person:</h1>
            <div>
                <p>Name:</p>
                <input name='name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <p>Phone:</p>
                <input name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <p>email:</p>
                <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            { error && (
                <p className='text-red-500'>{error}</p>
            )}
            <button type='submit' onClick={submit}>Add Person</button>
        </div>
    )
}