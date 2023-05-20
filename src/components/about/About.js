import React, { useEffect, useState } from 'react';
import styles from './About.module.scss';
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaLaravel, FaPhp, FaJava, FaPython, FaReact, FaNode } from 'react-icons/fa';

const skillIcons = {
    html: FaHtml5,
    css3: FaCss3Alt,
    js: FaJs,
    bootstrap: FaBootstrap,
    laravel: FaLaravel,
    php: FaPhp,
    java: FaJava,
    python: FaPython,
    react: FaReact,
    node: FaNode


};

export default function About() {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setShowIcons(true);
  }, []);

  return (
    <Box display='flex' flexDirection='column' alignItems='center' mt='3rem'>
      <div className={styles['card-container']}>
        {info.skills.name.map((name, index) => {
          const Icon = skillIcons[name];
          return (
            <div
              key={index}
              className={`${styles.card} ${showIcons ? styles['icon-fade-enter-active'] : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={styles['card-icon']}>
                <Icon style={{ fontSize: '9rem' }} />
              </div>
              <div className={styles['card-content']}>
                <h3 style={{ fontSize: '4rem' }}>{name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
