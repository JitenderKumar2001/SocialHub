import { Box, Typography, Container, Button } from "@mui/material";

function Main() {
  return (
    <Box>
      <Container sx={{ width: 700, mt: 15, textAlign: "center" }}>
        <Typography variant="h3" sx={{ mb: 5 }}>
          About US
        </Typography>
        <Typography variant="subtitle1">
          Welcome to SocialHub! We connects people from all over the world
          through the power of shared experiences. Our platform allows users to
          post their socials and share them with a community of like-minded
          individuals. At SocialHub, we believe that social connections are
          essential to our well-being and happiness. That's why we've created a
          space where people can come together and share their thoughts,
          feelings, and experiences with others. Our app is easy to use and
          navigate, making it simple for anyone to join in on the conversation.
          Whether you're looking to make new friends, find support, or just have
          some fun, SocialHub has something for everyone. We're constantly
          working to improve and expand our platform, so be sure to check back
          often for new features and updates. Thanks for choosing SocialHub, and
          we can't wait to see what you'll share!
        </Typography>
        <Button variant="contained" sx={{mr:10, mt:5}}>Premium</Button>
        <Button variant="outlined" sx={{mt:5}}>Join US</Button>
      </Container>
    </Box>
  );
}

export default Main;
