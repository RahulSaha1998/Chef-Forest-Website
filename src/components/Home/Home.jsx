import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import { useLoaderData, useParams } from 'react-router-dom';
import './Home.css'
import Loader from '../loader/Loader';
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {

    const { id } = useParams();
    const allData = useLoaderData();
    console.log(allData);
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return (
            <Container>
                <div>
                    <div>
                        <Banner></Banner>
                    </div>
                    <div>
                        <h3 className='text-center mt-5'>Chef Section</h3>
                        <hr />
                        <div className='layout' >
                        {
                            allData.map(data => <ChefSection
                                key={data.id}
                                data={data}
                            >
                            </ChefSection>)
                        }
    
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    
};

export default Home;