import React from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';


import CompHome from './compHome';



export default class compHome extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            compHomeVisible: true,
        }

    }

    toggleComponent(component = false) {

        if (!component ) {
            return false;
        }

        let prop = component  + 'Visible';
        let val  = this.state[prop];
        if (typeof val === 'undefined') {
            return false;
        }

        this.setState({
            [prop]: val === true ? false : true
        })

        return true;

    }

    hideComponent(component  = false) {

        if (!component ) {
            return false;
        }

        let prop = component  + 'Visible';

        this.setState({
            [prop]: false
        })

        return true;

    }

    showComponent(component  = false) {

        if (!component ) {
            return false;
        }

        let prop = component  + 'Visible';

        this.setState({
            [prop]: true
        })

        return true;

    }

    render() {
        return (

            
            <View style={styles.container}>

                <View style={styles.screencontainer}>

                    <View style={styles.screencontainerInner}>


                        <CompHome>
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.CompHomeVisible }
                        </CompHome>

                    </View>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
	screencontainer: {
	    backgroundColor: 'rgba(255,255,255,1)',
	    flex: 1,
	},
	
	screencontainerInner: {
	    flex: 1,
	},
	
});