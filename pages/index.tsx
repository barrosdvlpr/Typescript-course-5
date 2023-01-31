
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

////////////////////////////////////////////////

function generateId(seed: number) {
  // return seed + 5;
  return seed + "5";
}

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type Id = ReturnType<typeof generateId>;

lookupEntity(generateId(10));

function lookupEntity(id: string) {
  // query DB for entity by ID
}