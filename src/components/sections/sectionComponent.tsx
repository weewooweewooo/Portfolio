"use client";

import { useRef, useEffect } from 'react';
import { useSection } from './sectionContext';

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, children, className = '' }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { setActiveSection } = useSection();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      { 
        threshold: 0.5, // Section is considered "active" when 50% visible
        rootMargin: '-5% 0px -5% 0px' // Adjust this to fine-tune when sections become active
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, setActiveSection]);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`min-h-screen w-full flex flex-col ${className}`}
    >
      {children}
    </section>
  );
}