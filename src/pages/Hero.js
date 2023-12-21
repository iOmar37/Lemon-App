import { Box, Container, Heading, Stack, Text,Button, ButtonGroup, 
  color, VStack, HStack, SimpleGrid, Card, CardHeader, 
  CardBody, CardFooter, Image, Divider, Icon } from "@chakra-ui/react";
import Deliveryicon from "../img/deliveryicon.png";
import Bruschetta  from "../img/bruschetta.jpg";
import GreekSalad from "../img/greek-salad.jpg";
import LemonDessert from "../img/lemon-dessert.jpg";
import restaurantFoodImage from '../img/restaurant-food.jpg';
import Bookings from "../pages/Bookings";
import "./Hero.css";
import { Link } from '@chakra-ui/react'



export default function Hero() {
    return(
      <><section className="hero">
        <div className="container grid">
          <div className="hero-information">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant,
              focused on traditional recipes served with a modern twist.
            </p>
            <Link href='/bookings'>
              <Button colorScheme="green" variant='outline' margin={"50px"} borderRadius={"10px"} color={"#FECE14"}
              _hover={{ color: "green.800" , bg : "#FECE14"}}>
                Reserve a Table
              </Button>
            </Link>
          </div>
          <img
            className="hero-image"
            src={restaurantFoodImage}
            alt="Restaurant food" />
        </div>
      </section>
    
      
    <Container maxWidth={"max"}  > 

    <SimpleGrid spacing={"10"} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
      <Box>
        <HStack width={"fit-content"} spacing={500}>
         <Heading fontSize={{ base: "24px", md: "40px" }}> This week specials! </Heading>
            <Link href='/notfound'>
              <Button colorScheme="green" variant='outline' borderRadius={"10px"} color={"green.800"}
              _hover={{
                bg:"yellow.300"}}>
                Online Menu
              </Button>
            </Link>
            </HStack>
          </Box>
      </SimpleGrid>
      
        <SimpleGrid spacing={"10"} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' mt={20}>

           <Box borderRadius={"lg"}>
              <Card maxW='sm' background={"gray.100"}>
              <Image 
                    src={Bruschetta}
                    alt='Bruschetta'
                    borderRadius='lg'
                    h={"200px"}/>
                <CardBody>
                  <Stack mt='4' spacing='4'>
                    <Heading size='md'>Bruschetta</Heading>
                    <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }}>
                     Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with 
                     garlic and topped with olive oil and salt.
                     Variations may include toppings of tomato, vegetables, beans, cured meat, or cheese. In Italy, 
                     bruschetta is often prepared using a brustolina grill.
                    </Text>
                    <Text color='orange.400' fontSize='2xl'>
                      $5.99
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <Link href='/notfound'>
                    <Button variant='ghost' color={"green.800"}
                    _hover={{
                      bg:"yellow.300"}}>
                      Order a Delivery
                      <Image w={"10%"} m={"4"}
                      src={Deliveryicon}
                      alt='Delivery Icon'
                      borderRadius='lg'
                     />
                    </Button>
                </Link>
                </CardFooter>
              </Card>
          </Box>

          <Box  borderRadius={"lg"}>
              <Card maxW='sm' background={"gray.100"} h={"full"}>
              <Image 
                    src={GreekSalad}
                    alt='Greek Salad'
                    borderRadius='lg'
                    h={"200px"}/>
                <CardBody>
                  <Stack mt='4' spacing='4'>
                    <Heading size='md'>Greek Salad</Heading>
                    <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }}>
                    Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of tomatoes,
                    cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, and olive oil. 
                    </Text>
                    <Text color='orange.400' fontSize='2xl'>
                      $12.99
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <Link href='/notfound'>
                    <Button variant='ghost' color={"green.800"}
                    _hover={{
                      bg:"yellow.300"}}>
                      Order a Delivery
                      <Image w={"10%"} m={"4"}
                      src={Deliveryicon}
                      alt='Delivery Icon'
                      borderRadius='lg'
                     />
                    </Button>
                </Link>
                </CardFooter>
              </Card>
          </Box>

          <Box  borderRadius={"lg"}>
              <Card maxW='sm' background={"gray.100"} h={"full"}>
              <Image 
                    src={LemonDessert}
                    alt='Lemon Dessert'
                    borderRadius='lg'
                    h={"200px"}/>
                <CardBody>
                  <Stack mt='4' spacing='4'>
                    <Heading size='md'>Lemon Dessert</Heading>
                    <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }}>
                    Lemon desserts are a perfect way to enjoy 
                    the bright and tangy flavor of this citrus fruit in a sweet treat.
                    </Text>
                    <Text color='orange.400' fontSize='2xl'>
                      $5.00
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <Link href='/notfound'>
                    <Button variant='ghost' color={"green.800"}
                    _hover={{
                      bg:"yellow.300"}}>
                      Order a Delivery
                      <Image w={"10%"} m={"4"}
                      src={Deliveryicon}
                      alt='Delivery Icon'
                      borderRadius='lg'
                     />
                    </Button>
                </Link>
                </CardFooter>
              </Card>
          </Box>
      </SimpleGrid>
    </Container>
        
        </>
    )
}