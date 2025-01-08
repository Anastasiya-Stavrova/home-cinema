import { Box, Container, Typography } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import notFoundImg from "../../assets/img/image-not-found.png";

const ErrorPage = () => {
  return (
    <Layout>
      <Container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: { xs: "wrap", md: "nowrap" },
          alignItems: "start",
          justifyContent: { xs: "center", md: "space-around" },
          overflowY: "hidden",
          padding: "32px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            paddingTop: { xs: "0px", md: "150px" },
          }}
        >
          <Typography component="h2" variant="h4" fontWeight={600}>
            Error 404 : Page not found
          </Typography>

          <Typography component="h3" variant="h6" fontWeight={300}>
            Sorry, we don't have that page on our website
          </Typography>
        </Box>

        <img
          src={notFoundImg}
          alt="Not Foud Img"
          style={{
            height: "400px",
            width: "400px",
            objectFit: "cover",
            filter: "contrast(90%)",
          }}
        />
      </Container>
    </Layout>
  );
};

export default ErrorPage;
