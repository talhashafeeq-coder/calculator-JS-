copar = (s) => {
    let test = /^[0-9]{1,}$/;
    if (s.value.match(test)) {
        document.getElementById('err').innerHTML = "Output :"
      // Assuming your form has an ID, e.g., "myForm"
      btnDn(false)

    } else {
        document.getElementById('err').innerHTML = "Some Thing Wrong"
      btnDn(true)

    }
    if (s.value == "") {
        document.getElementById('err').innerHTML = "Output :"
    }
};
btnDn =(action)=>{
    var form = document.getElementById("frm");

    // Get all buttons within the form
    var buttons = form.getElementsByTagName("button");

    // Disable all buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = action;
    }
}

multi = () => {
    var num1 = document.getElementById('set1');
    var num2 = document.getElementById('set2');
    var mult = document.getElementById('result').innerHTML =
        parseInt(num1.value) * parseInt(num2.value);


}
sub = () => {
    var num3 = document.getElementById('set1');
    var num4 = document.getElementById('set2');
    var sub = document.getElementById('result').innerHTML =
        parseInt(num3.value) - parseInt(num4.value);
};
add = () => {
    var num5 = document.getElementById('set1');
    var num6 = document.getElementById('set2');
    var sub = document.getElementById('result').innerHTML =
        parseInt(num5.value) + parseInt(num6.value);
};
div = () => {
    var num7 = document.getElementById('set1');
    var num8 = document.getElementById('set2');
    var sub = document.getElementById('result').innerHTML =
        parseInt(num7.value) / parseInt(num8.value);
};
per = () => {
    var num9 = document.getElementById('set1').value;
    var num99 = document.getElementById('set2').value;
    var percent = (num9 / num99) * 100;
    var per = document.getElementById('result').innerHTML = percent;
    // var sub = document.getElementById('result').innerHTML =percent.toFixed(2);
};
madulas = () => {
    var num7 = document.getElementById('set1');
    var num8 = document.getElementById('set2');
    var sub = document.getElementById('result').innerHTML =
        parseInt(num7.value) % parseInt(num8.value);
};