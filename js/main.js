document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.querySelector("#editor .placeholder")

  pell.init({
    element: document.getElementById("editor"),
    onChange: ((html) => {
      placeholder.classList.toggle("show", html.length === 0)
    }),
    actions: []
  })

  const body = document.querySelector("body")
  const btn = document.getElementById("reveal")
  btn.addEventListener("click", () => {
    body.classList.toggle("reveal")

    if (body.classList.contains("reveal")) {
      btn.innerText = "Hide"
    } else {
      btn.innerText = "Show"
    }
  })

  document.querySelector(".pell-content").focus()
})
