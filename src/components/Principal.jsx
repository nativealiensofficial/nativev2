import {
  DFlex, NavContent, DescriptionOpensea,
  BackgroundContainer, LogoNative, ContainerPrincipal,
  ListMenu, ContainerSocial, ListContainer
} from './components';
import NativeLogo from '../assets/nativelogo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import Alien1 from '../assets/alien1.webp';
import Alien2 from '../assets/alien2.webp';
import Alien3 from '../assets/alien3.webp';
import Planeta1 from '../assets/borja_01.webp';
import { motion } from "framer-motion";
import ButtonOpensea from './Button/ButtonOpensea';

export default function Principal({ scrollToBottom, about, nativeNave, time, faq }) {
  
  const styles = {
    social: { fontSize: 40, color: 'white' }
  }
  
  return (
    <BackgroundContainer imgUrl={Planeta1}>
      <DFlex>
        <LogoNative src={NativeLogo} alt="Native Aliens" />
          <ListContainer>
            <ListMenu><NavContent onClick={e => scrollToBottom(about)} >ABOUT</NavContent></ListMenu>
            <ListMenu><NavContent onClick={e => scrollToBottom(nativeNave)}>NAVE </NavContent></ListMenu>
            <ListMenu><NavContent onClick={e => scrollToBottom(time)}>TEAM</NavContent></ListMenu>
            <ListMenu><NavContent onClick={e => scrollToBottom(faq)}>FAQ</NavContent></ListMenu>
          </ListContainer>
          <ContainerSocial>
            <li><Button><a target="_blank" rel="noreferrer" href='https://www.instagram.com/nativealiensofficial/?r=nametag'><InstagramIcon sx={styles.social} /></a></Button></li>
            <li><Button><a target="_blank" rel="noreferrer" href='https://twitter.com/AliensNative'><TwitterIcon sx={styles.social} /></a></Button></li>
          </ContainerSocial>
      </DFlex>
      <DFlex>
        <div style={{ width: '73%', marginLeft: '-3%' }}>
          <motion.img
            initial={{ x: -850, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              x: { duration: 2 },
              default: { ease: "linear" }
            }}
            src={Alien2} style={{ width: '50%', marginRight: '-10%' }}
          />

          <motion.img
            initial={{ x: -950, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              x: { duration: 1.3 },
              default: { ease: "linear" }
            }}
            src={Alien3} style={{ width: '30%', marginRight: '-5%' }} />

          <motion.img
            initial={{ x: -950, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              x: { duration: 1 },
              default: { ease: "linear" }
            }}
            src={Alien1} style={{ width: '20%', marginLeft: '-2.7%' }} />
        </div>
        <ContainerPrincipal>
          <DescriptionOpensea>NATIVE ALIENS NFT COLLECTION</DescriptionOpensea>
          <ButtonOpensea>
            <a target="_blank" rel="noreferrer" href='https://opensea.io/collection/nativealiens'>
              view on Opensea
            </a>
          </ButtonOpensea>
        </ContainerPrincipal>
      </DFlex>
    </BackgroundContainer>
  )
}