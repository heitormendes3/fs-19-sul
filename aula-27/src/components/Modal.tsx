interface ModalProps {
  onCloseModal: () => void
  logoUrl: string
}

export const Modal = ({onCloseModal, logoUrl}: ModalProps) => {
  return (
      <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-[#00000073] flex items-center justify-center">
          <div className="p-3 bg-white rounded-lg flex flex-col items-center overflow-hidden w-[30%]">
              <h2 className="text-[#000]">GOOOOL!!!</h2>
              <img className=" w-[100px] h-[100px]" src={logoUrl} alt="logo do time" />
              <button onClick={onCloseModal} className="bg-red-300 px-3 py-1">fechar</button>
          </div>
      </div>