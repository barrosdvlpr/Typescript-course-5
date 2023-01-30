
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

interface IPet {
  name: string;
  age: number;
  favoritPark?: string;
}

type ReadonlyPet = {
  +readonly [K in keyof IPet]-?: IPet[K];
}

const pet:IPet = {name: 'Buttons', age: 5};
const readonlyPet: ReadonlyPet = {
  name: 'Buttons', 
  age: 5,
  favoritPark: 'central'
}

pet.age = 6;
readonlyPet.age = 6;