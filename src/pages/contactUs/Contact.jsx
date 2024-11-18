import { Download, Header } from "../../components";
import casa from "../../assets/Casa.png";

export default function Contact() {
  return (
    <div className="w-full  mx-auto max-w-[1200px] px-2 flex flex-col gap-6">
      <Header />
      <img className="mx-auto w-56" src={casa} alt="" />
      <div className="text-xl mt-6 font-Kanit flex flex-col gap-2">
        <p className="font-bold font-Kanit">Contact Us </p>
        <p>
          We’d love to hear from you! Whether you have a question, feedback, or
          want to collaborate with us, feel free to reach out.
        </p>
        <ul>
          <p className="mb-2">Our Contact Information</p>
          <li>📞 Phone: +91 7900116936</li>
          <li>📧 Email: casa.derekalmeida@gmail.com</li>
          <li>📍 Location: Mumbai, Maharashtra, India</li>
        </ul>
      </div>
      <Download />
    </div>
  );
}
