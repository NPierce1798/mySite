import ai from '../../images/ai.jpeg'
import me from "../../images/me.jpg"
import { Link } from "react-router-dom";
import { 
	Card, 
	CardHeader, 
	CardBody, 
	CardFooter,
	Image,
	Stack,
	Heading,
	Text,
	Divider,
	ButtonGroup,
	Button } from '@chakra-ui/react'

function AboutCard() {
    return (

      
			<Card
			  direction={{ base: 'column', sm: 'row' }}
			  overflow='hidden'
			  variant='outline'
			  style={{
			  	margin:"25px",
			  	backgroundColor:"rgb(200,200,200)"}}
			>
			  <Image
			    objectFit='cover'
			    maxW={{ base: '100%', sm: '200px' }}
			    src={me}
			    alt='Caffe Latte'
			  />

			  <Stack>
			    <CardBody>
			      <Heading size='md'>About Me: Nicolas Pierce</Heading>

			      <Text py='2'>
			        <p style={{textIndent:"25px"}}>
			        I became interested in coding and started learning JavaScript 
			        in 2016, however I dove much deeper into it in 2022. Since then, 
			        I've taken time to learn Python, using it for machine learning 
			        applications, as well as for backend applications. Additionally I've 
			        spent time gathering a deeper understanding of JavaScript, HTML and CSS, 
			        and different frameworks based around them.
			        </p>
			      </Text>
			    </CardBody>
			        <CardFooter>
			        	<Link to="https://www.justask.codes/" target="_blank" style={{margin:"auto"}}>
						      <Button variant='solid' colorScheme='blue' style={{margin:"auto"}}>
						        My Company
						      </Button>
					      </Link>
					    </CardFooter>
			  </Stack>
			</Card>

    );
  }
  
  export default AboutCard;