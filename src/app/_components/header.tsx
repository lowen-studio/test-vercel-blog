import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-5xl font-semibold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Superblog
      </Link>
    </h2>
  );
};

export default Header;
