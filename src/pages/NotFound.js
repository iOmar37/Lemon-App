import { Spinner, Container, Heading, Card, CardBody, VStack } from "@chakra-ui/react";
import { WarningTwoIcon } from '@chakra-ui/icons';


export default function NotFound() {
    return (
      <>
      <Container centerContent mt={350} mb={350}>
        <Card bg={"#fff5f5"} border={"dashed"} borderColor={"red"} color={"red"}>
          <CardBody>
                <VStack spacing={5}>

                <WarningTwoIcon color={"orange"} boxSize={100}/>

                <Heading> Under Maintenance ! </Heading>
                
                <Spinner
                  thickness='4px'
                  mt={"10"}
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl'
                />
                </VStack>
            </CardBody>
        </Card>
      </Container>
    </>
      );
}