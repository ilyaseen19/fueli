import React from "react";
import { calcDrops, calcToTalCash } from "../utils/calculatedrops";
import { rowDataColumns } from "./colums";

export default function DataRow(props) {
  // opening readings
  let opening1 = props.openingN1 === undefined ? 0 : props.openingN1;
  let opening2 = props.openingN2 === undefined ? 0 : props.openingN2;
  let opening3 = props.openingE1 === undefined ? 0 : props.openingE1;
  let opening4 = props.openingE2 === undefined ? 0 : props.openingE2;
  let opening5 = props.openingD1 === undefined ? 0 : props.openingD1;
  let opening6 = props.openingD2 === undefined ? 0 : props.openingD2;
  // closing readings
  let closing1 = props.closingN1 === undefined ? 0 : props.closingN1;
  let closing2 = props.closingN2 === undefined ? 0 : props.closingN2;
  let closing3 = props.closingE1 === undefined ? 0 : props.closingE1;
  let closing4 = props.closingE2 === undefined ? 0 : props.closingE2;
  let closing5 = props.closingD1 === undefined ? 0 : props.closingD1;
  let closing6 = props.closingD2 === undefined ? 0 : props.closingD2;
  // prices
  let price1 = props.priceN === undefined ? 0 : props.priceN;
  let price2 = props.priceE === undefined ? 0 : props.priceE;
  let price3 = props.priceD === undefined ? 0 : props.priceD;
  // return to tanks
  let rt1 = props.returnN1 === undefined ? 0 : props.returnN1;
  let rt2 = props.returnN2 === undefined ? 0 : props.returnN2;
  let rt3 = props.returnE1 === undefined ? 0 : props.returnE1;
  let rt4 = props.returnE2 === undefined ? 0 : props.returnE2;
  let rt5 = props.returnD1 === undefined ? 0 : props.returnD1;
  let rt6 = props.returnD2 === undefined ? 0 : props.returnD2;
  // drops calculations
  let fivethousands = props.drops.fivethousands.length === 0 ? 0 : calcDrops(props.drops.fivethousands)
  let twothousands = props.drops.twothousands.length === 0 ? 0 : calcDrops(props.drops.twothousands)
  let thousands = props.drops.thousands.length === 0 ? 0 : calcDrops(props.drops.thousands)
  let fivehundreds = props.drops.fivehundreds.length === 0 ? 0 : calcDrops(props.drops.fivehundreds)
  let hundreds = props.drops.hundreds.length === 0 ? 0 : calcDrops(props.drops.hundreds)
  let fiftys = props.drops.fiftys.length === 0 ? 0 : calcDrops(props.drops.fiftys)
  let coins = props.drops.coins.length === 0 ? 0 : calcDrops(props.drops.coins)
  let cheques = props.drops.cheques.length === 0 ? 0 : calcDrops(props.drops.cheques)
  let cCards = props.drops.cCards.length === 0 ? 0 : calcDrops(props.drops.cCards)
  let advance = props.drops.advance.length === 0 ? 0 : calcDrops(props.drops.advance)
  let tomCards = props.drops.tomCards.length === 0 ? 0 : calcDrops(props.drops.tomCards)
  let US = props.drops.US.length === 0 ? 0 : calcDrops(props.drops.US)
  let pettyCash = props.drops.pettyCash.length === 0 ? 0 : calcDrops(props.drops.pettyCash)
  let misc = props.drops.misc.length === 0 ? 0 : calcDrops(props.drops.misc)

  // sales calculations
  let sale1 = (closing1 - opening1).toFixed(2);
  let sale2 = (closing2 - opening2).toFixed(2);
  let totalN = (
    (parseFloat(sale1) +
      parseFloat(sale2) -
      (parseFloat(rt1) + parseFloat(rt2))) *
    parseFloat(price1)
  ).toFixed(2);

  let sale3 = (closing3 - opening3).toFixed(2);
  let sale4 = (closing4 - opening4).toFixed(2);
  let totalE = (
    (parseFloat(sale3) +
      parseFloat(sale4) -
      (parseFloat(rt3) + parseFloat(rt4))) *
    parseFloat(price2)
  ).toFixed(2);

  let sale5 = (closing5 - opening5).toFixed(2);
  let sale6 = (closing6 - opening6).toFixed(2);
  let totalD = (
    (parseFloat(sale5) +
      parseFloat(sale6) -
      (parseFloat(rt5) + parseFloat(rt6))) *
    parseFloat(price3)
  ).toFixed(2);

  let totalFuel = (parseFloat(totalN) + parseFloat(totalE) + parseFloat(totalD))
  let totalCash  = calcToTalCash({
    fivethousands,
    twothousands,
    thousands,
    fivehundreds,
    hundreds,
    fiftys,
    coins,
    cheques,
    cCards,
    advance,
    tomCards,
    US,
    pettyCash,
    misc
  })

  let ovrShrt = totalCash - totalFuel
  let cardsTotal = calcToTalCash({cCards, advance, tomCards})
  let cashTotal = calcToTalCash({fivethousands, twothousands, thousands, fivehundreds, hundreds, fiftys, coins})

  const data = [
    {id: 0, value: props.shift},
    {id: 1, value: props.attendant},
    {id: 2, value: props.product1},
    {id: 3, value: opening1},
    {id: 4, value: closing1},
    {id: 5, value: sale1},
    {id: 6, value: rt1},
    {id: 7, value: price1},
    {id: 8, value: totalN},
  ]

  const data2 = [
    {id: 2, value: props.product1},
    {id: 3, value: opening2},
    {id: 4, value: closing2},
    {id: 5, value: sale2},
    {id: 6, value: rt2},
  ]

  const data3 = [
    {id: 2, value: props.product2},
    {id: 3, value: opening3},
    {id: 4, value: closing3},
    {id: 5, value: sale3},
    {id: 6, value: rt3},
    {id: 7, value: price2},
    {id: 8, value: totalE},
  ]

  const data4 = [
    {id: 2, value: props.product2},
    {id: 3, value: opening4},
    {id: 4, value: closing4},
    {id: 5, value: sale4},
    {id: 6, value: rt4},
  ]

  const data5 = [
    {id: 2, value: props.product3},
    {id: 3, value: opening5},
    {id: 4, value: closing5},
    {id: 5, value: sale5},
    {id: 6, value: rt5},
    {id: 7, value: price3},
    {id: 8, value: totalD},
  ]

  const data6 = [
    {id: 2, value: props.product3},
    {id: 3, value: opening6},
    {id: 4, value: closing6},
    {id: 5, value: sale6},
    {id: 6, value: rt6},
  ]

  const data7 = [
    {id: 8, value: totalFuel},
    {id: 9, value: fivethousands},
    {id: 10, value: twothousands},
    {id: 11, value: thousands},
    {id: 12, value: fivehundreds},
    {id: 13, value: hundreds},
    {id: 14, value: fiftys},
    {id: 15, value: coins},
    {id: 16, value: cheques},
    {id: 17, value: cCards},
    {id: 18, value: advance},
    {id: 19, value: tomCards},
    {id: 20, value: US},
    {id: 21, value: pettyCash},
    {id: 22, value: misc},
    {id: 23, value: totalCash.toFixed(2)},
    {id: 24, value: ovrShrt.toFixed(2)},
    {id: 25, value: cardsTotal.toFixed(2)},
    {id: 26, value: cashTotal.toFixed(2)},
  ]

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          width: "168rem",
          borderBottom: "solid",
          borderWidth: 0.5,
          borderColor: "black",
        }}
      >
      {
        rowDataColumns.map((colum, index) => {
          return (
            <div
            key={index}
            style={{
              width: colum.width,
              borderRight: colum.isBorderRight ? "solid" : null,
              borderWidth: 0.5,
              borderColor: "black",
              fontSize: 11,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              paddingRight: 3,
              justifyContent: "right",
              paddingLeft: 2,
              height: 20,
            }}
          >
            {colum.title(data)}
          </div>
          )
        })
      }
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          width: "168rem",
          borderBottom: "solid",
          borderWidth: 0.5,
          borderColor: "black",
        }}
      >
      {
        rowDataColumns.map((colum, index) => {
          return (
            <div
            key={index}
            style={{
              width: colum.width,
              borderRight: colum.isBorderRight ? "solid" : null,
              borderWidth: 0.5,
              borderColor: "black",
              fontSize: 11,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              paddingLeft: 2,
              height: 20,
              paddingRight: 3,
              justifyContent: "right",
            }}
          >
            {colum.title(data2)}
          </div>
          )
        })
      }
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          width: "168rem",
          borderBottom: "solid",
          borderWidth: 0.5,
          borderColor: "black",
        }}
      >
      {
        rowDataColumns.map((colum, index) => {
          return (
            <div
            key={index}
            style={{
              width: colum.width,
              borderRight: colum.isBorderRight ? "solid" : null,
              borderWidth: 0.5,
              borderColor: "black",
              fontSize: 11,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              paddingLeft: 2,
              height: 20,
              paddingRight: 3,
              justifyContent: "right",
            }}
          >
            {colum.title(data3)}
          </div>
          )
        })
      }
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          width: "168rem",
          borderBottom: "solid",
          borderWidth: 0.5,
          borderColor: "black",
        }}
      >
      {
        rowDataColumns.map((colum, index) => {
          return (
            <div
            key={index}
            style={{
              width: colum.width,
              borderRight: colum.isBorderRight ? "solid" : null,
              borderWidth: 0.5,
              borderColor: "black",
              fontSize: 11,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              paddingLeft: 2,
              height: 20,
              paddingRight: 3,
              justifyContent: "right",
            }}
          >
            {colum.title(data4)}
          </div>
          )
        })
      }
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          width: "168rem",
          borderBottom: "solid",
          borderWidth: 0.5,
          borderColor: "black",
        }}
      >
      {
        rowDataColumns.map((colum, index) => {
          return (
            <div
            key={index}
            style={{
              width: colum.width,
              borderRight: colum.isBorderRight ? "solid" : null,
              borderWidth: 0.5,
              borderColor: "black",
              fontSize: 11,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              paddingLeft: 2,
              height: 20,
              paddingRight: 3,
              justifyContent: "right",
            }}
          >
            {colum.title(data5)}
          </div>
          )
        })
      }
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          width: "168rem",
          borderBottom: "solid",
          borderWidth: 0.5,
          borderColor: "black",
        }}
      >
      {
        rowDataColumns.map((colum, index) => {
          return (
            <div
            key={index}
            style={{
              width: colum.width,
              borderRight: colum.isBorderRight ? "solid" : null,
              borderWidth: 0.5,
              borderColor: "black",
              fontSize: 11,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              paddingLeft: 2,
              height: 20,
              paddingRight: 3,
              justifyContent: "right",
            }}
          >
            {colum.title(data6)}
          </div>
          )
        })
      }
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          width: "168rem",
          borderBottom: "solid",
          borderWidth: 0.5,
          borderColor: "black",
        }}
      >
      {
        rowDataColumns.map((colum, index) => {
          return (
            <div
            key={index}
            style={{
              width: colum.width,
              borderRight: colum.isBorderRight ? "solid" : null,
              borderWidth: 0.5,
              borderColor: "black",
              fontSize: 11,
              fontWeight: "bold",
              color: colum.isBold ? "black" : "grey",
              display: "flex",
              alignItems: "center",
              paddingLeft: 2,
              height: 20,
              paddingRight: 3,
              justifyContent: "right",
              backgroundColor: colum.isBackground ? colum.color : null
            }}
          >
            {colum.title(data7)}
          </div>
          )
        })
      }
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          width: "168rem",
          borderBottom: "solid",
          borderWidth: 0.5,
          borderColor: "black",
        }}
      >
      {
        rowDataColumns.map((colum, index) => {
          return (
            <div
            key={index}
            style={{
              width: colum.width,
              borderRight: colum.isBorderRight ? "solid" : null,
              borderWidth: 0.5,
              borderColor: "black",
              fontSize: 11,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              paddingLeft: 2,
              height: 20,
              paddingRight: 3,
              justifyContent: "right",
            }}
          >
            {/* {colum.title(data7)} */}
          </div>
          )
        })
      }
      </div>
    </div>
  );
}
