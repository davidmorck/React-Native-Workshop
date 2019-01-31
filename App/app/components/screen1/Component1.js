import React from 'react';
import { 
	StyleSheet,
	View,
} from 'react-native';

import { 
	VictoryBar, VictoryChart, VictoryTheme 
} from 'victory-native';


export default class Component1 extends React.Component {

	constructor(props){
		super(props)
		this.state ={
			data: [
				{x: 1, y: 21, label: 'Sweden'},
				{x: 2, y: 2151, label: 'Norway'},
				{x: 3, y: -254, label: 'USA'},
				{x: 4, y: 77, label: 'Canada'},
				{x: 5, y: 21541, label: 'Russia'},
			]
		}
	}

	/*gettingData = () => {
		let self = this;

		fetch('https://itw1249n66.execute-api.us-east-1.amazonaws.com/default/ReactWorkshopLambda?id=1',{
		method: 'GET'
		}).then((Response))
		.then((Response) => {
			console.log(Response);
		})
	}*/


	

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

								<VictoryChart
								them = {VictoryTheme.material}
								>

									<VictoryBar
										style = {{data: {fill: "#c43a31" } }}
										alignment = "start"
										data = {this.state.data}
										angel = {90}
										verticalAnchor = 'middle'
										textAnchor = "end"
									/>

								</VictoryChart>
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
	    height: 150,
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
	    overflow: 'hidden',
	},
	
});