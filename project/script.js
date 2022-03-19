
let body = document.querySelector("body");
async function validate() {
    let sno = document.myform.symbol.value;
    let date = document.myform.dob.value;
    if (sno == "" || date == "") {
        alert("Please enter all details mentioned");
    }
    else {

        console.log("Change");




        body.innerHTML = `
            <div class="img">
            <img class="imgg"  src="/project/results.png" alt=""   />
            </div>
            `;

    }

}

async function change() {

    await document.querySelector(".submit").addEventListener("click", function () {


        body.innerHTML = `
        <div class="img">
        <img class="imgg"  src="results.png" alt=""   />
        </div>
        `;
    });
}
