import React from "react";

import { Slide, Heading, Text, FlexBox } from "spectacle";

const Main = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize={150} color="#00e7ff">
          React
        </Heading>
        <FlexBox width="100%" flexDirection="row">
          <FlexBox flexDirection="column" width="100%">
            <Text fontSize={60} backgroundColor="#ff9900">
              Code this 🔥
            </Text>
          </FlexBox>
          <FlexBox flexDirection="column" width="100%">
            <Text fontSize={60} backgroundColor="#fc6986">
              Not that 💩
            </Text>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
};

export default Main;
