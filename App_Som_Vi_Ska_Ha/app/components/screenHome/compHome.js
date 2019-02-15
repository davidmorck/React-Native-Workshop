import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';




export default class compHome extends React.Component {

	constructor(props){

		super(props);
		this.state ={
		
	
		}
	
	}

    render() {

	
        return (

            <View 
                style={styles.component}
            >

                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>
                                <Text style={styles.headers}>Välkommen till min affär sak</Text>

                                    <View style={styles.item1}>
                                        <TouchableOpacity style={styles.button1} onPress = { ()=> Navigate('ScreenProdukter')}>
                                            <Text style={styles.button1}>
                                                Till Produkterna!
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button1} onPress={() => Navigate('Screen2')}>
                                            <Text style={styles.button1}>
                                                Lägg till Produkter!
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
								
							</View>

                		</View>

                	</View>
                	
                </View>

            </View>
            
        );

    }

}

const styles = StyleSheet.create({
    
	component: {
	    width: '100%',
	    flexDirection: 'row',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '100%',
	    height: '100%',
	},
	
	itemcontainer1: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer1Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
		justifyContent: 'center',
	},
	
	item1: {
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    padding: 20,
		overflow: 'hidden',
		height: 100,
		marginBottom: 75,

	},
	
	
	button1: {
		textAlign: 'center',
        margin: 5,
        backgroundColor: '#1194f6',
	},

	headers: {
		fontSize: 20,
		backgroundColor: '#1194f6',
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
	},
	
});