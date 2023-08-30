async function execute()
{
    const promise=new Promise((resolve,reject)=>{
        let arr=['a','b','c','d','e','f'];
        let char='e';
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]==char)
            {
                resolve(`found`);
            }
            else
            {
                reject(`not found`);
            }
        }
    })

   await promise.then((msg)=>{console.log(`${msg}`)}).catch((msg)=>{console.log(`${msg}`)});
}

execute();