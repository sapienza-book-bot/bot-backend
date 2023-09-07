import { configDotenv } from "dotenv";
import path from "path";


configDotenv();

export const config = {
    controllers: [path.join(__dirname, '/controllers/**/*.js')],
    middlewares: [path.join(__dirname, '/middleware/**/*.js')],
    PORT: Number(process.env['PORT']) || 4000
}