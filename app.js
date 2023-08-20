let api = "https://api.escuelajs.co/api/v1/products";

async function callback(){
    let fecthed = await fetch(api);
    let data = await fecthed.json();
    let show_data = "";
    let test = "Hello";
    data.map((product) =>{
        show_data +=
            `
            <div class="container">
                <div class="box">
                    <div class="Image">
                        <img src = ${product.images}>
                    </div>
                    <p class="title"> ${product.title} </p>
                    <div class="main_description">
                        <p class="description"> ${product.description}</div>
                    </div>
                </div>
            </div>
            
            
            `
    });
    console.log(data);
    document.getElementById("product").innerHTML = show_data;
}

callback();