// store the numbers
let numbers:number[] =[1,2,3,4,5,6,7,8,9];
// loop through array
numbers.forEach(Number=>{
    let suffix:string="th";
    if(Number===1){suffix="st"}
    else if(Number===2){suffix="nd"}
    else if(Number===3){suffix=="rd"}
    // print ordinal numbers
{console.log(`${Number}${suffix}`)}
});