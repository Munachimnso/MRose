import React ,{ useState } from 'react'; 
import logo from '../Asset/logo.png';
import { BsCart2 } from 'react-icons/bs'; // chart react icons
import { HiOutlineBars3 } from "react-icons/hi2"; // hold differen  react Icons
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Mynav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  

  // Menu options(moblie menu)
  // used  to render a menu/navigation bar, where each menu option is represented by an object(React component representing an icon, from the MUI libaray) in the array. 
  const menuOptions = [
    {
       text: "Home",
       icon: <HomeIcon/>,
       //An object representing a menu option with the text "Home" and an icon component <HomeIcon/>, we imported from MUI(@mui/material), show house styled icon
    },
    {
      text: "About",
      icon: <InfoIcon/>,
   },
   {
    text: "Testimonials",
    icon: <CommentRoundedIcon/>,
 },
 {
  text: "Contact",
  icon: <PhoneRoundedIcon/>,
},
{
  text: "Cart",
  icon: <ShoppingCartRoundedIcon/>,
},
  ];


  return (
    // Use nav tag to define a section of navigation link
    <nav> 
      <div className="nav-logo-container">
  
        <img src={logo} alt="">
        </img>
      </div>
      
      <div className="nav-links-container">
            {/* anchor tag(<a><a/>) used to create hyperlinks, to navigate to different pages within the same website */}
            <a href = ""> About </a>
        <a href = ""> Testimonials </a>
        <a href = ""> Contact </a>
        <a href = ""> 
         <BsCart2 className="nav--react-cart-icon"/>
         {/* BsCart2 is a react icon, used to display a shopping cart icon
           we installed and imported react-icons library previously to use BsCart2 */}
        </a>
        <button className="nav-button"> Book Now</button>
        
      

      </div>

      

      <div className="nav-menu-container">
       <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        {/* hiOutlineBars3 is the react model menu icon( three horizontal lines) 
             setOpenMenu(true) used to set the current state/value openMenu from false(<useState(false)>) to true.
        */}
         
      </div>

      <Drawer open = {openMenu} onClose = {() => setOpenMenu(false)} anchor = "right">
        <Box   sx={{ width: 250 }}
          role= "presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}> 
           <List> 
           {menuOptions.map((item) => (
            <ListItem key = {item.text} disablePadding> 
             <ListItemButton>
              <ListItemIcon> {item.icon}</ListItemIcon>
              <ListItemText primary  = {item.text}/> 
              
              </ListItemButton> 

           </ListItem>))}
          
           </List>
           
            
          
        </Box> 

       </Drawer>

    </nav>

  );
};

export default Mynav