import "@styles/index.css";
import "@styles/global.scss";
export const metaData = {
  title: "Takoria",
  description: "Discover & share AI Prompts",
};
import { Nav } from "@components";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
