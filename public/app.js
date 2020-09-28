const form = document.getElementById("form");
form.onsubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: new FormData(form),
    })
    if (!response.ok) {
      throw new Error('Что-то пошло не так!')
    }
    const data = await response.json()
    const img = document.getElementById('img')
    img.src=`../up/${data.fileName}`
  } catch (e) {
    console.log(e);
  }
}
