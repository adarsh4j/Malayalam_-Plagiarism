import { Link} from 'react-router-dom';
import { useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material'; 
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import style from '../../pages/landing/landing.module.css'
import plag from'../../assets/img.png'
import logo1 from "../../assets/landingicon.png";


const LandingPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)'); 

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      {[
        { text: "Why", link: "#Why" },
        { text: "About", link: "#About" },
        { text: "Contact", link: "#contact" },
        { text: "Login", link: "/signin" },
      ].map((item, index) => (
        <ListItem button key={index}>
          {item.link.startsWith('#') ? (
            <a href={item.link} className={style.drawerLink}>
              <ListItemText primary={item.text} />
            </a>
          ) : (
            <Link to={item.link} className={style.drawerLink}>
              <ListItemText primary={item.text} />
            </Link>
          )}
        </ListItem>
      ))}
    </List>
  </Box>
  );
  return (
    <div>
      <AppBar sx={{backgroundColor:'white',color:'grey',position:'sticky',top: 0,}} className={style.header}>
        <Toolbar>
          <div className={style.icon}>
            <a
              href="https://icfoss.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo1} alt="ICFOSS" />
            </a>
          </div>

          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <nav className={style.nav}>
              <a href="#Why">Why</a>
              <a href="#About">About</a>
              <a href="#contact">Contact</a>
              <Link to="/signin">Login</Link>
            </nav>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>

      <section className={style.second}>
        <h1>Malayalam Plagiarism Checker</h1>
        <div className={style.pic}><img src={plag} alt="Error in loading" /></div>
        <p><b>Streamline your content integrity with our cutting-edge Malayalam
              plagiarism checker, ensuring originality and credibility
              effortlessly..</b></p>
        <a href="#Why" className={style.MoreButton}>Learn More</a>
      </section>

      <section id="Why" className={style.about}>
        
      <h2>Why Malayalam Plagiarism Checker?</h2>
      <div className={style.card}>
      <div className={style.card1}>
        <h3>Why Choose?</h3>
                <p>Keeping content original is important for honest writing.Malayalam plagiarism checkers help ensure that what you write is unique and trustworthy,making it easier to create content with integrity.
                
                </p>
          </div>
       <div className={style.card1}>
        <h3>Rewritting more delightful</h3>
                <p> Rewriting offers methods to enhance the brilliance of your writing while presenting fresh iterations 
                      for your consideration.
                </p>
          </div>
          <div className={style.card1}>
        <h3>Overall Review</h3>
                <p> An effective review assesses the document's originality, highlights key areas for improvement, and provides context beyond just percentages.
                </p>
          </div>
          <div className={style.card1}>
        <h3>Professional writing</h3>
                <p> Writers, bloggers, and content creators use this to ensure originality and avoid legal or ethical issues with copied content.
                </p>
          </div>
      </div>
      </section>

      <section id="About" className={style.services}>
        <h2>About Us</h2>
        
        <div className={style.servicecontainer}>
          <div className={style.iframe}>
        <iframe 
        src="https://www.youtube.com/embed/myQ-BfJ0rkk?rel=0&controls=0" 
        title="About ICFOSS"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
      </div>
            <p> International Centre for Free and Open Source Software
                (<span className={style.icfoss}>FOSS</span>) is an autonomous organization set up by the
                  Government of Kerala, India and having the combined mandate of
                  popularizing Free and Open Source Software for universal use.</p>
                  <div className={style.buttonContainer}>
                  <button className={style.button}>
                      <a href="https://icfoss.in" target="_blank" rel="noopener noreferrer">
    More about us
  </a>
  </button></div>
          </div>  
      </section>

      <section id="contact" className={style.contactInfo}>
  <div className={style.contactItem}>
    <h3>Call Us</h3>
    <p>+91 471-2413012, +91-9400225962</p>
  </div>
  <div className={style.contactItem}>
    <h3>Opening Hours</h3>
    <div>
      <strong>Mon-Sat:</strong> 9:30 AM - 5:30 PM<br />
      (Except government holidays)
    </div>
  </div>
  <div className={style.contactItem}>
    <h3>Email Us</h3>
    
<p><button className={style.contactbutton}><a href="mailto:info@icfoss.in">Send email</a></button></p>
  </div>
  <div className={style.contactItem}>
    <h3>Our Address</h3>
    <p>
      International Centre for Free and Open Source Software (ICFOSS),<br />
      Karyavattom, Thiruvananthapuram, Kerala 695581
    </p>
 

    <div className={style.bottom}>
      <button className={style.contactbutton}>
  <a href="https://www.linkedin.com/company/icfoss-in/" target="_blank" rel="noopener noreferrer">
    Get in Touch
  </a>
  </button>
  </div>
 
</div>
      </section>
      
    </div>
  );
};

export default LandingPage