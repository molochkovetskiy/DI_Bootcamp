let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

// displayGroceries(groceries);

const cloneGroceries = () => {
    let user = client;
    client = "Betty"; // The 'user' variable is assigned the value of 'client', so changing the
    // 'client' variable later doesn't affect the 'user' variable. Because string is a primitive type.

    // console.log(client);
    // console.log(user);

    let shopping = groceries; 
    groceries.totalPrice = "35$"; // The 'shopping' variable is assigned a reference to the same object as
    // the 'groceries' variable. When you modify properties of the 'groceries' object, you are modifying
    // the same object referred to by the 'shopping' variable. This is because objects in JavaScript are passed by reference.

    // console.log(groceries.totalPrice);
    // console.log(shopping.totalPrice);

    groceries.other.paid = false; // Similarly, when you modify the 'other' object within the 'groceries' object,
    // you're modifying the same object as in the 'shopping' object.

    // console.log(groceries.other.paid);
    // console.log(shopping.other.paid);
};

cloneGroceries();