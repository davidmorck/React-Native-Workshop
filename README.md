# React-Native-Workshop

## Introduktion

I den här workshopen kommer vi använda oss av verktyget React Native för att skapa en mobilapp. I applikationen ska du kunna visa data från en AWS-databas (Amazon Web Services) samtidigt som designen ska vara både stilren och enkel att använda. 

React Native är ett verktyg som gör det enkelt att göra appar med hjälp av programmeringsspråket Javascript. För att visa appen i telefonen och exportera en färdig app så använder vi oss av Expo. Expo finns som en applikation i mobilen som man enkelt exporterar det man gjort till med hjälp av en QR-kod eller en mail-länk. 

## Förberedelser
* Ladda ner **Visual Studio Code** [här.](https://code.visualstudio.com/#alt-downloads) Detta program kallas för en IDE (Integrated Developer Environment). Här ska vi skriva våran kod för applikationen.
* Ladda ner **Node JS** [här](https://nodejs.org/en/download/), under titeln "Recommended For Most Users". Vi använder Node JS för att kunna skriva kod i React Native.
* Ladda ner appen **Expo** på antingen [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US) eller [IOS](https://itunes.apple.com/se/app/expo-client/id982107779?mt=8). Med hjälp av denna app kommer vi kunna se och använda våran egengjorda app med alla dess funktioner.

# Workshop

* I filerna så står det vart ni ska skriv koden från stegen
* Om det är något ni fastnar på eller vill ha mer förklarat säg till någon av oss!

## Installera

### Steg 1

* Klicka på den gröna knappen som säger *Clone or download* och välj *download ZIP*
* Extrahera filerna ur zip-filen.

### Steg 2

* Öppna Visual Studio Code
* Klicka på *File* och sedan på *Open folder*
![](/Images/Capture2.PNG)

* Välj mappen som du extraherade ur ZIP-filen och klicka på select folder

### Steg 3

* Klicka *Ctrl + ö* 
* En textruta kommer att komma upp längst ner på skärmen. Denna ruta kallas "terminalen".
* Skriv in "npm install" i terminalen och vänta tills alla filer har laddats ned.

## Programmering
Nu ska vi börja programmera!
* Vi rekommenderar att ni skriver av koden istället för att kopiera den, då lär ni er mer!
* Vid varje kodsnutt så tar ni bort hela raden där det står "KOD FÖR STEG x".

### Steg 1 - Öppna filen
* Navigera till och öppna filen Component1.js (app/components/screen1/)

### Steg 2 - Knapp
* Nu ska vi göra en knapp för byta mellan olika screens. 
* Skriv av kodan nedan:
```javascript
<TouchableOpacity onPress = { () => navigate('Screen2')} style={{width: '100%', height: '100%'}}>
  <Text style={{textAlign: 'center', color: 'white', marginTop: 25, fontSize: 20}}>
	  Grafer
	</Text> 
</TouchableOpacity>
```
* <TouchableOpacity> skapar ett tryckbart objekt, i vårt fall en knapp. 
* Med *onPress* bestämmer vi vad som ska hända när vi klickar på knappen. Vi vill navigera till nästa skärm så vi skriver *"navigate('Screen2')"*.
* *Testa att byta färg på texten genom att skriva t.ex. 'black', istället för 'white'.*
 
 ### Steg 3 - Lägga in en bild
* Nu ska vi lära oss att lägga in en bild. Vi använder ABB Industrigymnasiums logga. 
* Koden för att lägga in en bild finns nedan:
```javascript
<Image
  source = {require('./abb.png')}
  style={{height: 50, width:260}}
>
</Image>
```

* *source* är bildens sökväg och med style bestämmer vi stoleken på bilden. 
* *Testa att byta bild genom att lägga in din egna .png fil i mappen 'screen1'. Ändra därefter texten inuti 'source' i koden till './DINBILDSNAMN.png'*

### Steg 4 - Screen 2
* Nu är vi helt klara med screen 1 och det är dags att börja med screen 2. 
* Navigera till och öppna filen Component2.js (app/components/screen2/)

### Steg 5 - Iportera ett bibliotek
* React Native har en massa olika bibliotek (ett bibliotek är färdig kod som du kan använda). Vi kommer att använda ett bibliotek som heter PureCharts för att visualisera våran data senare med hjälp av grafer. 
* För att importera det bibliotek vi ska använda skriver vi det här vid markeringen i koden
```javascript
// LÄGG KODEN FÖR STEG 5 HÄR!
import PureChart from 'react-native-pure-chart';
```
### Steg 6 - Variabler
* Variabler för att spara data. 
* De variabler vi behöver är temp, humidity och loading. En 'constructor' i React Native är platsen där man anger sina variabler som man ska använda senare i koden:
```javascript
constructor(props){
  super(props);
  this.state ={
    temp: [],
    humidity: [],
    loading: true
    }
}
```
### Steg 7 - Hämta data
#### 7.1
* Vi börjar med att skapa lokala variabler som endast kommer att användas inom funktionen *GettingData*:
```javascript
let self = this;
var pushArray = []
var pushArrayHum = []
```
* Variablerna kommer vi att använda senare inom funktionen.
* I JavaScript deklarerar man en variabel genom *var*. När man avslutar en variabel med *[]* betyder det att variabeln är en så kallad *array*. I en array kan vi spara flera än ett värde.
#### 7.2
* Nu ska vi göra en *for-loop* (En *for-loop* kör den bestämda koden x antal gånger). Den placerar vi under koden vi nyss skrivit:
```javascript
for(var i=1; i<20; i++){

}
```
* all kod inom {} körs av loopen.

#### 7.3
* Koden som vi ska skriva nu hämtar data från våran AWS backend och lägger in den i våra *constructor-variabler* som vi skapade på steg 6. 
* **Denna kod ska läggas i for-loopen**
```javascript
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
```
* Det som händer i denna kodsnutt är att vi först och främst kallar vår API (webbadress) för att hämta datan från databasen. Sedan lägger vi in alla värden i de två *array* variablerna som vi skapade förut. Efter det så lägger vi in *array* variablerna i våra *constructor* variabler.
* Nu kan vi hämta data och nästa steg blir då att visualisera den.

### Steg 8 - Grafer
* Vi kommer att ha två grafer, en för temperatur och en för luftfuktighet. Som vi nämde innan så använder vi biblioteket PureCharts för att skapa graferna. 
* Koden är väldigt enkel och ser ut så här:

Temperatur:
```javascript
<Text style={{textAlign: 'center' }}>Temperatur</Text>

<PureChart data={this.state.temp} 
type={'line'} 
showEvenNumberXaxisLabel={false}
/>
```
Luftfuktighet:
```javascript
<Text style={{textAlign: 'center' }}>Luftfuktighet</Text>

<PureChart data={this.state.humidity} 
type={'line'} 
showEvenNumberXaxisLabel={false}
/>
```
* Nu är vi klara med koden till appen!

## Öppna Appen

### Steg 1
* Skriv in "npm start" i terminalen
* När appen har starta så kommer du att få upp en meny som ser ut såhär:

![](/Images/CaptureCMD.PNG)

* Har du en telefon med en QR läsare klicka "q" (Du som inte har QR läsare gå vidare till steg 2)
* Läs in QR koden på din telefon (Du kanske behöver förstora terminalen så att hela QR koden syns)
* Se till att appen lyckas starta på din telefon

### Steg 2 (För dig som inte har QR läsare)

* Klicka "s" i samma meny
* Skriv in din E-mail **VIKTIGT** Se till att du kan nå din mail på din telefon
* Klicka enter
* Du kommer sedan få ett mail av Expo. Öppna det i din telefon
* Klicka på den översta länken och Expo appen kommer att öppnas
* Se till att allt laddas in
* Du har nu en fungerande app

###  Steg 4
* Grattis, du har nu en fungerande app. 
* Om du vill och har tid över så kan du försöka att modifiera koden genom att t.ex. ändra färger, textstorlek osv.
* ***Fråga oss gärna om hjälp om du har svårigheter med något av momenten eller om du undrar hur saker fungerar!***




