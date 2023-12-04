import { Telegraf, Markup } from "telegraf";
import "dotenv/config";
import {
  addNotionRow,
  getCountryByGeoData,
  getLastLocation,
  revalidateLocation,
} from "./utils";
import { Client, collectPaginatedAPI } from "@notionhq/client";

const config = {
  token: process.env.BOT_TOKEN!,
  userId: parseInt(process.env.USER_ID!),
  notionToken: process.env.NOTION_TOKEN!,
};

/**
 * SDK Setups
 */
const bot = new Telegraf(config.token);
const notion = new Client({ auth: config.notionToken });

/**
 * Setup the keyboard button
 */
bot.command("start", async (ctx) => {
  await ctx.reply(
    "👋",
    Markup.keyboard([Markup.button.locationRequest("Send Location")]).resize()
  );
});

/**
 * Listen for messages
 */
bot.on("message", async (ctx) => {
  console.log(`Message received from ${ctx.from.username}`);

  if (ctx.from.id !== config.userId) {
    return await ctx.reply("I don't know you! 😢");
  }

  // Only listen for location messages
  const location = "location" in ctx.message && ctx.message.location;

  if (!location) {
    return await ctx.reply("Please provide location data ✈️");
  }

  const date = new Date(ctx.message.date * 1000).toISOString();

  /**
   * Reach out to a geo location api
   */
  let geoLocation: Awaited<ReturnType<typeof getCountryByGeoData>>;

  try {
    geoLocation = await getCountryByGeoData(
      location.latitude,
      location.longitude
    );

    if (!geoLocation) {
      await ctx.reply('Hmm, there was a problem getting geo data')
      throw new Error('Error retrieving location');
    }
  } catch(e) {
    await ctx.reply('Hmm, there was a problem getting geo data')
    throw new Error('Error retrieving location');
  }

  const lastLocation = await getLastLocation(notion);

  /**
   * Make sure that we didn't already check in
   */
  if (lastLocation) {
    if (lastLocation.city === geoLocation.city) {
      return await ctx.reply("You've already checked in! 🤓");
    }
  }

  await ctx.reply('Saving new location to notion ⏳');
  console.log(`Saving new location to notion: ${geoLocation.city}`);
  
  await addNotionRow(notion, {
    ...geoLocation,
    ...location,
    date,
  });

  console.log(`Saved location to notion ✈️`);
  await ctx.reply(
    `Have fun in ${geoLocation.city}, ${geoLocation.country}, buddy! 😘`,
    Markup.keyboard([Markup.button.locationRequest("Send Location")]).resize()
  );

  console.log(`Revalidating remote data`);
  await revalidateLocation();
});

bot.launch().then(() => console.log("Server started ✌️"));

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
