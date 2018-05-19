
window.onload = function () {
    var hidden_msg = document.getElementById("hidden-msg");
    var more_msg = document.getElementById("more-msg");

        more_msg.addEventListener("click",function () {
            if (hidden_msg.className === "hidden-msg"){
                hidden_msg.className = "appear-msg";
            }else if (hidden_msg.className === "appear-msg"){
                hidden_msg.className = "hidden-msg";
            }
        });



};
