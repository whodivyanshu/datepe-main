import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}
async function GetFCMTocken(){


let  fcmtocken=await AsyncStorage.getItem("fcmtocken");
if(!fcmtocken){

try{
    let fcmtocken=messaging().getToken();
    if(fcmtocken){
AsyncStorage.setItem("fcmtocken",fcmtocken);
    }else{

}
}catch  (error){
console.log(errror,"error in fcmtocken");
}


}
    
}
export const NotificationListner=() =>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
       
      });

      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
         
        }
       
      });

      messaging().onMessage(async remoteMessage=>{
        console.log("notification on foreground state...",remoteMessage);
      })
}