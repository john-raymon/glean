import Logo from 'src/styles/svgs/logo.svg'
import { Button } from 'lite-react-ui'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header className="w-full flex justify-center px-[7.5rem] pt-[3rem] bg-transparent">
        <nav className="w-full max-w-[75rem] flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <ul className="list-none">
            <li>
              <Button
                className="!bg-[#293241] !text-[1rem] !rounded-[0.875rem] !leading-[1.1875rem] !py-[1rem]"
                buttonType="secondary"
              >
                Post your company’s tech. interview process
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="-mt-[6.4375rem]">{children}</main>
      <footer></footer>
    </>
  )
}

export default DefaultLayout
