function toggleMode() {
  const html = document.documentElement

  // Se a classe 'light' estiver presente no elemento HTML, ela será removida. Caso contrário, será adicionada.
  html.classList.toggle("light")
}