import { Box, Typography } from "@mui/material";
import Layout from "../../components/Layout/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          padding: "32px",
        }}
      >
        <Typography component="h2" variant="h3">
          404 Page not found
        </Typography>
      </Box>
    </Layout>
  );
};

export default ErrorPage;
