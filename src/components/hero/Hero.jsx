import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 md:flex-row md:justify-between md:py-24">
        <div className="text-center md:text-left mb-5">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Trusted legal representation for your needs
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Our experienced attorneys are dedicated to providing exceptional
            service and achieving the best outcomes for our clients.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Schedule a Consultation
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/imageOne.jpg" // Replace with your image path
            alt="Law firm consultation"
            width={800}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
