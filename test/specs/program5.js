//Find Maximum Number in an Array. 
const arr=[2,4,55,6,7,45,50,100]
let max=arr[0];
for(let i=1;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i]
    }
}
console.log(max);