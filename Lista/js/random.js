

function getData() {
 
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => {
           
            console.log(data);

        });
};

getData()

/*(async function () {
    const users = await fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => {
        

      });
  
    console.log({ users });
  })();*/