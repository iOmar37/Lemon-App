import { Container, SimpleGrid, Box, Card, CardBody, Stack, Heading,
        Link, Button, CardFooter, FormControl, Input, FormLabel,
        FormHelperText, FormErrorMessage, Spacer, NumberInput, NumberInputField,
        NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select,
        RadioGroup, HStack, Radio } from "@chakra-ui/react";
import { useState } from "react";

        

export default function Bookings() {

    const [input, setInput] = useState('')

        const handleInputChange = (e) => setInput(e.target.value)

        const isError = input === ''

    return(
        <Container centerContent  mt={"100"}>
             <SimpleGrid templateColumns='repeat(auto-fill, minmax(400px, 1fr))' >

                <Box borderRadius={"lg"} boxShadow='base'>
                <Card maxW='lg' background={"gray.50"}>
                    <CardBody>
                    <Stack mt='4' spacing='4'>
                        <Heading size='md'>Booking Information</Heading>
                        <Spacer/>

                        <FormControl isRequired>
                            <FormLabel>First name</FormLabel>
                            <Input placeholder='First name' />
                            </FormControl>
                            <Spacer/>

                            <FormControl isInvalid={isError}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' value={input} onChange={handleInputChange} />
                            {!isError ? (
                                <FormHelperText>
                                Reservation details will be sent to this Email.

                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                            </FormControl>
                            <Spacer/>

                            <FormControl>
                            <FormLabel>Date and Time</FormLabel>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                                />
                                </FormControl>
                                <Spacer/>
                        
                            <FormControl>
                                <FormLabel>Number of People</FormLabel>
                                <NumberInput max={16} min={1}>
                                    <NumberInputField placeholder='0'/>
                                    <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                            <Spacer/>

                            <FormControl>
                                <FormLabel>Occasion</FormLabel>
                                <Select placeholder='Select Occasion'>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                    <option>Graduation party</option>
                                    <option>Friends</option>
                                    <option>Family</option>
                                </Select>
                            </FormControl>
                            <Spacer/>

                            <FormControl as='fieldset'>
                                <FormLabel as='legend'>
                                    Where do you prefer to sit ?
                                </FormLabel>
                                <RadioGroup defaultValue='Itachi'>
                                    <HStack spacing='24px'>
                                    <Radio value='Inside'>Inside</Radio>
                                    <Radio value='Outside'>Outside</Radio>
                                    </HStack>
                                </RadioGroup>
                                <FormHelperText>We'll make it ready</FormHelperText>
                            </FormControl>

                    </Stack>
                    </CardBody>
                    
                    <CardFooter justifyContent={"center"}>
                    <Link href='/done' >
                        <Button w={"150px"} variant='outline' colorScheme="#495E57" color={"green.800"}
                        _hover={{
                        bg:"yellow.300" }}>
                        Confirm
                        </Button>
                    </Link>
                    </CardFooter>
                </Card>
                </Box>
                </SimpleGrid>
        </Container>
    )
}
