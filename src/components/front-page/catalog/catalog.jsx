import React from 'react';
import DetailCard from "./detail-card/detail-card";


const Catalog = () => {
    const details = [{
        name: "Деталь 1",
        vendorCode: "8330A448",
        description: "Описание детали 1"
    }, {
        name: "Деталь 2",
        vendorCode: "8450A448",
        description: "Описание детали 2"
    }, {
        name: "Деталь 3",
        vendorCode: "1230A428",
        description: "Описание детали 3"
    }, {
        name: "Деталь 4",
        vendorCode: "2280A448",
        description: "Описание детали 4"
    }, {
        name: "Деталь 5",
        vendorCode: "8330A040",
        description: "Описание детали 5"
    }];

    return (
        <div className="catalog">
            <div>
                {details.map(detail => <DetailCard detail={detail}/>)}
            </div>
        </div>
    )
}

export default Catalog;