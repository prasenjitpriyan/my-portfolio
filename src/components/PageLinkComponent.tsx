import Link from "next/link";
import React from "react";

type PageLinkComponentProps = {
  className: string;
};

const PageLinkComponent: React.FC<PageLinkComponentProps> = ({ className }) => {
  return (
    <div className="flex justify-between gap-5 text-second-400">
      <Link href={"/"} className={className}>
        Home
      </Link>
      <Link href={"/works"} className={className}>
        Works
      </Link>
      <Link href={"/contact"} className={className}>
        Contact
      </Link>
    </div>
  );
};

export default PageLinkComponent;
