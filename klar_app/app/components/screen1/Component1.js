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

						<TouchableOpacity onPress = { () => navigate('Screen2')} style={{width: '100%', height: '100%'}}>	
							
							<Text style={{textAlign: 'center', color: 'white', marginTop: 25, fontSize: 20}}>
								Grafer
							</Text>   
						
						</TouchableOpacity>
				</View>

				<View style = {styles.bild}>
						<Image
							source = {require('./abb.png')}
							style={{height: 50, width:260}}
						>
						</Image>
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