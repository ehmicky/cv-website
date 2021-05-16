import avg from "math-avg";

export async function onRequest(ev) {
  const number = avg([2, 4])
  console.log(`${number} ${Date.now()}`);
}
