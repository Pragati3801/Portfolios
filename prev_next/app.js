const names=["Aarav", "Bina" ,"Cathy", "Divya","Eric","Farhan","Gagan","Himanshi"];
const images=["https://source.unsplash.com/300x300/?man","https://source.unsplash.com/300x300/?woman","https://source.unsplash.com/300x300/?girl","https://source.unsplash.com/300x300/?female","https://source.unsplash.com/300x300/?boy","https://source.unsplash.com/300x300/?cook","https://source.unsplash.com/300x300/?football","https://source.unsplash.com/300x300/?fashion"];
function list(i){
    return names[i];
}
function img_list(i){
   return images[i];
}

let current_index=0;
document.getElementById('res').innerText=list(current_index);
document.getElementById('img').src=img_list(current_index);
function Previous()
{
    current_index-=1;
    if(current_index<0)
      { current_index=names.length-1;}
    document.getElementById('res').innerText=list(current_index);
    document.getElementById('img').src=img_list(current_index);
   
}
function Next()
{
    current_index+=1;
    if(current_index>=names.length)
      { current_index=0;}
    document.getElementById('res').innerText=list(current_index);
    document.getElementById('img').src=img_list(current_index);
   
}