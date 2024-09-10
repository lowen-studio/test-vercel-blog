import markdownStyles from "./markdown-styles.module.css";
import Image from "next/image";


type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div>
      <div
        className={markdownStyles["markdown"], "w-full"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
