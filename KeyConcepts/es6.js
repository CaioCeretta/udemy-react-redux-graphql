// ES Class
class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }

  attack() {
    return 'attack with ' + this.weapon
  }
}



// const peter = new Elf('Peter', 'stones')
// console.log(peter instanceof Elf)
// console.log(peter.attack())
// const sam = new Elf('Samuel', 'fire')
// console.log(sam.attack())

//Inheritance lesson

// const fiona = new Elf('Fiona', 'ninja stars')
//This would copy fiona
// const ogre = {...fiona}

// //This would be an empty object
// console.log(ogre.__proto__)

// // This one is an empty elf
// console.log(fiona.__proto__)

/*On the ogre i've cloned an object but it isn't anymore an Elf as fiona, so this would return false, they are not the same
object, they're not referencing the same space in memory, so we loss the prototype or inheritance chain
console.log(fiona === ogre), so this wouldn't work*/

// console.log(ogre.attack())





class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    console.log(this)

    this.type = type
  }


}



const Bipaboporopó = new Elf('Bipaboporopó', 'ninja stars')
 
const ogre = { ...Bipaboporopó }

console.log(ogre.__proto__)
console.log(Bipaboporopó.__proto__)
console.log(Bipaboporopó)
 
// console.log(ogre.attack())

const Doby = new Elf('Doby', 'cloth', 'house')

console.log(Doby.attack())


class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
  }

  makeFort() {
    return 'strongest fort made in the world'
  }
}

const Shrek = new Ogre('Shrek', 'Club', 'green')

console.log(Shrek.makeFort())



