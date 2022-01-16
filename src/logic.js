let x = "x"
let o = "o"

let map = [x, o, '', 
           o ,o, x, 
           x ,o, '' 
        ]

let winner;

for (let x = 0; x < 9; x = x + 3){
    if (map[x] !== '' && map[x] === map[x+1] && map[x] === map[x+2]) return map[x]
}

for (let y = 0; y < 3; x = y++){
    if (map[y] !== '' && map[y] === map[y+3] && map[y] === map[y+6]) return map[y]
}


if (map[0] !== '' && map[0] === map[4] && map[0] === map[8]) return map[4]
else if (map[2] !== '' && map[2] === map[4] && map[2] === map[6]) return map[4]

