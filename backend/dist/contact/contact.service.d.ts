import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactService {
    create(createContactDto: CreateContactDto): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            email: string;
            timestamp: string;
        };
    }>;
}
