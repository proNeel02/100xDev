

const Counter = () => {
  

    let count = 0;

    setInterval( () => {
        console.clear();
         console.log(count++);
    },1000);

}
Counter();
