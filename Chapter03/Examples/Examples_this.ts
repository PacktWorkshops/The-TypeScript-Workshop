const arrayFilter = {
    max: 3,
    filter: function(...numbers: number[]) {
        return numbers.filter(val => {
            return val <= this.max;
        });
    }
}
console.log(arrayFilter.filter(1, 2, 3, 4));
