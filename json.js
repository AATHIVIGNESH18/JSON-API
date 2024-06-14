let json1 = "vicky"
let json2 = 4
let json3 = true
let json4 = [4,5,6,7]
let json5 = {
    "Name":"Aa",
    "Age":22
}
let json6 = `[
    {
        "Name":"Bb",
        "Age":21
    },
    {
        "Name":"Cc",
        "Age":25
    },
    {
        "Name":"Sm",
        "Age":21
    }
]`

let parsed = JSON.parse(json6)
//console.log(parsed[0].Age)
console.log(JSON.stringify(parsed))


