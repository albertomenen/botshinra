import { generateTweet } from "shinrabot/app/tweet/generateTweet";
import { twitterClient } from "./twitter";

export async function POST(req: Request) {
  try {
    const tweet = generateTweet();
    const response = await twitterClient.v2.tweet(tweet);
    
    return new Response(JSON.stringify({ success: true, data: response }), { status: 200 });
  } catch (error) {
    console.error("Error al procesar el tweet:", error);
    return new Response(JSON.stringify({ error: "Error al procesar el tweet" }), { status: 500 });
  }
}
