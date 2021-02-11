import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { SUNAPI_ENDPOINT_VERSION,GET_DESTINOS } from "../api/routes";
import useToken from "../hook/useToken";
import SelectAjax from "./SelectAjax";
import DatePicker from 'react-datepicker';
import { FaSearch } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";

function FormularioBuscar(){
    const token = useToken();
    const [destino, setDestino] = useState(null)
    const [errorDestino, setErrordestino] = useState(false)
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);


    return(
        <div className="form-position">
            <h1 className="text-white">Busca tu próximo destino</h1>
            <form className="form-home-buscar">
                <Row className="align-items-center">
                    <Col md="5" xs="6" className="border-end">
                    <Form.Group className="mb-0">
                        <Form.Label className="text-color-3 ft-w600 pl-2 mb-0">Ubicación</Form.Label>
                        <SelectAjax
                            defaultValue={destino === null || Object.keys(destino).length === 0 ? false : destino}
                            url={`${SUNAPI_ENDPOINT_VERSION}${GET_DESTINOS}`}
                            access_token={token}
                            isMulti={false}
                            handleChange={(value) => {
                                if(value === null) 
                                    setErrordestino(true)
                                else 
                                    setErrordestino(false)                                
                                setDestino(value)
                            }} 
                            defaultOptions={destino}   
                            valid={true}     
                            isClearable={true}
                            placeholder="¿A dónde viajas?"   
                            className="select-hotel-home"                                              
                        />
                        {errorDestino && <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>}
                    </Form.Group>
                    </Col>
                    <Col md="2" xs="6" className="border-end">
                        <Form.Group className="mb-0">
                            <Form.Label className="text-color-3 ft-w600 d-block pl-2 mb-0">De</Form.Label>
                            <DatePicker
                                selected={startDate}
                                className="form-control-sm input-datepicker text-color-gray1 w-100"
                                onChange={date => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="MMMM-yyyy"
                                showMonthYearPicker
                                calendarClassName="calendar-datepicker"
                                placeholderText="Elegir mes"
                            />
                        </Form.Group>
                    </Col>
                    <Col md="2" xs="6" className="border-end">
                        <Form.Group className="mb-0">
                            <Form.Label className="text-color-3 ft-w600 d-block pl-2 mb-0">Hasta</Form.Label>
                            <DatePicker
                                selected={endDate}
                                className="form-control-sm input-datepicker text-color-gray1 w-100"
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                dateFormat="MMMM-yyyy"
                                showMonthYearPicker
                                calendarClassName="calendar-datepicker"
                                placeholderText="Elegir mes"
                            />
                        </Form.Group>
                    </Col>
                    <Col md="2" xs="6">
                        <Form.Group className="mb-0">
                            <Form.Label className="text-color-3 ft-w600 d-block pl-2 mb-0">Huéspedes</Form.Label>
                            <Form.Control as="select" className="border-0 p-1 text-color-gray1" size="sm">
                                <option>1 huésped</option>
                                <option>2 huéspedes</option>
                                <option>3 huéspedes</option>
                                <option>4 huéspedes</option>
                                <option>5 huéspedes</option>
                                <option>6 huéspedes</option>
                                <option>7 huéspedes</option>
                                <option>8 huéspedes</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md="1" xs="12">
                        <Button variant="primary" className="font-weight-bold btn-search-home"><FaSearch className="ft-12rem" /></Button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default FormularioBuscar