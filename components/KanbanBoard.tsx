// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { LuPlus, LuTrash2 } from "lucide-react";
// import { Flame } from "lucide-react";

// export const TaskFlow = () => {
//   return (
//     <div className="w-full h-screen bg-neutral-950 text-neutral-200">
//       <BoardContainer />
//     </div>
//   );
// };

// const BoardContainer = () => {
//   const [items, setItems] = useState(STARTING_ITEMS);

//   return (
//     <div className="flex h-full w-full gap-4 overflow-x-auto p-12">
//       <TaskColumn
//         label="Backlog"
//         column="backlog"
//         highlight="text-neutral-500"
//         items={items}
//         setItems={setItems}
//       />
//       <TaskColumn
//         label="To Do"
//         column="todo"
//         highlight="text-yellow-300"
//         items={items}
//         setItems={setItems}
//       />
//       <TaskColumn
//         label="In Progress"
//         column="progress"
//         highlight="text-sky-300"
//         items={items}
//         setItems={setItems}
//       />
//       <TaskColumn
//         label="Completed"
//         column="done"
//         highlight="text-emerald-300"
//         items={items}
//         setItems={setItems}
//       />

//       <TrashDrop setItems={setItems} />
//     </div>
//   );
// };

// // ------------------------
// // COLUMN
// // ------------------------

// const TaskColumn = ({ label, highlight, items, column, setItems }) => {
//   const [isActive, setIsActive] = useState(false);

//   const startDrag = (e, card) => {
//     e.dataTransfer.setData("taskId", card.id);
//   };

//   const endDrag = (e) => {
//     const id = e.dataTransfer.getData("taskId");
//     setIsActive(false);
//     removeHighlights();

//     const indicators = fetchIndicators();
//     const { element } = pickNearestIndicator(e, indicators);

//     const before = element.dataset.before || "-1";

//     if (before !== id) {
//       let clone = [...items];

//       let moving = clone.find((t) => t.id === id);
//       if (!moving) return;
//       moving = { ...moving, column };

//       clone = clone.filter((t) => t.id !== id);

//       if (before === "-1") {
//         clone.push(moving);
//       } else {
//         const index = clone.findIndex((t) => t.id === before);
//         if (index === -1) return;
//         clone.splice(index, 0, moving);
//       }

//       setItems(clone);
//     }
//   };

//   const dragOver = (e) => {
//     e.preventDefault();
//     showIndicator(e);
//     setIsActive(true);
//   };

//   const dragLeave = () => {
//     removeHighlights();
//     setIsActive(false);
//   };

//   const removeHighlights = (els) => {
//     const all = els || fetchIndicators();
//     all.forEach((i) => (i.style.opacity = "0"));
//   };

//   const showIndicator = (e) => {
//     const indicators = fetchIndicators();
//     removeHighlights(indicators);

//     const nearest = pickNearestIndicator(e, indicators);
//     nearest.element.style.opacity = "1";
//   };

//   const pickNearestIndicator = (e, indicators) => {
//     const OFFSET = 50;

//     return indicators.reduce(
//       (closest, el) => {
//         const box = el.getBoundingClientRect();
//         const offset = e.clientY - (box.top + OFFSET);
//         return offset < 0 && offset > closest.offset
//           ? { offset, element: el }
//           : closest;
//       },
//       {
//         offset: Number.NEGATIVE_INFINITY,
//         element: indicators[indicators.length - 1],
//       }
//     );
//   };

//   const fetchIndicators = () =>
//     Array.from(document.querySelectorAll(`[data-col="${column}"]`));

//   const filtered = items.filter((i) => i.column === column);

//   return (
//     <div className="w-60 shrink-0">
//       <header className="mb-3 flex items-center justify-between">
//         <h3 className={`font-medium ${highlight}`}>{label}</h3>
//         <span className="text-sm text-neutral-500">{filtered.length}</span>
//       </header>

//       <div
//         onDrop={endDrag}
//         onDragOver={dragOver}
//         onDragLeave={dragLeave}
//         className={`transition-colors h-full w-full ${
//           isActive ? "bg-neutral-800/40" : "bg-transparent"
//         }`}
//       >
//         {filtered.map((task) => (
//           <TaskCard
//             key={task.id}
//             {...task}
//             startDrag={startDrag}
//           />
//         ))}

//         <DropLine beforeId={null} column={column} />
//         <NewTask column={column} setItems={setItems} />
//       </div>
//     </div>
//   );
// };

