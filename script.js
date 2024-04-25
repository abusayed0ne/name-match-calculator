function nameCalculator(){
    const name1= document.getElementById("name1").value.trim();
    const name2= document.getElementById("name2").value.trim();
    if (name1==="" || name2 === ""){
        alert("Please Enter Both Name.");

    }else{
        const percentage =Math.floor(Math.random()*101);

        const result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2} 's name match: ${percentage}`;

        if(percentage<30){
            result.innerHTML += "<br> Not a Great Match. Keep Looking for a great match!"
        }else if(percentage >= 30 && percentage <70) {
            result.innerHTML += "<br> This is Potential. Give it a try!"
        }else{
            result.innerHTML += "<br> Great Match! Love is in the Air!"
        }
    }
}