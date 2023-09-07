import { Telegraf } from "telegraf";
import getConfig from "./config/config";

const config = getConfig();
const bot = new Telegraf(config.botToken);


export default bot;