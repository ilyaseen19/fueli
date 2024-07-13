import React from "react";
import { headerColums } from "./colums";

export default function HeaderRow() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "grey",
        color: "black",
        flexGrow: 1,
        width: "168rem",
        borderBottom: "solid",
        borderWidth: 0.5,
        borderColor: "black",
      }}
    >
      {headerColums.map((column, index) => {
        return (
          <div
            key={index}
            style={{
              width: column.width,
              display: "inline-block",
              borderRight: column.isBorderRight ? "solid" : null,
              borderWidth: 0.5,
              borderColor: "black",
              fontSize: 13,
              fontWeight: "bold",
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 2,
            }}
          >
            {column.title}
          </div>
        );
      })}
    </div>
  );
}
