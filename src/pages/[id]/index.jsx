import Link from "next/link";
import React from "react";
import {
  GlobalIcon,
  Logo,
  MenuIcon,
  MiniLogo,
  PersonIcon,
  SearchIcon,
} from "..";

const Page = ({ data }) => {
  return (
    <div className="place">
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
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1> <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1> <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1> <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1> <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1> <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1> <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
          <h1>Main</h1>
        </main>
        <div className="reviews"></div>
        <div className="map"></div>
      </div>
    </div>
  );
};

export default Page;

export const getServerSideProps = () =>
  fetch(
    (process.env.NODE_ENV === "production"
      ? process.env.URL
      : "http://localhost:3000") +
      "/api" +
      "/place"
  )
    .then((r) => r.json())
    .then((r) => ({ props: { data: r } }));
