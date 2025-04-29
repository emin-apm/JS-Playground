// function CodelandUsernameValidation(str) {
//   // __define-ocg__ Validation using flags
//   let varFiltersCg = {
//     length: false,
//     start: false,
//     only: false,
//     end: false,
//   };

//   if (str.length >= 4 && str.length <= 25) {
//     varFiltersCg.length = true;
//   }

//   if (/^[A-Za-z]/.test(str)) {
//     varFiltersCg.start = true;
//   }

//   if (/^[A-Za-z0-9_]+$/.test(str)) {
//     varFiltersCg.only = true;
//   }

//   // Use str.length to get the last character
//   if (str[str.length - 1] !== "_") {
//     varFiltersCg.end = true;
//   }

//   let varOcg = false;

//   if (
//     varFiltersCg.length &&
//     varFiltersCg.start &&
//     varFiltersCg.only &&
//     varFiltersCg.end
//   ) {
//     varOcg = true;
//   }

//   return varOcg.toString();
// }

// console.log(CodelandUsernameValidation("valid_user")); // "true"
// console.log(CodelandUsernameValidation("in_valid_")); // "false"
// console.log(CodelandUsernameValidation("123abc")); // "false"
// console.log(CodelandUsernameValidation("abc")); // "false"

// function OffLineMinimum(strArr) {

//   let filteredNumbers=[];
//   let result=[];
//   let smallestNumber;

// for(let i=0;i<strArr.length;i++){
// let current = strArr[i];
// if(current==="E"){
//   if(filteredNumbers.length>0){
//     smallestNumber=filteredNumbers[0];
//     for(let j=1;j<filteredNumbers.length;j++){
//       if(filteredNumbers[j]<smallestNumber){
//         smallestNumber=filteredNumbers[j]
//       }
//     }
//     result.push(smallestNumber);

//     for(let k=0;k<filteredNumbers.length;k++){
//       if(filteredNumbers[k]===smallestNumber){
//         filteredNumbers.splice(k,1);
//         break;
//       }
//     }
//   }
// }else{
//   filteredNumbers.push(current)
// }
// }

//   return result.join(',');

// }

// function Consecutive(arr) {

//   let sorted=arr.sort((a,b)=>a-b);
//   let smallest=Number(sorted[0]);
//   let largest=Number(sorted[sorted.length-1]);

//   let calc=largest-smallest+1;

//   return calc-arr.length;

//   }

// function StockPicker(arr) {
//   // Set the first element as the starting "buy price" (lowest price so far)
//   let varOcg = arr[0];
//   let maxProfit = 0; // Start with a profit of 0, meaning no profit yet

//   // Go through the array of stock prices
//   for (let i = 1; i < arr.length; i++) {
//     // Calculate profit if we sold on day i
//     let profit = arr[i] - varOcg;

//     // If the profit is bigger than what we had before, update maxProfit
//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }

//     // Update varOcg to the new lowest price if needed
//     if (arr[i] < varOcg) {
//       varOcg = arr[i];
//     }
//   }

//   // Return the maximum profit found (could be 0 if no profit was possible)
//   return maxProfit;
// }

// // Test cases
// console.log(StockPicker([10, 12, 4, 5, 9])); // ➜ 5
// console.log(StockPicker([14, 20, 4, 12, 5, 11])); // ➜ 8
// console.log(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15])); // ➜ 16
// console.log(StockPicker([10, 9, 8, 2])); // ➜ 0 (no profit, prices are always decreasing)

// const data = JSON.parse("[{\"GroupName\":\"Appraisal\",\"Label\":\"Appraisal Type As Stabilized\",\"IdUser\":null,\"Id\":10917},{\"GroupName\":\"General\",\"Label\":\"City\",\"IdUser\":null,\"Id\":10875},{\"GroupName\":\"General\",\"Label\":\"Property Type\",\"IdUser\":null,\"Id\":10882},{\"GroupName\":\"CollateralUDF\",\"Label\":\"second UDF retest\",\"IdUser\":null,\"Id\":10979},{\"GroupName\":null,\"Label\":\"Omg this doesn\'t have a group name\",\"IdUser\":null,\"Id\":99999},{\"GroupName\":\"CollateralUDF\",\"Label\":\"Map Date\",\"IdUser\":null,\"Id\":10950},{\"GroupName\":\"General\",\"Label\":\"Value Actual Cost\",\"IdUser\":null,\"Id\":10895},{\"GroupName\":\"General\",\"Label\":\"Value Land Value\",\"IdUser\":null,\"Id\":10893},{\"GroupName\":\"Appraisal\",\"Label\":\"Appraisal Order Date\",\"IdUser\":null,\"Id\":10931},{\"GroupName\":\"General\",\"Label\":\"Value As Complete\",\"IdUser\":null,\"Id\":10891},{\"GroupName\":\"CollateralUDF\",\"Label\":\"Community No.\",\"IdUser\":null,\"Id\":10976}]");

// const JSONTransformation = (input) => {

// let filteredGroups={};
// let groupName='General'

// filteredGroups[groupName]=[];

// for(let item of input){
//   let group=item.GroupName||groupName;

//   if(!filteredGroups[group]){
//     filteredGroups[group]=[];
//   }

//   filteredGroups[group].push(item)

// }

// return filteredGroups

// };
