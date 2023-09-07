// import { Context, Markup, Telegraf } from "telegraf";
// import { Update } from "telegraf/typings/core/types/typegram";
// import bot from "../bot";
// import getConfig from "../config/config";


// const { webhookDomain } = getConfig();

// const keyboard = async () => {
//     bot.command("custom", async ctx => {
//         return await ctx.reply(
//             "Custom buttons keyboard",
//             Markup.inlineKeyboard([
//                 Markup.button.callback('🔍 Cerca', 'find'),
//                 Markup.button.callback('📚 lista', 'list'),
//                 Markup.button.callback('☸ Setting', 'settings'),
//                 Markup.button.callback('📞 Feedback', 'feedback')
//             ])
//         );
//     });
// }


// const start = async () => {

//     bot.start((ctx) => {
//         return ctx.reply(`Ciao ${ctx.update.message.from.first_name}, sono qui per aiutarti nella compravendita di libri`);
//     })
// }


// const launch = async () => {

// }
