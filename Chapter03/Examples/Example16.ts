const outer = (): void => {
    const hello = 'Hello';
    let world;
    const inner = (): void => {
        const world = 'world!';
        console.log(`${hello} ${world}`);
    }
    inner();

    console.log(`${hello} ${world}`);
}

outer();
