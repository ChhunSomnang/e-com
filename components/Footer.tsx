import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/*TOP*/}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/*LEFT*/}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">NANG</div>
          </Link>
          <p>Phnom Penh, Chbar Ampov, Cambodia</p>
          <span className="font-semibold">nang168@gmail.com</span>
          <span className="font-semibold">+885 85 123 456</span>
          <div className="flex gap-6">
            <Image
              src="https://i.pinimg.com/564x/30/f0/f4/30f0f44b753cee65279476dc27f485f2.jpg"
              alt=""
              width={16}
              height={16}
            />
            <Image
              src="https://i.pinimg.com/564x/d4/c3/57/d4c3572073b80e5d9d359f0fa8076302.jpg"
              alt=""
              width={16}
              height={16}
            />
            <Image
              src="https://w7.pngwing.com/pngs/457/1007/png-transparent-youtube-computer-icons-youtube-angle-rectangle-black-thumbnail.png"
              alt=""
              width={16}
              height={16}
            />
            <Image
              src="https://w7.pngwing.com/pngs/986/505/png-transparent-button-computer-icons-theme-pinterest-text-trademark-pin-thumbnail.png"
              alt=""
              width={16}
              height={16}
            />
            <Image
              src="https://w7.pngwing.com/pngs/676/1/png-transparent-x-icon-ex-twitter-tech-companies-social-media-thumbnail.png"
              alt=""
              width={16}
              height={16}
            />
          </div>
        </div>
        {/*CENTER*/}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/*RIGHT*/}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image
              src="https://www.discover.com/company/images/newsroom/media-downloads/DGN_AcceptanceMark.png"
              alt=""
              width={40}
              height={20}
            />
            <Image
              src="data:image/png;base64,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"
              alt=""
              width={40}
              height={20}
            />
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAA3lBMVEX///8AMIcAnN4BIWkAldwAmd0Amt0ALYYAFX4Al90AK4XV2+gAJ4QAEn4AHIDd8foALYFluecAJIPd4+4bPY4AH4E9WJoAJYNld6vV7PgAGH8BE2EAoeMAhce83/TG5fYADX0Akdt6wuq1vdQAAHujrsuKmL7o9fuXzu6j0/Dn6/NbcKesttABGWSJyOy5wth3h7SXo8UBJnRMY6DK0eJFruMgQ5AAeLny9fk0UJZhdKl/kLoKM35JYJ8yqOIASIoAZ6gBN3sAYKEBRIcAWKQqSZNVtOUAZa8ASZkAcrn/qvJ/AAAJuklEQVR4nO2ce3+iShKGweEu4EQlUeKoY27GJEZPnAyZOeOcPbvJ7vn+X2i5dDXVCgiDWT2/reevBAHbl+6qt6tbJYkgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIg/r/oNLPoBIdu1xHy/dLIxO/+uF4dunHHRfNSzkG32r6/mB26gUfElZenVUzbXx66hcfDol2olSwbT4du4tHww9qhlex+O3QbjwVd36WV7NwfupHHQeDvlErWvUO38jholtBKdq8O3cyj4N4toZX149DNPAqud6XBeBBah27mUXBnl9BKdsmRhrzuToMhBmkVpsEN1/5xg7L9KugIzPY88b5pCdxUu5pdVbcRHQcr9duHLH77KNs7PvvjpSMwHltPy07dxnHmnxURc/B2W1qwSXL152nNVjxiy/AxU6qI33fc5sdW1NNtz3nal1pmYxNNM81JyavXWnyJOq/ZiqVXRquHn41R4W3kzKhnOxc1m5fQ2tYq/vCNcl2rkWhl3tZsRg93iOwhGGn1x0AZFtwlcLKkCrncSwFsmK1VqEGZsHjDrlb6NZvxopfR6vxTQzMLHmLTyNFK79ZsX8xUzdaqoZ6UuHrEtCr6AKUQnGhuuHqI2vWWf5eLXPPv72MUnuRp1VBKfP7bRCttULMVM7+MVg8/B8XPhZt/23AMw2+nndXu1WxhxBq0UqMUaCLlysSgSXK+9qVmK1altAqHYHG7wPzbT51Os7m67vIouJdByIJzmMlarX5/OFE1PghL5MIvWulTC7kqlQb/MdjxZs+sXug+sgOnvIDo1mxhyI0CI46F8hbvWWUClranNLg4KxHaz7/GWmm5ASuAuxhgqNJKzx60guCsaXCEB3ttt1agtFnsenbzVMYyJN2qQKsOKNPmORz6q27XbKHEgzOKOKBemX7VB63qpsEutgyF0apIKzD/KDhBYrRO+aHOxdXy6qJZvZEsOKMgkGqVzlv6t9Pp7XB70gdKq9XfWCAQfFGOVH8Ndj1DMP8WX/GZwY3PFsmBzkJ2XM/zXMfuzaTOczcmEvJeTv6+E2553U2PsuCMIg58/obJHPLoTVNMVTVNZRDOZIaDhFjbOUuD65paNXdrdf7nYPsZbgDmv30NR3i11Y2XNYLemPsI/Wy8uvL1mMtZeLGX/G3gdcj7cXLQisIdpME04nDDlfir/lrhmVEzG8GbqsXEjupNK50FChEKyJlpMJWKP8NtIOu5fL3nBfKgExVzVmeC5dX1J/ayL6UDGI1WKXCZstEK0g3vRBBx+JFEjWmqVBLW2GQ5CRowc65bZRAKyBlaPXz4yqUqCI4QyA0IRgs4Yr1IcSeRRSz0Kr/aT2tkkHLOoiHYh9DeACXXoE1cOpgoDRFNQ68G0CmL5rNluCtMgw/nP9VUqvwBP4OZsxGlwaBz/8JdW7QAtBrLOSSmfmFv9sorFhr0uGwGM+ekAUF/2uDdSAlD+TxnYs3iW0tJT61FN3/m/HD+4U9lgN45v/yTmn/P942x43EjGq1pzFz+JrZr+B5a5vbiELViytgQ3bn249jazlPnGUZvRUGuPYxBQ96rtDC0myoajmYfKa3WrNSKBeRQHs6Hf/7xqYGVKipp5O8eiepX3MLZ/uJitbo/TadVzOZD8ctn94NdA16SQ9+EaCR0nBsp4J3MbMyH/dF0kM4W48A/3VMa7OA0qP/+9RND0cKEu9Gugqln7u4Rt4dGoHvHnuw9F4vZfJg8+Emxa7nh1tZ5WkUlNfBeDRNi94QH/tjms5SZbw5LIhaQtU15xIblTxHydo+4kd16EjtJLAb0Q2bzYRC241P4CsCYZYqcgoymTNGLqBQJdix5uu9RQNb/VShVUfWqm1lAtsbRR4fYY72m5we22HEkS0f/g91wmVlrbaY51qA4cnNTjub1I+EYFPpqF5DRzNn6q0grTc2fTQUZhT697bzEIwpimYGLycyPWRDMv7NB7IRjculuiJtVQFZV5S1uEMQyHLkDFcnDZ851C8inaPBYX4u6VcEIRObfdmN8w3j9zrT5lvQhXcZXMKvCbX6Tdb4wL3YgvPGSRVpAjvJchKJ+mbJHN8gy5bAWEbV5bwVkCw0eO7urJ72qcGGCF5C93kXE46qZPmU2Pi1hbyAr8qeGCs56kV7B0fOdOXw+o86HMaPUKYGBV/EIC7A8UEBuSPWY4dUXO18qdVDYgcH821l7JVn2EErJYFW4zeeD0IaUaqcbcyANZk1SeL0FP8shlud9Csg54Sp0eDuKr2D+vaxNuBDasY4Qwxze/WAQyhD1vbRnwowlK+KMsvoVi2GJo3qPAnJWGtQimzyY7xrpz2wk8wIyBrwS2pQU2Czt6emxjbVYtAa7PXNGQL/C7mnEjiUxbLCnAvJ35CGtf2OtNDMuaawntyXSB/QJJ6uMByJ4vFwTvNjbfU3cBdZGm3l5ATlrySoVkueevobHLI9ddQvI2EMKlkErDlAi3Dv6WTOubzDDMZhYj3yN52yRcZO4w8noTtsFZAzMcDR1CKfzOU90ZG8FZLwD2f6EulWlp8ALyM9Zr6YVMk9fLJeLrs/f1MObUPE2sDH2YtsFZAxPkpq5nkynJ1pqxuLCwnBPaVDwkBaedFV6CmD+7busV4N0XVW3Pe8MSeJjSa7T2IlmQ1JWARkzSp1OGF1VXGVQotdZjULdbwEZR6tKTwHMf1pAFrjOX77H+9+4B5UtsX8OtgrIArkT6yS+neypgIw3Iej/weGqkhl52SogizxvbM3yuuwtdfE20OPGQoqA4Jy3c6FlimJBZGepcfAOBWQhDVYzIxD1jJztQ7MuznGWc8FSiv4qnAZauWL3hOCcu2Q1UnAdQm2McAFZyvKqvwIuIAtpsJIZmV3aMW0jr/AYPI3BUZ2NTzuS1Y4vcISwBEMVr1BEDBU1ITfi9Acm60yaqkykm8/J+Z8jeVrwT900+Iosw6+nQWn5rRdTsEi66snhfNpwu4uo790nFwj9Z8VL9hubeIPJSUKBixl+0UwlnFGvY9s8T85Pnjf7p667kmTb4ni48FFmU1NVZs1Vs2AvM1hW4xe/zNLq96tuTq7E6hTxy2lwL/SKpt/HBt69WtuMVOaCjUDd/Tt8H/0Wa1XXjFSFb35wsmbfR8ccJd7aZqQqp7AdYh/7Jd8fvAZX24xU5BomlPLuc48BPFWovZpdjSbMbsZ/kx+DeEPfdalbQqzII/spjcvs+eQR0uf8b3uVxH+iZX/fdCIIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIQpL+C7XXyyry0uqzAAAAAElFTkSuQmCC"
              alt=""
              width={40}
              height={20}
            />
            <Image
              src="data:image/png;base64,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"
              alt=""
              width={40}
              height={20}
            />
            <Image
              src="data:image/png;base64,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"
              alt=""
              width={40}
              height={20}
            />
          </div>
        </div>
      </div>
      {/*BOTTOM*/}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 ">
        <div className="">@ 2024 Nang Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
