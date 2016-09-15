// JavaScript Document

var map; 
            var myLatlng; 
            function initialize(lat,long) { 
                myLatlng = new google.maps.LatLng(20.5860399,-100.4602487); 
                var mapOptions = { 
                    zoom: 8, 
                    center: myLatlng 
                }; 
                 
                map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions); 
                 
                var marker = new google.maps.Marker({ 
                    position: myLatlng, 
                    map: map, 
                    title: 'Mi punto en el mapa' 
                }); 
                 
            } 

            document.addEventListener("deviceready", onDeviceReady, false); 
             
            function onDeviceReady() { 
                navigator.geolocation.getCurrentPosition(onSuccess, onError); 
            } 
             
            function onSuccess(position) { 
                initialize(position.coords.latitude,position.coords.longitude); 
            } 
                       
            function onError(error) { 
                alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n'); 
            } 
