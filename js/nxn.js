var mult = true;
var seq = new Array();
var posit = new Array();
var flat2posit;
function appendmoves(sq, axsl, tl, la){
	for(var sl = 0; sl < tl; sl++){
		if(axsl[sl]){
			var q = axsl[sl] - 1;
			var sa = la;
			var m = sl;
			if (sl + sl + 1 >= tl){
				sa += 3;
				m = tl - 1 - m;
				q = 2 - q;
			}
			sq[sq.length] = (m * 6 + sa) * 4 + q;
		}
	}
}
function scramble(){
	var tl = size;
	if (mult || (size & 1) != 0)tl--;
	var axsl = new Array(tl);
	var axam = new Array(0,0,0);
	var la;
	for(n = 0; n < numcub; n++){
		la = -1;seq[n] = new Array();
		for (var i = 0; i < tl; i++)
			axsl[i] = 0;axam[0] = axam[1] = axam[2] = 0;
		var moved = 0;
		while (seq[n].length + moved < seqlen) {
			var ax, sl, q;
			do {
				do {
					ax = Math.floor(Math.random() * 3);
					sl = Math.floor(Math.random() * tl);
					q = Math.floor(Math.random() * 3);
				}
				while(ax == la && axsl[sl] != 0);
			}
			while (ax == la && !mult && tl == size && (2 * axam[0] == tl || 2 * axam[1] == tl || 2 * axam[2] == tl || (2 * (axam[q] + 1) == tl && axam[0] + axam[1] + axam[2] - axam[q] > 0)));
			if (ax != la){
				appendmoves(seq[n], axsl, tl, la);
				for(var i = 0; i < tl; i++)axsl[i] = 0;axam[0] = axam[1] = axam[2] = 0;moved = 0;la = ax;
			}
			axam[q]++;
			moved++;
			axsl[sl] = q + 1;
		}
		appendmoves(seq[n], axsl, tl, la);
	}
	flat2posit = new Array(12 * size * size);
	for(i = 0; i < flat2posit.length; i++)flat2posit[i] = -1;for(i = 0; i < size; i++){
		for (j = 0; j < size; j++) {
			flat2posit[4 * size * (3 * size - i - 1) + size + j] = i * size + j;flat2posit[4 * size * (size + i) + size - j - 1] = (size + i) * size + j;flat2posit[4 * size * (size + i) + 4 * size - j - 1] = (2 * size + i) * size + j;flat2posit[4 * size * (i) + size + j] = (3 * size + i) * size + j;flat2posit[4 * size * (size + i) + 2 * size + j] = (4 * size + i) * size + j;flat2posit[4 * size * (size + i) + size + j] = (5 * size + i) * size + j;
		}
	}
}
function scramblestring(n){
	var s="",j;
	for(var i=0;i<seq[n].length-1;i++){
		if(i!=0)s+=" ";
		var k=seq[n][i]>>2;
		j=k%6;k=(k-j)/6;
		if(k&&size<=5&&!mult){
			s+="dlburf".charAt(j);
		}
		else{
			if(size<=5&&mult){
				s+="DLBURF".charAt(j);
				if(k)s+="w";
			}
		else{
			if(k)s+=(k+1);
				s+="DLBURF".charAt(j);
			}
		}
	j=seq[n][i]&3;if(j!=0)s+=" 2'".charAt(j);
	}
	return s;
}