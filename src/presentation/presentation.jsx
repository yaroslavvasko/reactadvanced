import React from "react";
import { template, theme } from "./presentationConfig";
import ShowDemo from "../helpers/showDemo/showDemo";
import { Deck } from "spectacle";
import MainSlide from "./slides/main";
import SlideWrapper from "./slides/SlideWrapper";
import {
  RedundantInitBad,
  RedundantInitBadCode,
  RedundInitGood,
  RedundInitGoodCode,
} from "./slides/redundantInits/redundantInit";
import {
  LoopBad,
  LoopBadCode,
  NoLoop,
  NoLoopCode,
} from "./slides/infiniteLoop/infiniteLoop";
import {
  AnonymousCallback,
  AnonymousCallbackCode,
  StandardCallback,
  StandardCallbackCode,
  FunctionComponentCallback,
  FunctionCallbackCode,
} from "./slides/anonymousCallback/anonymousCallback";
import {
  GlobalStyleObject,
  GlobalStyleObjectCode,
  TemplateObject,
  TemplateObjectCode,
} from "./slides/templateObject/templateObject";

const Presentation = () => {
  return (
    <Deck transitionDuration={500} template={template} theme={theme}>
      <MainSlide />
      <SlideWrapper
        title="Redundant initializations"
        demoComponent={<RedundantInitBad />}
        code={RedundantInitBadCode}
        emoji="💩"
      />
      <SlideWrapper
        title="Redundant initializations"
        demoComponent={<RedundInitGood />}
        code={RedundInitGoodCode}
        emoji="🔥"
      />

      <SlideWrapper
        title="(Almost) Infinite loop"
        demoComponent={
          <ShowDemo>
            <LoopBad />
          </ShowDemo>
        }
        code={LoopBadCode}
        emoji="💩"
      />
      <SlideWrapper
        title="(Almost) Infinite loop"
        demoComponent={
          <ShowDemo>
            <NoLoop />
          </ShowDemo>
        }
        code={NoLoopCode}
        emoji="🔥"
      />

      <SlideWrapper
        title="Anonymous Callback"
        demoComponent={<AnonymousCallback />}
        code={AnonymousCallbackCode}
        emoji="💩"
      />
      <SlideWrapper
        title="Anonymous Callback"
        demoComponent={<StandardCallback />}
        code={StandardCallbackCode}
        emoji="🔥"
      />
      <SlideWrapper
        title="Anonymous Callback"
        demoComponent={<FunctionComponentCallback />}
        code={FunctionCallbackCode}
        emoji="🔥"
      />

      <SlideWrapper
        title="Template objects"
        demoComponent={<TemplateObject />}
        code={TemplateObjectCode}
        emoji="💩"
      />
      <SlideWrapper
        title="Template objects"
        demoComponent={<GlobalStyleObject />}
        code={GlobalStyleObjectCode}
        emoji="🔥"
      />
    </Deck>
  );
};

export default Presentation;