function submit() {
    var name_val= document.getElementById("name1").value;
    document.getElementById("hello").textContent = name_val;
    var about_val=document.getElementById("about").value;
    document.getElementById("aboutme").textContent= about_val;
    var add_val=document.getElementById("add").value;
    document.getElementById("addre").textContent= add_val;
    var conc_val=document.getElementById("conc").value;
    document.getElementById("conme").textContent= conc_val;
    var college_val=document.getElementById("coll").value;
    document.getElementById("colme").textContent= college_val;


    
}