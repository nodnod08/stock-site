import React from "react";

const index = (props) => {
  let org = { ...props };
  let { fileName, ...strictProps } = props;
  return (
    <div>
      <label className="w-full label-reusable-input-file text-center">
        <input
          {...strictProps}
          className={`reusable-input-file ${{ ...strictProps.className }}`}
        />
        <i className="fas fa-cloud-upload-alt" />{" "}
        {strictProps.placeholder || "Choose File"}
      </label>
      <small>{org.fileName}</small>
    </div>
  );
};

export default index;
