import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  GlobalIcon,
  Logo,
  MenuIcon,
  MiniLogo,
  PersonIcon,
  SearchIcon,
  StarIcon,
} from "..";
import Image from "next/image";
import {
  All,
  BedIcon,
  DiveIcon,
  DownIcon,
  HostBadge,
  KeyIcon,
  MedalIcon,
  NextIcon,
  SaveIcon,
  ShareIcon,
  SuperHostBadge,
} from "@/icons";
import {
  DateView,
  Footer,
  Map,
  MoreBg,
  MoreContent,
  OffsersList,
  PlaceList,
} from "@/components";
import Head from "next/head";

const Page = ({ data }) => {
  const title =
    data.data.presentation.stayProductDetailPage.sections.sections[2].section
      .listingTitle;
  const subtitle =
    data.data.presentation.stayProductDetailPage.sections.sections[8].section
      .subtitle;
  const startRating = 4.8;
  const reviewCount = 126;
  const images =
    data.data.presentation.stayProductDetailPage.sections.sections[6].section
      .mediaItems;

  const scrollHost = () => {
    const mh = document.querySelector("main").scrollHeight;
    const rh = document.querySelector("#reviews").scrollHeight;
    const mah = document.querySelector("#map").scrollHeight;
    window.scrollTo({ top: mh + rh + mah + 24, behavior: "smooth" });
  };

  const [more, setMore] = useState(null);
  const [active, setActive] = useState("");

  useEffect(() => {
    const images = document.querySelector(".images");
    const options = { root: null, rootMargin: "0px", threshold: 0 };
    const callback = (entries) =>
      entries.map((entry) => setActive(!entry.isIntersecting && "active"));
    const observer = new IntersectionObserver(callback, options);
    observer.observe(images);
  }, []);

  useEffect(() => {
    const options = { root: null, rootMargin: "-80px", threshold: 0 };
    const callback = (entries) =>
      entries.map((entry) =>
        document
          .querySelector("#xddd")
          .classList.toggle("active", !entry.isIntersecting)
      );
    const observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector("#check"));
  }, []);

  return (
    <>
      <MoreBg more={more} setMore={setMore} />
      <MoreContent more={more} setMore={setMore} />
      <div className="place">
        <PlaceList className={active} />
        <header>
          <div className="upside">
            <Link className="logo" href={"/"}>
              <Logo />
              <MiniLogo />
            </Link>
            <div className="middle">
              <p>Anywhere</p>
              <p className="m">Any week</p>
              <p className="l">Add guest</p>
              <button>
                <SearchIcon />
              </button>
            </div>
            <div className="right">
              <button className="ayh">Airbnb your home</button>
              <button className="global">
                <GlobalIcon />
              </button>
              <button className="a">
                <MenuIcon />
                <PersonIcon />
              </button>
            </div>
          </div>
        </header>
        <div className="content">
          <main>
            <section className="upx">
              <div className="title">{title}</div>
              <div className="details">
                <div className="left">
                  <div className="star">
                    <StarIcon />
                    <p>{startRating}</p>
                    <span>· </span>
                  </div>
                  <p className="review">{reviewCount} reviews</p>
                  <p className="host">
                    <span>·</span> <MedalIcon /> Superhost <span>·</span>
                  </p>
                  <p className="subtitle">{subtitle}</p>
                </div>
                <div className="buttons">
                  <button>
                    <ShareIcon />
                    <p>Share</p>
                  </button>
                  <button>
                    <SaveIcon />
                    <p>Save</p>
                  </button>
                </div>
              </div>
              <div className="images">
                <div className="left">
                  <Image
                    width={1200}
                    height={750}
                    src={images[0].baseUrl}
                    quality={100}
                  />
                  <div className="layer"></div>
                </div>
                <ul className="right">
                  {[1, 2, 3, 4].map((i) => (
                    <li>
                      <Image
                        className={i % 2 && "l"}
                        width={1200}
                        height={750}
                        src={images[i].baseUrl}
                      />
                      <div className="layer"></div>
                    </li>
                  ))}
                </ul>
                <button>
                  <All />
                  <p>Show all photos</p>
                </button>
              </div>
            </section>
            <section className="body">
              <div className="left">
                <div className="container1">
                  <h1>Treehouse hosted by Veluvana</h1>
                  <p>
                    2 guests <span> · </span>1 bedroom<span> · </span>1 bed
                    <span> · </span>1.5 baths
                  </p>
                  <button onClick={scrollHost} className="host">
                    <Image
                      src="https://a0.muscache.com/im/pictures/user/bb9ba580-9b3b-4402-ac92-3976abe1a178.jpg?im_w=240"
                      width={56}
                      height={56}
                      alt="host"
                    />
                    <HostBadge />
                  </button>
                </div>
                <div className="container2">
                  <ul>
                    <li>
                      <SuperHostBadge />
                      <div className="text">
                        <p className="t">Veluvana is a Superhost</p>
                        <p>
                          Superhosts are experienced, highly rated hosts who are
                          committed to providing great stays for guests.
                        </p>
                      </div>
                    </li>
                    <li>
                      <KeyIcon />
                      <div className="text">
                        <p className="t">Veluvana is a Superhost</p>
                        <p>
                          95% of recent guests gave the check-in process a
                          5-star rating.
                        </p>
                      </div>
                    </li>
                    <li>
                      <DiveIcon />
                      <div className="text">
                        <p className="t">Veluvana is a Superhost</p>
                        <p>
                          This is one of the few places in the area with a pool.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="description">
                    <p>
                      Veluvana is a unique bamboo house with a wonderful view of
                      Sidemen Valley, a genuine tropical landscape with Mount
                      Agung peak on its back. This getaway spot is a great place
                      to bring into reality the dream adventure of the true
                      wanderer. We invite you to feel the magnificent vibes of
                      the entire house to escape the life that is full of drama
                      into a journey with ultimate joy.
                      <br />
                      sleep ...
                    </p>
                    <button onClick={() => setMore("more")}>
                      Show more <NextIcon />
                    </button>
                  </div>
                  <div className="sleep">
                    <h1 className="title">Where you'll sleep</h1>
                    <div className="box">
                      <BedIcon />
                      <h1 className="title2">Bedroom</h1>
                      <p>1 king bed</p>
                    </div>
                  </div>
                  <div className="offers">
                    <h1>What this place offers</h1>
                    <OffsersList setMore={setMore} />
                  </div>
                  <div className="date">
                    <h1>Select check-in date</h1>
                    <h2>Add your travel dates for exact pricing</h2>
                    <DateView />
                  </div>
                </div>
              </div>
              <div className="reserve">
                <div className="up">
                  <p className="l">
                    <span>€ 472</span> night
                  </p>
                  <div className="r">
                    <StarIcon />
                    {startRating}
                    <span className="dot">·</span>
                    <span className="rc">{reviewCount} reviews</span>
                  </div>
                </div>
                <div className="contentx">
                  <div className="u">
                    <div className="div">
                      <h3>CHECK-IN</h3>
                      <p>Add date</p>
                    </div>
                    <div className="div">
                      <h3>CHECKOUT</h3>
                      <p>Add date</p>
                    </div>
                  </div>
                  <div className="div">
                    <h3>GUESTS</h3>
                    <p>Add date</p>
                    <button>
                      <DownIcon />
                    </button>
                  </div>
                </div>
                <button id="check" className="check">
                  Check availability
                </button>
              </div>
            </section>
          </main>
          <div id="reviews">
            <div className="upp">
              <h1>
                <StarIcon />
                4.86 · 126 reviews
              </h1>
              <ul className="a">
                <ul className="l">
                  <li>
                    <p>Cleanliness</p>
                    <div className="div">
                      <span className="m"></span>
                    </div>
                    <p>4.8</p>
                  </li>
                  <li>
                    <p>Communication</p>
                    <div className="div">
                      <span></span>
                    </div>
                    <p>4.9</p>
                  </li>
                  <li>
                    <p>Check-in</p>
                    <div className="div">
                      <span></span>
                    </div>
                    <p>4.9</p>
                  </li>
                </ul>
                <ul className="l">
                  <li>
                    <p>Accuracy</p>
                    <div className="div">
                      <span></span>
                    </div>
                    <p>4.9</p>
                  </li>
                  <li>
                    <p>Location</p>
                    <div className="div">
                      <span className="m"></span>
                    </div>
                    <p>4.8</p>
                  </li>
                  <li>
                    <p>Value</p>
                    <div className="div">
                      <span className="s"></span>
                    </div>
                    <p>4.7</p>
                  </li>
                </ul>
              </ul>
            </div>
            <ul>
              <li>
                <div className="profile">
                  <Image
                    width={40}
                    height={40}
                    src="https://a0.muscache.com/im/pictures/user/48bfe386-b947-443d-a7d8-9ba16dd87c1f.jpg?im_w=240"
                  />
                  <p className="name">Aldo</p>
                  <p className="date">June 2023</p>
                </div>
                <p className="content">
                  The service is impeccable. The staff is super friendly and
                  responsive.
                  <br /> We highly recommend it.
                </p>
              </li>
              <li>
                <div className="profile">
                  <Image
                    src="https://a0.muscache.com/im/pictures/user/6d4366ac-fea5-4865-a914-5bf6cc2c8286.jpg?im_w=240"
                    width={40}
                    height={40}
                  />
                  <p className="name">Anisha</p>
                  <p className="date">June 2023</p>
                </div>

                <p className="content">
                  we loved the place to stay beautiful night was so good &
                  lovely morning sounds
                </p>
              </li>
              <li>
                <div className="profile">
                  <Image
                    src="https://a0.muscache.com/im/pictures/user/User-44531743/original/9f9b36c8-22fd-4f51-a2e2-1eb85c0e1865.jpeg?im_w=240"
                    width={40}
                    height={40}
                  />
                  <p className="name">Sanal</p>
                  <p className="date">June 2023</p>
                </div>
                <p className="content">
                  We had a very relaxing time in the villa. The hosts were very
                  responsive when we had questions. The food they cooked was
                  also great!
                </p>
              </li>
              <li>
                <div className="profile">
                  <Image
                    src="https://a0.muscache.com/im/pictures/user/User-56556621/original/106504df-e131-45b2-8bab-aa809f8f5737.jpeg?im_w=240"
                    width={40}
                    height={40}
                  />
                  <p className="name">Yiting</p>
                  <p className="date">May 2023</p>
                </div>
                <p className="content">We had a wonderful time at Veluvana!</p>
              </li>
              <li>
                <div className="profile">
                  <Image
                    src="https://a0.muscache.com/im/pictures/user/fa2b5a4d-fc11-438f-9ffc-21c6aab6129f.jpg?im_w=240"
                    width={40}
                    height={40}
                  />
                  <p className="name">Muhammad</p>
                  <p className="date">May 2023</p>
                </div>
                <p className="content">It was just perfect. Thank you 🙏</p>
              </li>
              <li>
                <div className="profile">
                  <Image
                    src="https://a0.muscache.com/im/pictures/user/7832c8d6-16e3-4aed-a923-d5c57c2350db.jpg?im_w=240"
                    width={40}
                    height={40}
                  />
                  <p className="name">Alex</p>
                  <p className="date">May 2023</p>
                </div>
                <p className="content">
                  It was an amazing experience, I will never forget the words
                  before entering ARE YOU READY and we saw this wonderful place.
                </p>
              </li>
            </ul>
            <button onClick={() => setMore("reviews")}>
              Show all 126 reviews
            </button>
          </div>
          <Map />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

export const getServerSideProps = () =>
  fetch(
    (process.env.NODE_ENV === "production"
      ? process.env.URL
      : "http://localhost:3000") +
      "/api" +
      "/place",
    {
      next: {
        revalidate: 60,
      },
    }
  )
    .then((r) => r.json())
    .then((r) => ({ props: { data: r } }));
