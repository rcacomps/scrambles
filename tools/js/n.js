var c = !0, y = new Array;
function a(r, a, n, e) {
    for (var t, o, f, c = 0; c < n; c++) {
        a[c] && (t = a[c] - 1, o = e, n <= (f = c) + c + 1 && (o += 3, f = n - 1 - f, t = 2 - t), r[r.length] = 4 * (6 * f + o) + t)
    }
}

function d() {
    var r, e = z,
        t = new Array(e),
        o = new Array(0, 0, 0);
    for (!c && 0 == (1 & z) || e--, n = 0; n < u; n++) {
        r = -1, y[n] = new Array;
        for (var f = 0; f < e; f++) t[f] = 0;
        for (var d, h, i, v = o[0] = o[1] = o[2] = 0; y[n].length + v < l;) {
            do {
                for (; d = Math.floor(3 * Math.random()), h = Math.floor(Math.random() * e), i = Math.floor(3 * Math.random()), d == r && 0 != t[h];);
            } while (d == r && !c && e == z && (2 * o[0] == e || 2 * o[1] == e || 2 * o[2] == e || 2 * (o[i] + 1) == e && 0 < o[0] + o[1] + o[2] - o[i]));
            if (d != r) {
                a(y[n], t, e, r);
                for (f = 0; f < e; f++) t[f] = 0;
                v = o[0] = o[1] = o[2] = 0, r = d
            }
            o[i]++, v++, t[h] = i + 1
        }
        a(y[n], t, e, r)
    }
}

function q(r) {
    for (var a = "", n = 0; n < y[r].length - 1; n++) {
        0 != n && (a += " ");
        var e, t = y[r][n] >> 2;
        (t = (t - (e = t % 6)) / 6) && z <= 5 && !c ? a += "dlburf".charAt(e) : z <= 5 && c ? (a += "DLBURF".charAt(e), t && (a += "w")) : (t && (a += t + 1), a += "DLBURF".charAt(e)), 0 != (e = 3 & y[r][n]) && (a += " 2'".charAt(e))
    }
    return a
}
d();
for (var i = 0; i < u; i++) {
    var e = document.createElement("p"),
        f = document.createTextNode(i + 1 + ". " + q(i));
    e.appendChild(f), document.getElementById("s").appendChild(e)
}