import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-lg md:text-xl leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Back to Projects
      </Link>
    </h2>
  );
};

export default Header;
