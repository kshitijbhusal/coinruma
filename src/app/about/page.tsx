import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-fit min-h-fit px-10 bg-linear-to-t from-fuchsia-200 via-blue-500 to-sky-800 flex flex-col justify-between ">
        <div className="container px-4 mx-auto">
          <Header />
          <section className="bg-rd-500 mt-16 leading-6 ">
            <div>
              <h1 className="text-4xl font-bold text-white">About CoinRuma</h1>
              <br />
              <h2 className="text-2xl font-semibold ">
                Your AI-Powered Guide to the World of Crypto
              </h2>
              <p className="text-base font-medium">
                Welcome to CoinRuma, your ultimate companion for effortlessly
                navigating the often-intimidating landscape of cryptocurrency
                and blockchain technology. In a world brimming with complex
                jargon and rapidly evolving innovations, CoinRuma stands out as
                a beacon of clarity, designed to make understanding any crypto
                project truly simple and accessible.
              </p>
              <br />
            </div>
          </section>
        </div>
      </div>
      <div className="h-screen min-h-fit px-10  bg-linear-to-t from-fuchsia-200 via-sky-100 to-fuchsia-200 flex flex-col justify-between  ">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-base font-medium">
            Our mission at CoinRuma is to democratize knowledge about digital
            assets. We believe that everyone, regardless of their technical
            background or prior experience, should have the tools to understand
            the foundational concepts and specific details of any blockchain
            project. We aim to bridge the gap between complex whitepapers and
            intuitive insights, empowering you to make informed decisions and
            satisfy your curiosity with confidence.
          </p>
          <br />
          <h1 className="text-2xl font-semibold">
            How It Works: The Power of AI
          </h1>
          <p className="text-base font-medium">
            At the heart of CoinRuma is advanced Artificial Intelligence. When
            you enter a coin or project name, our intelligent system processes
            vast amounts of information, distillates the key components, and
            translates them into an easy-to-understand breakdown. This means you
            get clear explanations about a project&apos;s purpose, underlying
            technology, use cases, and market relevance, all delivered
            instantly. We leverage sophisticated AI models to ensure the
            information provided is not only accurate but also presented in a
            digestible format, cutting through the noise to deliver the insights
            that matter most to you.
          </p>
          <br />
          <section className="text-base font-medium">
            <p>For Everyone Whether you&apos;re:</p>
            <ul>
              <li>- A newcomer curious about Bitcoin or Ethereum.</li>
              <li>- A student researching decentralized finance.</li>
              <li>- A developer exploring new blockchain protocols.</li>
              <li>- An investor seeking quick, reliable summaries.</li>
            </ul>
            <br />
            <p>
              CoinRuma is designed with you in mind. We&apos;re continuously
              working to enhance our AI capabilities and expand our features to
              bring you the most comprehensive and intuitive crypto insights
              possible. Thank you for choosing CoinRuma as your trusted guide in
              the fascinating world of cryptocurrency!
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
