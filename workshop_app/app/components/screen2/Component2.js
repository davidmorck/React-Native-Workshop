import React from 'react';
import { 
	View,
	Text,
} from 'react-native';

// LÄGG KODEN FÖR STEG 5 HÄR!


export default class Component2 extends React.PureComponent {
	
	constructor(props){
		super(props);
			this.state ={
				// STEG 6 kod här
			}
	}
	
	sleep = (milliseconds) => {
		return new Promise(resolve => setTimeout(resolve, milliseconds))
	  }

	GettingData(){
		// KODEN FÖR STEG 7 HÄR !
	}
	
	componentDidMount(){
		this.GettingData();	
	}

    render() {	
		if (this.state.loading!==true){
		return (
			
			<View>
				<View style={{marginTop: 100}}>
					{/* STEG 8 KOD HÄR TEMPERATUR */}
				</View>

				
				<View style={{marginTop:100}}>  
					{/* STEG 8 KOD HÄR LUFTFUKTIGHET */}
					
				</View>
			</View>	
		);}else return <Text style={{marginTop: '50%', textAlign: 'center'}}>Loading..</Text>;
    }
}

