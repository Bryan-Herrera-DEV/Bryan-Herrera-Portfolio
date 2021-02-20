"use strict";

// JavaScript Document
function divisores(n) {
  // Devuelve divisores del natural n>0
  "use strict";

  var i = 1;
  var K = [1];

  if (n === 1) {
    K[0] = 1;
    return K;
  } else {
    var pos = 0;

    for (i = 1; i <= n; i++) {
      if (n % i === 0) {
        K[pos] = i;
        ++pos;
      }
    }

    return K;
  }
}

function gcd(a, b) {
  "use strict";

  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  if (a > b) {
    return gcd(a - b, b);
  } else {
    return gcd(a, b - a);
  }
}

function reducir(num, dem) {
  // Devuelve vector con numerador y denominador de la fracción num/dem reducida. Si es negativa, num<0
  "use strict";

  var f = [num, dem];

  if (num % 1 !== 0 || dem % 1 !== 0) {
    return f;
  } else {
    if (num === 0) {
      return f;
    } else {
      if (num * dem < 0) {
        num = Math.abs(num);
        dem = Math.abs(dem);
        num = -1 * num;
      } else if (num < 0 && dem < 0) {
        num = Math.abs(num);
        dem = Math.abs(dem);
      }

      var a, b, G;
      a = Math.abs(num);
      b = Math.abs(dem);
      G = gcd(a, b);
      num = num / G;
      dem = dem / G;
      f[0] = num;
      f[1] = dem;
      return f;
    }
  }
}

function toFrac(a) {
  // Cambia un string "num/dem" al vecor float (num,dem)
  "use strict";

  var f = [0, 1];
  var fstr = ["", ""];
  var pos = a.indexOf("/");

  if (pos > 0) {
    fstr[0] = a.substring(0, pos);
    fstr[1] = a.substring(pos + 1);
  } else {
    fstr[0] = a;
    fstr[1] = "1";
  }

  f[0] = parseFloat(fstr[0]);
  f[1] = parseFloat(fstr[1]);
  return f;
}

function multFrac(n1, d1, n2, d2) {
  //Multiplica las fracciones n1/d1 y n2/d2. Devuelve vector float (num,dem)
  "use strict";

  var num = n1 * n2;
  var dem = d1 * d2;
  var f = [1, 1];

  if (num * dem < 0) {
    num = -1 * Math.abs(num);
    dem = Math.abs(dem);
  }

  f = reducir(num, dem);
  return f;
}

function divFrac(n1, d1, n2, d2) {
  //Divide las fracciones n1/d1 y n2/d2. Devuelve vector float (num,dem)
  "use strict";

  var num = n1 * d2;
  var dem = d1 * n2;
  var f = [1, 1];

  if (num * dem < 0) {
    num = -1 * Math.abs(num);
    dem = Math.abs(dem);
  }

  f = reducir(num, dem);
  return f;
}

function sumFrac(n1, d1, n2, d2) {
  //Suma las fracciones n1/d1 y n2/d2. Devuelve vector float (num,dem)
  "use strict";

  var num = n1 * d2 + n2 * d1;
  var dem = d1 * d2;
  var f = [1, 1];

  if (num * dem < 0) {
    num = -1 * Math.abs(num);
    dem = Math.abs(dem);
  }

  f = reducir(num, dem);
  return f;
}

function resFrac(n1, d1, n2, d2) {
  //Resta las fracciones n1/d1 y n2/d2. Devuelve vector float (num,dem)
  "use strict";

  var num = n1 * d2 - n2 * d1;
  var dem = d1 * d2;
  var f = [1, 1];

  if (num * dem < 0) {
    num = -1 * Math.abs(num);
    dem = Math.abs(dem);
  }

  f = reducir(num, dem);
  return f;
}

function showFrac(n, d) {
  //Devuelve string n/d
  "use strict";

  var z = "";

  if (n % 1 !== 0 || d % 1 !== 0) {
    n = n / d;
    n = parseFloat(n.toFixed(3));
    d = 1;
  }

  if (n * d < 0) {
    n = -1 * Math.abs(n);
    d = Math.abs(d);
  }

  var num = n.toString();
  var dem = d.toString();

  if (n === 0) {
    z = z + "0";
  } else if (d === 1) {
    z = z + num;
  } else {
    z = z + " \\frac{" + num + "}{" + dem + "} ";
  }

  return z;
}

