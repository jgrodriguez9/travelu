import Head from 'next/head'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link'
import { Button, Col, Container, FormControl, Image, InputGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import moment from 'moment';

export const siteTitle = 'TravelU'

function Layout({children, home}){
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="TravelU"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>            

            <Navbar bg="light" expand="lg" className="shadow-sm">
                <Navbar.Brand href="#home"><Image fluid src="../logo.svg" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="MXN" alignRight>
                            <NavDropdown.Item href="#action/3.1">USD</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>                    
                </Navbar.Collapse>
            </Navbar>
            <main className="content">
                {children}
            </main>            

            <footer id="footer" className="py-4">
                <Container>
                    <Row>
                        <Col md="6" xs="12">
                            <div className="d-flex align-items-center">
                                <div className="p-2">
                                    <Image src="./favicon.svg" fluid />
                                </div>
                                <div className="p-2">
                                    <label>¡Síguenos en nuestras redes sociales!</label>
                                    <ul className="list-inline mb-0 text-center">
                                        <li className="list-inline-item list-rss"><FaTwitter className="text-blue" /></li>
                                        <li className="list-inline-item list-rss"><FaFacebook className="text-blue" /></li>
                                        <li className="list-inline-item list-rss"><FaInstagram className="text-blue" /></li>
                                        <li className="list-inline-item list-rss"><FaLinkedin className="text-blue" /></li>
                                        <li className="list-inline-item list-rss"><FaYoutube className="text-blue" /></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" xs="12">
                            <label className="p-2">¿Quieres recibir ofertas exclusivas de hoteles? ¡Suscríbete a nuestro boletín de noticias!</label>

                            <InputGroup className="group-subscribirse p-2">
                                <FormControl
                                    placeholder="Dirección  de email"
                                    aria-label="Dirección  de email"
                                    type="email"
                                    className="border-input-subscription"
                                />
                                <InputGroup.Append className="border-btn-subscription">
                                    <Button variant="outline-secondary" className="bg-gray-1 text-white px-3 ft-09rem ft-w600 border-btn-subscription">Subscribirse</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                    
                    <hr className="broder-color-1" />

                    <div className="d-flex flex-md-row flex-column justify-content-between">
                        <div>
                            <ul className="list-unstyled ft-08rem">
                                <li className="my-2"><a href="#">Presentación</a></li>
                                <li className="my-2"><a href="#">Ofertas de empleo</a></li>
                                <li className="my-2"><a href="#">App Travel U</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-unstyled ft-08rem">
                                <li className="my-2"><a href="#">Ayuda</a></li>
                                <li className="my-2"><a href="#">Descubre cómo funciona Travel U</a></li>
                                <li className="my-2"><a href="#">Términos y condiciones</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-unstyled ft-08rem">
                                <li className="my-2"><a href="#">Información legal</a></li>
                                <li className="my-2"><a href="#">Aviso de privacidad</a></li>
                                <li className="my-2"><a href="#">Mapa del sitio</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <hr className="broder-color-1" />

                    <div className="d-flex justify-content-center">
                        <div>
                            <Image src="../logo-white.svg" fluid className="mb-3" />
                            <label className="ft-08rem d-block">Copyright {moment().format('YYYY')} | Tavel U | Todos los derechos reservados.</label>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Layout