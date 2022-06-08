init()

function init(){
 document.getElementById("n").addEventListener("keyup",save) 
 document.getElementById("t").addEventListener("keyup",save) 
}

function save(){
  var nome = document.getElementById("n").value
  var texto = document.getElementById("t").value

  localStorage.setItem("user", nome)
  localStorage.setItem("content", texto)
}

function load(){
  if("user" in localStorage){
    document.getElementById("n").value = localStorage.getItem("user")
  }
  if("content" in localStorage){
    document.getElementById("t").value = localStorage.getItem("content")
  }
}

function clean(){
  localStorage.clear()
  document.getElementById("t").value = ""
  document.getElementById("n").value = ""
}
