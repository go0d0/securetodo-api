const ambilData = async () => {
try{
const response = await fetch("/todo/");
const data = await response.json();
const list = document.getElementById("data-list");


data.forEach(item => {
const li = document.createElement("li");
li.textContent = `title: ${item.title}, deskripsi: ${item.description}`;
list.appendChild(li);
});	

}catch(err){
console.error("terjadi kesalahan:", err);
}


}



ambilData();
