var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
function isPresent2d(arr2d, value) {
    for (var i = 0; i < arr2d.length; i++) {
        for (var x = 0; x < arr2d[i].length; x++) {
            if(arr2d[i][x] == value) {
                console.log("true");
                return true;
            } 
        }
    }console.log("false");
    return false;
}
isPresent2d(arr2d,0);
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

