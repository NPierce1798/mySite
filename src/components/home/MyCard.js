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

function MyCard({img, title, content}) {
		  var screen = window.innerWidth
		  let s = null

		  if (screen <= 600) {
		    s = {margin:"auto auto 15px auto",backgroundColor: "rgb(235,235,235)",borderRadius: "10px"};
		  } else {
		    s = {margin:"auto auto 15px 15px",backgroundColor: "rgb(235,235,235)",borderRadius: "10px"};
		  }
    return (

      
      <div>
      	<Card maxW='sm' style={{
		  	backgroundColor: "rgb(235,235,235)",
		  	borderRadius: "10px"},s} className="Card">
		  <CardBody>
		    <Image
		      src={img}
		      alt='Green double couch with wooden legs'
		      borderRadius='lg'
		      htmlWidth="300px"
		      style={{margin:"auto"}}
		    />
		    <Stack mt='6' spacing='3'>
		      <Heading size='md'>{title}</Heading>
		      <Text>
		        {content}
		      </Text>
		    </Stack>
		  </CardBody>
		</Card>
      </div>

    );
  }
  
  export default MyCard;