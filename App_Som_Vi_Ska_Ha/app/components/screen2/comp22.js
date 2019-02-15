import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';


export default class comp22 extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			Name: '',
			Price: ''

		}

	}

	InsertDataToServer = () => {
		const { Name } = this.state;
		const { Price } = this.state;

		if (Name != '') {
			fetch('iot.abbindustrigymnasium.se/light', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',

				},
				body: JSON.stringify({
					name: Name,
					price: Price
				})
			}).then((response) => response.json()).then(responseJson => {

				console.log(responseJson);
				alert(responseJson.message + '    ' + Name)
				alert(Name + " " + Price + "Added");
			}).catch((error) => {
				console.log(error);
			});

		}
		else
			alert('Name is empty')
	}


	UpdateDataToServer = () => {
		const { Name } = this.state;
		const { Price } = this.state;

		if (Name != '') {
			fetch('http://192.168.1.19:19000/products/' + Name, {
				method: 'PATCH',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',

				},
				body: JSON.stringify({
					name: Name,
					price: Price
				})
			}).then((response) => response.json()).then(responseJson => {

				console.log(responseJson);
				alert('Update ' + Name)
				alert(Name + " " + Price + "Added");
			}).catch((error) => {
				console.log(error);
			});

		}
		else
			alert('Name is empty')
	}
	DeleteDataToServer = () => {
		const { Name } = this.state;
		const { Price } = this.state;

		if (Name != '') {
			fetch('http://192.168.1.19:19000/products', {
				method: 'DELETE',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',

				}
			}).then((response) => response.json()).then(responseJson => {

				console.log(responseJson);
				alert('Deleted ' + Name)
				alert(Name + " " + Price + "Added");
			}).catch((error) => {
				console.log(error);
			});

		}
		else
			alert('Name is empty')
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

								<Text style={styles.headers}> Välkommen till min affär!</Text>

								<View style={styles.item1}>
									<Text style={styles.item1TextInput}>

										Namn:
                                    </Text>

									<TextInput
										onChangeText={(value) => this.setState({ Name: value })}
										style={styles.item1TextInput}
										value=''
										placeholder='Namn'
										underlineColorAndroid={'transparent'}
										placeholderTextColor={'#292929'}


									/>
									<Text style={styles.item1TextInput}>
										Pris:
										</Text>
									<TextInput
										onChangeText={(value) => this.setState({ Price: value })}
										style={styles.item1TextInput}
										value=''
										placeholder='Pris'
										underlineColorAndroid={'transparent'}
										placeholderTextColor={'#292929'}

									/>
								</View>

							</View>

							<View styles={styles.layout2}>
								<View styles={styles.itemcontainer1Inner}>
									<TouchableOpacity onPress={this.InsertDataToServer} style={styles.item2} >
										<Text style={styles.button2}> Lägg Till </Text>
									</TouchableOpacity>

									<TouchableOpacity style={styles.item3} onPress={this.UpdateDataToServer}>
										<Text style={styles.button2}> Uppdatera </Text>
									</TouchableOpacity>

									<TouchableOpacity onPress={this.DeleteDataToServer} style={styles.item4}>
										<Text style={styles.button2}> Radera  </Text>
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
		bottom: 130,
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

	item1TextInput: {
		color: '#181818',
		fontSize: 20,
		width: '100%',
		textAlign: 'center',
	},

	item2: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		padding: 10,
		overflow: 'hidden',
		backgroundColor: 'rgba(0, 255, 0, 1)',
		height: 40,
		marginBottom: 20,
		bottom: 0,
		borderRadius: 20,
	},

	item3: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		padding: 10,
		overflow: 'hidden',
		backgroundColor: 'rgba(0, 0, 255, 1)',
		height: 40,
		marginBottom: 20,
		bottom: 0,
		borderRadius: 20,

	},

	item4: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		padding: 10,
		overflow: 'hidden',
		backgroundColor: 'rgba(255, 0, 0, 1)',
		height: 40,
		marginBottom: 20,
		bottom: 0,
		borderRadius: 20,
	},

	button1: {
		textAlign: 'center',
		margin: 5,
	},

	button2: {
		textAlign: 'center',
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