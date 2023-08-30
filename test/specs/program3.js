//Divisible by 3 5 and 3and5 in an Array. 

const arr=[2,3,5,7,8,45,65,78]
arr.forEach(num=>{
    if(num%3==0 && num%5==0)
    {
        console.log(num+" is divisible by both 3 & 5");
    }
    else if(num%3==0 )
    {
        console.log(num+" is divisible by only 3 ");
    }
    else if(num%5==0 )
    {
        console.log(num+" is divisible by only 5 ");
    }

});

