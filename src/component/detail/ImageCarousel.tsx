"use client";

import { useState, useEffect, useEffectEvent } from "react";
import Image from "next/image";

const images = [
    { id: 1, src: "/images/person.jpg", alt: "Slide 1" },
    { id: 2, src: "/images/person2.jpg", alt: "Slide 2" },
    { id: 3, src: "/images/person3.jpg", alt: "Slide 3" },
    { id: 4, src: "/images/person3.jpg", alt: "Slide 4" },
];

export default function ImageCarousel() {
    const [current, setCurrent] = useState(0);
    const length = images.length;
  
    const nextSlide = () => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    const setIntervals = useEffectEvent(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);

       return timer;
    });
  
    // Tự động chạy sau mỗi 6s
    useEffect(() => {
        const timer = setIntervals();

        return () => {
            clearInterval(timer);
        }
    }, []);
  
    if (!Array.isArray(images) || length === 0) return null;

    return (
        <div className="w-full">
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
            {/* Slide list */}
                <div className="relative h-32 sm:h-80 md:h-64">
                    {images.map((img, index) => (
                        <div
                        key={img.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === current ? "opacity-100" : "opacity-0"
                        }`}
                        >
                        {index === current && (
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        )}
                        </div>
                    ))}
                </div>
        
                {/* Nút điều hướng trái/phải */}
                <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 transition"
                    aria-label="Previous slide"
                >
                ‹
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 transition"
                    aria-label="Next slide"
                >
                ›
                </button>
        
                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {images.map((img, index) => (
                        <button
                        key={img.id}
                        onClick={() => setCurrent(index)}
                        className={`h-2.5 w-2.5 rounded-full border border-white transition ${
                            index === current ? "bg-white" : "bg-white/40"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            
            <div className="flex items-center mt-4">
                <div className="flex items-center gap-2 m-auto overflow-x-auto scroll-smooth">
                    {images.map((img, index) => (
                        <button
                            key={img.id}
                            type="button"
                            onClick={() => setCurrent(index)}
                            className="relative inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                        >
                            <div className="relative w-16 h-16">
                                <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover rounded-lg cursor-pointer"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
  }