import "@styles/index.css";
import "@styles/global.scss";
export const metaData = {
  title: "Takoria",
  description: "Discover & share AI Prompts",
};
import { Nav } from "@components";
import { Route, createBrowserRouter } from "react-router-dom";
import Projects from "@components/Projects";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/projects/:id" element={<Projects />} />
  )
);
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <RouterProvider router={router} />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
