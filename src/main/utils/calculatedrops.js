const calcDrops = (drop) => {
  let results = 0;

  drop.forEach((item) => {
    results += item;
  });

  return results;
};

const calcToTalCash = (data) => {
  const {
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
    misc,
  } = data;

  var ft = !fivethousands ? 0 : fivethousands * 5000;
  var tt = !twothousands ? 0 : twothousands * 2000;
  var t = !thousands ? 0 : thousands * 1000;
  var fh = !fivehundreds ? 0 : fivehundreds * 500;
  var h = !hundreds ? 0 : hundreds * 100;
  var ff = !fiftys ? 0 : fiftys * 50;
  var us = !US ? 0 : US * 130;
  var cns = !coins ? 0 : coins;
  var chq = !cheques ? 0 : cheques;
  var ccds = !cCards ? 0 : cCards;
  var advs = !advance ? 0 : advance;
  var tmcs = !tomCards ? 0 : tomCards;
  var ptsc = !pettyCash ? 0 : pettyCash;
  var mis = !misc ? 0 : misc;

  return (
    ft +
    tt +
    t +
    fh +
    h +
    ff +
    us +
    cns +
    chq +
    ccds +
    advs +
    tmcs +
    ptsc +
    mis
  );
};

export { calcDrops, calcToTalCash };
