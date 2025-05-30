document.getElementById("editTodo").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("edit").value;
  const token = localStorage.getItem("token_jwt");
  const title =document.getElementById("titleBaru").value;
  const description = document.getElementById("desc").value;
  const pesan = document.getElementById("pesanEdit");
  
  try{
    const response = await fetch(`/todo/${id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title,description})
    });
    
    if(!response.ok) throw new Error("gagal edit data")
    const hasil = await response.json();
    pesan.innerHTML = `<h2> berhasil ubah todo : </h2> ${hasil.title}`;
  }catch(err){
    
    console.error(err);
    pesan.innerText ="Terjadi kesalahan saat edit todo";
  }
  
  
})