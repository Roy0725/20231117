import { defineStore } from "pinia";

export default defineStore("counter",{
//  data(){}
    state(){
        return{
            location: 1,
            weather:{},
        }
    },
//  computed    回傳暫存值
    getters:{
        locationInfo(){
            return `現在位置: ${this.location}`
        },
        weatherInfo(){
            return `現在位置: ${this.weather}`
        }
    },
//  methods
    actions:{
        getLocation(){
            console.log(this.location);
        },
        setLocation(num){
            this.location = num
        },
        getWeather(){
            fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-B7070E8B-49A1-438D-85DF-B7D00408F354")
                .then((response) => response.json())
                .then((data) => {
                    this.weather = data
                    console.log(this.weatherInfo);
                })
        }
    }
})

