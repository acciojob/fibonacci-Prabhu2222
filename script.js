function fibonacci(num) {
// your code here
	if(num==1) return 0;
	if(num==2) return 1;

	let a=0;
	let b=1;
  let ans=-1;
	for(let i=3;i<=num;i++){
	ans=a+b;
	a=b;
	b=ans;
		if(i==num) return ans;
	}
}

module.exports = fibonacci;
