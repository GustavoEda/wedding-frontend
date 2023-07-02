import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default async function Home() {
  const response = await fetch('https://gifts-list-beta.vercel.app/api/gifts', { cache: 'no-store' });
  const data = await response.json();
  const gifts : any = [];

  data.map((gift : any) => {gifts.push({
    id: gift.id,
    name: gift.name,
    link: `[${gift.link_placeholder}](${gift.link})`,
    price: gift.price ,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt={gift.name} src={gift.image} width={350} height={350} />
      </div>
    ),
    selected: Boolean(gift.guest),
    description: gift.description
    });
  });

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text pb-3 text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{
            animationDelay: "0.15s",
            animationFillMode: "forwards",
            color: "#531D13",
          }}
        >
          <Balancer>Angelo & Malu</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards", textAlign: "justify" }}
        >
          <Balancer>
          Estamos felizes em compartilhar esse momento com você! 
          Como você sabe, nós moramos juntos há um tempo e por isso nossa lista de presentes não tem tantos itens como uma lista comum.
          Se quiser dar um presente, só nos indicar, mas caso queira ajudar com algum valor, estamos deixando nosso pix.
          Esperamos não criar nenhum desconforto por aí, então não se preocupem em dar qualquer quantia que vá atrapalhar sua vida financeira. 
          O mais importante é ter você com a gente!
          </Balancer>
        </p>

        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            <strong>PIX Angelo:</strong> angelo.bz.souza@gmail.com
          </Balancer>
        </p>

        <p
          className="animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            <strong>PIX Malu:</strong> 491.749.118-56
          </Balancer>
        </p>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {gifts.map(({ id, name, demo, link, price, selected, description } : {id: number, name: string, demo: any, link: string, price: string, selected: boolean, description: string}) => (
          <Card
            id={id}
            title={name}
            link={link}
            price={price}
            demo={demo}
            selected={selected}
            description={description}
          />
        ))}
      </div>
    </>
  );
}
