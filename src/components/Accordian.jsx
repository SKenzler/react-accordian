import { useState } from "react";
import data from "./data";

export const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [userSelections, setUserSelections] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMutliSelection = (currentId) => {
    let copySelections = [...userSelections];
    const findCurrentIdIndex = copySelections.indexOf(currentId);

    if (findCurrentIdIndex === -1) copySelections.push(currentId);
    else copySelections.splice(findCurrentIdIndex, 1);

    setUserSelections(copySelections);
  };

  return (
    <div className="h-full max-h-screen flex flex-col items-center justify-center bg-slate-900">
      <button
        onClick={() => setMultiSelection(!multiSelection)}
        type="button"
        className="bg-sky-600 text-sm text-white text-center font-bold rounded-md px-8 py-2 mt-4 hover:bg-sky-800 cursor-pointer"
      >
        {multiSelection
          ? "Enable Single Selection"
          : "Enable Multiple Selections"}
      </button>
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="flex flex-col items-center justify-center bg-yellow-400  rounded-md shadow-lg shadow-white/20 px-10 py-2 m-3">
              <div className=" text-slate-900 font-semibold text-xl/8">
                {dataItem.name}
              </div>
              <button
                type="button"
                onClick={
                  multiSelection
                    ? () => handleMutliSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="flex justify-center content-center font-bold hover:text-slate-900 text-white text-lg rounded-full p-1 mt-2 cursor-pointer"
              >
                {selected === dataItem.id ? "-" : "+"}
              </button>
              {multiSelection
                ? userSelections.indexOf(dataItem.id) !== -1 && (
                    <div className="text-slate-900 text-base text-center">
                      <span className="font-bold px-2">Year of Birth:</span>
                      {dataItem.birth_year}
                      <span className="font-bold px-2">Height:</span>
                      {dataItem.height}
                      <span className="font-bold px-2">Mass:</span>
                      {dataItem.mass}
                      <span className="font-bold px-2">Hair Colour:</span>
                      {dataItem.hair_color}
                      <span className="font-bold px-2">Skin Colour:</span>
                      {dataItem.skin_color}
                      <span className="font-bold px-2">Eye Colour:</span>
                      {dataItem.eye_color}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="text-slate-900 text-base text-center">
                      <span className="font-bold px-2">Year of Birth:</span>
                      {dataItem.birth_year}
                      <span className="font-bold px-2">Height:</span>
                      {dataItem.height}
                      <span className="font-bold px-2">Mass:</span>
                      {dataItem.mass}
                      <span className="font-bold px-2">Hair Colour:</span>
                      {dataItem.hair_color}
                      <span className="font-bold px-2">Skin Colour:</span>
                      {dataItem.skin_color}
                      <span className="font-bold px-2">Eye Colour:</span>
                      {dataItem.eye_color}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div className="text-red-700 text-base">
            Sorry, no characters found
          </div>
        )}
      </div>
    </div>
  );
};
