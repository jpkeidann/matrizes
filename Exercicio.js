
let mat1 = []

for (let i = 0; i < 5; i++) {
    mat1[i] = []
    for (let j = 0; j < 5; j++) {
        if(i % 2 === 1){
            mat1[i][j] = 3
        }else{
            mat1[i][j] = 5
        }
    }
}

console.table(mat1)
console.log('-----------------------------')

let mat2 = []

for (let i = 0; i < 5; i++) {
    mat2[i] = []
    for (let j = 0; j < 5; j++) {
        if(i % 2 === 0){
            mat2[i][j] = 7
        }else{
            mat2[i][j] = 3
        }
    }
}

console.table(mat2)
console.log('-----------------------------')
