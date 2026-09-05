import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  async create(createContactDto: CreateContactDto) {
    // Here you can add logic to:
    // - Save to database
    // - Send email notification
    // - Integrate with third-party services

    console.log('Contact form submission received:');
    console.log('Name:', createContactDto.name);
    console.log('Email:', createContactDto.email);
    console.log('Message:', createContactDto.message);

    return {
      success: true,
      message: 'Your message has been received. Thank you for reaching out!',
      data: {
        name: createContactDto.name,
        email: createContactDto.email,
        timestamp: new Date().toISOString(),
      },
    };
  }
}
