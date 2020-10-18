/*eslint-env browser*/
/*eslint-env browser*/

function displayMenu() {
    "use strict";
    window.console.log("The Product Inventory Management System\n\n");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update an existing product’s inventory");
    window.console.log("exit - exit the system\n\n");
}

function displayInventory(inventory) {
    "use strict";
    var i;
    for (i = 0; i < inventory.length; i += 1) {
        window.console.log(inventory[i][0] + " " + inventory[i][1] + " (" + inventory[i][2] + ") $" + inventory[i][3] + "\n");
    }
    window.console.log("");
}

function updateInventory(inventory) {
    "use strict";
    var skuToUpdate, quantityToUpdate, j;
    skuToUpdate = window.prompt("Enter the sku number");
    quantityToUpdate = window.prompt("Enter the quantity to be updated");
    skuToUpdate = parseInt(skuToUpdate, 10);
    quantityToUpdate = parseInt(quantityToUpdate, 10);
    
    for (j = 0; j < inventory.length; j += 1) {
        if (inventory[j][0] === skuToUpdate) {
            inventory[j][2] += quantityToUpdate;
        }
    }
    displayInventory(inventory);
}

function main() {
    "use strict";
    var inventory, sku, product, cost, quantity, command;
    
    displayMenu();
    inventory = [[1023, "Sneakers", 25, 30.50], [8129, "Brogues", 11, 35.00], [1115, "Sliders", 19, 10.99], [7834, "Heels", 33, 25.50], [4545, "Flip-flops", 10, 7.99]];
    
    while (true) {
        command = window.prompt("Select a command");
        if (command !== null) {
            if (command === "view") {
                displayInventory(inventory);
            } else if (command === "update") {
                updateInventory(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("Not a valid command");
            }
        } else {
            break;
        }
    }
    window.console.log("Inventory closed");
}
    
main();







