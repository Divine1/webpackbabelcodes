console.log("from home")

let submitform = ()=>{
    console.log("in submitform")
    console.log("jquery$ ",$("#firstname").val())

    console.log("jquery ",jQuery("#firstname").val())
    let firstname = document.getElementById("firstname").value;
    console.log("firstname ",firstname)
}
window.submitform =submitform;
module.exports =submitform;