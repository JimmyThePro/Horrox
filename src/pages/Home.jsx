import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID='2' title='Upcoming' fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home;
