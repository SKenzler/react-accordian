import { useState } from "react";
import data from "./data";

export const Accordian = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="h-full bg-slate-100 flex justify-center content-center">
      <div className="text-sky-500">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="bg-slate-200 flex flex-col items-center justify-center rounded-md shadow-md p-3 m-3">
              <div className="flex font-semibold">{dataItem.name}</div>
              <button
                type="button"
                className="w-6 h-6 flex justify-center content-center bg-lime-500  hover:bg-lime-400 text-white font-bold rounded-full cursor-pointer"
              >
                +
              </button>
            </div>
          ))
        ) : (
          <div>No chatcters found</div>
        )}
      </div>
    </div>
  );
};
