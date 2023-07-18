let item  = {
    name : "One-Piece",
    rated : 'U and A',
    Totepi : 1070,
    crew:{
        luffy : 'leader',
        zoro : 'Swords men'
    },
    power :['Gum-Gum fruit','Enma-wano (blood line)'],
    sample(){
        console.log("Grand line (I'm a method!)")
    }
}
console.log(item.name)
item.author = 'Oda';
console.log(item)
console.log(item.crew.zoro)  //object inside an object

console.log(`luffy's power is ${item.power[0]} and he is The ${item.crew.luffy} of his crew`)
console.log(`Zoro is the ${item.crew.zoro} of luffys crew and he has the power of ${item.power[1]}`)

item.sample()