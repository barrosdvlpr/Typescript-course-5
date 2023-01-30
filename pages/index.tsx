
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

type Pet = IDog | ICat;

interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

function feedAnimal(animal: IAnimal) {
  animal.eat();
}

class Animal implements IAnimal {
  age = 0;

  eat() {
    console.log("nom..nom..");
  }

  speak() {
    return "roar";
  }
}

interface IDog {}
interface ICat {}

export {};

////////////////////////

interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

type AnimalTypeAlias = {
  age: number;
  eat(): void;
  speak(): string;
};

let animalInterface: IAnimal;
let animalTypeAlias: AnimalTypeAlias;

animalInterface = animalTypeAlias;

export {};

////////////////////////

type Eat = (food: string) => void;
type AnimalList = string[];

interface IEat {
  (food: string): void;
}

interface IAnimalList {
  [index: number]: string;
}

/////////////////////////

type Cat = IPet & IFeline;

interface IPet {
  pose(): void;
}
interface IFeline {
  nightvision: boolean;
}



type Cat = IPet & IFeline;

interface ICat extends IPet, IFeline {

}

////////////////////////

type Pet = {
  pose(): void;
};

interface IFeline {
  nightvision: boolean;
}

interface ICat extends IFeline, Pet {

}

type Cat = IFeline & Pet;

class HouseCat implements IFeline, Pet {

}
export {};

///////////////////////////

type PetType = IDog | ICat;

interface IPet extends PetType {

}

class Pet implements PetType {

}

interface IDog {}
interface ICat {}



type Foo = {
  a: string;
}

type Foo = {
  b: string;
}

let foo: Foo;

/////////////////////////////

import * as $ from "jquery";

$.fn.extend({
  hideChildren: function() {
    // ...
  }
});

$("test").hideChildren();

interface JQuery {
  hideChildren(): JQuery;
}