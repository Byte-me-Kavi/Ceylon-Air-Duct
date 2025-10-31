"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  Wind,
  Volume2,
  Grid3x3,
  FileText,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Building2,
  Users,
  Calendar,
} from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openingEmblaRef, openingEmblaApi] = useEmblaCarousel({ loop: true });
  const [workEmblaRef, workEmblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (openingEmblaApi) {
      const autoplay = setInterval(() => {
        openingEmblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(autoplay);
    }
  }, [openingEmblaApi]);

  useEffect(() => {
    if (workEmblaApi) {
      const autoplay = setInterval(() => {
        workEmblaApi.scrollNext();
      }, 6000);
      return () => clearInterval(autoplay);
    }
  }, [workEmblaApi]);

  const scrollOpeningPrev = useCallback(() => {
    if (openingEmblaApi) openingEmblaApi.scrollPrev();
  }, [openingEmblaApi]);

  const scrollOpeningNext = useCallback(() => {
    if (openingEmblaApi) openingEmblaApi.scrollNext();
  }, [openingEmblaApi]);

  const scrollWorkPrev = useCallback(() => {
    if (workEmblaApi) workEmblaApi.scrollPrev();
  }, [workEmblaApi]);

  const scrollWorkNext = useCallback(() => {
    if (workEmblaApi) workEmblaApi.scrollNext();
  }, [workEmblaApi]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const products = [
    {
      name: "Square Ducts",
      icon: Grid3x3,
      image: "/images/Square-Ducts.jpg",
      description:
        "High-quality square ductwork for all industrial applications",
    },
    {
      name: "Spiral Ducts",
      icon: Wind,
      image: "/images/Spiral-Ducts.png",
      description: "Efficient spiral duct systems for optimal airflow",
    },
    {
      name: "Grills and Diffusers",
      icon: Grid3x3,
      image: "/images/Grills-and-Diffusers.jpeg",
      description: "Premium grills and diffusers for air distribution",
    },
    {
      name: "Volume Control Dampers",
      icon: Volume2,
      image: "/images/Volume-Control-Dampers.jpg",
      description: "Precision control dampers for air volume regulation",
    },
    {
      name: "Sound Attenuators",
      icon: Volume2,
      image: "/images/Sound-Attenuators.jpg",
      description: "Advanced sound reduction solutions",
    },
  ];

  const imports = [
    {
      name: "Galvanized Sheet",
      icon: FileText,
      image: "/images/Galvanized-Sheet.jpeg",
    },
    {
      name: "Galvanized Coil",
      icon: FileText,
      image: "/images/Galvanized-Coil.png",
    },
    {
      name: "Disc Valves",
      icon: Grid3x3,
      image: "/images/Disc-Valves.jpg",
    },
    {
      name: "Four Way Diffusers",
      icon: Grid3x3,
      image: "/images/Four-Way-Diffusers.jpg",
    },
  ];

  const openingPhotos = [
    "/images/opening-1.jpg",
    "/images/opening-2.jpg",
    "/images/opening-3.jpg",
    "/images/opeing-4.jpg",
  ];

  const workPhotos = [
    "/images/work-1.jpg",
    "/images/work-2.jpg",
    "/images/work-3.jpg",
    "/images/work-4.jpg",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-2xl border-b border-[#2a80b5]/10"
            : " bg-[#2a80b5]/20 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Section */}
            <div
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#2a80b5]/10 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                <Image
                  src="/images/logo-no-bg.png"
                  alt="Ceylon Air Duct Logo"
                  width={80}
                  height={80}
                  className="rounded-xl relative z-10 transition-transform duration-300 group-hover:scale-105 lg:w-40 lg:group-hover:scale-105"
                />
              </div>
              {/* <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-blue-800 tracking-tight leading-tight">
                  CEYLON AIR DUCT
                </h1>
                <p className="text-xs text-gray-600 font-medium tracking-wider">
                  AIR EFFICIENT PRODUCTS
                </p>
              </div> */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => scrollToSection("home")}
                className="px-4 py-2 text-gray-700 hover:text-[#2a80b5] transition-all font-medium rounded-lg hover:bg-[#ebf3fa]/50 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2a80b5] group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-4 py-2 text-gray-700 hover:text-[#2a80b5] transition-all font-medium rounded-lg hover:bg-[#ebf3fa]/50 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2a80b5] group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="px-4 py-2 text-gray-700 hover:text-[#2a80b5] transition-all font-medium rounded-lg hover:bg-[#ebf3fa]/50 relative group"
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2a80b5] group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="px-4 py-2 text-gray-700 hover:text-[#2a80b5] transition-all font-medium rounded-lg hover:bg-[#ebf3fa]/50 relative group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2a80b5] group-hover:w-full transition-all duration-300" />
              </button>
              <div className="ml-4 flex items-center gap-3">
                <a
                  href="tel:0114435953"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-[#2a80b5] transition-colors"
                >
                  <Phone size={16} />
                  <span className="hidden xl:inline">0114435953</span>
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#2a80b5] text-white px-6 py-2.5 rounded-full hover:bg-[#236a99] transition-all hover:scale-105 hover:shadow-lg font-semibold"
                >
                  Get Quote
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-[#ebf3fa] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu (always present for smooth transitions) */}
        <div
          className={`lg:hidden bg-white/98 backdrop-blur-xl border-t border-[#2a80b5]/10 shadow-xl overflow-hidden transform origin-top transition-all duration-450 ease-out
            ${
              mobileMenuOpen
                ? "opacity-100 scale-y-100 max-h-screen pointer-events-auto"
                : "opacity-0 scale-y-95 max-h-0 pointer-events-none"
            }`}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left px-4 py-3 text-gray-700 hover:text-[#2a80b5] hover:bg-[#ebf3fa]/50 font-medium rounded-lg transition-all"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left px-4 py-3 text-gray-700 hover:text-[#2a80b5] hover:bg-[#ebf3fa]/50 font-medium rounded-lg transition-all"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left px-4 py-3 text-gray-700 hover:text-[#2a80b5] hover:bg-[#ebf3fa]/50 font-medium rounded-lg transition-all"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-left px-4 py-3 text-gray-700 hover:text-[#2a80b5] hover:bg-[#ebf3fa]/50 font-medium rounded-lg transition-all"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left px-4 py-3 text-gray-700 hover:text-[#2a80b5] hover:bg-[#ebf3fa]/50 font-medium rounded-lg transition-all"
            >
              Contact
            </button>
            <div className="border-t border-gray-200 mt-2 pt-4 px-4">
              <a
                href="tel:0114435953"
                className="flex items-center gap-3 text-gray-600 hover:text-[#2a80b5] mb-3 transition-colors"
              >
                <Phone size={18} />
                <span>0114435953</span>
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#2a80b5] text-white px-6 py-3 rounded-full hover:bg-[#236a99] transition-all font-semibold"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative mt-20 md:mt-8 min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#ebf3fa] via-white to-[#ebf3fa]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJhODBiNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-[#2a80b5]/10 rounded-full">
                <p className="text-[#2a80b5] font-semibold text-sm">
                  AIR EFFICIENT PRODUCTS
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Air Duct Solutions for{" "}
                <span className="text-[#2a80b5]">Sri Lanka</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leading manufacturer and supplier of high-quality air duct
                systems, grills, diffusers, and HVAC components. Serving
                industrial and commercial sectors with excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("products")}
                  className="bg-[#2a80b5] text-white px-8 py-4 rounded-full hover:bg-[#236a99] transition-all hover:scale-105 font-semibold shadow-lg"
                >
                  Explore Products
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-white border-2 border-[#2a80b5] text-[#2a80b5] px-8 py-4 rounded-full hover:bg-[#ebf3fa] transition-all hover:scale-105 font-semibold"
                >
                  Get Quote
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-[#2a80b5] to-[#17568c] rounded-3xl blur-xl opacity-90 animate-pulse" />
              {/* Responsive image container: shorter on large screens */}
              <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl overflow-hidden">
                <div className="relative h-56 sm:h-80 lg:h-120 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero.jpg"
                    alt="Ceylon Air Duct"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-[#2a80b5]">Ceylon Air Duct</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ceylon Air Duct Lanka Pvt Ltd is a leading manufacturer of air
              efficient products in Sri Lanka. With state-of-the-art
              manufacturing facilities and a dedicated team, we deliver
              top-quality HVAC solutions to meet the diverse needs of our
              clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-[#ebf3fa] to-white p-8 rounded-2xl border border-[#2a80b5]/10 hover:shadow-xl transition-all hover:-translate-y-2">
              <Factory className="w-12 h-12 text-[#2a80b5] mb-4" />
              <h3 className="text-xl font-bold mb-3">CAD Factory</h3>
              <p className="text-gray-600 mb-4">538/B, Heenkenda, Ragama</p>
              <p className="text-sm text-gray-500">
                Modern manufacturing facility equipped with advanced machinery
              </p>
            </div>

            <div className="bg-linear-to-br from-[#ebf3fa] to-white p-8 rounded-2xl border border-[#2a80b5]/10 hover:shadow-xl transition-all hover:-translate-y-2">
              <MapPin className="w-12 h-12 text-[#2a80b5] mb-4" />
              <h3 className="text-xl font-bold mb-3">Sales Office</h3>
              <p className="text-gray-600 mb-4">
                No 1005, Kandy Road, Kelaniya
              </p>
              <p className="text-sm text-gray-500">
                Visit our showroom to explore our complete product range
              </p>
            </div>

            <div className="bg-linear-to-br from-[#ebf3fa] to-white p-8 rounded-2xl border border-[#2a80b5]/10 hover:shadow-xl transition-all hover:-translate-y-2">
              <Phone className="w-12 h-12 text-[#2a80b5] mb-4" />
              <h3 className="text-xl font-bold mb-3">Quick Contact</h3>
              <p className="text-gray-600 mb-2">0114435953</p>
              <p className="text-gray-600">0774161678</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-linear-to-b from-white to-[#ebf3fa]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-[#2a80b5]">Products</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive range of air duct products manufactured and supplied
              to the highest standards
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-[#2a80b5]">Products We Manufacture</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-[#2a80b5]/10 hover:border-[#2a80b5]/30 hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-48 bg-linear-to-br from-[#ebf3fa] to-white overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-linear-to-br from-[#2a80b5] to-[#236a99] rounded-lg flex items-center justify-center shrink-0">
                        <product.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-[#2a80b5]">
                Products We Import & Supply
              </span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {imports.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-[#2a80b5]/10 hover:border-[#2a80b5]/30 hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-56 bg-linear-to-br from-[#ebf3fa] to-white overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-[#2a80b5]">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600">
              Explore our journey, team, and facility through memorable moments
            </p>
          </div>

          {/* Opening Ceremony Gallery */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-[#2a80b5]" />
              <h3 className="text-2xl font-bold text-center">
                <span className="text-[#2a80b5]">Opening Ceremony</span>
              </h3>
            </div>
            <div className="relative max-w-5xl mx-auto">
              <div
                className="overflow-hidden rounded-3xl shadow-2xl"
                ref={openingEmblaRef}
              >
                <div className="flex">
                  {openingPhotos.map((photo, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div className="relative h-[500px] bg-linear-to-br from-[#ebf3fa] to-white">
                        <Image
                          src={photo}
                          alt={`Opening Ceremony ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6">
                          <p className="text-white font-semibold text-lg">
                            Grand Opening Celebration
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={scrollOpeningPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-[#2a80b5]" />
              </button>
              <button
                onClick={scrollOpeningNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-[#2a80b5]" />
              </button>
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="w-6 h-6 text-[#2a80b5]" />
              <h3 className="text-2xl font-bold text-center">
                <span className="text-[#2a80b5]">Our Team</span>
              </h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/team.jpg"
                  alt="Ceylon Air Duct Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-8">
                  <h4 className="text-white font-bold text-2xl mb-2">
                    The Team Behind Excellence
                  </h4>
                  <p className="text-white/90">
                    Dedicated professionals committed to delivering quality air
                    duct solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Factory Work Gallery */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Building2 className="w-6 h-6 text-[#2a80b5]" />
              <h3 className="text-2xl font-bold text-center">
                <span className="text-[#2a80b5]">Factory & Production</span>
              </h3>
            </div>
            <div className="relative max-w-5xl mx-auto">
              <div
                className="overflow-hidden rounded-3xl shadow-2xl"
                ref={workEmblaRef}
              >
                <div className="flex">
                  {workPhotos.map((photo, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div className="relative h-[500px] bg-linear-to-br from-[#ebf3fa] to-white">
                        <Image
                          src={photo}
                          alt={`Factory Work ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6">
                          <p className="text-white font-semibold text-lg">
                            State-of-the-art Manufacturing
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={scrollWorkPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-[#2a80b5]" />
              </button>
              <button
                onClick={scrollWorkNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-[#2a80b5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-linear-to-b from-white to-[#ebf3fa]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Get In <span className="text-[#2a80b5]">Touch</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ready to discuss your air duct requirements? Contact us today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl border border-[#2a80b5]/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2a80b5] rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">0114435953</p>
                    <p className="text-gray-600">0774161678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2a80b5] rounded-xl flex items-center justify-center shrink-0">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Factory</h4>
                    <p className="text-gray-600">538/B, Heenkenda, Ragama</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2a80b5] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sales Office</h4>
                    <p className="text-gray-600">
                      No 1005, Kandy Road, Kelaniya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl border border-[#2a80b5]/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2a80b5] focus:outline-none focus:ring-2 focus:ring-[#2a80b5]/20 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2a80b5] focus:outline-none focus:ring-2 focus:ring-[#2a80b5]/20 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2a80b5] focus:outline-none focus:ring-2 focus:ring-[#2a80b5]/20 transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2a80b5] focus:outline-none focus:ring-2 focus:ring-[#2a80b5]/20 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#2a80b5] text-white py-3 rounded-xl hover:bg-[#236a99] transition-all font-semibold shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-linear-to-b from-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#2a80b5] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2a80b5] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <h3 className="font-bold text-xl text-white">
                    CEYLON AIR DUCT
                  </h3>
                  <p className="text-xs text-gray-400 tracking-wider">
                    LANKA PVT LTD
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Leading manufacturer and supplier of air efficient products in
                Sri Lanka, delivering top-quality HVAC solutions since
                inception.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#2a80b5]/20 rounded-lg flex items-center justify-center hover:bg-[#2a80b5]/30 transition-colors cursor-pointer">
                  <Phone size={18} className="text-[#2a80b5]" />
                </div>
                <div className="w-10 h-10 bg-[#2a80b5]/20 rounded-lg flex items-center justify-center hover:bg-[#2a80b5]/30 transition-colors cursor-pointer">
                  <Mail size={18} className="text-[#2a80b5]" />
                </div>
                <div className="w-10 h-10 bg-[#2a80b5]/20 rounded-lg flex items-center justify-center hover:bg-[#2a80b5]/30 transition-colors cursor-pointer">
                  <MapPin size={18} className="text-[#2a80b5]" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-400 hover:text-[#2a80b5] transition-colors text-sm hover:translate-x-1 duration-200"
                >
                  → Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-[#2a80b5] transition-colors text-sm hover:translate-x-1 duration-200"
                >
                  → About Us
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="block text-gray-400 hover:text-[#2a80b5] transition-colors text-sm hover:translate-x-1 duration-200"
                >
                  → Products & Services
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="block text-gray-400 hover:text-[#2a80b5] transition-colors text-sm hover:translate-x-1 duration-200"
                >
                  → Gallery
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-[#2a80b5] transition-colors text-sm hover:translate-x-1 duration-200"
                >
                  → Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-[#2a80b5] mt-1 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">
                      <a
                        href="tel:0114435953"
                        className="hover:text-[#2a80b5] transition-colors"
                      >
                        0114435953
                      </a>
                    </p>
                    <p className="text-gray-400 text-sm">
                      <a
                        href="tel:0774161678"
                        className="hover:text-[#2a80b5] transition-colors"
                      >
                        0774161678
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Factory size={16} className="text-[#2a80b5] mt-1 shrink-0" />
                  <p className="text-gray-400 text-sm">
                    538/B, Heenkenda, Ragama
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#2a80b5] mt-1 shrink-0" />
                  <p className="text-gray-400 text-sm">
                    No 1005, Kandy Road, Kelaniya
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours & CTA */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">
                Business Hours
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">8:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#2a80b5] text-white px-6 py-3 rounded-xl hover:bg-[#236a99] transition-all hover:scale-105 font-semibold shadow-lg text-sm"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Ceylon Air Duct Lanka Pvt Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
