"use client";

export default function SketchedButton() {
  return (
    <div
      style={{
        width: "fit-content",
        backgroundColor: "#000",
      }}
    >
      <a
        href="#"
        className="btn-wrapper"
        style={{
          "--dot-size": "8px",
          "--line-weight": "1px",
          "--line-distance": "0.8rem 1rem",
          "--animation-speed": "0.35s",
          "--dot-color": "#fffa",
          "--line-color": "#fffa",
          "--grid-color": "#fff3",
          position: "relative",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
          height: "auto",
          padding: "var(--line-distance)",
          backgroundColor: "transparent",
          userSelect: "none",
        }}
      >
        {/* TOP / RIGHT / BOTTOM / LEFT LINES */}
        <div className="line horizontal top"></div>
        <div className="line vertical right"></div>
        <div className="line horizontal bottom"></div>
        <div className="line vertical left"></div>

        {/* DOTS */}
        <div className="dot top left"></div>
        <div className="dot top right"></div>
        <div className="dot bottom right"></div>
        <div className="dot bottom left"></div>

        {/* BUTTON */}
        <button className="btn">
          <span className="btn-text">Start Creating</span>

          <svg
            className="btn-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.6744 11.4075L15.7691 17.1233C15.7072 17.309 15.5586 17.4529 15.3709 17.5087L3.69348 20.9803C3.22819 21.1186 2.79978 20.676 2.95328 20.2155L6.74467 8.84131C6.79981 8.67588 6.92419 8.54263 7.08543 8.47624L12.472 6.25822C12.696 6.166 12.9535 6.21749 13.1248 6.38876L17.5294 10.7935C17.6901 10.9542 17.7463 11.1919 17.6744 11.4075Z"></path>
            <path d="M3.2959 20.6016L9.65986 14.2376"></path>
            <path d="M17.7917 11.0557L20.6202 8.22724C21.4012 7.44619 21.4012 6.17986 20.6202 5.39881L18.4989 3.27749C17.7178 2.49645 16.4515 2.49645 15.6704 3.27749L12.842 6.10592"></path>
            <path d="M11.7814 12.1163C11.1956 11.5305 10.2458 11.5305 9.66004 12.1163C9.07426 12.7021 9.07426 13.6519 9.66004 14.2376C10.2458 14.8234 11.1956 14.8234 11.7814 14.2376C12.3671 13.6519 12.3671 12.7021 11.7814 12.1163Z"></path>
          </svg>
        </button>

        {/* SCOPED CSS */}
        <style jsx>{`
          .btn-wrapper::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            pointer-events: none;
            background-image: repeating-linear-gradient(
              45deg,
              var(--grid-color) 0 1px,
              transparent 2px 5px
            );
            opacity: 0;
            z-index: -1;
          }

          .btn-wrapper:has(.btn:hover)::after {
            animation: opacity-anim calc(var(--animation-speed) * 4)
              ease-in-out forwards;
          }

          @keyframes opacity-anim {
            80% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .btn {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.8rem 1.25rem;
            background: transparent;
            border: 1px solid var(--grid-color);
            color: #fffd;
            font-family: "Inter", sans-serif;
            letter-spacing: -0.01em;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.2s ease-in-out;
          }

          .btn:hover {
            background-color: #25358b;
            color: white;
            transform: scale(1.05);
            letter-spacing: 0.06em;
          }

          .btn:active {
            transform: scale(0.98);
          }

          .btn-svg {
            margin-left: 0.5rem;
            height: 24px;
            stroke: #fff4;
            fill: #fff2;
            transition: 0.2s ease-in-out;
          }

          .btn:hover .btn-svg {
            stroke: #fffa;
            fill: #fff3;
          }

          /* DOTS */
          .dot {
            position: absolute;
            width: var(--dot-size);
            aspect-ratio: 1;
            border-radius: 2px;
            background-color: var(--dot-color);
            opacity: 0;
          }

          /* TOP LEFT DOT */
          .btn-wrapper:has(.btn:hover) .dot.top.left {
            top: 50%;
            left: 20%;
            animation: move-top-left var(--animation-speed)
              ease-in-out forwards;
          }

          @keyframes move-top-left {
            90% {
              opacity: 0.6;
            }
            100% {
              top: calc(var(--dot-size) * -0.5);
              left: calc(var(--dot-size) * -0.5);
              opacity: 1;
            }
          }

          /* TOP RIGHT DOT */
          .btn-wrapper:has(.btn:hover) .dot.top.right {
            top: 50%;
            right: 20%;
            animation: move-top-right var(--animation-speed)
              ease-in-out forwards;
            animation-delay: calc(var(--animation-speed) * 0.6);
          }

          @keyframes move-top-right {
            80% {
              opacity: 0.6;
            }
            100% {
              top: calc(var(--dot-size) * -0.5);
              right: calc(var(--dot-size) * -0.5);
              opacity: 1;
            }
          }

          /* BOTTOM RIGHT DOT */
          .btn-wrapper:has(.btn:hover) .dot.bottom.right {
            bottom: 50%;
            right: 20%;
            animation: move-bottom-right var(--animation-speed)
              ease-in-out forwards;
            animation-delay: calc(var(--animation-speed) * 1.2);
          }

          @keyframes move-bottom-right {
            80% {
              opacity: 0.6;
            }
            100% {
              bottom: calc(var(--dot-size) * -0.5);
              right: calc(var(--dot-size) * -0.5);
              opacity: 1;
            }
          }

          /* BOTTOM LEFT DOT */
          .btn-wrapper:has(.btn:hover) .dot.bottom.left {
            bottom: 50%;
            left: 20%;
            animation: move-bottom-left var(--animation-speed)
              ease-in-out forwards;
            animation-delay: calc(var(--animation-speed) * 1.8);
          }

          @keyframes move-bottom-left {
            80% {
              opacity: 0.6;
            }
            100% {
              bottom: calc(var(--dot-size) * -0.5);
              left: calc(var(--dot-size) * -0.5);
              opacity: 1;
            }
          }

          /* LINES */
          .line {
            position: absolute;
          }

          .horizontal {
            height: var(--line-weight);
            width: 100%;
            background-image: repeating-linear-gradient(
              90deg,
              transparent 0 calc(var(--line-weight) * 2),
              var(--line-color) calc(var(--line-weight) * 2)
                calc(var(--line-weight) * 4)
            );
          }

          .top {
            top: calc(var(--line-weight) * -0.5);
            transform-origin: top left;
            transform: rotate(5deg) scaleX(0);
          }

          .btn-wrapper:has(.btn:hover) .top {
            animation: draw-top var(--animation-speed) forwards;
            animation-delay: calc(var(--animation-speed) * 0.8);
          }

          @keyframes draw-top {
            100% {
              transform: rotate(0) scaleX(1);
            }
          }

          .bottom {
            bottom: calc(var(--line-weight) * -0.5);
            transform-origin: bottom right;
            transform: rotate(5deg) scaleX(0);
          }

          .btn-wrapper:has(.btn:hover) .bottom {
            animation: draw-bottom var(--animation-speed) forwards;
            animation-delay: calc(var(--animation-speed) * 2);
          }

          @keyframes draw-bottom {
            100% {
              transform: rotate(0) scaleX(1);
            }
          }

          /* VERTICAL LINES */
          .vertical {
            width: var(--line-weight);
            height: 100%;
            background-image: repeating-linear-gradient(
              0deg,
              transparent 0 calc(var(--line-weight) * 2),
              var(--line-color) calc(var(--line-weight) * 2)
                calc(var(--line-weight) * 4)
            );
          }

          .left {
            left: calc(var(--line-weight) * -0.5);
            transform-origin: bottom left;
            transform: scaleY(0);
          }

          .btn-wrapper:has(.btn:hover) .left {
            animation: draw-left var(--animation-speed) forwards;
            animation-delay: calc(var(--animation-speed) * 2.4);
          }

          @keyframes draw-left {
            100% {
              transform: scaleY(1);
            }
          }

          .right {
            right: calc(var(--line-weight) * -0.5);
            transform-origin: top right;
            transform: rotate(5deg) scaleY(0);
          }

          .btn-wrapper:has(.btn:hover) .right {
            animation: draw-right var(--animation-speed) forwards;
            animation-delay: calc(var(--animation-speed) * 1.4);
          }

          @keyframes draw-right {
            100% {
              transform: rotate(0) scaleY(1);
            }
          }
        `}</style>
      </a>
    </div>
  );
}
