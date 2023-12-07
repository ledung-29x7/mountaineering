import React from 'react';
import { Link } from 'react-router-dom';
import '../css/intros.css'
import IntroComponent from '../../components/introComponent';
import Taybac from '../../img/location/vietnam/north.jpg'
const Location =()=>{
    return(
        <div className='locations'>
            <Link className='intro' to={`/`}>
                <IntroComponent pic={Taybac} title="Địa điểm leo núi ở miền bắc" intro='Bạn là người đam mê núi rừng? Vậy bạn đã biết đến danh sách các ngọn núi hùng vĩ ở Yên Bái đang chờ bạn khám phá chưa?' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/`}>
                <IntroComponent pic={Taybac} title="Việt Nam" intro='Bạn là người đam mê núi rừng? Vậy bạn đã biết đến danh sách các ngọn núi hùng vĩ ở Yên Bái đang chờ bạn khám phá chưa?' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/`}>
                <IntroComponent pic={Taybac} title="Địa điểm leo núi ở miền bắc" intro='Bạn là người đam mê núi rừng? Vậy bạn đã biết đến danh sách các ngọn núi hùng vĩ ở Yên Bái đang chờ bạn khám phá chưa?' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/`}>
                <IntroComponent pic={Taybac} title="Địa điểm leo núi ở miền bắc" intro='Bạn là người đam mê núi rừng? Vậy bạn đã biết đến danh sách các ngọn núi hùng vĩ ở Yên Bái đang chờ bạn khám phá chưa?' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/`}>
                <IntroComponent pic={Taybac} title="Địa điểm leo núi ở miền bắc" intro='Bạn là người đam mê núi rừng? Vậy bạn đã biết đến danh sách các ngọn núi hùng vĩ ở Yên Bái đang chờ bạn khám phá chưa?' ></IntroComponent>
            </Link>
            <Link className='intro' to={`/`}>
                <IntroComponent pic={Taybac} title="Địa điểm leo núi ở miền bắc" intro='Bạn là người đam mê núi rừng? Vậy bạn đã biết đến danh sách các ngọn núi hùng vĩ ở Yên Bái đang chờ bạn khám phá chưa?' ></IntroComponent>
            </Link>
        </div>
    )
}
export default Location;