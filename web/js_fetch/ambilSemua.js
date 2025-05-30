const ambilData = async () => {
try{
const token = localStorage.getItem("token_jwt");
const response = await fetch("/todo/",  {

	method: "GET",
	headers:{
		"Authorization": `Bearer ${token}`,
"Content-Type":"application/json"
	}
});

	if(!response.ok) throw new Error(`http error! status: ${response.status}`);


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
