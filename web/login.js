document.addEventListener("DOMContentLoaded", () => {

const pesan = document.getElementById("pesanLogin");
const login = document.getElementById("halamanLogin");
	login.addEventListener("submit", async (e)=> {
e.preventDefault();

const formData = new FormData(login);
const data = Object.fromEntries(formData.entries());

		try{
			const response = await fetch ("/identity/login", {
			method: 'POST',
	headers: {'Content-Type': 'application/json'},
	body: JSON.stringify(data)
			});
const hasil = await response.json();

			if (response.ok){
			window.location.href = 'HalamanUtama.html';
			}else{
pesan.textContent = hasil.error;
			}
		}catch(err){
console.error(err);
pesan.textContent = 'terjadi kesalahan saat koneksi';
		}
	})
})
