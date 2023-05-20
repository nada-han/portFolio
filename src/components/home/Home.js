import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/pic2.jpg';
import classNames from 'classnames';
import Typical from 'react-typical';
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box>
            <h1>Bonjour, je suis <span><Typical steps={[`${info.firstName} ${info.lastName}`, 1000]} loop={Infinity} wrapper="span" /></span></h1>
            <Typical steps={[info.position, 1000]} loop={Infinity} wrapper="h2" />
            <br />
            <h3><span>{info.miniBio}</span></h3><br /><br />

            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}> <p>Contactez-moi via linkedin: </p>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}