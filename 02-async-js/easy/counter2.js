
let count = 0;
let counter = () => {

     console.clear()
    ++count;
    console.log(count);
    setTimeout(counter,1000)
}

counter();