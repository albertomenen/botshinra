import { twitterClient } from "../tweet/twitter";

export async function POST(req: Request) {
  try {
    const tweetText = "Can I have a GM team? 🫡 #gm #goodmoring";
    const response = await twitterClient.v2.tweet(tweetText);
    
    return new Response(JSON.stringify({ success: true, data: response }), { status: 200 });
  } catch (error) {
    console.error("Error posting Good Morning tweet:", error);
    return new Response(JSON.stringify({ error: "Failed to post Good Morning tweet" }), { status: 500 });
  }
}
