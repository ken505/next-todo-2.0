import { TwitterShareButton, TwitterIcon } from "react-share";

export const SnsShare = () => {
  return (
    <div className="flex flex-col fixed top-3 left-3 ">
      <TwitterShareButton
        className="focus:outline-none focus:ring rounded-md"
        url="https://next-todo-2-0.vercel.app/"
        title="Next Todo - App"
      >
        <TwitterIcon
          size={32}
          round
          className="cursor-pointer hover:opacity-70 dark:opacity-40 mx-1 my-1"
        />
      </TwitterShareButton>
    </div>
  );
};
