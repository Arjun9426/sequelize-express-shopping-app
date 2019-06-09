

$(function () {
    let product_list=$('#product-list')

    fetchproducts(function (data){
        product_list.empty()
        for(item of data){
            product_list.append(createcard(item))
        }
    })

})
