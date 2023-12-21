import { Flex, Heading, Spacer, Button, ButtonGroup, Box, Image, HStack, Container, Divider } from "@chakra-ui/react"
import logo from '../img/logo.png'
import { Link } from '@chakra-ui/react'
import './Navbar.css'


export default function Navbar() {
    return(
       <> <Container maxWidth={"full"} maxH={"200px"} centerContent mb={"10px"} mt={"10px"}>
        
        <Flex>
            
            <HStack>
            <Box>
            <Link href="/">
              <Image 
                    src={logo}
                    alt='logo'
                    h={{ base: "30px", md: "50px", lg: "100px" }}
                   />
                    </Link>
                    </Box>
            <Spacer w={"500px"}/>
           <Box>
            <ButtonGroup gap={"2"}>
            <Link href='/'><Button size='sm' variant='ghost' color={"green.800"} _hover={{
                bg:"yellow.300"}}>HOME</Button></Link>

            <Link href='/notfound'><Button size='sm' variant='ghost' color={"green.800"} _hover={{
                bg:"yellow.300"}}>ABOUT</Button></Link>

            <Link href='/notfound'><Button size='sm' variant='ghost' color={"green.800"} _hover={{
                bg:"yellow.300"}}>MENU</Button></Link>

            <Link href='/bookings'><Button size='sm' variant='ghost' color={"green.800"} _hover={{
                bg:"yellow.300"}}>RESERVATION</Button></Link>

            <Link href='/notfound'><Button size='sm' variant='ghost' color={"green.800"} _hover={{
                bg:"yellow.300"}}>ORDER ONLINE</Button></Link>

            <Link href='/notfound'><Button size='sm' variant='ghost' color={"green.800"} _hover={{
                bg:"yellow.300"}}>LOGIN</Button></Link>
            </ButtonGroup>
            </Box>
            </HStack>
            
        </Flex>
        <Divider orientation='horizontal' mt={2} />
        </Container>
        </>

    )
}