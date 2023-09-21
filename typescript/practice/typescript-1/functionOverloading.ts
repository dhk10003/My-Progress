function addStuff(a: number, b: number): number;

function addStuff(a: string, b: string): string;

function addStuff(a:any, b:any): any{
    return a + b;
}

console.log(addStuff(1, 2));
console.log(addStuff('Hello', 'World'));
// console.log(addStuff(1, 'World')); // Error