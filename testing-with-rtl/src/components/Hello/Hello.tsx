type OwnProps = {
    name?: string;
}

const Hello: React.FC<OwnProps> = ({name}) => {

    const helloResult = (name) ? <p>Hello, {name}!</p> : <p>Hey, stranger</p>

    return (
        <>
            {helloResult}
        </>
    );
};

export default Hello;