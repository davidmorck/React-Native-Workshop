import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image
} from 'react-native';

import Screen2 from '../screen2/Screen2';





export default class Component1 extends React.Component {


    render() {

		const {navigate} = this.props.navigation;
        

        return (

            <View 
                style={styles.component}
            >

                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>

                                <View style={styles.item1}>
										<TouchableOpacity
										 	onPress = { () => navigate('Screen2')}
										>	
											<View>
												<Text style={styles.item1TouchableWithoutFeedback}>
													Grafer
												</Text>
											</View>
										
									
										</TouchableOpacity>
										</View>
										<View style = {styles.layout2}>
											<Image
												source = {require('./abb.jpg')}
											>
											</Image>

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
		marginTop: 200,
		height: 100,
	},

	layout2: {
		marginTop: 40,
		height: 40,
		alignSelf: 'center'
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
	    backgroundColor: '#1194f6',
	    borderWidth: 0,
	    borderColor: '#eee',
	    borderStyle: 'solid',
	    borderRadius: 4,
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    alignItems: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item1TouchableWithoutFeedback: {
	    color: '#fff',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
});