import { Card, CardBody, Heading, Container, FormControl, FormLabel, Input, Stack, FormHelperText,
        NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper,
        NumberDecrementStepper, Select, RadioGroup, HStack, Radio, Button, FormErrorMessage } from '@chakra-ui/react'
import { useFormik } from 'formik';
import { Form } from 'react-router-dom';
import * as Yup from 'yup'

export default function Bookings() {

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            Date: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username requird")
                .min(4, " Username is too short"),
            email: Yup.string()
                .email("Invalid email")
                .required("email required"),
        }),
        onSubmit:(values , actions) => {
            alert (JSON.stringify(values, null , 2 ));
            actions.resetForm();
            
        },
    });
    
    console.log('Booking information', formik.values)

    return(
        <Container centerContent mt={100} >
            <Card bg={"#EDF2F7"}>
                <CardBody >
                    <Stack  spacing="5" >
                        <Form onSubmit={formik.handleSubmit}>
                            <Heading>Booking Information</Heading>


                            <FormControl isInvalid={formik.errors.username && formik.touched.username}>
                                    <FormLabel>First Name</FormLabel>
                                    <Input 
                                        bg={"white"}
                                        name='username' 
                                        onChange={formik.handleChange} 
                                        value={formik.values.username} 
                                        placeholder='Enter username...'
                                        onBlur={formik.handleBlur}/>
                                        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                            </FormControl>
                                

                             <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input 
                                        bg={"white"}
                                        name='email'  
                                        onChange={formik.handleChange} 
                                        value={formik.values.email} 
                                        placeholder='Enter email' 
                                        type='email'
                                        onBlur={formik.handleBlur}
                                        />
                                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                    <FormHelperText>We'll never share your email.</FormHelperText>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Date and Time</FormLabel>
                                <Input
                                    name='Date'
                                    onChange={formik.handleChange} 
                                    value={formik.values.Date} 
                                    bg={"white"}
                                    size="md"
                                    type="datetime-local"
                                    />
                            </FormControl>

                            
                            <FormControl>
                                    <FormLabel>Number of People</FormLabel>
                                    <NumberInput max={16} min={1} bg={"white"}>
                                        <NumberInputField placeholder='0'/>
                                        <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                            </FormControl>
                                

                            <FormControl>
                                    <FormLabel>Occasion</FormLabel>
                                    <Select placeholder='Select Occasion' bg={"white"}>
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                        <option>Graduation party</option>
                                        <option>Friends</option>
                                        <option>Family</option>
                                    </Select>
                            </FormControl>
                                

                            <FormControl as='fieldset'>
                                    <FormLabel as='legend'>
                                        Where do you prefer to sit ?
                                    </FormLabel>
                                    <RadioGroup defaultValue='Itachi'>
                                        <HStack spacing='24px'>
                                        <Radio value='Inside' bg={"white"}>Inside</Radio>
                                        <Radio value='Outside'bg={"white"}>Outside</Radio>
                                        </HStack>
                                    </RadioGroup>
                                    <FormHelperText>We'll make it ready</FormHelperText>
                            </FormControl>

                                
                                  <Button 
                                    type='submit'
                                    variant='gost' bg={"yellow.300"} color={"#495E57"}
                                    _hover={{ bg:"green.200", color:"black"}}
                                    >
                                    Confirm
                                </Button>
                        </Form>
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    )
}