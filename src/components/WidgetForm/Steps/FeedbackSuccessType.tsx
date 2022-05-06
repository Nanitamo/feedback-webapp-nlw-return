import { CloseButton } from "../../CloseButton";

import successImage from '../../../assets/success.svg';

interface FeedbackSuccessTypePros{
    onFeedbackRestartRequested: () =>void
}
export function FeedbackSuccessStep({
    onFeedbackRestartRequested
}: FeedbackSuccessTypePros) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={successImage} alt="Imagem de Sucesso" width={40} height={40} />

                <span className="text-xl mt-2">Agradecemos o feddback!</span>

                <button
                    type="button"
                    onClick={onFeedbackRestartRequested}
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none"
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}