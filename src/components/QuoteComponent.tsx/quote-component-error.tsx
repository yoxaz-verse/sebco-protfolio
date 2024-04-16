import { tv } from 'tailwind-variants';
import { Card, Button } from "@nextui-org/react";

const cardBase = tv({
    slots: {
        cardWrapper: 'border-none rounded-none w-full p-14',
        container: 'flex flex-col items-center h-full w-full justify-center p-2',
        contentWrapper: 'text-xl text-center pb-2',
    }
});

const QuoteComponentErrors = tv({
    extend: cardBase
});

const { cardWrapper, container, contentWrapper } = QuoteComponentErrors();

const QuoteComponentError = ({ onReload }: { onReload: () => void }) => {
    return (
        <Card
            radius="lg"
            className={cardWrapper()}
        >
            <div className={container()}>
                <h1 className={contentWrapper()}>Oops! an error occurred.</h1>
                <Button onClick={onReload}>Try Again</Button>
            </div>
        </Card>
    )
}

export default QuoteComponentError;
