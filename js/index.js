window.onload = function(){
    let div = document.querySelector('div');
    div.onclick = function(){
        if(div.clientWidth == 100){
            div.style.width = '200px';
            div.style.height = '200px';
        }else if(div.clientWidth == 200){
            div.style.width = '300px';
            div.style.height = '300px';
        }else if(div.clientWidth == 300){
            div.style.width = '400px';
            div.style.height = '400px';
        }else if(div.clientWidth == 400){
            div.style.width = '100px';
            div.style.height = '100px';
        }
    }
}