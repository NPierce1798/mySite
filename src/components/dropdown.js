import { Link } from "react-router-dom";
import icon from '../images/menu-icon.png'
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { deepOrange } from "@mui/material/colors";

function Dropdown() {

    return (

      <div className="navbar__container" style={{
        height:'65px'
      }}>

        <div className="navbar__button-container" style={{
            margin:'auto'
            }}>
            <Accordion sx={{
                height:'40px',
                bgcolor:'transparent'
            }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{
                    fontWeight:'bold',
                    color:'white',
                    bgcolor:'#004d40',
                    border:'2px solid lightgreen',
                    borderRadius:'5px',
                    height:'5px'
                }}>
                    <h1 className="dropdown__logo"> &#123; PIERCE &#125;</h1>
                </AccordionSummary>
                <AccordionDetails sx={{
                    display:'flex',
                    flexDirection:'column',
                    margin:'auto',
                    bgcolor:'#263238',
                    borderRadius:'0px 0px 5px 5px',
                }}>
                    
                        <Link to='/' style={{
                            color:'white',
                            textDecoration:'none',
                            fontWeight:'bold',
                            margin:'5px'
                        }}
                        >HOME</Link>
                        <Link to='/projects' style={{
                            color:'white',
                            textDecoration:'none',
                            fontWeight:'bold',
                            margin:'5px'
                        }}>PORTFOLIO</Link>
                        <Link to='/resume' style={{
                            color:'white',
                            textDecoration:'none',
                            fontWeight:'bold',
                            margin:'5px'
                        }}>RESUM&#200;</Link>
                    
                </AccordionDetails>
            </Accordion>
        </div>
      </div>
    );
  }
  
  export default Dropdown;