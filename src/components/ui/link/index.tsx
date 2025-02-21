"use client";

import type React from "react";
import kitchn, { Link as KitchnLink, type LinkProps } from "kitchn";

const Link: React.FC<LinkProps> = (props: LinkProps) => (
  <Component {...props} />
);

const Component = kitchn(KitchnLink)`
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export default Link;
