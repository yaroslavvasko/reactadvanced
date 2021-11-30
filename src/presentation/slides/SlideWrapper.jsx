import React from "react";
import { Slide, Text, FlexBox, CodePane } from "spectacle";

import "./slidesStyles.css";

const SlideWrapper = ({
  title = "",
  demoComponent = null,
  code = "",
  emoji = "",
}) => {
  return (
    <Slide className="slide">
      <FlexBox
        height="100%"
        width="100%"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Text fontSize={36} margin="0px">
          {title}
        </Text>
        <FlexBox width="100%" flexDirection="row">
          {code ? (
            <FlexBox
              flexDirection="column"
              width="50%"
              alignItems="flex-start"
              className="codepenContainer"
            >
              {emoji ? (
                <FlexBox
                  flexDirection="row"
                  width="100%"
                  justifyContent="center"
                >
                  <Text fontSize={24} margin="0px">
                    {emoji}
                  </Text>
                </FlexBox>
              ) : (
                <></>
              )}

              <CodePane textSize={14} language="jsx">
                {code}
              </CodePane>
            </FlexBox>
          ) : (
            <></>
          )}

          {demoComponent ? (
            <FlexBox flexDirection="column" width="50%">
              {demoComponent}
            </FlexBox>
          ) : (
            <></>
          )}
        </FlexBox>
      </FlexBox>
    </Slide>
  );
};

export default SlideWrapper;
