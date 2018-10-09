var productInventory = {};
productInventory.products = [
    {Name: "Desktop", Description: "Dell Desktop", Price: 599, Quantity: 2},
    {Name: "Laptop", Description: "HP Laptop", Price: 799, Quantity: 1},
    {Name: "Pad", Description: "Samsung Pad", Price: 499, Quantity: 3}
];

function createDivs() 
{
    let output = "";
    for(var i = 0; i < productInventory.products.length; i++)
    {
        output += "<div class='product'>";
        for(var key in productInventory.products[i])
        {
            output += key + " : " + productInventory.products[i][key] + "<br/>";
        }
        output += "</div>";
    }
    document.getElementById("main").innerHTML = output;
}