import { useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import { TextField, Button } from 'lite-react-ui'

const HomePage = () => {
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    setLoading(true)
    fetch(`${window.RWJS_API_URL}/subscribeToNewsletter?email=${email}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message && res.message === 'Member Exists') {
          alert("You're already subscribed!")
        } else if (res.success) {
          alert(
            "Thank you for subscribing! We're looking forward to sending you tech. companies hiring along with their interview processes."
          )
          setEmailSubmitted(true)
        } else if (res.name && res.name === 'EmailValidationError') {
          alert('Please enter a valid email address.')
        } else {
          alert("We're having trouble subscribing you. Please try again later.")
        }
        setEmail('')
        console.log(emailSubmitted)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <>
      <MetaTags
        title="Tech Jobs Categorized by Interview Process"
        description="Home page"
      />
      <section>
        <div className="gradient-hero-background w-full h-[auto] px-[1.75rem] md:px-[7.5rem] pt-[6rem] md:pt-[8rem] flex flex-col items-center justify-center">
          <div className="py-[4rem] md:py-[6rem] space-y-[1rem] text-center max-w-[75rem]">
            <h1 className="font-[600] font-3xl-semibold md:text-[4.75rem] md:leading-[5.125rem] text-[#293241] text-center">
              Find tech companies & jobs by their interview processes
            </h1>
            <p className="font-large">
              Join the waitlist to start receiving weekly emails of companies
              hiring and their tech. hiring process.
            </p>
            <form
              onSubmit={(e) => onSubmit(e)}
              className="flex flex-col md:flex-row items-center md:w-[70%] mx-auto font-[Urbanist] space-y-[1rem] md:space-y-0 md:space-x-[1rem]"
            >
              <TextField
                name="email"
                label="Email"
                inputClassName="!bg-white !bg-opacity-[0.8] "
                className="w-full md:!flex-1"
                placeholder="What's your email address?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className="!bg-[#293241] !text-[1rem] !rounded-[0.875rem] !leading-[1.1875rem] !py-[1rem]"
                buttonType="secondary"
                disabled={email.trim() === '' || loading}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full mx-auto">
          <ul className="flex flex-col md:flex-row w-full md:items-stretch list-none text-center">
            <li className="flex w-full md:w-[50%] h-[auto] pb-[0.625rem] pt-[1.25rem] md:py-[1.25rem] pl-[1.25rem] pr-[1.25rem] md:pr-[0.625rem]">
              <div className="flex flex-col justify-between gradient-background-purple self-stretch w-full py-[4rem] px-[2rem] md:p-[6.25rem]">
                <div className="space-y-[0.5rem]">
                  <h4 className="font-3xl-semibold text-[#FF5151]">
                    Find companies with interview processes you prefer.
                  </h4>
                  <p className="font-3xl-medium text-[#293241]">
                    Use Glean to find a company with a tech interview process
                    that focuses on your strengths.
                  </p>
                </div>
                <div className="w-full pt-[0.5rem]">
                  <img
                    className="mx-auto md:mx-[0] w-[80%] md:w-full md:max-w-[20.5rem]"
                    src="/glean-image.png"
                    alt="Glean"
                  />
                </div>
              </div>
            </li>
            <li className="flex w-full md:w-[50%] h-[auto] pt-[0.625rem] pb-[1.25rem] md:py-[1.25rem] pr-[1.25rem] pl-[1.25rem] md:pl-[0.625rem]">
              <div className="flex justify-between flex-col gradient-background-yellow self-stretch w-full py-[4rem] px-[2rem] md:p-[6.75rem]">
                <div className="space-y-[0.5rem]">
                  <h4 className="font-3xl-semibold text-[#9818D6]">
                    Learn about a company&apos;s tech interview process before
                    commiting to it.
                  </h4>
                  <p className="font-3xl-medium text-[#293241]">
                    Filter out companies with exhausting & long interview
                    processes ahead of time, before applying.
                  </p>
                </div>
                <div className="w-full pt-[0.5rem]">
                  <img
                    className="mx-auto w-[80%] md:w-full md:max-w-[20.5rem] md:float-right"
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
