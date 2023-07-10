import React from "react";
import "bulma/css/bulma.min.css";
import { Box, Block, Image } from "react-bulma-components";
import picture from "../assets/valueChristmas.jpg";
import snapLogo from "../assets/snapLogo.png";

function Slideshow() {
  return (
    <Box>
      <Block>This text is above the image</Block>
      <Block>
        <Image
          fallback="https://nosequemepasa.com/wp-content/themes/wishful-blog/wishfulthemes/assets/images/fallback-image-one.jpg"
          //src="https://wallpapercave.com/wp/tU89SSy.jpg"
          src={picture}
        />
      </Block>
      <Block>
        And this is below and it is where it should be even before the image is
        loaded
      </Block>
      <Block>
        <Image src={snapLogo} />
      </Block>
    </Box>
  );
}

export default Slideshow;
