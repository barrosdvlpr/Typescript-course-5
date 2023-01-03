
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}


// population of africa: 1287269147
// population of africa: 1,287,269,147

// var africaPop = 1287269147;
// const africaPop = 1_2_8_7_269_147.123_456;

// class AmountInput {
  //   private static MAX_ALLOWED = 99_999_999;
  //   amount: number = 0;
// }
  
const africaPop = 1_287_269_147;
class AmountInput {
  private static MAX_ALLOWED = 99_999_999;

  amount: number = 0;

showTooltip() {
  //show tooltip
  setTimeout(() => {
    //hide tooltip
  }, 2_500);
}

  formatMillion() {
    return this.amount / 1_000_000 + "M";
  }
}
