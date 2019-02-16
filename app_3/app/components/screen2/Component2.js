import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
} from 'react-native';

import { BarChart, Grid, YAxis } from 'react-native-svg-charts';

import * as scale from 'd3-scale'



var i;

export default class Component2 extends React.PureComponent {
	
	constructor(props){
		super(props);
			this.state ={
				location: '',
				temp: [],
				humidity: '',
				id: '',
				loading: true
			}
	}
	

	
	componentDidMount(){
		this.GettingData();
	}
	
	GettingData(){
		let self = this;
		var pushArray = [];
		
		for(i=2; i<20; i++){
		fetch('https://itw1249n66.execute-api.us-east-1.amazonaws.com/default/ReactWorkshopLambda?id='+i, 
		{method: 'GET'}	)
			.then((response) => response.json())
			.then((responseJson) => {
		
				//console.log(responseJson);
				
			 //console.log(responseJson.temperature)
			 var temp = responseJson.temperature;
			 console.log(temp);
			pushArray.push({value: responseJson.temperature, label: responseJson.location});

			self.setState({temp: pushArray});
			self.setState(
				{
					loading: false,
					location: responseJson.location,
					//temp: [responseJson.temperature],
					humidity: responseJson.humidity,
					id: responseJson.id
				}

			)
			console.log(this.state.temp);
				})
			.catch((error) => {
				console.error(error);
			});

			
			
	}
	//this.setState({temp: pushArray});
	
}


    render() {	

		const fill = 'rgb(134, 65, 244)'

		
		const data =  this.state.temp;

		
		
		//const data2 = [this.state.humidity];

		const data2 = [7, 76, 5,54,32];

		//const data2 = [7,1,2,33,64]
		
		//console.log(data);

		// console.log(this.state.humidity);

		// console.log(this.state.location);
		
		//console.log(this.state.temp);

		if(this.state.loading!==true){
		

        return (
		
			<View>
		
				<View style={styles.layout1}>
				<YAxis
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    formatLabel={(_, index) => data[ index ].label}
                />
					 <BarChart
						style = {{height: 150, width: '100%'}}
						data = {data}
						svg = {{fill}}
						contentInset = {{top: 10, bottom: 10}}	
					>					
									
						 <Grid />

					</BarChart>
					</View>

					<View style={styles.layout2}>

					 {/* <BarChart
						style = {{height: 100}}
						data = { data2 }
						svg = {{fill}}
						contentInset = {{top: 30, bottom: 30}}
					>

					<Grid/>

					</BarChart>  */}

					</View>

			</View>

						
            
        );}else return <Text style={styles.Titletext}>Loading..</Text>;

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
		marginTop: 100
	},

	layout2: {
		marginTop: 200,
	},
	
});