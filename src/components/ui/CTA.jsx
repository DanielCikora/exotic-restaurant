import Link from "next/link";
const CTA = ({ className, href, linkText }) => {
  return (
    <Link
      className={`cta px-[55px] font-semibold py-5 transition-all duration-200 ease-in-out ${className}`}
      href={href}
    >
      {linkText}
    </Link>
  );
};
export default CTA;
