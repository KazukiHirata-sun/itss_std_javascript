// console.log(process.argv.slice(2).length);
// printf(str(i+1)+”番目" + argv[i+1] + "です" )
var i = process.argv.length - 2;
while (i>0){
	console.log((i) + "番目は" + process.argv[i+1] + "です");
	i--;
}