function ParSiFrac(n, d) {
  //Devuelve string: si es una fracción, le pone parentesis. Si es un número negativo, también pone paréntesis. 
  "use strict";

  var z = "";

  if (n % 1 !== 0 || d % 1 !== 0) {
    n = n / d;
    n = parseFloat(n.toFixed(3));
    d = 1;
  }

  if (n * d < 0) {
    n = -1 * Math.abs(n);
    d = Math.abs(d);
  }

  var num = n.toString();
  var dem = d.toString();

  if (n === 0) {
    z = z + "0";
  } else if (d === 1) {
    if (n < 0) {
      z = z + "(" + num + ")";
    } else {
      z = z + num;
    }
  } else {
    z = z + " \\left( \\frac{" + num + "}{" + dem + "} \\right) ";
  }

  return z;
}

function showFracSIGN(n, d) {
  //Devuelve string n/d con signo + o - delante de la fraccion
  "use strict";

  var z = "";

  if (n % 1 !== 0 || d % 1 !== 0) {
    n = n / d;
    n = parseFloat(n.toFixed(3));
    d = 1;
  }

  if (n * d < 0) {
    n = -1 * Math.abs(n);
    d = Math.abs(d);
  }

  var num = n.toString();
  var dem = d.toString();

  if (n === 0) {
    z = z + "+0";
  } else if (d === 1) {
    if (n < 0) {
      z = z + num;
    } else {
      z = z + "+" + num;
    }
  } else {
    if (n < 0) {
      n = Math.abs(n);
      num = n.toString();
      z = z + "- \\frac{" + num + "}{" + dem + "} ";
    } else {
      z = z + "+ \\frac{" + num + "}{" + dem + "} ";
    }
  }

  return z;
}

function showFracPar(n, d) {
  // Hace lo mismo que showFracc pero añade paréntesis si la fracción es negativa
  "use strict";

  var z = "";
  var par = false;

  if (n * d < 0) {
    n = -1 * Math.abs(n);
    d = Math.abs(d);
    par = true;
  }

  var num = n.toString();
  var dem = d.toString();

  if (n === 0) {
    z = z + "0";
  } else {
    if (par) {
      if (d === 1) {
        z = z + "(" + num + ")";
      } else {
        z = z + "\\left( \\frac{" + num + "}{" + dem + "} \\right)";
      }
    } else {
      if (d === 1) {
        z = z + num;
      } else {
        z = z + " \\frac{" + num + "}{" + dem + "} ";
      }
    }
  }

  return z;
}

