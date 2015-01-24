# MyLocationMapper-Android.
![Application in Android](https://lh4.googleusercontent.com/oGG-uQlG_P0mwRnPKTOI63RERv9axqPxktL7nuJQXyY=s209-p-no)


## Summary. 
##### Primary Aim.       
 Take User's loation, on user's command to start tracing the route being travelled and on stoping, app. gives user a feature to save the travel data and plot again when user needs. 

##### Secondary Aim.     
The app. was later modified into      
1. Get routes from server & present to user, based on user's selection their will be a route plotted on map.   
2. when started the route location being travelled will be send back to server, where it will be recorded.   
3. Incident report, when user choose the option to report his current location will be send back to server when it will noted.    

##### Requirements.     
1. Obtain a key using your Google account credentials and activate the API you want to use, in this case i am using "Google Maps API v2" @ [Google API Console] (https://code.google.com/apis/console).
2. Put the key in AndroidManifest.xml

### Running the App.      
After cloning the App. these are the steps you can perform:

###### Run using cordova commands. 

  > 1. Open CMD/Terminal inside the project folder.
  > 2. run - `cordova build android`. or `cordova prepare android` & `cordova compile android`.
  > 3. if using device - `cordova run android`
  > 4. if using emulator - `cordova emulate android`

###### Run using Eclipse. 

  The project is not android studio compatible, if using android studio refer these links,
  
[Eclipse to Android Studio] (http://stackoverflow.com/questions/16584263/how-do-i-open-my-existing-eclipse-projects-in-android-studio) ,
[Migrating to Android Studio] (http://developer.android.com/sdk/installing/migrate.html)


## Want to Tweek Location Mapper ?
> ### Resources :
> [Navigation bar] (https://github.com/polychrom/cordova-android-actionbar.)     
> [Toast] (https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin)    
> [Google Maps Android API]  (https://github.com/wf9a5m75/phonegap-googlemaps-plugin. )    
> Geolocation - core cordova plug-in.   
