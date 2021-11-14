import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Confirmation({ stepNames }) {
  const { data } = useSelector((state) => state.stepperReducer);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (Object.keys(data).length) {
      setKeys(Object.keys(data));
    }
  }, [data]);

  //   useEffect(() => {
  //     console.log(keys);
  //   }, [keys]);

  return (
    <div>
      {stepNames.map((stepName, index) => (
        <div key={index}>
          <p className="text-lg font-medium">-- {stepName} --</p>
          <div className="ml-3">
            {keys.length &&
              Object.keys(data[keys[index]]).map((propertyName, i) => (
                <p className="text-xs font-medium" key={i}>
                  {propertyName
                    .split("_")
                    .map((pn) => pn.charAt(0).toUpperCase() + pn.slice(1))
                    .join(" ")}{" "}
                  : {data[keys[index]][propertyName]}
                </p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Confirmation;
