import Head from 'next/head'
import { Col, Container, Image, Row } from 'react-bootstrap'
import FormularioBuscar from '../components/FormularioBuscar'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <Container>
            <Row>
              <Col>
                <div className="position-relative">
                  <Image src="../home-top.jpg" fluid className="img-home-top"/>
                  <FormularioBuscar />                  
                </div>                
              </Col>
            </Row>

            <section className="mt-5">
              <h3>¡Descubre tu próximo destino!</h3>
              <Row>
                <Col md="4" xs="12">
                  <div>
                    <Image src="./d1.jpg" fluid className="rounded-1 mb-2"/>
                    <label className="ft-w600 text-color-gray2 mb-1">Lorem ipsum dolor sit amet</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                  </div>
                </Col>
                <Col md="4" xs="12">
                 <div>
                    <Image src="./d2.jpg" fluid className="rounded-1 mb-2"/>
                    <label className="ft-w600 text-color-gray2 mb-1">Lorem ipsum dolor sit amet</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                  </div>
                </Col>
                <Col md="4" xs="12">
                  <div>
                    <Image src="./d3.jpg" fluid className="rounded-1 mb-2"/>
                    <label className="ft-w600 text-color-gray2 mb-1">Lorem ipsum dolor sit amet</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                  </div>
                </Col>
              </Row>
            </section>
            
            <section className="my-5">
              <Row>
                <Col xs="6" md="6">
                  <h4>Búsqueda global</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col xs="6" md="6">
                  <h4>Encuentra las mejores ofertas</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col xs="6" md="6">
                  <h4>Las opiniones de otros te ayudan</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col xs="6" md="6">
                  <h4>Cómo reservar</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
              </Row>
            </section>
          </Container>       
    </Layout>
  )
}
