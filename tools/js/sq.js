var seqlen = 40
  , numcub = 5
  , seq = new Array
  , posit = new Array;
function d() {
    for (var o, r, t, e, i = 0; i < numcub; i++)
        for (posit = new Array(0,0,1,2,2,3,4,4,5,6,6,7,8,9,9,10,11,11,12,13,13,14,15,15),
        t = -1,
        seq[i] = new Array,
        o = e = 0; o < seqlen; o++) {
            for (; 0 == t ? 0 <= (r = Math.floor(22 * Math.random()) - 11) && r++ : r = 1 == t ? Math.floor(12 * Math.random()) - 11 : 2 == t ? 0 : Math.floor(23 * Math.random()) - 11,
            1 < e && -6 <= r && r < 0 || domove(r); )
                ;
            0 < r ? t = 1 : r < 0 ? t = 2 : (t = 0,
            e++),
            seq[i][o] = r
        }
}
function q(o) {
    for (var r, t = "", e = -1, i = 0; i < seq[o].length; i++)
        0 == (r = seq[o][i]) ? (-1 == e && (t += "(0,0)  "),
        1 == e && (t += "0)  "),
        2 == e && (t += ")  "),
        e = 0) : 0 < r ? (t += "(" + (6 < r ? r - 12 : r) + ",",
        e = 1) : r < 0 && (e <= 0 && (t += "(0,"),
        t += r <= -6 ? r + 12 : r,
        e = 2);
    return 1 == e && (t += "0"),
    0 != e && (t += ")"),
    t
}
function domove(o) {
    var r, t, e, i = o;
    if (0 == i)
        for (r = 0; r < 6; r++)
            t = posit[r + 12],
            posit[r + 12] = posit[r + 6],
            posit[r + 6] = t;
    else if (0 < i) {
        if (posit[i = 12 - i] == posit[i - 1])
            return !0;
        if (i < 6 && posit[i + 6] == posit[i + 5])
            return !0;
        if (6 < i && posit[i - 6] == posit[i - 7])
            return !0;
        if (6 == i && posit[0] == posit[11])
            return !0;
        for (e = new Array,
        r = 0; r < 12; r++)
            e[r] = posit[r];
        for (t = i,
        r = 0; r < 12; r++)
            posit[r] = e[t],
            11 == t ? t = 0 : t++
    } else if (i < 0) {
        if (posit[(i = -i) + 12] == posit[i + 11])
            return !0;
        if (i < 6 && posit[i + 18] == posit[i + 17])
            return !0;
        if (6 < i && posit[i + 6] == posit[i + 5])
            return !0;
        if (6 == i && posit[12] == posit[23])
            return !0;
        for (e = new Array,
        r = 0; r < 12; r++)
            e[r] = posit[r + 12];
        for (t = i,
        r = 0; r < 12; r++)
            posit[r + 12] = e[t],
            11 == t ? t = 0 : t++
    }
    return !1
}
d();
for (var i = 0; i < numcub; i++) {
    var e = document.createElement("p")
      , g = document.createTextNode(i + 1 + ". " + q(i));
    e.appendChild(g),
    document.getElementById("s").appendChild(e)
}
