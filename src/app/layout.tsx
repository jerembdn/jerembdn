import "kitchn/fonts.css";

import { KitchnRegistry } from "kitchn/next";

import Providers from "../components/layout/providers";
import Header from "@/components/layout/header";

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{"Jérémy Baudrin"}</title>
        <link rel={"icon"} href={"/favicon.ico"} />
      </head>

      <body>
        <KitchnRegistry>
          <Providers>
            <Header />

            {children}
          </Providers>
        </KitchnRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
