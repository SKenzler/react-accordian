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
              <span>+</span>
            </div>
          ))
        ) : (
          <div>No chatcters found</div>
        )}
      </div>
    </div>
  );
};
