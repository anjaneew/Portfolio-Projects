//Sri Lankan Radio App

const channelDisplay = document.getElementById("channel-display");
const channelList = document.getElementById("channel-list");
const channelSelect = document.getElementById("channel-select");
const radio = document.getElementById("radio");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
let currentChannel;

const channelArray = [{name:"pause" , audio:"" ,},
                     {name:"shaa" , audio:"https://radio.lotustechnologieslk.net:2020/stream/shaafmgarden" ,},
                     {name:"sri" , audio:"http://207.148.74.192:7860/stream2.mp3" ,},
                     {name:"hiru" , audio:"https://radio.lotustechnologieslk.net:2020/stream/hirufmgarden" ,},
                     {name:"neth" , audio:"https://cp11.serverse.com/proxy/nethfm/stream" ,},    
                     {name:"derana" , audio:"https://cp12.serverse.com/proxy/fmderana/stream" ,},
                     {name:"lakhada" , audio:"https://cp12.serverse.com/proxy/itnfm?mp=/stream" ,},
                     {name:"city-fm" , audio:"http://220.247.227.20:8000/citystream" ,}, 
                     {name:"swadesheeya-sewaya" , audio:"http://220.247.227.6:8000/Snsstream" ,},]


radio.onerror = () => alert("The channel is unavailable at the moment. Please select another");

channelSelect.addEventListener("change", () =>{

    try{
        currentChannel = channelSelect.value;
        console.log(currentChannel);

        const pickChannel = channelArray.find(channel => 
            channel.name === currentChannel);

        console.log(pickChannel);

        if(pickChannel){
            radio.src = pickChannel.audio;
            channelDisplay.src = `images/${currentChannel}.png`;
        }
    } 
    catch (error){
        console.error(error);
    }
    

});

increaseBtn.addEventListener("click", () => {
    if(radio.volume !== 1){
        radio.volume += 0.1;
    }
});

decreaseBtn.addEventListener("click", () => {
    if(radio.volume !== 0){
        radio.volume -= 0.1;
    }
});





