//Duplicate Element of Occurrence in an Array.

const arr=[1,2,3,4,3,4,6,7,6,6,8]
for(let i=0;i<arr.length;i++)
{
    let count=0;
    for(let j=0;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            if(j<i)
            {
                break;
            }
            count++;
        }
    }
    if(count>1)
    {
        console.log(arr[i]);
    }
}