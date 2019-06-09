$(function(){

    let productname=$("#product-name")

    let manufaturer=$("#manufacturer")

    let price=$("#product-price")

    let btnid=$("#add-button")
    btnid.click(function(){
        addproduct(productname.val(),manufaturer.val(),price.val(),
         function(data){
             window.alert(data.name + " added to database!  ")
        })
    })
})