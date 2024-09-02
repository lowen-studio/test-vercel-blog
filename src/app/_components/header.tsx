import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-3xl md:text-6xl font-semibold tracking-tight md:tracking-tight leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Superblog
      </Link>
    </h2>
  );
};

export default Header;
