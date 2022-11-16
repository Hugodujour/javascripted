let str = '';
let a = prompt("Bienvenue dans ma super pyramide!\nCombien d'étages veux-tu ?")

for(i = 0; i <= a; i++) {
	for(j = 1; j <= i; j++) {
		str += '#'
	}
	str += '\n';
}

console.log(str)