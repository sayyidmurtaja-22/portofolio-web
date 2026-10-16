import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
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

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  async create(createContactDto: CreateContactDto): Promise<ContactResponse> {
    try {
      if (!createContactDto.name?.trim() || !createContactDto.email?.trim() || !createContactDto.message?.trim()) {
        throw new BadRequestException('All fields (name, email, message) are required');
      }

      throw new ServiceUnavailableException({
        success: false,
        message: 'Message delivery is not configured. Please email sayyid.tw@gmail.com directly.',
      });
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof ServiceUnavailableException) {
        throw error;
      }

      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      this.logger.error(`Failed to process contact submission: ${errorMessage}`);
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to process contact submission. Please try again later.',
      });
    }
  }
}
