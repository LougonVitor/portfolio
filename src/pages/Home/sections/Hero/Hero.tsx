import { Box, Container, Grid2, styled, Typography } from "@mui/material"
import Image from "../../../../assets/images/vitor-picture.jpg"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden"
    }))

    const StyledImage = styled("img")(() => ({
        width: "80%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.contrastText}`,
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth={"lg"}>
            <Grid2 container spacing={2}>
                <Grid2 size={{xs: 12, md: 5}}>
                    <Box position={"relative"}>
                        <Box position={"absolute"} width={"150%"} top={-100} right={0}>
                            <AnimatedBackground />
                        </Box>
                        <Box position={"relative"} textAlign={"center"}>
                            <StyledImage src={Image} />
                        </Box>
                    </Box>
                </Grid2>
                <Grid2 size={{xs: 12, md: 7}}>
                    <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Vítor Lougon</Typography>
                    <Typography color="primary.contrastText" variant="h2" textAlign={"center"} >I'm a Software Engineer</Typography>
                    <Grid2 container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                        <Grid2 size={{xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>
                            <StyledButton>
                                <CloudDownloadIcon />

                                <Typography>
                                    Download CV
                                </Typography>
                            </StyledButton>
                        </Grid2>
                        <Grid2 size={{xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>
                            <StyledButton>
                                <AlternateEmailIcon />

                                <Typography>
                                    Contact me
                                </Typography>
                            </StyledButton>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
            </Container>
        </StyledHero>
      </>
    )
}
  
export default Hero