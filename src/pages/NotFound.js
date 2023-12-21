import { Spinner, Container, Box, Heading } from "@chakra-ui/react";

export default function NotFound() {
    return (
      <>
      <Container maxWidth={"full"} h={"200px"} centerContent  mb={680}  >
        <Box mt={400}>
          <Heading> Under Maintenance </Heading>
        </Box>

        <Box>
      <Spinner
      thickness='4px'
      mt={"10"}
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
    </Box>
    </Container>
    </>
      );
}