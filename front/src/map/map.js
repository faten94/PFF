import React, {Component} from 'react'
import axios from "axios";

class Map extends Component{
    mapRef = React.createRef();

    constructor(props) 
    {
        const url = window.location.href;
        const urlArray = url.split('/');
        const urlLength = urlArray.length - 1
        const supplierId = urlArray[urlLength]
       
        super(props)
        this.state=
        {
            supplierId: supplierId,
            adress:'',
            city:'',
            posts:[],
            coordonate:[],
            map: null    
        }
    }
    
    componentDidMount= () => {
        this.getSupplierAdress()
        this.getCoordonate()
        const params = {supplierId : this.state.supplierId}

        const H = window.H;
        const platform = new H.service.Platform(
        {
            apikey: "DObEqaiEw_Oqtou1Km77hp-SPAfeSVM2yr2ewaUUz7c"
        });

        const defaultLayers = platform.createDefaultLayers();
        const map = new H.Map(
        
        this.mapRef.current,
        defaultLayers.vector.normal.map,
        {
            center: { lat: 48.81, lng: 2.36 },
            zoom: 9,
            pixelRatio: window.devicePixelRatio || 1
        }
        );
        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // permet de creer une interactivité avec le user
        var ui = H.ui.UI.createDefault(map, defaultLayers, 'fr-FR');
        var bubble = new H.ui.InfoBubble({ lng: 2.36, lat: 48.81 }, 
        {content: '<b>Code & go by Epitech</b>'});
        // Add info bubble to the UI:
        ui.addBubble(bubble);
        this.setState({ map });

    }
        
        getSupplierAdress = () => 
        {
            //const params = {supplierId : this.state.supplierId}
            //+this.state.supplierId, {params}
            return axios.get("http://localhost:8080/map/")
            
            .then((response) => {
                const data = response.data
                this.setState({ posts: data})
                
                console.log(this.state.posts)
                console.log(data.city)
                console.log(this.state.supplierId)
            }) 
            .catch(function (error){
                console.log(error)
            })   
        }

              getCoordonate =() =>{
                
                console.log(this.state.posts.city)
                let city = this.state.posts.city
                axios.get("https://geocode.search.hereapi.com/v1/geocode?q=16 avenue montaigne+paris&apiKey=DObEqaiEw_Oqtou1Km77hp-SPAfeSVM2yr2ewaUUz7c")
                .then((response) => 
                {
                    const data = response.data
                    this.setState({coordonate:data})

                    console.log(this.state.coordonate)
                    console.log(this.state.posts.city)
                    console.log(this.state.posts.street)
                })
                .catch(function (error)
                {
                    console.log(error)
                })
        }
        
        render(){
    return(
        <div> <h1>
      {this.state.posts.city}  {this.state.posts.address}
      <div ref={this.mapRef} style={{ height: "250px"}} />
        </h1> </div>
            
    )
}

}

export default Map