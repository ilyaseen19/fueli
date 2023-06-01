import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import HeaderRow from "../../../data/headerRow";
import DataRow from "../../../data/dataRow";
import "../../style.css";
import TotalsRow from "../../../data/totalsRow";
import ShopRow from "../../../data/shopRow";
import OverAll from "../../../data/overAll";

const subHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <TextField
        id="outlined-read-only-input"
        label="Supervisor Name"
        defaultValue="J.Clarke"
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
        sx={{ fontSize: 13 }}
      />
      <TextField
        id="outlined-read-only-input"
        label="Date"
        defaultValue="15/05/23"
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
        sx={{ fontSize: 13 }}
      />
    </div>
  );
};

export default function CashAnalysis() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>Cash Analysis</Typography>
      {subHeader()}
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          marginTop: 1,
          overflow: "hidden",
          overflowX: "scroll",
          verticalAlign: "top",
        }}
      >
        <HeaderRow />
        <DataRow />
        <TotalsRow />
        <ShopRow />
        <OverAll />
        <div style={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "50%",
              border: "solid",
              borderWidth: 2,
              borderColor: "black",
              marginTop: "1rem",
              height: "8rem",
              fontSize: 13,
              marginRight: 5,
            }}
          >
            <div className="row w-100" style={{ marginLeft: 2 }}>
              <div
                className="col-lg-6"
                style={{ display: "flex", alignItems: "center", height: 20 }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginRight: 6,
                  }}
                >
                  Observations:
                </span>
                Agent Shortage
              </div>
              <div className="col-md-6" style={{ color: "red" }}>
                -5645626
              </div>
            </div>
            <div className="row w-100" style={{ marginLeft: 2 }}>
              {["Ana Kay", "J.Clarke", "M.Haughton", "K.Hudson"].map(
                (attendant, index) => {
                  return (
                    <div
                      className="col-lg-6"
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: 20,
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "black",
                          marginRight: 6,
                        }}
                      >
                        {attendant}:
                      </span>
                      4521325
                    </div>
                  );
                }
              )}
            </div>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "50%",
              border: "solid",
              borderWidth: 2,
              borderColor: "black",
              marginTop: "1rem",
              height: "8rem",
              fontSize: 13,
            }}
          >
            <div className="row w-100" style={{ marginLeft: 2 }}>
              <div
                className="col-lg-6"
                style={{ display: "flex", alignItems: "center", height: 20 }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginRight: 6,
                  }}
                >
                  Comments:
                </span>
              </div>
            </div>
            <div className="row w-100" style={{ marginLeft: 2 }}>
              {["8665.2", "52642"].map((attendant, index) => {
                return (
                  <div
                    className="col-lg-6"
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: 20,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "black",
                        marginRight: 6,
                      }}
                    >
                      {attendant}:
                    </span>
                    Mr.Hamilton
                  </div>
                );
              })}
            </div>
          </Box>
        </div>
      </Box>
    </Box>
  );
}
