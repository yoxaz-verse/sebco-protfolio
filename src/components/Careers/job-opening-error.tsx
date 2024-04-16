import { tv } from 'tailwind-variants';
import { Card, Button } from "@nextui-org/react";

const cardBase = tv({
    slots: {
        cardWrapper: 'border-none rounded-none w-full h-[280px]',
        container: 'flex flex-col items-center h-full w-full justify-center p-2',
        contentWrapper: 'text-xl text-center pb-2',
    }
});

const JobCardErrors = tv({
    extend: cardBase
});

const { cardWrapper, container, contentWrapper } = JobCardErrors();

const JobOpeningCardError = ({ onReload }: { onReload: () => void }) => {
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

export default JobOpeningCardError;
