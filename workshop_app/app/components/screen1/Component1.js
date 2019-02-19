import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image
} from 'react-native';

export default class Component1 extends React.Component {

    render() {

		const {navigate} = this.props.navigation;
    
        return (

            <View style={{paddingTop: 7.5, paddingLeft: 7.5, paddingRight: 7.5, paddingBottom: 7.5}}>

				<View style={styles.knapp}>

				{/* KOD FÖR STEG 2 */}

				</View>

				<View style = {styles.bild}>
						{/* KOD FÖR STEG 3 */}
				</View> 
            </View>		
            
        );

    }

}

const styles = StyleSheet.create({

	bild: {
		marginTop: '25%',
		alignSelf: 'center'

	},	
	knapp: {
	    backgroundColor: 'orange',
	    borderWidth: 0,
	    borderColor: '#eee',
	    borderStyle: 'solid',
	    borderRadius: 4,
	    width: '100%',
		height: 75,
		marginTop: '50%',
	},

});