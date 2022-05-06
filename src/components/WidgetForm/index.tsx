import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImagUrl from '../../assets/bug.svg';
import ideaImagUrl from '../../assets/idea.svg';
import thoughtImagUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessType";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImagUrl,
            alt: 'Imagem de um insecto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImagUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImagUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },


}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)
    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep

                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />

                    )}
                </>
            )}


            <footer className="text-xs text-neutral-400">
                Feito com amor pela <a className="underline underline-offset-2" href="https://bugsolutions.ao">Bug Solutions</a>

            </footer>
        </div>
    )

}