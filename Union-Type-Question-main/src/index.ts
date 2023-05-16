type Circle = {
  kind: "circle";
  radius: number;
};
type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};
type Shape = Rectangle | Circle;

function getArea(shape: Shape) {
  let result: number = 0;
  shape.kind === "circle" &&
    (result = Math.round(shape.radius * shape.radius * Math.PI));
  shape.kind === "rectangle" && (result = shape.width * shape.height);
  return result;
}
export { getArea };

console.log(getArea({ kind: "circle", radius: 5 }));
console.log(getArea({ kind: "rectangle", width: 3, height: 5 }));
