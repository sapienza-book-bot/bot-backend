const { PORT, BOT_TOKEN, WEBHOOK_DOMAIN } = process.env;


export default function getConfig(): { port: string | number; botToken: string; webhookDomain: string; } {
    if (!BOT_TOKEN) throw new Error('"BOT_TOKEN" env var is required!');
    if (!WEBHOOK_DOMAIN) throw new Error('"WEBHOOK_DOMAIN" env var is required!');

    return {
        port: PORT || '3000',
        botToken: BOT_TOKEN,
        webhookDomain: WEBHOOK_DOMAIN
    }
}
