import Logo from 'src/styles/svgs/logo.svg'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header className="w-full px-[7.5rem] py-[3rem] mx-auto">
        <nav>
          <div>
            <Logo />
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default DefaultLayout
