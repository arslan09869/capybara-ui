"use client";

import { useEffect, useState } from "react";

export default function Keyboard() {
  const [keyCode, setKeyCode] = useState("-");
  const [keyName, setKeyName] = useState("-");
  const [recentKeys, setRecentKeys] = useState(["-", "-", "-", "-"]);

  useEffect(() => {
    const handleKey = (event) => {
      const name = event.key.toUpperCase();

      setKeyCode(event.keyCode);
      setKeyName(name);

      // Update recent keys
      setRecentKeys((prev) => {
        const updated = [name, ...prev];
        return updated.slice(0, 4);
      });

      // Add .active animation
      const keys = document.querySelectorAll(".key");
      keys.forEach((key) => {
        if (key.textContent.toLowerCase() === event.key.toLowerCase()) {
          key.classList.add("active");
          setTimeout(() => key.classList.remove("active"), 150);
        }
      });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="bg-[#EEEEEE] w-full text-black p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <div className="bg-black text-white px-4 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold tracking-tight">YO'S KEYBOARD</h1>
            <div className="flex gap-4">
              <a href="#" className="text-sm hover:underline">DEMOS</a>
              <a href="#" className="text-sm hover:underline">ABOUT</a>
            </div>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Main Keyboard Box */}
          <div className="col-span-12 md:col-span-8 bg-white border-4 border-black p-4">
            <div className="flex justify-between mb-4">
              <h2 className="font-bold text-xl">VIRTUAL KEYBOARD</h2>
              <span className="bg-[#FF3333] text-white px-2 py-1 text-xs font-bold">
                PRESS ANY KEY
              </span>
            </div>

            {/* Function Row */}
            <KeyRow keys={["ESC", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11"]} />

            {/* Number Row */}
            <KeyRow keys={["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "⌫"]} />

            {/* QWERTY Row */}
            <KeyRow keys={["TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "\\"]} />

            {/* ASDF Row */}
            <KeyRow keys={["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "↵"]} />

            {/* ZXCV Row */}
            <KeyRow keys={["⇧", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "⇧"]} />

            {/* Space Row */}
            <div className="grid grid-cols-12 gap-1">
              <KeyBox label="⌃" />
              <KeyBox label="⌥" />
              <div className="col-span-8 h-8 bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold key">
                SPACE
              </div>
              <KeyBox label="⌥" />
              <KeyBox label="⌃" />
            </div>
          </div>

          {/* Side Boxes */}
          <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4">
            {/* Key Info */}
            <div className="bg-[#FFDD00] border-4 border-black p-4">
              <h2 className="font-bold text-xl mb-2">KEY INFO</h2>

              <div className="flex flex-col items-center">
                <div className="text-6xl font-extrabold my-4">{keyName}</div>

                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="bg-white border-2 border-black p-2 text-sm">
                    <span className="font-bold">CODE:</span> {keyCode}
                  </div>
                  <div className="bg-white border-2 border-black p-2 text-sm">
                    <span className="font-bold">NAME:</span> {keyName}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Keys */}
            <div className="bg-[#00CCFF] border-4 border-black p-4">
              <h2 className="font-bold text-xl mb-2">RECENT KEYS</h2>

              <div className="grid grid-cols-4 gap-2">
                {recentKeys.map((k, i) => (
                  <div key={i} className="aspect-square text-sm bg-white border-2 border-black flex items-center justify-center font-bold">
                    {k}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Common Shortcuts */}
          <div className="col-span-12 bg-[#FF3333] border-4 border-black p-4">
            <div className="flex justify-between mb-4">
              <h2 className="font-bold text-xl text-white">COMMON SHORTCUTS</h2>
              <span className="bg-white px-2 py-1 text-xs font-bold border-2 border-black">
                PRODUCTIVITY BOOSTERS
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Shortcut combo="CTRL + C" label="COPY" />
              <Shortcut combo="CTRL + V" label="PASTE" />
              <Shortcut combo="CTRL + Z" label="UNDO" />
              <Shortcut combo="CTRL + Y" label="REDO" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 bg-black text-white p-4 flex justify-between items-center">
          <div>© 2025 YO'S PLAYGROUND</div>
          <div className="text-sm">DESIGNED WITH BRUTAL SIMPLICITY</div>
        </footer>
      </div>

      {/* Active key animation style */}
      <style>{`
        .key.active {
          transform: translateY(4px);
          background-color: #000 !important;
          color: #fff !important;
        }
      `}</style>
    </div>
  );
}

// Component for each key box
function KeyBox({ label }) {
  return (
    <div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">
      {label}
    </div>
  );
}

// Row component
function KeyRow({ keys }) {
  return (
    <div className="grid grid-cols-12 gap-1 mb-1">
      {keys.map((k, i) => (
        <KeyBox key={i} label={k} />
      ))}
    </div>
  );
}

// Shortcut card
function Shortcut({ combo, label }) {
  return (
    <div className="bg-white border-2 border-black p-3">
      <div className="font-bold mb-1 text-sm">{combo}</div>
      <div className="text-xs">{label}</div>
    </div>
  );
}
