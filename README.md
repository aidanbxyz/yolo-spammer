# yolo-spammer
 Spams anyone's yolo with just their yoloID (yID)  
 -- NO LONGER WORKING AS OF NOW --  
 -- YOLO now uses a system that uses Google's recaptcha v2, it's response token is used as validation. --

# How to use
## 1. Clone this repository  
 `git clone https://github.com/aidanbxyz/yolo-spammer.git`  
## 2. Install the required package  
 ```
npm install request
 ```
## 3. Edit the yoloID  
 ```// main variables
 var messages = [
     'show cat',
     'have cat',
     'spam is important',
     'u can h4z msgs',
     'hey :)'
 ]
 
 var yoloIDToSpam = '----------'
 
 var yoloQWording = 'definite no spam'
 
 // end of main variables
 ```
 `https://onyolo.com/m/----------/`  
 only copy+paste the ID into the quotes on the 'yoloIDToSpam' variable  
## 4. Change messages (if wanted)  
 ```
 // main variables
 var messages = [
     'show cat',
     'have cat',
     'spam is important',
     'u can h4z msgs',
     'hey :)'
 ]
 
 ...
 
 // end of main variables
 ```
 make sure to stick to the same format of:  
 ```
 'message',
 'next message'
 ```
## 5. Run the script
 `node spamyolo.js`  
  
    
      
 ## ONLY MODIFY VARIABLES WITHIN THE `// main variables` and `// end of main variables` COMMENTS  
 ### This includes the following variables:
 ```
 var messages = [
     'message 1',
     'message 2',
     'maybe even a third'
 ]
 var yoloIDToSpam = '----------'
 var yoloQWording = 'its not spam'
 ```
   
     
       
 ## Sometimes the script will stop for ~60 seconds then start again. This is NORMAL. Let it do it's thing.  
 ### If you want, you can stop it then start it again in ~5 mins.  
 ### It stops because of yolo's spam protection temp banning you.  
