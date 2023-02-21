function gerar(){
    var red=parseInt(Math.random()*(256-1)+ 1)
    var Green=parseInt(Math.random()*(256-1)+ 1)
    var blue=parseInt(Math.random()*(256-1)+ 1)
    document.getElementById("container").style=`background-color: rgb(${red}, ${Green}, ${blue})`
    alert(`rgb(${red}, ${Green}, ${blue})`)
    
}

