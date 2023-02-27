import React from 'react'
import '../style/styleSheet.css'

import { about_us, delco_light, ed_pp, th_ed, vdc } from 'assets'
//import { delco_light} from 'assets'
import { Box, Typography } from '@pankod/refine-mui'

const About_us = () => {
  return (
    <div className="abus_flex_parent abus_bg">
      <Box className="abus_flex_item">
        <Typography className='abus_grid_content' fontSize={25} fontWeight={700}>
          About Us:<br></br>
        </Typography>
        <Typography fontSize={18} fontWeight={400}>
          Dean Crawford is a two time laureate of the most innovative and efficient energy solution’s award<br></br>
          from The Solar Impulse Foundation and Ambassador to the Made in Wallonia.be label. He is a visionary and inventor of The Planet Plug.<br></br>
          <br></br>Two-time Honor graduate from the College of the Air Force.<br></br>
          <br></br>He has a professional career stretching back to 1980 in the telecommunication industry, an industry powered by 48V.<br></br>
          He produced the first know positive business case to solarize the thousands of remote telecommunication (BTS) sites in sub-Saharan Africa in 2004.<br></br>
          He was born and raised in North Carolina where he later recalled that their first telephone was powered by 48V from the telephone exchange found more 
          than 30 miles away.<br></br>
          <br></br>He predicted in 2014 than 50% of the household appliances in sub-Saharan Africa would be directly powered by solar panels and direct-current by 2035...
          ~15% already are as of 2023.
        </Typography>
      </Box>
      <div className="abus_flexgrid_parent">
        <Box className="abus_flexgrid_item">
          <div className="abus_flexgrid_content">
            <img src={delco_light} alt=""></img>
            <p>Our inspiration</p>
          </div>
        </Box>
        <Box className="abus_flexgrid_item">
          <div className="abus_flexgrid_content">
            <img src={vdc} alt=""></img>
            <p>Our heritage</p>
          </div>
        </Box>
        <Box className="abus_flexgrid_item">
          <div className="abus_flexgrid_content">
            <img src="" alt=""/>
            <p>Our destiny</p>
          </div>
        </Box>
      </div>           
    </div>
  )
}

export default About_us