// // ------------------------
// // CARD
// // ------------------------

// const TaskCard = ({ title, id, column, startDrag }) => {
//   return (
//     <>
//       <DropLine beforeId={id} column={column} />

//       <motion.div
//         layout
//         layoutId={id}
//         draggable
//         onDragStart={(e) => startDrag(e, { title, id, column })}
//         className="cursor-grab active:cursor-grabbing rounded border border-neutral-700 bg-neutral-800 p-3"
//       >
//         <p className="text-sm">{title}</p>
//       </motion.div>
//     </>
//   );
// };

// // ------------------------
// // DROP LINE
// // ------------------------

// const DropLine = ({ beforeId, column }) => {
//   return (
//     <div
//       data-before={beforeId || "-1"}
//       data-col={column}
//       className="my-1 h-0.5 w-full bg-violet-500 opacity-0"
//     />
//   );
// };

// // ------------------------
// // TRASH BIN
// // ------------------------

// const TrashDrop = ({ setItems }) => {
//   const [active, setActive] = useState(false);

//   const handleOver = (e) => {
//     e.preventDefault();
//     setActive(true);
//   };

//   const handleLeave = () => setActive(false);

//   const handleDrop = (e) => {
//     const id = e.dataTransfer.getData("taskId");
//     setItems((prev) => prev.filter((t) => t.id !== id));
//     setActive(false);
//   };

//   return (
//     <div
//       onDrop={handleDrop}
//       onDragOver={handleOver}
//       onDragLeave={handleLeave}
//       className={`mt-10 grid h-56 w-56 place-content-center rounded border text-3xl ${
//         active
//           ? "border-red-900 bg-red-900/20 text-red-500"
//           : "border-neutral-600 bg-neutral-700/20 text-neutral-400"
//       }`}
//     >
//       {active ? <Flame className="animate-bounce" /> : <LuTrash2 />}
//     </div>
//   );
// };

// // ------------------------
// // ADD CARD
// // ------------------------

// const NewTask = ({ column, setItems }) => {
//   const [value, setValue] = useState("");
//   const [editing, setEditing] = useState(false);

//   const submitTask = (e) => {
//     e.preventDefault();
//     if (!value.trim()) return;

//     const newItem = {
//       title: value.trim(),
//       column,
//       id: crypto.randomUUID(),
//     };

//     setItems((prev) => [...prev, newItem]);
//     setEditing(false);
//     setValue("");
//   };

//   return editing ? (
//     <motion.form layout onSubmit={submitTask}>
//       <textarea
//         autoFocus
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Add a task..."
//         className="w-full rounded border border-violet-500 bg-violet-500/20 p-2 text-sm text-neutral-200 placeholder-violet-300 focus:outline-none"
//       />

//       <div className="flex justify-end gap-2 mt-2">
//         <button
//           type="button"
//           onClick={() => setEditing(false)}
//           className="text-neutral-400 hover:text-neutral-200 text-xs"
//         >
//           Cancel
//         </button>

//         <button
//           type="submit"
//           className="flex items-center gap-1 bg-neutral-200 text-neutral-950 px-3 py-1.5 rounded text-xs hover:bg-neutral-300"
//         >
//           Add
//           <LuPlus size={14} />
//         </button>
//       </div>
//     </motion.form>
//   ) : (
//     <motion.button
//       layout
//       onClick={() => setEditing(true)}
//       className="flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-100 px-2 py-1"
//     >
//       Add task <LuPlus size={14} />
//     </motion.button>
//   );
// };

// // ------------------------
// // INITIAL DATA
// // ------------------------

// const STARTING_ITEMS = [
//   { title: "Investigate dashboard rendering issue", id: "1", column: "backlog" },
//   { title: "Audit compliance checklist", id: "2", column: "backlog" },
//   { title: "Research migration options", id: "3", column: "backlog" },
//   { title: "Write service documentation", id: "4", column: "backlog" },

//   { title: "Evaluate DB performance", id: "5", column: "todo" },
//   { title: "Draft outage postmortem", id: "6", column: "todo" },
//   { title: "Roadmap sync with product", id: "7", column: "todo" },

//   { title: "Switch context to Zustand", id: "8", column: "progress" },
//   { title: "Improve scheduler logging", id: "9", column: "progress" },

//   { title: "Create dashboards for listeners", id: "10", column: "done" },
// ];
