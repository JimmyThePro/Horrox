import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
    return (
        <>
            <Main />
            <Row rowID='1' title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        </>
    )
};

export default Home;
