function getvalue(event) {
    console.log(event.target.elements.fname.value);
    console.log(event.target.elements.lname.value);

    // const firstName = document.getElementById('form1').elements.namedItem('fname').value;
    // const lastName = document.getElementById('form1').elements.namedItem('lname').value;

    // console.log("First name:", firstName);
    // console.log("Last name:", lastName);

    event.preventDefault();
}