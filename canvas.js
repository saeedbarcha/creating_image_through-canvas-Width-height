window.addEventListener("load", ()=>{
   let subBtn= document.getElementById("subBtn");
   subBtn.addEventListener("click", (event)=>{
     event.preventDefault()
     console.log("hello")
     let height=document.getElementById("inputHeight").value
     let width=document.getElementById("inputWidth").value
     let color=document.getElementById("inputColor").value

     console.log(height)
     console.log(width)

     const canvas = document.getElementById("canvas");
     canvas.width=width;
     canvas.height=height;
     const ctx = canvas.getContext("2d");
 
    //  let a=100;
     ctx.fillStyle = color;
     ctx.fillRect(0, 0, height, width);

   })

    // const canvas = document.getElementById("canvas");
    // const ctx = canvas.getContext("2d");

    // let a=100;
    // ctx.fillStyle = "green";
    // ctx.fillRect(0, 0, 100, 100);

    // ctx.fillStyle = "red";
    // ctx.fillRect(100, 100, 50, 50);
    // console.log("hello")
   

})