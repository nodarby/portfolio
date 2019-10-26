import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Home from './Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};



function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}



const TabsEx = () => (

    <MuiThemeProvider>
        <Tabs>
            <Tab
                label="HOME"
            >
                <Home/>
            </Tab>

            <Tab
                label="Profile"
            >
            </Tab>
            <Tab
                label="Skills"
                data-route="/home"
                onActive={handleActive}
            >
            </Tab>
            <Tab label="Works" >
            </Tab>
            <Tab label=" Contact" >
            </Tab>
        </Tabs>
    </MuiThemeProvider>
);

export default TabsEx;