let productName = document.querySelector("#name");
let productPrice = document.querySelector("#price");
let selectCategory = document.querySelector("#selectCategory");
let descriptionProduct = document.querySelector("#descriptionProduct");
let rateProduct = document.querySelector("#rateProduct");
let productsList = document.querySelector("#productsList");
// let stockCheck = document.querySelector("#stockCheck").checked ? `<i class="fa-solid fa-check" style="color: #24db56;"></i>` : `<i class="fa-solid fa-x" style="color: #f2350d;"></i>`;

function addItem() {
    let stockCheck = document.querySelector("#stockCheck").checked ? `<i class="fa-solid fa-check" style="color: #24db56;"></i>` : `<i class="fa-solid fa-x" style="color: #f2350d;"></i>`;
    
    productsList.innerHTML += 
    `<tr>
    <td>${productName.value}</td>
    <td>${productPrice.value}</td>
    <td>${selectCategory.value}</td>
    <td>${descriptionProduct.value}</td>
    <td>${rateProduct.value}</td>
    <td>${stockCheck}</td>
    </tr>`;
    productName.value = "";
    productPrice.value = "";
    selectCategory.value = "category";
    descriptionProduct.value = "";
    rateProduct.value = "1";
    stockCheck.checked = false;

    // 
}
