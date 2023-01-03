
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

class Library {
  // titles: string[]; // string[] !== undefined
  // titles: string[] | undefined; 

  // titles: string[] = [
  //   "what if?",
  //   "So"
  // ]

  // titles: string[]

  // titles!: string[]

  // constructor() {}

  // constructor() {
  //   this.titles = [
  //     "what if?",
  //     "So"
  //   ];
  // }

  // constructor(underRenovation: boolean) {
  //   if(!underRenovation){
  //   this.titles = [
  //     "what if?",
  //     "So"
  //   ];
  //   } else {
  //   this.titles = []
  //   }
  // }



  titles!: string[];
  address: string = "1 Duck Lane";
  isPUblic: boolean;

  constructor() {
    this.isPublic = true;
  }

}
const library = new Library();

// sometime later & elsewhere in our codebase..

const shortTitles = library.titles.filter(
  title => title.length < 5
);

// if(library.titles){
//   const shortTitles = library.titles.filter(
//     title => title.length < 5
//   );
// }