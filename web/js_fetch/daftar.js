document.addEventListener("DOMContentLoaded", () => {
const daftar = document.getElementById("halamanDaftar");

	daftar.addEventListener("submit", async (e) => {
e.preventDefault();

		const formData = new FormData(daftar);
		const data = Object.fromEntries(formData.entries());

		try{
			const response = await fetch("/identity/daftar", {
method: 'POST',
	headers: {'Content-Type': 'application/json'},
body: JSON.stringify(data)
			});
			if (response.ok){
window.location.href = "../login.html";
			}
		}catch(err){
console.error(err);		
		}
	})

})
