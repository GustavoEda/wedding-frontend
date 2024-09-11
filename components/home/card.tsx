"use client";
import { ReactNode, useState } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { useDemoModal } from "./demo-modal";

export default function Card({
  key,
  id,
  title,
  price,
  demo,
  selected,
  description,
}: {
  key: number,
  id: number,
  title: string;
  price: string;
  demo: ReactNode;
  selected: boolean;
  description: string;
}) {
  const [isSelected, setIsSelected] = useState(Boolean(selected));
  const { DemoModal, setShowDemoModal } = useDemoModal({ title, price, id, setIsSelected });
return (
  <div
      className="relative col-span-1 overflow-hidden rounded-xl bg-white shadow-md flex flex-col items-center justify-center py-32 md:py-32"
    >
    <DemoModal />

    <div className="flex h-60 items-center justify-center">{demo}</div>
      
      <div className="mx-auto max-w-md text-center md:text-left" style={{ flexGrow: 1 }}>
        <h2
          style={{
            animationDelay: "0.15s",
            animationFillMode: "forwards",
            color: "#531D13",
            marginTop: "10px",
          }}
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text px-1 font-display text-xl font-bold text-transparent md:text-3xl md:font-bold"
        >
        <Balancer>{title}</Balancer>
      </h2>
      
      <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text px-1 pt-3 font-display text-xl font-bold text-transparent md:text-2xl md:font-normal">
        <Balancer>R${parseFloat(price).toFixed(2).replace('.', ',')}</Balancer>
      </h2>
      
      <div className="prose-sm leading-normal text-gray-500 md:prose">
        <Balancer>
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                  className="font-medium text-gray-800 underline transition-colors"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </Balancer>
      </div>
      
      <div className="leading-normal text-gray-500" style={{marginBottom: "20%"}}>
        <Balancer></Balancer>
      </div>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
          maxWidth: "none",
          bottom: 0,
          marginTop: "-40px", // Move button 20px up
        }}
      >
        <button
          type="button"
          className={
            isSelected
              ? "text-dark-brown mb-3 cursor-not-allowed rounded-lg bg-orange px-5 py-2.5 text-center text-sm font-medium shadow-lg"
              : "mb-3 rounded-lg bg-olive px-5 py-2.5 text-center text-sm font-medium text-cream shadow-lg"
          }
          onClick={isSelected ? undefined : () => setShowDemoModal(true)}
        >
          {isSelected ? "Vou escolher esse!" : "Vou escolher esse!"}
        </button>
      </div>
    </div>
  </div>
);
}
