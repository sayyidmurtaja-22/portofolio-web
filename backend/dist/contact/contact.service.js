"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
let ContactService = class ContactService {
    async create(createContactDto) {
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
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)()
], ContactService);
//# sourceMappingURL=contact.service.js.map