import { tv } from 'tailwind-variants';
import { Card, Button } from "@nextui-org/react";

const cardBase = tv({
    slots: {
        cardWrapper: 'border-none w-11/12 h-[400px]',
        container: 'flex flex-col items-center h-full w-full justify-center p-2',
        contentWrapper: 'text-xl text-center pb-2',
    }
});

const OurApproachCardErrors = tv({
    extend: cardBase
});

const { cardWrapper, container, contentWrapper } = OurApproachCardErrors();

const OurApproachCardError = ({ onReload }: { onReload: () => void }) => {
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

export default OurApproachCardError;
