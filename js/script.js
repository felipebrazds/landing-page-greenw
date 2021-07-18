const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let data = {
    nome,
    email
  }
  let convertData = JSON.stringify(data)

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p style="color: #fff;">Carregando...</p>`
  let enviado = `<p style="color: #fff;">Os seus dados foram enviados com sucesso!</p>`
  content.innerHTML = carregando

  setTimeout(() => {
    content.innerHTML = enviado
  }, 1000)
})

$('a[href^="#"]').on('click', function (e) {
  e.preventDefault()
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top

  $('html, body').animate(
    {
      scrollTop: targetOffset - 100
    },
    500
  )
})
