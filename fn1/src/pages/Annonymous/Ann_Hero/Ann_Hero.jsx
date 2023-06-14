import React from 'react';
import Home_Carrousel from '../../../Components/Home_Carrousel/Home_Carrousel';
import './ann_hero.css';
import mainhomeimg from '../Ann_Hero/assets/mainhomeimg.png';
import { Button, Col, Row } from 'react-bootstrap';
import main_home_white from '../Ann_Hero/assets/main_home_white.png';



const Ann_Hero = () => {
  return (
    <div >
      <div className='main_home' style={{ backgroundImage: `url(${mainhomeimg})` }}>
       <span> <p className='main_home_p'>  <em className='main_home_text'> All the Services You Need  </em>  <em className='main_home_undertext'>Right at Your Fingertips </em> </p> </span>
       <Button className='main_home_button_register' variant="outline-primary" style={{color:"White",borderColor:"white",fontSize:"28px"}}>Register</Button>{' '}
       <Button className='main_home_button_login' variant="outline-primary" style={{color:"White",borderColor:"white",fontSize:"28px"}}>Login</Button>{' '}
      </div>

      <div style={{backgroundColor:"white",width:"1890px",height:"870px",padding:"0px"}}>
          <Row>
          <Col style={{padding:"8% 5%"}}> 
          <img src={main_home_white} alt="noth" />

          </Col>
          <Col style={{padding:"8% 5%"}}>
          <p> <em className='main_home_white_whatis' >what is </em> <em className='main_home_white_eventease'> eventease </em></p>
          <p> sadjhjsahjdh jhsajh jhjsahdjhsj hjhsajdhjh hasjhdj hjshajhd jhsjhajdhj hjhasjhdj hjshajdh jsahjdhjh jashjdhj
            sajdkjsakdjksa ksajk jkjask jdksja kjdskajk djksjakd jkajsk djsakj kjaslkjd lkajsslkjdklja 
            aksjdkjaskjkdjaksjdkjkas 
            sakjdksajkdjsadjhjsahjdh jhsajh jhjsahdjhsj hjhsajdhjh hasjhdj hjshajhd jhsjhajdhj hjhasjhdj hjshajdh jsahjdhjh jashjdhj
            sajdkjsakdjksa ksajk jkjask jdksja kjdskajk djksjakd jkajsk djsakj kjaslkjd lkajsslkjdklja 
            aksjdkjaskjkdjaksjdkjkas 
            sakjdksajkdjsadjhjsahjdh jhsajh jhjsahdjhsj hjhsajdhjh hasjhdj hjshajhd jhsjhajdhj hjhasjhdj hjshajdh jsahjdhjh jashjdhj
            sajdkjsakdjksa ksajk jkjask jdksja kjdskajk djksjakd jkajsk djsakj kjaslkjd lkajsslkjdklja 
            aksjdkjaskjkdjaksjdkjkas 
            sakjdksajkdj
          </p>
          </Col>
          </Row>
          
      </div>

      <div>
        <Home_Carrousel/>
      </div> 

      <div style={{backgroundColor:" #000f2e",width:"1890px",height:"870px",padding:"0px"}}>

      </div>

    </div>
  );
};

export default Ann_Hero;
