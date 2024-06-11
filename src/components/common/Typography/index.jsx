import React from "react";

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  "body-large": "p",
  body: "p",
  "body-small": "span",
  "body-extra-small": "span",
};

const sizes = {
  h1: "text-2xl md:text-[48px] font-bold",
  h2: "text-xl md:text-[36px] font-semibold",
  h4: "text-lg font-semibold md:text-[24px]",
  h5: "text-lg font-semibold md:text-[20px]",
  h6: "text-[15px] font-medium md:text-base",
  body: "text-sm md:text-base",
  "body-small": "text-xs sm:text-sm",
};

export const Typography = ({ variant = "body", children, className, as }) => {
  const sizeClasses = sizes[variant];
  const Tag = as ?? tags[variant];

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};
