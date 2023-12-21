import { Spinner, Container, Box, Heading, Spacer, Alert, AlertIcon, AlertTitle,
    AlertDescription } from "@chakra-ui/react";

export default function Done() {
    return (
      <>
      <Container maxWidth={"full"} h={"200px"} centerContent  mb={680} >
        <Box mt={300} borderRadius={"lg"}>
        <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='300px'
                borderRadius={"lg"}
                >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Application submitted!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Thanks for submitting your Booking Information. Our team will take care of your booking.
                </AlertDescription>
                </Alert>
        </Box>
    </Container>
    </>
      );
}