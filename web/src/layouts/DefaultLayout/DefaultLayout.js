import Logo from 'src/styles/svgs/logo.svg'
import { Button } from 'lite-react-ui'
import FooterLogo from 'src/styles/svgs/FooterLogo.svg'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header className="mx-auto max-w-[160rem] w-full flex justify-center px-[1.75rem] md:px-[7.5rem] pt-[3rem] bg-transparent">
        <nav className="w-full max-w-[75rem] flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <ul className="list-none">
            {/* <li>
              <Button
                className="!bg-[#293241] !text-[1rem] !rounded-[0.875rem] !leading-[1.1875rem] !py-[1rem]"
                buttonType="secondary"
              >
                Post your company&apos;s tech. interview process
              </Button>
            </li> */}
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-[160rem] min-h-[calc(100vh-24.75rem)] md:min-h-[calc(100vh-18rem)] bg-white -mt-[6.4375rem]">
        {children}
      </main>
      <footer className="w-full px-[7.5rem] py-[2rem] md:py-[5rem] bg-black">
        <div className="flex flex-col md:flex-row justify-between w-full space-y-6 md:space-y-0 max-w-[75rem] mx-auto">
          <div className="mt-[2rem] md:mt-0 order-2 md:order-1 justify-between flex flex-col text-white">
            <ul className="flex w-full text-center flex-col md:flex-row md:space-x-4">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              {/* <li>
                <a>Terms of Service</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Blog</a>
              </li> */}
            </ul>
            <div className="mt-[2rem] md:mt-[5rem] flex flex-col self-center md:items-start items-center md:space-x-0 space-y-2">
              <div>
                <FooterLogo />
              </div>
              <p className="text-white text-sm">
                Copyright © 2021 | All rights reserved.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 text-white flex flex-col space-y-2 md:self-end">
            <p className="text-lg text-center md:text-right">
              Tech job interviews.
            </p>
            <Button inverted buttonType="tertiary">
              Read the story
            </Button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default DefaultLayout
