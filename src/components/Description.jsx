import React, { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
const Description = ({ desc }) => {
  const [showdesc, setShowDesc] = useState(false);

  return (
    <div className="relative">
      <div>
        <p
          onMouseOver={() => setShowDesc(true)}
          onMouseOut={() => setShowDesc(false)}
        >
          <BsFillInfoCircleFill className="scale-90 text-blue-200" />
        </p>
      </div>

      {showdesc && (
        <div className="absolute top-8 shadow-lg bg-blue-50 rounded-lg p-6 w-72 z-40">
          <p><b></b>Pizza Name</p>
          <hr />
          <p className="text-sm font-thin">{desc}</p>
        </div>
      )}
    </div>
  );
};

export default Description;
