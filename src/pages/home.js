import React from "react";
import {LegacyCard, EmptyState} from '@shopify/polaris';

const Home = () => {
    return(
        <div>
            <LegacyCard sectioned>
                <EmptyState
                    heading="Manage your inventory transfers"
                    action={{content: 'Add transfer'}}
                    secondaryAction={{
                        content: 'Learn more',
                        url: 'https://help.shopify.com',
                    }}
                    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                >
                    <p>Track and receive your incoming inventory from suppliers.</p>
                </EmptyState>
            </LegacyCard>
        </div>
    )
}
export default Home;
