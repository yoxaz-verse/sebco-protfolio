import { tv } from 'tailwind-variants';
import { Card, Button } from "@nextui-org/react";

const cardBase = tv({
    slots: {
        cardWrapper: 'border-none w-[280px] h-[300px] md:w-[280px] md:h-[300px] lg:w-[360px] lg:h-[360px] rounded-none',
        container: 'flex flex-col items-center h-full w-full justify-center p-2',
        contentWrapper: 'text-xl text-center pb-2',
    }
});

const ClientSayCardErrors = tv({
    extend: cardBase
});

const { cardWrapper, container, contentWrapper } = ClientSayCardErrors();

const ClientSayCardError = ({ onReload }: { onReload: () => void }) => {
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

export default ClientSayCardError;
