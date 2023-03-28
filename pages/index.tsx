/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";


export default function Example() {

  return (
    <>
      <Head>
        <title>Liyat</title>
        <meta name="description" content="LIYAT Remodeling and Restoration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-10">
        <div className="flex h-full justify-center items-center flex-col">
          <div className="w-full h-full bg-[url('/bg1.jpeg')] bg-cover bg-center">
            <div className="w-full h-full min-h-[300px] md:min-h-[500px] flex justify-center items-center backdrop-brightness-50">
              <div className="text-center p-5">
                <h1 className="text-gray-100 py-3 md:py-5 text-4xl md:text-7xl font-extrabold">LIYAT Remodeling and Restoration</h1>
                <h2 className="py-3 md:py-5 text-white font-bold text-2xl md:text-3xl ">KITCHEN | BATH | BASEMENT | CLOSET | PATIO</h2>
                <h3 className="text-white py-2 text-xl md:text-4xl">24/7 service</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <section>
            <div className="py-5 md:py-16">
              <div className="flex justify-center">
                <Link href="tel:+14049884505" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2  focus:outline-none ">
                  Call today</Link>
              </div>

            </div>
          </section>
          <section>
            <div>
              <h1 className="text-center text-2xl md:text-4xl py-6 font-semibold">Building your dreams into Reality</h1>
            </div>
          </section>
        </div>

        <div className="bg-gray-200">
          <div className="mx-auto max-w-7xl py-16">

            <section className="px-10 md:px-2">
              <div>
                <h1 className="md:text-center text-3xl md:text-6xl py-6 font-extrabold">What we do?</h1>
                <div className="md:flex md:justify-evenly md:space-x-10 pt-6">
                  <div>
                    <h1 className="font-bold text-3xl md:text-6xl">Flooring</h1>
                    <ul className="list-disc pl-5 py-3">
                      <li className="py-2 text-lg md:text-3xl">Wood floors</li>
                      <li className="py-2 text-lg md:text-3xl">Tiles</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="font-bold text-3xl md:text-6xl">Painting</h1>
                    <ul className="list-disc pl-5 py-3">
                      <li className="py-2 text-lg md:text-3xl">Interior</li>
                      <li className="py-2 text-lg md:text-3xl">Exterior</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="font-bold text-3xl md:text-6xl">Plumping</h1>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">

          <section className="py-10 px-3">
            <div className="md:flex md:items-center md:space-x-10">
              <div className="w-full md:w-1/2">
                <img src="/img1.jpeg" alt="" className="w-full h-full" />
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-3xl md:text-6xl py-6">Kitchen Renovations</h1>
                <p className="text-gray-500">When you choose LIYAT Remodeling and Restoration,
                  you get showroom-quality kitchens designed to meet your budget and needs.
                  We have a strong relationship with local vendors that provide access to
                  the best cabinet, stone counter-tops and tile suppliers in the industry. </p>
                <p className="text-gray-500">
                  This means you have the latest designs, a variety of options to choose from,
                  and can focus on the large, upfront pieces first. Plus, if {"you're"} looking for
                  the most visually stunning, highest quality, and fastest kitchen remodel on the
                  market, we can deliver that too. We want you to have the perfect kitchen for your
                  budget and needs.
                </p>
                <div className="py-5">
                  <Link href="tel:+14049884505" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-10 py-2.5 mr-2 mb-2  focus:outline-none ">
                    Call today</Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl">

            <section className="py-10 px-3">
              <div className="md:flex md:items-center md:space-x-10">
                <div className="w-full md:w-1/2">
                  <h1 className="text-3xl md:text-6xl py-6">Bathroom Remodeling</h1>
                  <p className="text-gray-500">
                    Our team at LIYAT Remodeling and Restoration, is here to help you with your
                    bathroom remodeling project. We offer free design consultations to create a
                    personalized plan that meets your needs, tastes and budget. You {"won't"} have
                    to worry about finding and transporting the materials yourself, as {"we'll"}
                    take care of obtaining and delivering them to you. So you can focus on your
                    renovation project and be sure that it is done to your exact specifications.
                  </p>
                  <div className="py-5">
                    <Link href="tel:+14049884505" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-10 py-2.5 mr-2 mb-2  focus:outline-none ">
                      Call today</Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img src="/img2.jpeg" alt="" className="w-full h-full" />
                </div>
              </div>
            </section>
          </div>
        </div>


        <div className="bg-white">
          <div className="mx-auto max-w-7xl">

            <section className="py-10 px-3">
              <div className="md:flex md:items-center md:space-x-10">
                <div className="w-full md:w-1/2">
                  <img src="/img3.jpeg" alt="" className="w-full h-full max-h-[400px]" />
                </div>
                <div className="w-full md:w-1/2">
                  <h1 className="text-3xl md:text-6xl py-6">Exterior Renovations</h1>
                  <p className="text-gray-500">
                    Would you like to create an oasis out of the neglected area of grass in your backyard?
                    For all of your decking, fencing, and patio needs, contact us!
                  </p>
                  <div className="py-5">
                    <Link href="tel:+14049884505" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-10 py-2.5 mr-2 mb-2  focus:outline-none ">
                      Call today</Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>


        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl">

            <section className="py-10 px-3">
              <div className="md:flex md:items-center md:space-x-10">
                <div className="w-full md:w-1/2">
                  <h1 className="text-3xl md:text-6xl py-6">Basement</h1>
                  <p className="text-gray-500">
                    If you need more room in your house, perhaps {"you're"} aiming to build your ideal
                    man cave or {"you're"} even considering adding a special entertainment room for your
                    {"family's"} Tuesday movie night. We are experts at reviving the empty space under the stairs!
                    This is the one project that will increase your {"home's"} resale value the most!
                  </p>
                  <div className="py-5">
                    <Link href="tel:+14049884505" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-10 py-2.5 mr-2 mb-2  focus:outline-none ">
                      Call today</Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img src="/img4.jpeg" alt="" className="w-full h-full" />
                </div>
              </div>
            </section>
          </div>
        </div>


        <div className="bg-white">
          <div className="mx-auto max-w-7xl">
            <section className="py-10 px-3">
              <div className="md:flex md:items-center md:space-x-10">
                <div className="w-full md:w-1/2">
                  <img src="/img5.jpeg" alt="" className="w-full h-full max-h-[400px]" />
                </div>
                <div className="w-full md:w-1/2">
                  <h1 className="text-3xl md:text-6xl py-6">Water damage repair</h1>
                  <p className="text-gray-500">
                    Accidents happen. But if {"you're"} unfortunate enough to suffer water damage,
                    LIYAT Remodeling and Restoration,is here to help! With our team of experienced
                    technicians, you can rest assured that your home or commercial space is in good
                    care with us. We offer full restoration services and take the hassle out of
                    cleaning up and restoring your property after extensive water damage.
                    From initial assessment to final inspection, we’ll get your property
                    back to its pre-damage condition quickly and safely so that you don’t have to worry
                    about any further risks posed by excess moisture. So don’t let a little water put a
                    damper on the value of your property—turn to LIYAT Remodeling and Restoration and
                    stop water damage in its tracks.
                  </p>
                  <div className="py-5">
                    <Link href="tel:+14049884505" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-10 py-2.5 mr-2 mb-2  focus:outline-none ">
                      Call today</Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>


        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl">
            <section className="py-10 px-3">
              <div className="md:flex md:items-center md:space-x-10">
                <div className="w-full md:w-1/2">
                  <h1 className="text-3xl md:text-6xl py-6">Fire damage repair</h1>
                  <p className="text-gray-500">
                    Are you experiencing fire damage to your home or business? Don’t worry,
                    LIYAT Remodeling and Restoration is here to help. Our team of certified
                    professionals specializes in restoring your property back to its pre-fire
                    condition, quickly and safely. We use specialized techniques and products
                    designed to eliminate odors, soot, smoke, and other residues which may
                    have been left behind. We will work with you every step of the way to ensure
                    satisfaction with our services. Don’t wait any longer – call us now and get
                    your home or business back on track!
                  </p>
                  <div className="py-5">
                    <Link href="tel:+14049884505" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-10 py-2.5 mr-2 mb-2  focus:outline-none ">
                      Call today</Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img src="/img6.jpeg" alt="" className="w-full h-full" />
                </div>
              </div>
            </section>
          </div>
        </div>

      </div>
    </>
  )
}
