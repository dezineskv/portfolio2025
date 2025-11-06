"use client";
import Image from "next/image";

function Features() {
  return (
    <div className="py-8 mb-8  dark:bg-gray-500">
      <h1 className="mb-1 text-5xl font-bold text-center text-background pt-8 pb-8">
        Featured: Frontend Features
      </h1>
<p className="mb-8 text-center text-background px-4 max-w-3xl mx-auto">
        A selection of frontend components I have built recently using React,
        Next.js, TailwindCSS, plus MongoDB for data storage. These are for the Coffee Shop app. The app also includes Framer Motion animations, dark mode for each page, and responsive design for mobile and desktop. There are some admin pages too for managing the product inventory.
      </p>
      {/* all cards here */}
      <div className="flex sm:flex-col md:flex-row justify-center flex-wrap md:w-7xl sm:w-sm mx-auto sm:pl-14 gap-4 space-y-2">
        {/* <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/mVmZjwd9/coffee-updateproductdetails.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Admin form
              </div>
              <p class="text-gray-700 text-base line-clamp-2">description</p>
            </div>
          </div>
        </div> */}

        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/39CdMrQ1/coffee-admin-editdeleteproducts.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Admin panel & content
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                Each product in inventory (MongoDb) is editable or deletable.
                Mapped cards.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/TDjBXcSb/coffee-logindtlight.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Login Page
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                Card with authentication fields per user session.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/gZ5NFkMQ/coffee-dtadmindashboard.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Admin panel & dashboard
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                Charts showing data.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/DgwfJwX5/coffee-adminform-addprducts.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Admin panel & form
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                Form contains all editable fields.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/k63CPhMp/coffee-testimonials-carouseldtdark.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">title</div>
              <p class="text-gray-700 text-base line-clamp-2">description</p>
            </div>
          </div>
        </div> */}
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/JwQMDqHV/coffee-testimonials-carouseldtlt.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Testimonial carousel
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                Carousel is mobile responsive and has a few cards to click
                through.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/9m8w84gd/coffee-dtbanner2col-dk.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">Banner</div>
              <p class="text-gray-700 text-base line-clamp-2">
                2 column banner is mobile responsive.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/svYKYyPD/coffee-mobile-bannerstack.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">title</div>
              <p class="text-gray-700 text-base line-clamp-2">description</p>
            </div>
          </div>
        </div> */}
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/PZ3LhXGY/coffee-mobile-servicecards.jpg"
              alt="images"
              width={108}
              height={250}
              className="
                    w-[100px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">Cards</div>
              <p class="text-gray-700 text-base line-clamp-2">
                These cards are a row on desktop and stack into a single column
                for mobile.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/tMz1j14x/coffee-kimcard.jpg"
              alt="images"
              width={208}
              height={250}
              className="
                    w-[200px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Single card
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                Card with rounded image and flex content.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/TxnFDzNL/coffee-proddetail-accordion.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Product detail
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                Content details per product ID. Includes an accordion for
                shipping details.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/4wQjsXTV/emailsubscribe-dt.jpg"
              alt="images"
              width={322}
              height={250}
              className="
                    w-[322px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Email subscription
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                Allows user to subscribe their email, which posts to MongoDb.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/pvsLKqLZ/coffee-dt-products-condition.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Conditional rendering
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                All products are mapped and show in-stock or on sale flags
                depending on the data.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/rGMcMtWc/coffee-filterprducts.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Filter products
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                The products catalogue is filterable by product category. The
                matches are clickable.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/hRm3gRvj/coffee-dtlt-hero.jpg"
              alt="images"
              width={308}
              height={250}
              className="
                    w-[300px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">title</div>
              <p class="text-gray-700 text-base line-clamp-2">description</p>
            </div>
          </div>
        </div> */}
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/7NtBLZ8v/coffeeshop-searchdtresults.jpg"
              alt="images"
              width={328}
              height={250}
              className="
                    w-[320px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Searchbar
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                Products are searchable by title. 'Loading...' shows while the
                data is searched. Results are clickable.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/V0MkXjfV/coffee-dt-ligh-cartdropdown.jpg"
              alt="images"
              width={208}
              height={250}
              className="
                    w-[200px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Icon with dropdown
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                Icons also display within the dropdown and are clickable.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[420px] ">
          <div class="max-w-sm rounded-lg shadow-lg border-1 border-background bg-gray-100 h-[420px]">
            <Image
              src="https://i.ibb.co/gZ16NN76/coffee-dtdropdown.jpg"
              alt="images"
              width={258}
              height={250}
              className="
                    w-[250px] min-h-[250px] max-h-[250px] h-[250px] overflow-hidden bg-cover mx-auto mt-1 hover:scale-150"
            />
            <div class="px-6 pt-4 pb-4">
              <div class="font-bold text-xl mb-2 text-background">
                Theme icon
              </div>
              <p class="text-gray-700 text-base line-clamp-2">
                A dropdown allows selection of dark mode, light or system theme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
