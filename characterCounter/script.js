const warning = document.querySelector(".warning");
const charcount = document.getElementById("charcount");
const message = document.getElementById("message");
const clearBtn = document.getElementById("clearBtn")

message.addEventListener("input", () => {
    const maxCount = 200;
    const remaining = maxCount - message.value.length;

    charcount.textContent = `${message.value.length}/200 characters ${remaining} remaining`;

    if (message.value.length >= maxCount) {
        warning.style.display = "block";
        charcount.style.color = "red";
    }
    else if (message.value.length >= 150) {
        charcount.style.color = "orange";
        warning.style.display = "none";
    } else {
        warning.style.display = "none";
        charcount.style.color = "#666";
    }

});

clearBtn.addEventListener("click", () =>{
    message.value = "";
    message.dispatchEvent(new Event("input"));
    charcount.textContent = "0/200 characters";
});

