document.getElementById("buatTodo").addEventListener("submit", async (e) => {
e.preventDefault();


	const title = document.getElementById("title").value;
	const description = document.getElementById("desc").value;
	const token = localStorage.getItem("token_jwt");

	try{
const response = await fetch ("/todo/", {
	method: "POST",
	headers: {
"Authorization": `Bearer ${token}`,
"Content-Type": "application/json"
	},
body: JSON.stringify({title,description})
});

if(!response.ok) throw new Error(`gagal buat data ${response.status}`);

const hasil = await response.json();

		document.getElementById("notif").innerHTML = `
		<h1> todo berhasil dibuat </h1> <br>
		ID: ${hasil._id}<br>
		Title: ${hasil.title}<br>
		Description: ${hasil.description}`;

	}catch(e){
console.error("terjadi kesalahaan:", e);
		document.getElementById("notif").innerText = "gagal membuat todo";
	}
}); 
