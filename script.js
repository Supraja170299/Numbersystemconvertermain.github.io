'use strict'
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var swapBtn = document.getElementById('swap');
var show = document.getElementById('display');
var convertBtn = document.getElementById('convert');
var response = document.getElementById('result1');
var flag = false;

var option_from, option_to;



convertBtn.addEventListener('click', myResult)



option_from = inputType.value;
option_to = resultType.value;
swapBtn.addEventListener('click', swapType);

function swapType() {
    option_from = resultType.value;
    option_to = inputType.value;
    //inputType.value = option_from;
   // resultType.value = option_to;
    console.log("swapped");
    flag = (!flag)
    myResult();
}

function myResult() {

    if (flag) {
        option_from = resultType.value;
        option_to = inputType.value;
        // show.innerHTML = "worked";
        if (option_from === "decimal" && option_to === "decimal") {

            response.innerText = input.value;
            show.innerText = `Converting from ${option_from} to ${option_to}`
        } else if (option_from === "decimal" && option_to === "hexadecimal") {


            response.innerText = Number(input.value).toString(16);
            show.innerText = `Converting from ${option_from} to ${option_to}`

        } else if (option_from === "decimal" && option_to === "binary") {

            response.innerText = Number(input.value).toString(2);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }
        else if (option_from === "decimal" && option_to === "octal") {

            response.innerText = Number(input.value).toString(8);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }



        if (option_from === "hexadecimal" && option_to === "hexadecimal") {

            show.innerText = `Converting from ${option_from} to ${option_to}`

        } else if (option_from === "hexadecimal" && option_to === "decimal") {

            response.innerText = parseInt(Number(input.value), 16);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        } else if (option_from === "hexadecimal" && option_to === "binary") {
            let value = ("00000000" + (parseInt(input.value, 16)).toString(2));

            response.innerText = value.slice(value.length - 8);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }
        else if (option_from === "hexadecimal" && option_to === "octal") {
            response.innerText = parseInt(input.value, 16).toString(8);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }


        if (option_from === "binary" && option_to === "hexadecimal") {

            response.innerText = parseInt(input.value, 2).toString(16);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        } else if (option_from === "binary" && option_to === "decimal") {

            response.innerText = parseInt(input.value, 2).toString(10);
            show.innerText = `Converting from ${option_from} to ${option_to}`

        } else if (option_from === "binary" && option_to === "binary") {

            response.innerText = input.value;
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }
        else if (option_from === "binary" && option_to === "octal") {
            response.innerText = parseInt(input.value, 2).toString(8);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }


        if (option_from === "octal" && option_to === "hexadecimal") {

            response.innerText = parseInt(input.value, 8).toString(16);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        } else if (option_from === "octal" && option_to === "decimal") {

            response.innerText = parseInt(input.value, 8).toString(10);
            show.innerText = `Converting from ${option_from} to ${option_to}`

        } else if (option_from === "octal" && option_to === "binary") {
            let value = ("00000000" + (parseInt(input.value, 16)).toString(2));
            response.innerText = value.substring(value.length - 8);
            show.innerText = `Converting from ${option_from} to ${option_to}`

        }
        else if (option_from === "octal" && option_to === "octal") {
            response.innerText = input.value;
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }

    }

    else {
        option_from = inputType.value;
        option_to = resultType.value;
        if (option_from === "decimal" && option_to === "decimal") {

            response.innerText = input.value;

            show.innerText = `Converting from ${option_from} to ${option_to}`
        } else if (option_from === "decimal" && option_to === "hexadecimal") {


            response.innerText = Number(input.value).toString(16);
            show.innerText = `Converting from ${option_from} to ${option_to}`

        } else if (option_from === "decimal" && option_to === "binary") {

            response.innerText = Number(input.value).toString(2);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }
        else if (option_from === "decimal" && option_to === "octal") {

            response.innerText = Number(input.value).toString(8);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }



        if (option_from === "hexadecimal" && option_to === "hexadecimal") {

            response.innerText = input.value;
            show.innerText = `Converting from ${option_from} to ${option_to}`

        } else if (option_from === "hexadecimal" && option_to === "decimal") {

            response.innerText = parseInt(Number(input.value), 16);
            show.innerText = `Converting from ${option_from} to ${option_to}`

        } else if (option_from === "hexadecimal" && option_to === "binary") {
            let value = ("00000000" + (parseInt(input.value, 16)).toString(2));

            response.innerText = value.slice(value.length - 8);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }
        else if (option_from === "hexadecimal" && option_to === "octal") {
            response.innerText = parseInt(input.value, 16).toString(8);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }


        if (option_from === "binary" && option_to === "hexadecimal") {

            response.innerText = parseInt(input.value, 2).toString(16);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        } else if (option_from === "binary" && option_to === "decimal") {

            response.innerText = parseInt(input.value, 2).toString(10);
            show.innerText = `Converting from ${option_from} to ${option_to}`

        } else if (option_from === "binary" && option_to === "binary") {

            response.innerText = input.value;
            show.innerText = `Converting from ${option_from} to ${option_to}`

        }
        else if (option_from === "binary" && option_to === "octal") {
            response.innerText = parseInt(input.value, 2).toString(8);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }


        if (option_from === "octal" && option_to === "hexadecimal") {

            response.innerText = parseInt(input.value, 8).toString(16);
            show.innerText = `Converting from ${option_from} to ${option_to}`
        } else if (option_from === "octal" && option_to === "decimal") {

            response.innerText = parseInt(input.value, 8).toString(10);
            show.innerText = `Converting from ${option_from} to ${option_to}`

        } else if (option_from === "octal" && option_to === "binary") {
            let value = ("00000000" + (parseInt(input.value, 16)).toString(2));
            response.innerText = value.substring(value.length - 8);
            show.innerText = `Converting from ${option_from} to ${option_to}`

        }
        else if (option_from === "octal" && option_to === "octal") {
            response.innerText = input.value;
            show.innerText = `Converting from ${option_from} to ${option_to}`
        }
    }









}