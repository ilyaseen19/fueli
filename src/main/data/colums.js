const denominations = ["5000", "2000", "1000", "500", "100", "50", "coins"];

const headerColums = [
  { width: 50, title: "Shift", isBorderRight: false },
  { width: 150, title: "Attendant", isBorderRight: true },
  { width: 50, title: "Prdct", isBorderRight: true },
  { width: 100, title: "OP.M.Reading", isBorderRight: true },
  { width: 100, title: "CL.M.Reading", isBorderRight: true },
  { width: 70, title: "Ltr Sale", isBorderRight: true },
  { width: 90, title: "Return/Tank", isBorderRight: true },
  { width: 50, title: "Rate", isBorderRight: true },
  { width: 80, title: "Total", isBorderRight: true },
  { width: 50, title: [denominations[0]], isBorderRight: true },
  { width: 50, title: [denominations[1]], isBorderRight: true },
  { width: 50, title: [denominations[2]], isBorderRight: true },
  { width: 50, title: [denominations[3]], isBorderRight: true },
  { width: 50, title: [denominations[4]], isBorderRight: true },
  { width: 50, title: [denominations[5]], isBorderRight: true },
  { width: 50, title: [denominations[6]], isBorderRight: true },
  { width: 70, title: "Cheque", isBorderRight: true },
  { width: 70, title: "C.Card", isBorderRight: true },
  { width: 70, title: "Advance", isBorderRight: true },
  { width: 70, title: "T.Card", isBorderRight: true },
  { width: 50, title: "US", isBorderRight: true },
  { width: 70, title: "P.Cash", isBorderRight: true },
  { width: 70, title: "Misc", isBorderRight: true },
  { width: 70, title: "Total/Sale", isBorderRight: true },
  { width: 70, title: "Ovr/Shr", isBorderRight: true },
  { width: 70, title: "tc/adv/cc", isBorderRight: true },
  { width: 70, title: "Fuel/Cash", isBorderRight: true },
  { width: 70, title: "669ldg", isBorderRight: true },
  { width: 70, title: "663ldg", isBorderRight: true },
  { width: 70, title: "349ldg", isBorderRight: true },
  { width: 70, title: "349ldg", isBorderRight: true },
  { width: 50, title: "US", isBorderRight: true },
  { width: 100, title: "Phone card", isBorderRight: true },
  { width: 100, title: "Shop ldg", isBorderRight: true },
  { width: 70, title: "Trk Sales", isBorderRight: true },
  { width: 100, title: "Shop Total", isBorderRight: true },
  { width: 70, title: "N.Taxable", isBorderRight: true },
  { width: 70, title: "Taxable", isBorderRight: true },
  { width: 70, title: "Tax", isBorderRight: true },
  { width: 70, title: "Total ldg", isBorderRight: true },
  { width: 70, title: "Diff", isBorderRight: true },
];

// var isShort = new Boolean(true)

const renderContent =  (payload) => {
  let results = ""
   payload.data.forEach((item) => {
    if(payload.id === item.id) results = item.value
  });

  return results;
};

const rowDataColumns = [
  {
    width: 50,
    title: (data) => renderContent({ id: 0, data }),
    isBorderRight: false,
  },
  {
    width: 150,
    title: (data) => renderContent({ id: 1, data }),
    isBorderRight: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 2, data }),
    isBorderRight: true,
  },
  {
    width: 100,
    title: (data) => renderContent({ id: 3, data }),
    isBorderRight: true,
  },
  {
    width: 100,
    title: (data) => renderContent({ id: 4, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 5, data }),
    isBorderRight: true,
  },
  {
    width: 90,
    title: (data) => renderContent({ id: 6, data }),
    isBorderRight: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 7, data }),
    isBorderRight: true,
  },
  {
    width: 80,
    title: (data) => renderContent({ id: 8, data }),
    isBorderRight: true,
    isBackground: true,
    isBold: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 9, data }),
    isBorderRight: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 10, data }),
    isBorderRight: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 11, data }),
    isBorderRight: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 12, data }),
    isBorderRight: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 13, data }),
    isBorderRight: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 14, data }),
    isBorderRight: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 15, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 16, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 17, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 18, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 19, data }),
    isBorderRight: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 20, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 21, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 22, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 23, data }),
    isBorderRight: true,
    isBackground: true,
    isBold: true,
    color: "yellow",
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 24, data }),
    isBorderRight: true,
    isBackground: true,
    isBold: true,
    // color: console.log(isShort)
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 25, data }),
    isBorderRight: true,
    isBorderRight: true,
    isBackground: true,
    isBold: true,
    color: "blue"
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 26, data }),
    isBorderRight: true,
    isBorderRight: true,
    isBackground: true,
    isBold: true,
    color: "orange"
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 27, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 28, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 29, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 30, data }),
    isBorderRight: true,
  },
  {
    width: 50,
    title: (data) => renderContent({ id: 31, data }),
    isBorderRight: true,
  },
  {
    width: 100,
    title: (data) => renderContent({ id: 32, data }),
    isBorderRight: true,
  },
  {
    width: 100,
    title: (data) => renderContent({ id: 33, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 34, data }),
    isBorderRight: true,
  },
  {
    width: 100,
    title: (data) => renderContent({ id: 35, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 36, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 37, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 38, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 39, data }),
    isBorderRight: true,
  },
  {
    width: 70,
    title: (data) => renderContent({ id: 40, data }),
    isBorderRight: true,
  },
];

export { headerColums, rowDataColumns };
