
import { v4 as uuid } from 'uuid'

export interface Contact {
    srno: string;
    name: string;
    phone: string;
    email: string;
}

export const contactListExample: Contact[] = [
    {
        srno: uuid().toString(),
        name: 'Elle Aquilina',
        phone: '2179998888',
        email: 'elle@gmail.com',
    }, {
        srno: uuid().toString(),
        name: 'HelloThereGeneralKenobi',
        phone: '1234567890',
        email: 'HelloThereGeneralKenobi@gmail.com',
    }
]