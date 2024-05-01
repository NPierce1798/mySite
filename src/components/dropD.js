import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'


function DropD() {
  return (
    <div class="navbar__container" style={{
      alignContent:"center",
      justifyContent:"center"
    }}>
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button} style={{
            border:"solid 2px #7cc68d",
            backgroundColor:"transparent",
            color:"rgb(255,255,255)",
            margin:"10px auto 10px auto"
            }}>
            {isOpen ? 'Close Menu' : 'View Menu'}
          </MenuButton>
          <MenuList>
            <Link to="/"><MenuItem style={{color:"rgb(0,0,0)", fontWeight:"bold"}}>Home</MenuItem></Link>
            <Link to="/projects"><MenuItem style={{color:"rgb(0,0,0)", fontWeight:"bold"}}>Portfolio</MenuItem></Link>
          </MenuList>
        </>
      )}
    </Menu>
    </div>
    );
}

export default DropD;
