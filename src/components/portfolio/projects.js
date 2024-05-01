import { 
  Card,
  CardHeader, 
  CardBody, 
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Project1() {

    return (

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>JustAsk Technologies</Heading>

            <Text py='2'>
              A question answering app helping the working force. 
              Ask our Ai questions about building codes, recieve 
              straight forward answers. Now a software development firm.
            </Text>
          </CardBody>

          <CardFooter>
            <Link href="https://justask.codes" target="_blank" rel="noreferrer noopener"><Button variant='solid' colorScheme='blue'>
              Visit Site
            </Button></Link>
          </CardFooter>
        </Stack>
      </Card>

    );
  }
  
  export default Project1;