import { Card, Heading, CardHeader, Button, CardBody, SimpleGrid, Box,
    Container, CardFooter, Divider, Image, HStack, Stack, Text, VStack, IconButton } from "@chakra-ui/react"
import Facebook from '../img/facebook.svg'
import Instagram from '../img/instagram.svg'
import Reddit from '../img/reddit.svg'
import { Link } from '@chakra-ui/react'
import logofooter from "../img/logo2.png"
import { TriangleDownIcon, PhoneIcon, EmailIcon } from '@chakra-ui/icons'



export default function Footer() {
    return(
        <><Container  bg={"#495E57"} maxWidth={"fit"} mt={"120px"} maxH={"550px"} centerContent>
           <SimpleGrid spacing={1} templateColumns='repeat(auto-fill, minmax(300px, 1fr))' maxW={"50%"} m={"20px"}>
           
           <Box >
              <Stack h={"fit-content"} w={"fit-content"}>
              <Link href="/"  >
              <Image 
                    src={logofooter}
                    alt='logo'
                    h={{ base: "70px", md: "150px", lg: "150px" }}/>
                    </Link>
              </Stack>
          </Box> 
          

          <Box  >
                  <Stack spacing='4'>
                    <Heading fontSize={{ base: "9px", md: "15px", lg: "15px" }} color={"white"}>SITEMAP</Heading>

                    <Link href='/' color={"white"} h={"fit-content"} w={"fit-content"} _hover={{ color: "#F4CE14"}}>
                      <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }} mr={2} ml={1}>Home</Text></Link>
                      
                    <Link href='/notfound' color={"white"} h={"fit-content"} w={"fit-content"} _hover={{ color: "#F4CE14"}}>
                      <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }} mr={2} ml={1}>About</Text></Link>

                    <Link href='/notfound' color={"white"} h={"fit-content"} w={"fit-content"} _hover={{ color: "#F4CE14"}}>
                      <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }} mr={2} ml={1}>Menu</Text></Link>

                    <Link href='/bookings' color={"white"} h={"fit-content"} w={"fit-content"} _hover={{ color: "#F4CE14"}}>
                      <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }} mr={2} ml={1}>Reservations</Text></Link>

                    <Link href='/notfound' color={"white"} h={"fit-content"} w={"fit-content"} _hover={{ color: "#F4CE14"}}>
                      <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }} mr={2} ml={1}>Online Order</Text></Link>

                    <Link href='/notfound' color={"white"}  h={"fit-content"} w={"fit-content"} _hover={{ color: "#F4CE14"}}>
                      <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }} mr={2} ml={1}>Login</Text></Link>
                  </Stack>
          </Box>

          <Box>

                  <Stack mt='4' spacing='4' >
                    <Heading fontSize={{ base: "10px", md: "15px", lg: "15px" }} color={"white"}>CONTACT US</Heading>

                    <Link href='/notfound'color={"white"} h={"fit-content"} w={"fit-content"} _hover={{ color: "#F4CE14"}}>
                    <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }} mr={2} ml={1}><TriangleDownIcon color={"white"} mr={2} ml={1}/>678 Pisa Ave, Chicago, IL 60611</Text>
                    </Link>

                    <Link href='/notfound'color={"white"} h={"fit-content"} w={"fit-content"} _hover={{ color: "#F4CE14"}}>
                    <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }} mr={2} ml={1}><PhoneIcon color={"white"} mr={2} ml={1}/>(312) 503-9900</Text>
                    </Link>

                    <Link href='/notfound'color={"white"} h={"fit-content"} w={"fit-content"} _hover={{ color: "#F4CE14"}}>
                    <Text fontSize={{ base: "10px", md: "15px", lg: "15px" }} mr={2} ml={1}><EmailIcon color={"white"} mr={2} ml={1} />customer.sup@littlelemon.com</Text>
                    </Link>
                    
                  </Stack>
          </Box>

          <Box  >
                  <Stack mt='4' spacing='4'>
                  <Heading fontSize={{ base: "10px", md: "15px", lg: "15px" }} color={"white"}>Social Media</Heading>

                  <HStack>
                 <Link href="/notfound"  h={"fit-content"} w={"fit-content"}>
                  <Image 
                    src={Facebook}
                    borderRadius={"50"}
                    alt='Facebook logo'
                    h={{ base: "25px", md: "25px", lg: "30px" }}
                    _hover={{
                      bg:"#F4CE14"}}/></Link>

                  <Link href="/notfound"  h={"fit-content"} w={"fit-content"}>
                  <Image 
                    src={Instagram}
                    borderRadius={"50"}
                    alt='Instagram logo'
                    h={{ base: "25px", md: "25px", lg: "30px" }}
                    _hover={{
                      bg:"#F4CE14"}}/></Link>

                  <Link href="/notfound"  h={"fit-content"} w={"fit-content"}>
                  <Image 
                    src={Reddit}
                    borderRadius={"50"}
                    alt='Reddit logo'
                    h={{ base: "25px", md: "25px", lg: "30px" }}
                    _hover={{
                      bg:"#F4CE14"}}/></Link>
                  </HStack>
                  </Stack>
          </Box>
            </SimpleGrid>
        </Container></>
    )
}