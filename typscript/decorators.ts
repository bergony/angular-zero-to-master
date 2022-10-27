function MenuItem (itemID: string) {
    return (target: Function) => {
    target.prototype.id = itemID;}
}

@MenuItem("abc")
class Pizza {
    id: string | undefined;
}

@MenuItem("xys")
class Hamburger {
    id: string | undefined;
}

console.log(new Pizza().id);
console.log(new Hamburger().id);