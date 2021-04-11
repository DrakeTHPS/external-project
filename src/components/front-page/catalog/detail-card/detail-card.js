import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {useHistory} from "react-router";

const DetailCard = (props) => {
    const history = useHistory();
    return (
        <div className={"detailCard"}>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{props.detail.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Артикул: {props.detail.vendorCode}</CardSubtitle>
                </CardBody>
                <img style={{width:"100%"}} src={"https://images.ru.prom.st/436863228_w640_h640_podshipniki.jpg"} alt="Card image cap"/>
                <CardBody>
                    <CardText>{props.detail.description}</CardText>
                    <Button style={{height:"40px"}} onClick={()=>history.push("/main/checkout")}>Приобрести</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default DetailCard;