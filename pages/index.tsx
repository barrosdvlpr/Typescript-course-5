
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

////////////////////////////////////////////////

interface StringContainer {
  value: string;
  format(): string;
  split(): string[];
}

interface NumberContainer {
  value: number;
  nearestPrime: number;
  round(): number;
}

type Item<T> = {
  id: T,
  container: any;
};

// let item: Item<string> = {
//   id: "a23d",
//   container: null
// };

let item: Item<number> = {
  id: "a23d",
  container: null
};

type Item<T> = {
  id: T,
  container: T extends string ? StringContainer : NumberContainer;
};



type ArrayFilter<T> = T extends any[] ? T : never;

type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;


interface Book {
  id: string;
  tableOfContents: string[];
}

interface Tv {
  id: number;
  diagonal: number;
}

interface IItemService {
  getItem<T>(id: T): Book | Tv;
}

let itemService: IItemService; 

interface IItemService {
  getItem(id: string): Book;
  getItem(id: number): Tv;
  getItem<T>(id: T): Book | Tv;
}

// interface IItemService {
//   getItem<T>(id: T): T extends string ? Book : Tv;
// }

interface IItemService {
  getItem<T extends string | number>(id: T): T extends string ? Book : Tv;
}

let itemService: IItemService;

const book = itemService.getItem("10");
const tv = itemService.getItem(true);