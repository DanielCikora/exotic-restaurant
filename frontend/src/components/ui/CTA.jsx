import Link from "next/link";
const CTA = ({ className, href, linkText }) => {
  return (
    <Link
      className={`cta sm:px-[55px] px-[4px] font-semibold sm:py-5 py-3.5 transition-all duration-200 ease-in-out ${className}`}
      href={href}
    >
      {linkText}
    </Link>
  );
};
export default CTA;
