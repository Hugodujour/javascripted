
let n = -1;
while(n < 0){
	n = prompt("De quel nombre veux-tu calculer la factorielle ?")
}

function fact(n)
{
	if (n === 0)
	{
		return 1;
	}
	return n * fact(n-1);
}


let output = "Le résultat est : "+ fact(n);

console.log(output);
