import im from "../../images/bravo-shot.png"
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

function Project2() {

      
    return (
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        style={{
          margin:"10px"
        }}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={im}
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>Bravo Burrito</Heading>

            <Text py='2'>
              Lead the work to create a fully custom website for a 
              Tex-Mex Resturaunt. Created components or sections using 
              Shopify's Liquid, working with the client and a small team 
              of engineers and designers.
            </Text>
          </CardBody>

          <CardFooter>
            <Link to="https://thebravoburrito.com/" target="_blank" rel="noreferrer noopener"><Button variant='solid' colorScheme='blue'>
              Visit Site
            </Button></Link>
          </CardFooter>
        </Stack>
      </Card>
      );
    }
    
    export default Project2;