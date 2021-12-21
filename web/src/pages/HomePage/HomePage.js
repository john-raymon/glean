import { MetaTags } from '@redwoodjs/web'
import { TextField, Button } from 'lite-react-ui'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Tech Jobs Categorized by Interview Process"
        description="Home page"
      />
      <section>
        <div className="gradient-hero-background w-full h-[auto] px-[7.5rem] pt-[8rem] flex flex-col items-center justify-center">
          <div className="py-[6rem] space-y-[1rem]">
            <h1 className="max-w-[75rem] font-[Urbanist] font-[600] text-[4.75rem] leading-[5.125rem] text-[#293241] text-center">
              Find tech companies & jobs by their interview processes
            </h1>
            <p className="font-large text-center">
              Join the waitling list to start receiving weekly emails of
              companies hiring and their tech. hiring process.
            </p>
            <form className="max-w-[75rem] flex items-center w-[70%] mx-auto font-[Urbanist] space-x-[1rem]">
              <TextField
                name="email"
                label="Email"
                inputClassName="!bg-white !bg-opacity-[0.8]"
                className="!border-black !flex-1"
                placeholder="What's your email address?"
              />
              <Button
                className="!bg-[#293241] !text-[1rem] !rounded-[0.875rem] !leading-[1.1875rem] !py-[1rem]"
                buttonType="secondary"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full mx-auto">
          <ul className="flex w-full items-stretch list-none text-center">
            <li className="flex w-[50%] h-[auto] py-[1.25rem] pl-[1.25rem] pr-[0.625rem]">
              <div className="flex flex-col justify-between gradient-background-purple self-stretch w-full px-[5rem] py-[3.75rem]">
                <div className="space-y-[0.5rem]">
                  <h4 className="font-3xl-semibold text-[#FF5151]">
                    Find companies with interview processes you prefer.
                  </h4>
                  <p className="font-3xl-medium text-[#293241]">
                    Use Glean to find a company with a tech interview process
                    that focuses on your strengths.
                  </p>
                </div>
                <div className="w-full">
                  <img className="w-[70%]" src="/glean-image.png" alt="Glean" />
                </div>
              </div>
            </li>
            <li className="flex w-[50%] h-[auto] py-[1.25rem] pr-[1.25rem] pl-[0.625rem]">
              <div className="flex justify-between flex-col gradient-background-yellow self-stretch w-full px-[5rem] py-[3.75rem]">
                <div className="space-y-[0.5rem]">
                  <h4 className="font-3xl-semibold text-[#9818D6]">
                    Learn about a company&apos;s tech interview process before
                    commiting to interview.
                  </h4>
                  <p className="font-3xl-medium text-[#293241]">
                    Filter out companies with exhausting & long interview
                    processes ahead of time, before applying.
                  </p>
                </div>
                <div className="w-full">
                  <img
                    className="w-[70%] float-right"
                    src="/glean-image-2.png"
                    alt="Glean"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default HomePage
