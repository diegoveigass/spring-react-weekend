import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="header-container">
      <img src={logoImg} alt="" />
      <h1>DSMeta</h1>
      <p>
        Desenvolvido por{' '}
        <a href="https://linkedin.com/diegoveigass">@diegoveigass</a>
      </p>
    </header>
  )
}
