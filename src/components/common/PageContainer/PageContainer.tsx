import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "components/Navbar";
import { FloatingNavBar } from "../FloatingNavBar";
import ScrollToTop from "../ScrollToTop";
import useHashScroll from "hooks/useHashScroll";

function PageContainer() {
  useHashScroll();

  return (
    <Stack minHeight="100vh" justifyContent="space-between">
      <Navbar />
      <FloatingNavBar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </Stack>
  );
}

export default PageContainer;
