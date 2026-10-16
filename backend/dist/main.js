"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const frontendUrl = process.env.FRONTEND_URL;
    const envOrigins = frontendUrl
        ? frontendUrl.split(',').map((url) => url.trim())
        : [];
    const allowedOrigins = [
        'http://localhost:3000',
        'https://murtaja-portofolio.vercel.app',
        ...envOrigins,
    ];
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin) {
                return callback(null, true);
            }
            const isAllowed = allowedOrigins.includes(origin) ||
                /\.vercel\.app$/.test(origin) ||
                origin === 'https://vercel.app';
            if (isAllowed) {
                return callback(null, true);
            }
            return callback(null, false);
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`Backend server is running on http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map