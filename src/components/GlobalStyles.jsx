import { memo } from "react";

// export const GlobalStyles = memo(() => (
//   <style>{`
//       @keyframes float-slow {
//         0%, 100% { transform: translateY(0px); }
//         50% { transform: translateY(-20px); }
//       }
//       @keyframes float-medium {
//         0%, 100% { transform: translateY(0px) rotate(0deg); }
//         50% { transform: translateY(-15px) rotate(5deg); }
//       }
//       @keyframes float-fast {
//         0%, 100% { transform: translateY(0px) scale(1); }
//         50% { transform: translateY(-10px) scale(1.05); }
//       }
//       @keyframes pulse-glow {
//         0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.2); }
//         50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.5); }
//       }
//       @keyframes scroll-infinite {
//         0% { transform: translateX(0); }
//         100% { transform: translateX(-100%); }
//       }
//       .animate-float-slow { animation: float-slow 6s ease-in-out infinite; will-change: transform; }
//       .animate-float-medium { animation: float-medium 5s ease-in-out infinite; will-change: transform; }
//       .animate-float-fast { animation: float-fast 4s ease-in-out infinite; will-change: transform; }
//       .animate-pulse-glow { animation: pulse-glow 3s infinite; }
//       .animate-scroll-infinite { animation: scroll-infinite 30s linear infinite; will-change: transform; }

//       .pc-card-wrapper {
//       --hover-brightness: 1.2;
//       perspective: 1000px;
//       transform-style: preserve-3d;
//       will-change: transform;
//     }
//     .pc-card-shell {
//       position: relative;
//       width: 100%;
//       height: 100%;
//       border-radius: 20px;
//       transform-style: preserve-3d;
//       transition: transform 0.1s ease-out;
//       transform: rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg));
//     }
//     .pc-card {
//       position: relative;
//       width: 100%;
//       height: 100%;
//       border-radius: 20px;
//       background: rgba(255, 255, 255, 0.03);
//       backdrop-filter: blur(20px);
//       border: 1px solid rgba(255, 255, 255, 0.1);
//       overflow: hidden;
//       transform-style: preserve-3d;
//     }
//     .pc-glare {
//       position: absolute;
//       top: 0; left: 0; right: 0; bottom: 0;
//       background: radial-gradient(farthest-corner at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%);
//       opacity: var(--pointer-from-center, 0);
//       mix-blend-mode: overlay;
//       pointer-events: none;
//     }
//     `}</style>
// ));



export const GlobalStyles = memo(() => (
  <style>{`
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes float-medium {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
    }
    @keyframes float-fast {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-10px) scale(1.05); }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.2); }
      50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.5); }
    }
    @keyframes scroll-infinite {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    @keyframes scroll-infinite-reverse {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(0); }
    }
    @keyframes spin-slow {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .scrollbar-hide {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    .animate-float-slow { animation: float-slow 6s ease-in-out infinite; will-change: transform; }
    .animate-float-medium { animation: float-medium 5s ease-in-out infinite; will-change: transform; }
    .animate-float-fast { animation: float-fast 4s ease-in-out infinite; will-change: transform; }
    .animate-pulse-glow { animation: pulse-glow 3s infinite; }
    .animate-scroll-infinite { animation: scroll-infinite 30s linear infinite; will-change: transform; }
    .animate-scroll-infinite-reverse { animation: scroll-infinite-reverse 35s linear infinite; will-change: transform; }
    .animate-spin-slow { animation: spin-slow 20s linear infinite; }

    /* PROFILE CARD SPECIFIC STYLES (Inline implementation of provided CSS logic) */
    .pc-card-wrapper {
      --hover-brightness: 1.2;
      perspective: 1000px;
      transform-style: preserve-3d;
      will-change: transform;
    }
    .pc-card-shell {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      transform-style: preserve-3d;
      transition: transform 0.1s ease-out;
      transform: rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg));
    }
    .pc-card {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      overflow: hidden;
      transform-style: preserve-3d;
    }
    .pc-glare {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(farthest-corner at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%);
      opacity: var(--pointer-from-center, 0);
      mix-blend-mode: overlay;
      pointer-events: none;
    }
  `}</style>
));