// import React from "react";
// import "bulma/css/bulma.min.css";
// import { Box, Block, Image } from "react-bulma-components";
// import picture from "../../public/valueChristmas.jpg";
// import snapLogo from "../../public/snapLogo.png";

// function Slideshow() {
//   return (
//     <Box>
//       <Block>This text is above the image</Block>
//       <Block>
//         <Image
//           fallback="https://nosequemepasa.com/wp-content/themes/wishful-blog/wishfulthemes/assets/images/fallback-image-one.jpg"
//           //src="https://wallpapercave.com/wp/tU89SSy.jpg"
//           src={picture}
//         />
//       </Block>
//       <Block>
//         And this is below and it is where it should be even before the image is
//         loaded
//       </Block>
//       <Block>
//         <Image src={snapLogo} />
//       </Block>
//     </Box>
//   );
// }

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  return ( 
    <Carousel>
      <div class='container'>
        <div>
          <img src="https://placehold.co/100x100" alt='placeholder '/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://placehold.co/200x200" alt='placeholder  2'/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://placehold.co/300x300" alt='placeholder  3' />
          <p className="legend">Legend 3</p>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselPage;