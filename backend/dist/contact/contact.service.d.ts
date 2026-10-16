import { CreateContactDto } from './dto/create-contact.dto';
export interface ContactResponse {
    success: boolean;
    message: string;
    data: {
        name: string;
        email: string;
        timestamp: string;
    };
}
export declare class ContactService {
    private readonly logger;
    create(createContactDto: CreateContactDto): Promise<ContactResponse>;
}
