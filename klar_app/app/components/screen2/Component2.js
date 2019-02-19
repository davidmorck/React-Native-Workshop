import React from 'react';
import { 
	View,
	Text,
} from 'react-native';

import PureChart from 'react-native-pure-chart';


export default class Component2 extends React.PureComponent {
	
	constructor(props){
		super(props);
			this.state ={
				temp: [],
				humidity: [],
				loading: true
			}
	}
	
	sleep = (milliseconds) => {
		return new Promise(resolve => setTimeout(resolve, milliseconds))
	  }

	GettingData(){
		let self = this;
		var pushArray = []
		var pushArrayHum = []
		
		for(var i=1; i<20; i++){
			fetch('https://itw1249n66.execute-api.us-east-1.amazonaws.com/default/ReactWorkshopLambda?id='+i, 
			{method: 'GET'}	)
				.then((response) => response.json())
				.then((responseJson) => {
					
					
					pushArray.push({x: responseJson.location, y: Math.abs(responseJson.temperature)});
					pushArrayHum.push({x: responseJson.location, y: responseJson.humidity});
					console.log(pushArrayHum);
					self.setState({temp: pushArray, humidity: pushArrayHum});
					
				})
				.catch((error) => {
					console.error(error);
				});
		}
		this.sleep(3500).then(()=>{
			this.setState({loading: false});
		});
	}
	
	componentDidMount(){
		this.GettingData();	
	}

    render() {	
		if (this.state.loading!==true){
		return (
			
			<View>
				<View style={{marginTop: 100}}>
					<Text style={{textAlign: 'center' }}>Temperatur</Text>

					<PureChart data={this.state.temp} 
					type={'line'} 
					showEvenNumberXaxisLabel={false}
					/>
				</View>

				
				<View style={{marginTop:100}}>  
					<Text style={{textAlign: 'center'}}>Luftfuktighet</Text>

					<PureChart data={this.state.humidity} 
					type={'line'} 
					showEvenNumberXaxisLabel={false}/>
				</View>
			</View>	
		);}else return <Text style={{marginTop: '50%', textAlign: 'center'}}>Loading..</Text>;
    }
}

