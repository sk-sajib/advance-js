const arr = [ 2, -3, 4, -5, 6, 7]

// for ( let i = 0; i<arr.length; i++){
   

//     if(arr[i]>5){
//         break  // instant condition onujayi loop break kore felbe
//     }

//     console.log(arr[i])
// }

for ( let i = 0; i<arr.length; i++){
   

    if(arr[i]<3){
        continue  // Skip kore chole jabe
    }

    console.log(arr[i])
}