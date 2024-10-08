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
  className="relative col-span-1 overflow-hidden rounded-xl bg-white shadow-md flex flex-col items-center justify-center pt-16 pb-16"
>
  <DemoModal />

    <div className="flex h-60 items-center justify-center mb-3" style={{ marginBottom: '20px' }}>{demo}</div>

    <div className="mx-auto max-w-md text-center md:text-left mb-3 md:flex-grow">
    <h2
      style={{
        animationDelay: "0.15s",
        animationFillMode: "forwards",
        color: "#531D13",
      }}
      className="bg-gradient-to-br from-black to-stone-500 bg-clip-text px-1 font-display text-xl font-bold text-transparent md:text-3xl md:font-bold"
    >
      <Balancer>{title}</Balancer>
    </h2>

    <h2 
       className="bg-gradient-to-br from-black to-stone-500 bg-clip-text px-1 pt-3 font-display text-xl font-bold text-transparent md:text-2xl md:font-normal"
    >
      <Balancer>R${price}</Balancer>
    </h2>

    <div className="prose-sm leading-normal text-gray-500 mb-3 md:prose">
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

    <div className="leading-normal text-gray-500 mb-3">
      <Balancer></Balancer>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center", // Centraliza verticalmente
        justifyContent: "center",
        width: "100%",
        maxWidth: "none",
        bottom: 0,
        marginTop: "-40px",
      }}
    >
      <button
        type="button"
        className={
          isSelected
            ? "mb-3 rounded-lg bg-orange px-5 py-2.5 text-center text-sm font-medium shadow-lg cursor-not-allowed text-dark-brown"
            : "mb-3 rounded-lg bg-olive px-5 py-2.5 text-center text-sm font-medium shadow-lg text-cream"
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
