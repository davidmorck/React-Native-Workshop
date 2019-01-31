import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TextInput,
} from 'react-native';



export default class Component8 extends React.Component {

	constructor(props){

		super(props);
		this.state ={
			Name: ''
		}
	}

	GetData =() => {
		const {Name} = this.state;

		if(Name != ''){
			fetch('awdasd.com', {
				method: 'GET',
			})
		}

	}

    render() {

        if (!this.props.visible) {
            return false;
        }
        

        return (

            <View 
                style={styles.component}
            >

                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>
								<View style={styles.lay}>
			
									<TextInput
										onChangeText={}
										style={}
										value=''
										placeholder='Search User'
										underlineColorAndroid={'transparent'}
										placeholderTextColor={'#292929'}
									/>

								</View>
						
                                	<View style={styles.item1}>
										<TouchableOpacity 
											onPress={() => this.props.navigation.navigate('Screen2', {})}
										>
											<View>
												<Text style={styles.item1TouchableWithoutFeedback}>
													Search
												</Text>
											</View>
									
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
	    height: 90,
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