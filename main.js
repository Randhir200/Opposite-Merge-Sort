function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    mergeSort(arr,0,n-1)
    console.log(arr.join(" "))
    function mergeSort(arr, left, right){
        if(left===right){
            return;
        }
        let mid = Math.floor(left+(right-left)/2)
        mergeSort(arr, left, mid);
        mergeSort(arr, mid+1, right);
        merge(arr, left, right, mid);
    }
    
    function merge(arr, left, right, mid){
        let left_arr  =[];
        let right_arr =[];
        for(let i=left;i<=mid;i++){
            left_arr.push(arr[i])
        }
        for(let i=mid+1;i<=right;i++){
            right_arr.push(arr[i])
        }
        let p1 = 0;
        let p2 = 0;
        let low = left;
        while(p1<left_arr.length&&p2<right_arr.length){
            if(left_arr[p1] >= right_arr[p2]){
                arr[low] = left_arr[p1];
                p1++
            }else{
                arr[low] = right_arr[p2]
                p2++
            }
            low++
        }
        while(p1<left_arr.length){
            arr[low] = left_arr[p1];
            p1++
            low++
        }
        
        while(p2<right_arr.length){
            arr[low] = right_arr[p2]
            p2++
            low++
        }
    }
 }
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }
 
 