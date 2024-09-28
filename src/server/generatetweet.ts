export const generateTweet = (): string => {
    const arrayPrompts = [
      "fitness", "VR", "Frontend development", "React JS", "Tailwind CSS", 
      "Gym", "VS Code", "Chat GPT", "OpenAI", "Midjourney copywrite issue"
    ];
  
    const randomIndex1 = Math.floor(Math.random() * arrayPrompts.length);
    let randomIndex2 = Math.floor(Math.random() * arrayPrompts.length);
  
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * arrayPrompts.length);
    }
  
    const randomItem1 = arrayPrompts[randomIndex1];
    const randomItem2 = arrayPrompts[randomIndex2];
  
    return `Brainstorm some ideas combining ${randomItem1} and ${randomItem2}`;
  };
  