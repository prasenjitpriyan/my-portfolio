import React from "react";

type TextProps = {
  title: string;
};

const Text: React.FC<TextProps> = ({ title }) => {
  return (
    <div className="relative h-[10svh] w-[100svw] text-first-900 bg-second-400">
      <div className="bg-transparent h-full w-full absolute z-10">
        <h1 className="font-bold text-2xl flex flex-col justify-center items-center max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto text-first-900 @apply absolute -translate-x-2/4 -translate-y-2/4 whitespace-nowrap left-2/4 top-2/4 gap-2">
          .../{title}...
        </h1>
      </div>
    </div>
  );
};

export default Text;
