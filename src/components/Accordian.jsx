import { useState } from "react";
import data from "./data";

export const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  return (
    <div className="h-full bg-slate-900 flex justify-center content-center">
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="bg-yellow-400 flex flex-col items-center justify-center rounded-md shadow-lg shadow-white/20 px-14 py-2 m-3">
              <div className="flex text-slate-900 font-semibold text-xl/8">
                {dataItem.name}
              </div>
              <button
                type="button"
                onClick={() => handleSingleSelection(dataItem.id)}
                className="flex justify-center content-center font-bold hover:text-slate-900 text-white text-lg rounded-full p-1 mt-2 cursor-pointer"
              >
                +
              </button>
              {selected === dataItem.id ? (
                <div>Year of Birth: {dataItem.birth_year}</div>
              ) : null}
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
