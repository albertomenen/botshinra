// src/app/tweet/generateTweet.ts
export const generateTweet = (): string => {
    const prompts = [
      "React",
      "Next.js",
      "Typescript",
      "APIs",
      "Web development",
      "OpenAI",
      "JavaScript",
      "Tailwind CSS",
    ];
  
    const hashtags = [
      "#webdevelopment",
      "#programming",
      "#javascript",
      "#coding",
      "#reactjs",
      "#typescript",
      "#Nextjs",
      "#TailwindCSS",
    ];
  
    // Obtener dos temas aleatorios del array
    const randomIndex1 = Math.floor(Math.random() * prompts.length);
    let randomIndex2 = Math.floor(Math.random() * prompts.length);
    const randomHashtag = Math.floor(Math.random() * hashtags.length);
  
    // Asegúrate de que los índices no sean iguales
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * prompts.length);
    }
  
    const topic1 = prompts[randomIndex1];
    const topic2 = prompts[randomIndex2];
  
    return `Bravo, has aprendido ${topic1}, ahora soy experto en ${topic2}. ¡Muy interesante! ${hashtags[randomHashtag]}`;
  };
  