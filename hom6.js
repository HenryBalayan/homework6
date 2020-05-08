/*
function uniqueArr(arr){

let set = new Set(arr)

if(arr.length==set.size){

   return true
}

else{
   return false
}

}
console.log(uniqueArr([1,2,3]));
console.log(uniqueArr([1,2,3,1]));
*/


/*
function quadraticSum(arr){
  
  arr=arr.filter(el=>el%2===0).map(el=>el*el).reduce((sum,el)=>sum+el,0);
   return arr ;
}
console.log(quadraticSum([1,4,2,3,5,8]))
*/
/*
function palindrone(str,str1){
  


  for(let i=str.length-1;i>=0;i--){
    
    str1=str1+str[i];
  }
  if(str1==str){
    return true;
  }
    return false;
  
}
console.log(palindrone("level level level",""))
*/


/*
function anagram(str,arr,newarr){
  
     for(let i of arr){
      let sum=0;
       let sum1=0;
   
    for(let j=0;j<str.length;j++){
     
         sum=sum+i.charCodeAt(j);
         sum1=sum1+str.charCodeAt(j);
     
          }
              if(sum1===sum){
          
               newarr.push(i)
            
              }
  }
   return newarr
}

console.log(anagram("level",["evlel","ehnry",  "SUEUHSHH","level"],[]))
*/





