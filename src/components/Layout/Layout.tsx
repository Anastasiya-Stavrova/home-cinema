import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#10141f",
        display: "flex",
        padding: 3,
        gap: 3,
        overflowY: "hidden",
        height: "100vh",
        color: "#fff",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
      }}
    >
      <Sidebar />
      <Box
        sx={{
          overflowY: "scroll",
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
