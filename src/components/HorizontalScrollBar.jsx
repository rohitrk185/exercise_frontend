import React, { useContext } from 'react'

import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography className='right-arrow' onClick={ () => scrollPrev() }>
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  )
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography>
      <img src={RightArrowIcon} alt="left-arrow"
        className='left-arrow'
        onClick={ () => scrollNext() } />
    </Typography>
  )
};


const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        { data.map((item) => (
          <Box 
            key={item.id || item} 
            itemId={item.id || item}     
            title={item.id || item} 
            m='0 40px'
          > 
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
          </Box>)) }
    </ScrollMenu>
  )
}

export default HorizontalScrollBar