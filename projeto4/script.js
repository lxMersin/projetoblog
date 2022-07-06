var colorMode = document.getElementById("ColorBt")
colorMode.addEventListener("change", function(){
    //console.log('teste select' + colorMode.value)
    if(colorMode.value == 1){
        document.body.style.setProperty("--color0", "#000000")
        document.body.style.setProperty("--color5", "#fff")
        
        
    }else{
        document.body.style.setProperty("--color0", "#fff")
        document.body.style.setProperty("--color5", "#000000")
        document.geral.style.setProperty("--color5", "fff")
        document.footer.style.setProperty("--color0", "#000000")
        
    }
})


 
 

