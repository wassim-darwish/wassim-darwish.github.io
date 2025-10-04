import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "components/Navbar";
import { FloatingNavBar } from "../FloatingNavBar";

function PageContainer() {
  return (
    <Stack justifyContent="space-between">
      <FloatingNavBar />
      <Navbar />
      <Outlet />
      <Footer />
    </Stack>
  );
}

export default PageContainer;
