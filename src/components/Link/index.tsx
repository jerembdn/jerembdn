import React from "react";
import NextLink, { LinkProps } from "next/link";

interface Props extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<Props> = ({
  href,
  as,
  className,
  locale,
  children,
}: Props) => {
  const isString = (x: unknown) => {
    return Object.prototype.toString.call(x) === "[object String]";
  };

  if (isString(href)) {
    href = href as string;
    const internal = /^\/(?!\/)/.test(href);

    if (!internal) {
      return (
        <a
          href={href}
          className={className}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          {children}
        </a>
      );
    }
  }

  return (
    <NextLink href={href} as={as} locale={locale} legacyBehavior>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
