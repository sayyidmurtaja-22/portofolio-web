"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContactService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
let ContactService = ContactService_1 = class ContactService {
    constructor() {
        this.logger = new common_1.Logger(ContactService_1.name);
    }
    async create(createContactDto) {
        try {
            if (!createContactDto.name?.trim() || !createContactDto.email?.trim() || !createContactDto.message?.trim()) {
                throw new common_1.BadRequestException('All fields (name, email, message) are required');
            }
            throw new common_1.ServiceUnavailableException({
                success: false,
                message: 'Message delivery is not configured. Please email sayyid.tw@gmail.com directly.',
            });
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException || error instanceof common_1.ServiceUnavailableException) {
                throw error;
            }
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            this.logger.error(`Failed to process contact submission: ${errorMessage}`);
            throw new common_1.InternalServerErrorException({
                success: false,
                message: 'Failed to process contact submission. Please try again later.',
            });
        }
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = ContactService_1 = __decorate([
    (0, common_1.Injectable)()
], ContactService);
//# sourceMappingURL=contact.service.js.map