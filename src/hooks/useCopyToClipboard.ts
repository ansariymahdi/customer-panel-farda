import {useState} from "react";

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: any) => {
    if (typeof text === "string" || typeof text == "number") {
      navigator.clipboard
        .writeText(text.toString())
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1500); // Reset after 1.5 seconds
        })
        .catch((err) => {});
    } else {
    }
  };

  return {isCopied, copyToClipboard};
};

export default useCopyToClipboard;
