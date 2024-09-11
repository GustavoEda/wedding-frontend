import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Balancer from "react-wrap-balancer";

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
  title,
  price,
  id,
  setIsSelected,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
  title: string;
  id: number;
  setIsSelected: any,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [name, setName] = useState('');

  const onClickConfirmButton = async (id: number) => {
    setShowDemoModal(false)
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); // Atualizar o estado com o valor do input
  };

  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      {isConfirmed ? (
        <div className="w-full overflow-hidden md:max-w-2xl md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-4">
            <div className="flex justify-between border-b border-yellow-400 bg-yellow-50 p-4 text-sm text-yellow-800">
              <div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <Balancer>
                      Caso desista de dar o presente, por favor nos avise para que possamos libera-lo novamente!
                    </Balancer>
                  </p>
                </div>
              </div>
            </div>

            <Balancer>
              <button
                type="button"
                className="mb-3 mr-2 rounded-lg bg-olive px-5 py-2.5 text-center text-sm font-medium text-cream shadow-lg"
                onClick={() => setShowDemoModal(false)}
              >
                Confirmar
              </button>
            </Balancer>
          </div>
        </div>
      ) : (
        <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-4">
            <h3 className="font-display text-2xl font-bold">
              Confirmação do Presente - {title}
            </h3>

            <h3 className="text-l font-display font-normal">
              Agora é com você! Faça um pix de R${price} para edapd12@gmail.com
            </h3>

            <Balancer>
              <button
                type="button"
                className="mb-3 mr-2 rounded-lg bg-olive px-5 py-2.5 text-center text-sm font-medium text-cream shadow-lg"
                onClick={() => onClickConfirmButton(id)}
              >
                Fechar
              </button>
            </Balancer>
          </div>
        </div>
      )}
    </Modal>
  );
};

export function useDemoModal({ title, id, setIsSelected }: { title: string, id: number, setIsSelected: any  }) {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
        title={title}
        id={id}
        key={id}
        setIsSelected={setIsSelected}
      />
    );
  }, [showDemoModal, setShowDemoModal, title, id, setIsSelected]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
