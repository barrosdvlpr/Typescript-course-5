
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

////////////////////////////////////////////////

// const halloweenCostumeIdeas = ['😱 ', '👹', '🤖', '👻', '👽'];
// const halloweenCostumeIdeas:any = ['😱 ', '👹', '🤖', '👻', '👽'];
const halloweenCostumeIdeas:any = true;


halloweenCostumeIdeas.indexOf('👽');
halloweenCostumeIdeas.a.b.c.d;
halloweenCostumeIdeas();

function randomCostume(ideas: string[]) {
  return ideas[Math.floor(Math.random() * ideas.length)];
}

randomCostume(halloweenCostumeIdeas);



const human = { name: "John", age: 25};

function printAge(human: any) {
    console.log(human.age);
}



interface IComment {
  date: Date;
  message: string;
}

interface IDataService {
  getData(): unknown;
}

let service: IDataService;

const response = service.getData();
response.a.b.c.d;

if(typeof response === 'string') {
  console.log(response.toUpperCase());
} else if(isComment(response)){
  response.date;
} else {
  const numbers = <number[]>response;
  numbers.indexOf(1);
}

function isComment(type: any): type is IComment {
  return (<IComment>type).message !== undefined;
}