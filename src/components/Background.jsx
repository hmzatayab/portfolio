import React, { memo } from "react";

export const Background = memo(
  ({
    color1 = "rgba(147, 51, 234, 0.15)",
    color2 = "rgba(59, 130, 246, 0.15)",
    className = "",
  }) => {
    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      >
        <div
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
          style={{
            background: `radial-gradient(circle, ${color1} 0%, rgba(0,0,0,0) 70%)`,
            transform: "translate3d(0,0,0)",
          }}
        />

        <div
          className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
          style={{
            background: `radial-gradient(circle, ${color2} 0%, rgba(0,0,0,0) 70%)`,
            transform: "translate3d(0,0,0)",
          }}
        />

        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
    );
  }
);
