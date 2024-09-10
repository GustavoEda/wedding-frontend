import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default async function Home() {
  const response = await fetch('https://wedding-backend-seven.vercel.app/api/gifts', { cache: 'no-store' });
  const data = await response.json();
  const gifts : any = [];

  data.map((gift : any) => {gifts.push({
    id: gift.id,
    name: gift.name,
    link: `[${gift.link_placeholder}](${gift.link})`,
    price: gift.price ,
    demo: (
      <div
        className="flex items-center justify-center space-x-20"
        style={{ height: "100%" }}
      >
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt={gift.name}
          src={gift.image}
          width={350}
          height={350}
        />
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
          <Balancer>Eda & Renata</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
          Oi pessoal,
          Com o coração transbordando de alegria, queremos compartilhar uma notícia maravilhosa: vamos nos casar! 🎉
          Como alguns de vocês já sabem, o Gustavo/Eda/Cutuca já mora sozinho e tem bastante coisa, e a Renata, sempre ansiosa, já garantiu alguns itens para o nosso novo lar.
          Se vocês desejarem nos presentear com algo físico, é só entrar em contato com a Renata ou o Gustavo para combinarmos a entrega. 
          Caso prefiram nos ajudar com algum valor para a nossa nova vida, deixamos alguns itens abaixo com um código pix que vai direto pra noiva. 
          <strong>Mas lembrem-se: o mais importante para nós é a presença de cada um de vocês nesse momento tão especial.
          ❤️ Não se sintam pressionados a dar presentes e valores que possam comprometer suas finanças.</strong>
          Com carinho, Renata e Gustavo/Eda/Cutuca.
          </Balancer>
        </p>

        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            <strong>PIX Renata:</strong> PIX-RENATA
          </Balancer>
        </p>

      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {gifts.map(({ id, name, demo, link, price, selected, description } : {id: number, name: string, demo: any, link: string, price: string, selected: boolean, description: string}) => (
          <Card
            key={id}
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
