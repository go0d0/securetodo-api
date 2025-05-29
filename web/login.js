document.addEventListener("DOMContentLoaded", () => {

const login = document.getElementById("halamanLogin");
	login.addEventListener("submit", async (e)=> {
e.preventDefault();

const formData = new FormData(login);
const data = Object.fromEntries(formData.entries());

		try{
			const response = await fetch ("
		}catch(err){

		}
	}
}
