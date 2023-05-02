import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import { useLoaderData, useParams } from 'react-router-dom';
import './Home.css'

const Home = () => {

    const { id } = useParams();
    const allData = useLoaderData()
    console.log(allData);

    return (
        <Container>
            <div>
                <div>
                    <Banner></Banner>
                </div>
                <div>
                    <h2 className='text-center mt-5'>Chef Section: {allData.length}</h2>
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
};

export default Home;