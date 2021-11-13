import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AllProducts from '../../AllProducts/AllProducts';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import ManageProducts from '../../ManageProducts/ManageProducts';
import MyProducts from '../../MyProducts/MyProducts';
import Review from '../../Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    return (
        <>
            <div>
                <Container fluid className="p-5">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="my-order">
                        <Row xs={1} sm={1} md={2} lg={2} xl={2}>
                            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                                <div className="bg-light rounded-3 py-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>
                                    <Nav variant="light" className="flex-column dash-nav">
                                        <Link to={`${url}`}>DashBoard</Link>
                                        <Link to={`${url}/myProducts`}>My Products</Link>
                                        <Link to={`${url}/allProducts`}>All Products</Link>
                                        {
                                            admin && <>
                                                <Link to={`${url}makeAdmin`}>Make Admin</Link>
                                                <Link to={`${url}/manageProducts`}>Manage Products</Link>
                                            </>
                                        }
                                        <Link to={`${url}/review`}>Review</Link>
                                    </Nav>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={8} lg={9} xl={9}>
                                <div className="bg-light rounded-3 px-2 py-4 border">
                                    <Switch>
                                        <Route exact path={path}>
                                            <h3>DashBoard</h3>
                                        </Route>
                                        <Route path={`${path}/makeAdmin`}>
                                            <MakeAdmin></MakeAdmin>
                                        </Route>
                                        <Route path={`${path}/allProducts`}>
                                            <AllProducts></AllProducts>
                                        </Route>
                                        <Route path={`${path}/myProducts`}>
                                            <MyProducts></MyProducts>
                                        </Route>
                                        <Route path={`${path}/manageProducts`}>
                                            <ManageProducts></ManageProducts>
                                        </Route>
                                        <Route path={`${path}/review`}>
                                            <Review></Review>
                                        </Route>
                                    </Switch>
                                </div>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        </>
    );
};

export default Dashboard;