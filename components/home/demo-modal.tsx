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
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
  title: string;
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const onClickConfirmButton = () => {
    //IMPLEMENTA SUBMISSAO PRA API
    setIsConfirmed(!isConfirmed);
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
                      Caso desista de dar o presente, por favor entre em contato
                      com os noivos para que possam disponibilizá-lo novamente
                      no site
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
              Para sabermos quem deu o presente, insira seu nome:
            </h3>

            <div className="my-6 w-full text-left">
              <input
                type="text"
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Nome Completo"
                required
              ></input>
            </div>

            <Balancer>
              <button
                type="button"
                className="mb-3 mr-2 rounded-lg bg-olive px-5 py-2.5 text-center text-sm font-medium text-cream shadow-lg"
                onClick={() => onClickConfirmButton()}
              >
                Confirmar
              </button>
            </Balancer>
          </div>
        </div>
      )}
    </Modal>
  );
};

export function useDemoModal({ title }: { title: string }) {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
        title={title}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