function operar1() {
  "use strict";

  var A = document.getElementById("ha").value;
  var B = document.getElementById("hb").value;
  var C = document.getElementById("hc").value;
  var D = document.getElementById("hd").value;

  if (A === "") {
    A = "0";
  }

  if (B === "") {
    B = "0";
  }

  if (C === "") {
    C = "0";
  }

  if (D === "") {
    D = "0";
  }

  var a = toFrac(A);
  var b = toFrac(B);
  var c = toFrac(C);
  var d = toFrac(D);
  var z = "";
  z = "La suma de los complejos es";
  z = z + "$$\\left(" + showFrac(a[0], a[1]) + showFracSIGN(b[0], b[1]) + "i\\right)+\\left(" + showFrac(c[0], c[1]) + showFracSIGN(d[0], d[1]) + "i\\right) =$$";
  z = z + "$$= \\left(" + showFrac(a[0], a[1]) + showFracSIGN(c[0], c[1]) + "\\right)+\\left(" + showFrac(b[0], b[1]) + showFracSIGN(d[0], d[1]) + "\\right)i =$$";
  var aux1, aux2;
  aux1 = sumFrac(a[0], a[1], c[0], c[1]);
  aux2 = sumFrac(b[0], b[1], d[0], d[1]);
  z = z + "$$= " + showFrac(aux1[0], aux1[1]) + showFracSIGN(aux2[0], aux2[1]) + "i $$";
  document.getElementById("tab1b").innerHTML = z;
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function operar2() {
  "use strict";

  var A = document.getElementById("ha").value;
  var B = document.getElementById("hb").value;
  var C = document.getElementById("hc").value;
  var D = document.getElementById("hd").value;

  if (A === "") {
    A = "0";
  }

  if (B === "") {
    B = "0";
  }

  if (C === "") {
    C = "0";
  }

  if (D === "") {
    D = "0";
  }

  var a = toFrac(A);
  var b = toFrac(B);
  var c = toFrac(C);
  var d = toFrac(D);
  var z = "";
  z = "La resta de los complejos es";
  z = z + "$$\\left(" + showFrac(a[0], a[1]) + showFracSIGN(b[0], b[1]) + "i\\right)-\\left(" + showFrac(c[0], c[1]) + showFracSIGN(d[0], d[1]) + "i\\right) =$$";
  z = z + "$$= \\left(" + showFrac(a[0], a[1]) + "-" + showFracPar(c[0], c[1]) + "\\right)+\\left(" + showFrac(b[0], b[1]) + "-" + showFracPar(d[0], d[1]) + "\\right)i =$$";
  var aux1, aux2;
  aux1 = resFrac(a[0], a[1], c[0], c[1]);
  aux2 = resFrac(b[0], b[1], d[0], d[1]);
  z = z + "$$= " + showFrac(aux1[0], aux1[1]) + showFracSIGN(aux2[0], aux2[1]) + "i $$";
  document.getElementById("tab1b").innerHTML = z;
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function operar3() {
  "use strict";

  var A = document.getElementById("ha").value;
  var B = document.getElementById("hb").value;
  var C = document.getElementById("hc").value;
  var D = document.getElementById("hd").value;

  if (A === "") {
    A = "0";
  }

  if (B === "") {
    B = "0";
  }

  if (C === "") {
    C = "0";
  }

  if (D === "") {
    D = "0";
  }

  var a = toFrac(A);
  var b = toFrac(B);
  var c = toFrac(C);
  var d = toFrac(D);
  var z = "";
  z = "El producto de los complejos es";
  z = z + "$$\\left(" + showFrac(a[0], a[1]) + showFracSIGN(b[0], b[1]) + "i\\right)·\\left(" + showFrac(c[0], c[1]) + showFracSIGN(d[0], d[1]) + "i\\right) =$$";
  z = z + "$$= \\left(" + showFrac(a[0], a[1]) + "·" + showFracPar(c[0], c[1]) + "-" + showFracPar(b[0], b[1]) + "·" + showFracPar(d[0], d[1]) + "\\right)+\\left(" + showFrac(a[0], a[1]) + "·" + showFracPar(d[0], d[1]) + "+" + showFracPar(b[0], b[1]) + "·" + showFracPar(c[0], c[1]) + "\\right)i =$$";
  var aux1, aux2;
  var aux3, aux4;
  aux1 = multFrac(a[0], a[1], c[0], c[1]);
  aux2 = multFrac(b[0], b[1], d[0], d[1]);
  aux3 = multFrac(a[0], a[1], d[0], d[1]);
  aux4 = multFrac(b[0], b[1], c[0], c[1]);
  z = z + "$$= \\left(" + showFrac(aux1[0], aux1[1]) + "-" + showFracPar(aux2[0], aux2[1]) + "\\right)+\\left(" + showFrac(aux3[0], aux3[1]) + "+" + showFracPar(aux4[0], aux4[1]) + "\\right)i =$$";
  var Z1, Z2;
  Z1 = resFrac(aux1[0], aux1[1], aux2[0], aux2[1]);
  Z2 = sumFrac(aux3[0], aux3[1], aux4[0], aux4[1]);
  z = z + "$$= " + showFrac(Z1[0], Z1[1]) + showFracSIGN(Z2[0], Z2[1]) + "i $$";
  document.getElementById("tab1b").innerHTML = z;
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function operar4() {
  "use strict";

  var A = document.getElementById("ha").value;
  var B = document.getElementById("hb").value;
  var C = document.getElementById("hc").value;
  var D = document.getElementById("hd").value;

  if (A === "") {
    A = "0";
  }

  if (B === "") {
    B = "0";
  }

  if (C === "") {
    C = "0";
  }

  if (D === "") {
    D = "0";
  }

  var a = toFrac(A);
  var b = toFrac(B);
  var c = toFrac(C);
  var d = toFrac(D);
  var z = "";

  if (c[0] === 0 && d[0] === 0) {
    z = "No se puede dividir entre 0.";
  } else {
    z = "El cociente de los complejos es";
    z = z + "$$\\frac{" + showFrac(a[0], a[1]) + showFracSIGN(b[0], b[1]) + "i}{" + showFrac(c[0], c[1]) + showFracSIGN(d[0], d[1]) + "i} =$$";
    z = z + "$$= \\frac{" + showFrac(a[0], a[1]) + "·" + showFracPar(c[0], c[1]) + showFracSIGN(b[0], b[1]) + "·" + showFracPar(d[0], d[1]) + "}{" + ParSiFrac(c[0], c[1]) + "^2 + " + ParSiFrac(d[0], d[1]) + "^2} +";
    z = z + " \\frac{" + showFrac(b[0], b[1]) + "·" + showFracPar(c[0], c[1]) + "-" + showFracPar(a[0], a[1]) + "·" + showFracPar(d[0], d[1]) + "}{" + ParSiFrac(c[0], c[1]) + "^2 + " + ParSiFrac(d[0], d[1]) + "^2} = $$";
    var aux1, aux2, auxDem;
    aux1 = multFrac(c[0], c[1], c[0], c[1]);
    aux2 = multFrac(d[0], d[1], d[0], d[1]);
    auxDem = sumFrac(aux1[0], aux1[1], aux2[0], aux2[1]);
    var Num1;
    aux1 = multFrac(a[0], a[1], c[0], c[1]);
    aux2 = multFrac(d[0], d[1], b[0], b[1]);
    Num1 = sumFrac(aux1[0], aux1[1], aux2[0], aux2[1]);
    var Num2;
    aux1 = multFrac(b[0], b[1], c[0], c[1]);
    aux2 = multFrac(a[0], a[1], d[0], d[1]);
    Num2 = resFrac(aux1[0], aux1[1], aux2[0], aux2[1]);
    z = z + "$$=\\frac{" + showFrac(Num1[0], Num1[1]) + "}{" + showFrac(auxDem[0], auxDem[1]) + "} + \\frac{" + showFrac(Num2[0], Num2[1]) + "}{" + showFrac(auxDem[0], auxDem[1]) + "}i =$$";
    var Z1, Z2;
    Z1 = divFrac(Num1[0], Num1[1], auxDem[0], auxDem[1]);
    Z2 = divFrac(Num2[0], Num2[1], auxDem[0], auxDem[1]);
    z = z + "$$= " + showFrac(Z1[0], Z1[1]) + showFracSIGN(Z2[0], Z2[1]) + "i $$";
  }

  document.getElementById("tab1b").innerHTML = z;
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function operar5() {
  "use strict";

  var A = document.getElementById("ba").value;
  var B = document.getElementById("bb").value;

  if (A === "") {
    A = "0";
  }

  if (B === "") {
    B = "0";
  }

  var a = toFrac(A);
  var b = toFrac(B);
  var z = "";
  var aux1, aux2, aux3, alf;
  var x, y;

  if (a[0] === 0 && b[0] === 0) {
    z = "El módulo es \\(0\\) y el ángulo es \\(0\\) grados o radianes.";
  } else {
    aux1 = multFrac(a[0], a[1], a[0], a[1]);
    aux2 = multFrac(b[0], b[1], b[0], b[1]);
    aux3 = sumFrac(aux1[0], aux1[1], aux2[0], aux2[1]);
    z = z + "El módulo es";
    z = z + "$$ r = \\sqrt{" + showFrac(aux3[0], aux3[1]) + "} =$$";
    aux3[0] = Math.sqrt(aux3[0]);
    aux3[1] = Math.sqrt(aux3[1]);
    z = z + "$$  = " + showFrac(aux3[0], aux3[1]) + " $$";
    z = z + "El argumento principal es";
    z = z + "$$ \\alpha = atan\\left( \\frac{" + showFrac(b[0], b[1]) + "}{" + showFrac(a[0], a[1]) + "} \\right) = $$";
    x = a[0] / a[1];
    y = b[0] / b[1];
    alf = Math.atan2(y, x);
    x = y / x;
    x = parseFloat(x.toFixed(3));
    alf = alf * 180 / Math.PI;
    alf = parseFloat(alf.toFixed(3));
    z = z + "$$ = atan\\left( " + x + " \\right) = " + alf + "^\\circ $$";
    z = z + "Forma polar:";
    z = z + "$$ z = " + showFrac(aux3[0], aux3[1]) + "_{" + alf + "^\\circ} $$";
  }

  document.getElementById("tab2b").innerHTML = z;
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function operar6() {
  "use strict";

  var R = document.getElementById("ra").value;
  var ALF = document.getElementById("rb").value;

  if (R === "") {
    R = "0";
  }

  if (ALF === "") {
    ALF = "0";
  }

  var r = toFrac(R);
  var alf = parseFloat(ALF);
  alf = alf * Math.PI / 180;
  var Salf = alf;
  Salf = parseFloat(Salf.toFixed(3));
  var z = "";
  z = z + "$$ z = " + showFrac(r[0], r[1]) + "· \\left( cos(\\alpha ) + i·sin(\\alpha )\\right) = $$";
  var co, si;
  co = Math.cos(alf);
  si = Math.sin(alf);
  co = parseFloat(co.toFixed(3));
  si = parseFloat(si.toFixed(3));
  z = z + "$$  = " + showFrac(r[0], r[1]) + "· \\left(" + co + " + i·" + si + "\\right) = $$";
  var aux1 = multFrac(r[0], r[1], co, 1);
  var aux2 = multFrac(r[0], r[1], si, 1);
  z = z + "$$  = " + showFrac(aux1[0], aux1[1]) + showFracSIGN(aux2[0], aux2[1]) + "·i $$";
  document.getElementById("tab3b").innerHTML = z;
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}