var qilinc1Hundurluk;
var qilinc2Hundurluk;
var g;


setInterval(()=>{

    qilinc1Hundurluk=Math.floor(Math.random()*10)+30;
    g=Math.floor(Math.random()*20)+20;
    document.getElementById("qilinc1").style.height=qilinc1Hundurluk+"%";
    document.getElementById("qilinc2").style.top=qilinc1Hundurluk+g+"%";
    document.getElementById("qilinc2").style.height=100-(qilinc1Hundurluk+g)+"%";

},4000)

var elem=document.getElementById("gemi");

//cazibə funksiyası

setInterval(()=>{
    var g=parseInt(window.getComputedStyle(elem).getPropertyValue("top"));
    if(g<=510){
        elem.style.top=(g+3)+"px";
    }
    else{
        alert("TOPLADIĞIN XAL: "+ xal);
        elem.style.top=100+"px";
        window.location.reload();
    }
},30)

//uçma funksiyas

function gemiUcur(){
    var fly=parseInt(window.getComputedStyle(elem).getPropertyValue("top"));
    if(fly>=14){
        elem.style.top=(fly-40)+"px";

    }
}

document.addEventListener('keyup',event=>{
    if(event.code==='Space'){
        gemiUcur();
    }
})

//xal funksiyası

var xal=0;
setInterval(()=>{
    xal++;
    document.getElementById("xl").innerHTML=xal;


},500)



//maneə funksiyası

function toqqushma(elm1,elm2){
    var elm1R=elm1.getBoundingClientRect();
    var elm2R=elm2.getBoundingClientRect();

    return(elm1R.right>=elm2R.left && elm1R.left<=elm2R.right) && (elm1R.bottom>=elm2R.top && elm1R.top<=elm2R.bottom)


}

setInterval(()=>{
    
    if(toqqushma(document.getElementById("gemi"),document.getElementById("qilinc1"))){
        elem.style.top=513+"px";
        setTimeout(()=>{
            alert("TOPLADIĞIN XAL: "+ xal);
            return;
        },10);
        window.location.reload();
    }

    else if(toqqushma(document.getElementById("gemi"),document.getElementById("qilinc2"))){
        elem.style.top=513+"px";
        setTimeout(()=>{
            alert("TOPLADIĞIN XAL: "+ xal);
            return;
        },100);

        window.location.reload();
        


    }


},10)
