import { generateTweet } from "shinrabot/app/tweet/generateTweet";
import { twitterClient } from "../tweet/twitter";

export async function POST(req: Request) {
  try {
    const randomTweet = generateTweet();
    const response = await twitterClient.v2.tweet(randomTweet);
    
    return new Response(JSON.stringify({ success: true, data: response }), { status: 200 });
  } catch (error) {
    console.error("Error posting random tweet:", error);
    return new Response(JSON.stringify({ error: "Failed to post random tweet" }), { status: 500 });
  }
}
