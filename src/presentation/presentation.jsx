import React from "react";
import { template, theme } from "./presentationConfig";
import { Deck, FlexBox, Image, Slide, Link } from "spectacle";
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
import {
  BadKeyIndex,
  BadKeyIndexCode,
  GoodKeyId,
  GoodKeyIndexCode,
} from "./slides/keyIndex/keyIndex";
import {
  AsyncUseEffectBad,
  AsyncUseEffectBadCode,
  AsyncUseEffectGood,
  AsyncUseEffectGoodCode,
} from "./slides/asyncUseEffect/asyncUseEffect";
import {
  CounterDrill,
  CounterDrillCode,
  CounterDrillGood,
  CounterDrillGoodCode,
  CounterSeparated,
  CounterSeparatedCode,
} from "./slides/renderDrill/renderDrill";

import reactMeme from "../img/reactjsmeme.jpg";
import renderMeme from "../img/rendermeme.jpg";
import thanksmeme from "../img/thanksmeme.jpg";

const Presentation = () => {
  return (
    <Deck transitionDuration={500} template={template} theme={theme}>
      <MainSlide />
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Image src={reactMeme} width="30vw" />
        </FlexBox>
      </Slide>
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
        title="Infinite loop"
        demoComponent={<LoopBad />}
        code={LoopBadCode}
        emoji="💩"
      />
      <SlideWrapper
        title="Infinite loop"
        demoComponent={<NoLoop />}
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
        title="Object initialization in render"
        demoComponent={<TemplateObject />}
        code={TemplateObjectCode}
        emoji="💩"
      />
      <SlideWrapper
        title="Object initialization in render"
        demoComponent={<GlobalStyleObject />}
        code={GlobalStyleObjectCode}
        emoji="🔥"
      />
      <SlideWrapper
        title="Index as key"
        demoComponent={<BadKeyIndex />}
        code={BadKeyIndexCode}
        emoji="💩"
      />
      <SlideWrapper
        title="Index as key"
        demoComponent={<GoodKeyId />}
        code={GoodKeyIndexCode}
        emoji="🔥"
      />
      <SlideWrapper
        title="Async in useEffect"
        demoComponent={<AsyncUseEffectBad />}
        code={AsyncUseEffectBadCode}
        emoji="💩"
      />
      <SlideWrapper
        title="Async in useEffect"
        demoComponent={<AsyncUseEffectGood />}
        code={AsyncUseEffectGoodCode}
        emoji="🔥"
      />
      <SlideWrapper
        title="Render Drilling"
        demoComponent={<CounterDrill />}
        code={CounterDrillCode}
        emoji="💩"
      />
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Image src={renderMeme} width="30vw" />
        </FlexBox>
      </Slide>
      <SlideWrapper
        title="Render Drilling"
        demoComponent={<CounterDrillGood />}
        code={CounterDrillGoodCode}
        emoji="🔥"
      />
      <SlideWrapper
        title="Splitting Components"
        demoComponent={<CounterSeparated />}
        code={CounterSeparatedCode}
        emoji="🔥"
      />
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Image src={thanksmeme} width="30vw" />
          <Link
            fontSize={32}
            href="https://github.com/yaroslavvasko/reactadvanced"
          >
            github.com/yaroslavvasko/reactadvanced
          </Link>
        </FlexBox>
      </Slide>
    </Deck>
  );
};

export default Presentation;
