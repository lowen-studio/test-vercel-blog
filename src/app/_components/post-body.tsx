import markdownStyles from "./markdown-styles.module.css";
import Image from "next/image";


type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="w-full">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
    <h2 className="text-lg leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Back to Projects
      </Link>
    </h2>
  );
}
