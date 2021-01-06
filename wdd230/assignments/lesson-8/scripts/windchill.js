var t = 50;
var s = 10;
var f = getWindChillFactor(t, s);

document.getElementById("windSpeed").innerHTML = s;
document.getElementById("temp").innerHTML = t;
document.getElementById("windChillFactor").innerHTML = f;

console.log(f);

function getWindChillFactor(t, s)
{
    //TODO:
    return 110;
}

