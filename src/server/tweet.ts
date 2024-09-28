import { twitterClient } from './twitter';
import { generateTweet } from './generatetweet';

export const tweet = async () => {
  const tweetText = generateTweet();

  try {
    await twitterClient.v2.tweet(tweetText);
    console.log('Tweet publicado con éxito:', tweetText);
  } catch (error) {
    console.error('Error al publicar el tweet:', error);
  }
};
