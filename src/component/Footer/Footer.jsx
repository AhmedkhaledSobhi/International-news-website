import React from 'react';

import './footer.css'

import { useTranslation } from 'react-i18next';
import {useSelector} from 'react-redux'

export default function Footer() {
  const light =useSelector((state)=>state.light)
  const [t,i18n]=useTranslation();
  return (
    <>
      <footer style={{backgroundColor:`${light==true?"transparent ":""}`}} className='fixed-bttom text-center pt-3  pb-2 text-white-50'>
        <h6 style={{color:`${light==true?"white":""}`}}>{t('Copyright © 2023 All rights reserved 🧡')} </h6>
        <h6 style={{color:`${light==true?"white":""}`}}> {t('Source Ahmed-Khaled')}</h6>
      </footer>
    </>
   
  );
}


