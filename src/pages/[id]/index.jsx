import React from "react";

const Page = ({ data }) => {
  return (
    <div className="place">
      <div className="header"></div>
      <main></main>
      <div className="reviews"></div>
      <div className="map"></div>
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
