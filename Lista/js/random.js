function getData() {
 
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => {

            let autor = data.results;
            // console.log(autor);

            //Obter valor dos dados
            let output = "<h2><center>Dados Cliente</center></h2>";

            //Obter loop de dados
            autor.forEach(function (lists) {
                output += `
                <div class="container">
                    <table class="table-random">
                        <tr class="list-group">
                           <th>Nome:${lists.name.first}</th>
                           <th>E-mail:${lists.email}</th> 
                        </tr>
                    </table>
                </div> `;
            });

            document.getElementById('output').innerHTML = output;
            console.log(data);

        });
};

getData()

