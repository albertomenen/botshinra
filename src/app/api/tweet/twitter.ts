import { TwitterApi } from 'twitter-api-v2';
import { config } from 'dotenv';
import { Tweetv2SearchResult } from 'twitter-api-v2';
import { TweetSearchRecentV2Paginator } from 'twitter-api-v2';


config();

// Inicialización del cliente de Twitter
const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY!,
  appSecret: process.env.TWITTER_API_SECRET!,
  accessToken: process.env.TWITTER_ACCESS_TOKEN!,
  accessSecret: process.env.TWITTER_ACCESS_SECRET!,
});

// Sistema de automatización de follow
export const autoFollowBasedOnHashtags = async (hashtag: string) => {
  try {
    const response: TweetSearchRecentV2Paginator = await twitterClient.v2.search(`#${hashtag}`, {
      max_results: 10,
    });

    for (const tweet of response.tweets) {
      const userId = tweet.author_id;
      if (userId) {
        await twitterClient.v2.follow("your", userId);
      }
    }
  } catch (error) {
    console.error("Error while trying to follow users:", error);
  }
};

// Postear un hilo de tweets
export const postThread = async (tweetText: string) => {
    const thread = convertTweetTextToThread(tweetText);
    let replyToId = null;
  
    for (const tweet of thread) {
      // Usa el tipo correcto para la respuesta
      const response: any = await twitterClient.v2.tweet(tweet, replyToId ? { reply: { in_reply_to_tweet_id: replyToId } } : {});
      replyToId = response.data.id;
    }
  };

// Función para dividir un texto en varios tweets
export const convertTweetTextToThread = (tweetText: string): string[] => {
  const tweetThread: string[] = [];
  let currentTweet = "";

  const tweetTextArray = tweetText.split("\n");

  tweetTextArray.forEach((text) => {
    const trimmedText = text.trim();

    if (calculateTweetLength(currentTweet + trimmedText + "\n") <= 280) {
      currentTweet += trimmedText + "\n";
    } else {
      tweetThread.push(currentTweet);
      currentTweet = trimmedText + "\n";
    }
  });

  tweetThread.push(currentTweet);
  return tweetThread;
};

// Calcula la longitud de un tweet
const calculateTweetLength = (tweet: string): number => {
  return tweet.length;
};

export { twitterClient };
