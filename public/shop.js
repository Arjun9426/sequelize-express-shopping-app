function fetchproducts(callback){
    $.get('/api/products',(data)=>{
        callback(data)
    })
}

function addproduct(name,manufacturer,price,callback){
    $.post('/api/products',{
        name: name,
        manufacturer: manufacturer,
        price: price
    },(data)=>{
        callback(data)
    })
}

function createcard (item){
    return $(
        `
        <div class="col-4 card m-2 p-2">
            <h4 class="product-name">${item.name}</h4>
            <div class="product-manufacturer">${item.manufacturer}</div>
            <div class="row">
            <div class="col m-3 p-2">Rs. ${item.price}</div>
            <button class="btn btn-primary col m-3 p-2">buy</button> 
            </div>
        </div>
        `
    )
}

