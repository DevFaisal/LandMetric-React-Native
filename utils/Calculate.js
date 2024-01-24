export default calculate = (
    { typeOfDeed,
        rate,
        kanal,
        marla,
        valuation,
        sirsai,
        squarefeet,
        gender }
) => {
    const deedPercentage = getDeedPercentages(typeOfDeed, gender);
    const landValues = calculateLandValues({ rate, kanal, marla, sirsai, squarefeet }) + parseInt(valuation);
    const eStamp = roundToNearestTen((landValues * deedPercentage.percentOfEstamp) / 100);
    let regFee = roundToNearestTen((landValues * deedPercentage.percentOfReg) / 100);
   
    console.log(regFee)
    if (typeOfDeed === "gift" && regFee > 10000) {
        regFee = 10000;
    }
    console.log(regFee)
    return {
        rate,
        kanal,
        marla,
        valuation,
        sirsai,
        squarefeet,
        eStamp,
        landValues,
        regFee,
        total: eStamp + regFee,
    };
}


//Function for Getting the Percentage
function getDeedPercentages(typeOfDeed, gender) {
    let percentOfEstamp = 0.0;
    let percentOfReg = 0.0;

    if (typeOfDeed === "sale") {
        if (gender === "male") {
            percentOfEstamp = 7;
            percentOfReg = 1.2;
        } else if (gender === "female") {
            percentOfEstamp = 3;
            percentOfReg = 1.2;
        } else if (gender === "both") {
            percentOfEstamp = 5;
            percentOfReg = 1.2;
        }
    } else if (typeOfDeed === "gift") {
        if (gender === "male") {
            percentOfEstamp = 7;
            percentOfReg = 0.5;
        } else if (gender === "female") {
            percentOfEstamp = 3;
            percentOfReg = 0.5;
        } else if (gender === "both") {
            percentOfEstamp = 5;
            percentOfReg = 0.5;
        }
    }

    return {
        percentOfEstamp: percentOfEstamp,
        percentOfReg: percentOfReg,
    };
}

//Function to calculate the land values
function calculateLandValues({ rate, kanal, marla, sirsai, squarefeet }) {

    const perKanalRateValue = parseFloat(rate);
    const kanalValueInput = parseFloat(kanal);
    const marlaValueInput = parseFloat(marla);
    const sirsaiValueInput = parseFloat(sirsai);
    const sQftValueInput = parseFloat(squarefeet);

    let kanalValue = 0;
    let marlaValue = 0;
    let sirsaiValue = 0;
    let sQftValue = 0;

    if (!isNaN(perKanalRateValue) && !isNaN(kanalValueInput)) {
        kanalValue = perKanalRateValue * kanalValueInput;
    }
    if (!isNaN(perKanalRateValue) && !isNaN(marlaValueInput)) {
        marlaValue = (perKanalRateValue / 20) * marlaValueInput;
    }
    if (!isNaN(perKanalRateValue) && !isNaN(sirsaiValueInput)) {
        sirsaiValue = (perKanalRateValue / 20 / 9) * sirsaiValueInput;
    }
    if (!isNaN(perKanalRateValue) && !isNaN(sQftValueInput)) {
        sQftValue = (((perKanalRateValue / 20) / 9) / 30.25) * sQftValueInput;
    }

    const total = (kanalValue + marlaValue + sirsaiValue + sQftValue);

    return Math.floor(total);
}

function roundToNearestTen(number) {
    return Math.ceil(number / 10) * 10;
}