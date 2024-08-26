import { Inter } from "next/font/google";
import NavbarWrapper from "./NavbarWrapper";
import "./globals.css";
import Navbar from "../components/Navbar/page"; // Updated file location
import Footer from "../components/footer/page";
import NextAuthProviderWraper from "./NextAuthProviderWraper";
import CourseBuyerProvider from "./BuyerContext";

// import ProtectedRoute from "./ProtectedRoute/page";
import "../css/satoshi.css"; // styles of admin page
import "../css/style.css"; // styles of admin page
import { lazy } from "react";

const CourseContextProvider = lazy(() =>
  import("./Contexts/Courses/CourseContextProvider")
);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Learning",
  description: "Website for Online+Offline Courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProviderWraper>
          <CourseContextProvider>
            <NavbarWrapper />
            <CourseBuyerProvider>{children}</CourseBuyerProvider>
            <Footer />
          </CourseContextProvider>
        </NextAuthProviderWraper>
      </body>
    </html>
  );
}
