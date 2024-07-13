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
import { AppContext } from "../../../libs/context/appContext";

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
  const { data } = React.useContext(AppContext);
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
        {data[0].dailyShifts[0].PM.attendants.map((attendant, index) => {
          return (
            <DataRow
              key={index}
              openingN1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.openingN1 : data[0].dailyShifts[0].PM.pumps.threeAndFour.openingN3}
              openingN2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.openingN2 : data[0].dailyShifts[0].PM.pumps.threeAndFour.openingN4}
              openingE1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.openingE1 : data[0].dailyShifts[0].PM.pumps.threeAndFour.openingE3}
              openingE2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.openingE2 : data[0].dailyShifts[0].PM.pumps.threeAndFour.openingE4}
              openingD1={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].PM.pumps.fiveAndSix.openingD5}
              openingD2={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].PM.pumps.fiveAndSix.openingD6}
              // closing readings
              closingN1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.closingN1 : data[0].dailyShifts[0].PM.pumps.threeAndFour.closingN3}
              closingN2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.closingN2 : data[0].dailyShifts[0].PM.pumps.threeAndFour.closingN4}
              closingE1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.closingE1 : data[0].dailyShifts[0].PM.pumps.threeAndFour.closingE3}
              closingE2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.closingE2 : data[0].dailyShifts[0].PM.pumps.threeAndFour.closingE4}
              closingD1={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].PM.pumps.fiveAndSix.closingD5}
              closingD2={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].PM.pumps.fiveAndSix.closingD6}
              //return to tanks
              returnN1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.returnN1 : data[0].dailyShifts[0].PM.pumps.threeAndFour.returnN3}
              returnN2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.returnN2 : data[0].dailyShifts[0].PM.pumps.threeAndFour.returnN4}
              returnE1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.returnE1 : data[0].dailyShifts[0].PM.pumps.threeAndFour.returnE3}
              returnE2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].PM.pumps.oneAndTwo.returnE2 : data[0].dailyShifts[0].PM.pumps.threeAndFour.returnE4}
              returnD1={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].PM.pumps.fiveAndSix.returnD5}
              returnD2={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].PM.pumps.threeAndFour.returnD6}
              shift="PM"
              attendant={attendant.name}
              product1={data[0].products[1].product}
              product2={data[0].products[0].product}
              product3={data[0].products[2].product}
              priceN={data[0].products[1].sellingPrice}
              priceE={data[0].products[0].sellingPrice}
              priceD={data[0].products[2].sellingPrice}
              drops={attendant.drops}
            />
          );
        })}
        {data[0].dailyShifts[0].AM.attendants.map((attendant, index) => {
          return (
            <DataRow
              key={index}
              openingN1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.openingN1 : data[0].dailyShifts[0].AM.pumps.threeAndFour.openingN3}
              openingN2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.openingN2 : data[0].dailyShifts[0].AM.pumps.threeAndFour.openingN4}
              openingE1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.openingE1 : data[0].dailyShifts[0].AM.pumps.threeAndFour.openingE3}
              openingE2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.openingE2 : data[0].dailyShifts[0].AM.pumps.threeAndFour.openingE4}
              openingD1={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].AM.pumps.fiveAndSix.openingD5}
              openingD2={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].AM.pumps.fiveAndSix.openingD6}
              // closing readings
              closingN1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.closingN1 : data[0].dailyShifts[0].AM.pumps.threeAndFour.closingN3}
              closingN2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.closingN2 : data[0].dailyShifts[0].AM.pumps.threeAndFour.closingN4}
              closingE1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.closingE1 : data[0].dailyShifts[0].AM.pumps.threeAndFour.closingE3}
              closingE2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.closingE2 : data[0].dailyShifts[0].AM.pumps.threeAndFour.closingE4}
              closingD1={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].AM.pumps.fiveAndSix.closingD5}
              closingD2={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].AM.pumps.fiveAndSix.closingD6}
              //return to tanks
              returnN1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.returnN1 : data[0].dailyShifts[0].AM.pumps.threeAndFour.returnN3}
              returnN2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.returnN2 : data[0].dailyShifts[0].AM.pumps.threeAndFour.returnN4}
              returnE1={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.returnE1 : data[0].dailyShifts[0].AM.pumps.threeAndFour.returnE3}
              returnE2={attendant.pump === "oneAndTwo" ? data[0].dailyShifts[0].AM.pumps.oneAndTwo.returnE2 : data[0].dailyShifts[0].AM.pumps.threeAndFour.returnE4}
              returnD1={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].AM.pumps.fiveAndSix.returnD5}
              returnD2={attendant.pump === "oneAndTwo" ? 0 : data[0].dailyShifts[0].AM.pumps.threeAndFour.returnD6}
              shift="AM"
              attendant={attendant.name}
              product1={data[0].products[1].product}
              product2={data[0].products[0].product}
              product3={data[0].products[2].product}
              priceN={data[0].products[1].sellingPrice}
              priceE={data[0].products[0].sellingPrice}
              priceD={data[0].products[2].sellingPrice}
              drops={attendant.drops}
            />
          );
        })}
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
