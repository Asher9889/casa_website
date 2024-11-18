import { Header } from "../../components";
import Download from "../../components/Download";

export default function About() {
  return (
    <div className="w-full  mx-auto max-w-[1200px] px-2 py-3">
      <Header />
      <h1 className="mt-8 text-center text-xl ">
      About Us Welcome to CASA, where fashion meets innovation. We are
      redefining the online shopping experience with a fun, interactive, and
      engaging platform designed to make discovering new styles effortless and
      exciting. Inspired by the best elements of social apps, CASA blends
      personalization, creativity, and seamless shopping into one cohesive
      experience. <br /> At CASA, we believe shopping should be more than just
      buying—it’s about exploration and connection. Our platform empowers
      customers to discover new trends, swipe through collections, and shop
      effortlessly, all while enjoying an immersive and user-friendly interface.
      With features like AI-driven recommendations, swipe shopping, and in-app
      purchases, CASA transforms every visit into an engaging journey. <br /> We are
      committed to collaborating with forward-thinking brands to bring the
      latest and best styles to our audience. Together, we aim to create a
      community where fashion and technology come together, offering customers a
      smarter, more exciting way to shop.
    </h1>
    <Download />
    </div>
    
  );
}
