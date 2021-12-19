import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Tech Jobs Categorized by Interview Process"
        description="Home page"
      />
      <section>
        <div className="gradient-hero-background w-full h-[100vh] md:max-h-[36rem] px-[7.5rem] pt-[8rem] flex items-center justify-center">
          <h1 className="max-w-[75rem] font-[Urbanist] font-[600] text-[4.75rem] leading-[5.125rem] text-[#293241] text-center">
            Find tech companies & jobs by their interview processes
          </h1>
        </div>
      </section>
    </>
  )
}

export default HomePage
