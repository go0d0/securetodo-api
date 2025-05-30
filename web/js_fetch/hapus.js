document.getElementById("hapusTodo").addEventListener("submit", async (e) => {
e.preventDefault();


const id = document.getElementById("hapus").value;
const token = localStorage.getItem("token_jwt");
const pesan = document.getElementById("pesanHapus");

	try{
const response = await fetch (`/todo/${id}`, {
	method: "DELETE",
	headers: {
"Authorization":`Bearer ${token}`,
"Content-Type": "application/json"
	}

});
		if(!response.ok) throw new Error("gagal hapus data");
pesan.textContent= `Data berhasil di hapus, dengan id: ${id}`;
	} catch(e){
console.error(e);
		pesan.textContent = `error: ${e.message}`;
	}

});
