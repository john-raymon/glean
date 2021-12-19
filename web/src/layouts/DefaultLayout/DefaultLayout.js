import Logo from 'src/styles/svgs/logo.svg'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header className="w-full flex justify-center px-[7.5rem] py-[3rem] bg-transparent">
        <nav className="w-full max-w-[75rem]">
          <div>
            <Logo />
          </div>
        </nav>
      </header>
      <main className="-mt-[8rem]">{children}</main>
      <footer></footer>
    </>
  )
}

export default DefaultLayout
