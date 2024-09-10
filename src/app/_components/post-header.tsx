import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12">
      <PostTitle>{title}</PostTitle>
      <h4 className="text-center md:text-left text-xl mt-5 md:pl-8">
        {excerpt}
      </h4>
    </section>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
}
