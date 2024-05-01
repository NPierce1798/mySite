import im from "../../images/justask-shot.png"
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

function ProjectCard({img, title, content, url}) {

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
          src={img}
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{title}</Heading>

            <Text py='2'>
              {content}
            </Text>
          </CardBody>

          <CardFooter>
            <Link to={url} target="_blank" rel="noreferrer noopener"><Button variant='solid' colorScheme='blue'>
              Visit Site
            </Button></Link>
          </CardFooter>
        </Stack>
      </Card>

    );
  }
  
  export default ProjectCard;