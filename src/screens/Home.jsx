import { Area, B, B1, Card, Div, Div1, Div2, Div3, Div4, Div5, Div6, Div7, Div8, DivRoot, Icon, IcroundArrowBackIos, IcroundArrowBackIos1, Parent, PicIcon, Text, VectorIcon, VectorIcon1 } from '../assets/HomeCss/HomeCss';
import MapList from './MapList';
import UnProblem12 from '../img/UnProblem12.png';

const Home = () => {
    return (
        <>
            <Div8>
                <Div>
                    <img style={{ position: 'absolute', width: '280px', height: '280px', left: '15%' }} src={UnProblem12} alt='loading'></img>
                    <div style={{ position: 'relative', top: ' 300px', fontSize: '18px', textAlign: 'left' }}>
                        <h3>Environment</h3>
                        Every year, environmental problems caused by clothing production and disposal are intensifying.<br />
                        Moreover, it can be seen that a culture in which the cycle of clothing consumption is very short these days is taking place.
                        Our service avoids this type of consumption.
                        Rather than buying new clothes every time, I borrow the clothes I need and borrow the clothes I thought I'd throw away to protect the environment
                        In addition, it gives responsibility for consumption and production.<br /> <br />
                        <h3>Excessive Consumption</h3>
                        This webpage was developed to avoid overconsumption of clothing by the 2030 generation in Korea and to encourage reasonable consumption.<br />
                        On this webpage, you can rent and share clothes with each other in the area you want in Seoul through Google Maps.
                    </div>
                </Div>
            </Div8>
            <MapList />
        </>
    );
};

export default Home;
