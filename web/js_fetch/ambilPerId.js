document.getElementById("perId").addEventListener("submit", async (e) => {
e.preventDefault();

	const id = document.getElementById("idUbah").value;
	const token = localStorage.getItem("token_jwt");

	try{
		const response = await fetch(`/todo/${id}`, {
method: "GET",
headers: {
"Authorization": `Bearer ${token}`,
"Content-Type": "application/json"
}
		})

if (!response.ok) throw new Error("gagal fetch data");	
const data = await response.json();
document.querySelector("p").innerHTML =`<h3> TITLE: </h3> ${data.title} <br> <italic> DESKRIPSI: </italic> ${data.description}`;
	}catch(err){
console.error(err);
		document.querySelector("p").innerHTML = "terjadi kesalahan atau data tidak ditemukan";
	}

});
