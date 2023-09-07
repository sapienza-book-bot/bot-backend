import { z } from "zod";

// const phoneRegex = new RegExp(
//     /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
// );


export const CreteUserValidator = z.object({
    body: z.object({
        telegramId: z.string({
            required_error: 'Contact parameter is required'
        }),
    }),
})