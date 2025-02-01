import { useState } from "react";
import { content } from "../../../shared/lib/constants/content";

const delay = () =>
  new Promise((res) => {
    let timeout: ReturnType<typeof setTimeout>;

    timeout = setTimeout(() => {
      res("");
      clearTimeout(timeout);
    }, 1000);
  });

export const useRandomisePhrases = () => {
  const [phrase, setPhrase] = useState("Нажми на кнопочку, родная моя))))");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePhrase = async () => {
    setIsLoading(true);

    await delay();

    const randomIndex = Math.floor(Math.random() * 331);

    if (phrase === content[randomIndex]) return;

    setPhrase(content[randomIndex]);

    setIsLoading(false);
  };

  return {
    handleChangePhrase,
    phrase,
    isLoading,
  };
};
