import "@fontsource/unbounded";
import "@fontsource/outfit";

import React, { Suspense } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { theme } from "./utils/theme";
import Home from "./components/Home";
import { PageContainer } from "components/common/PageContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<PageContainer />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
