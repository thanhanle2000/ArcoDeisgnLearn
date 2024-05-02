interface Props {
    header: string;
    content: React.ReactNode;
}

function WhetherVerifiedItem({ header, content }: Props) {
    return (
        <>
            <h2 className="my-4">{header}</h2>
            {content}
        </>
    );
}

export default WhetherVerifiedItem;
