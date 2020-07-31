/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function populateContactList(){
    
    var htmlInject;
    for(var i = 0; i<data.users.length;i++)
    {
       
        
        htmlInject = htmlInject + "<li class=\"person\"><button onclick=\"populateChat("+data.users[i].user_id+")\" class=\"personButton\"><img class = \"proPic\" src=\""+data.users[i].avatar+"\"/>  <div class=\"name\">"+data.users[i].username+"</div></button> </li>";
     
        
    }
    document.getElementById("contactList").innerHTML = htmlInject;
    
}

function populateChat(userID){
    //window.continue.log("Hi");
    var htmlStuff;  
    //var userPos;
    
    
    for(var i = 0; i<data.chat.length;i++) //Loop through each chat
    {
        if(userID === data.chat[i].user_id)
        {
            for(var j =0;j<data.chat[i].messages.length;j++)//Loop through each message
            {
                if(data.chat[i].messages[j].user_id=== data.users[5].user_id){
                    htmlStuff = htmlStuff + "<li class=\"me\">  <div class=\"name\">"+data.chat[i].messages[j].message+"</div></li>";
                }
                else
                {
                htmlStuff = htmlStuff + "<li class=\"otherPerson\"><img class = \"proPic\" src=\""+data.users[i].avatar+"\"/>  <div class=\"name\">"+data.chat[i].messages[j].message+"</div></li>";
            }
        }
        
        }  
        
    }
    
   document.getElementById("chatHeader").innerHTML = "<img class = \"headProPic\" src=\""+data.users[userID-1].avatar+"\"/>  <div class=\"headInfo\">"+data.users[userID-1].username+"</div>";
    document.getElementById("chatList").innerHTML = htmlStuff;
    
    }
    
    function sendMessage()
    {
        var text = document.getElementById("txtArea").value;
       var htmlStuff = "<li class=\"me\">  <div class=\"name\">"+text+"</div></li>";
        var totalHTML = document.getElementById("chatList").innerHTML + htmlStuff;
         document.getElementById("chatList").innerHTML = totalHTML;
         
        document.getElementById("txtArea").value = "";
    }
    
    
    

var data = {
  "chat": [
    {
      "user_id": 1,
      "messages": [
        {
          "user_id": 1,
          "message": "Hi Dan, how are you doing this fine morning?",
          "timestamp": "2020-07-27T10:30:10+0000"
        },
        {
          "user_id": 6,
          "message": "I am doing just dandy Evan, how are you?",
          "timestamp": "2020-07-27T10:31:10+0000"
        },
        {
          "user_id": 1,
          "message": "Good thanks. Listen can we collaborate on a new project?",
          "timestamp": "2020-07-27T10:32:10+0000"
        },
        {
          "user_id": 6,
          "message": "Sure! Tell me more. 🧐",
          "timestamp": "2020-07-27T10:33:10+0000"
        },
        {
          "user_id": 6,
          "message": "Really exicted to hear more about the project!",
          "timestamp": "2020-07-27T10:35:10+0000"
        }
      ]
    },
    {
      "user_id": 2,
      "messages": [
        {
          "user_id": 2,
          "message": "Lorem ipsum dolor sit amet.",
          "timestamp": "2020-07-27T10:20:10+0000"
        },
        {
          "user_id": 6,
          "message": "consectetur adipiscing elit",
          "timestamp": "2020-07-27T10:15:10+0000"
        },
        {
          "user_id": 2,
          "message": "Proin ut tristique erat.",
          "timestamp": "2020-07-27T10:10:10+0000"
        },
        {
          "user_id": 6,
          "message": "Curabitur interdum massa metus.",
          "timestamp": "2020-07-27T10:05:10+0000"
        }
      ]
    },
    {
      "user_id": 3,
      "messages": [
        {
          "user_id": 3,
          "message": "Integer luctus metus lacinia semper sodales.",
          "timestamp": "2020-07-27T09:55:10+0000"
        },
        {
          "user_id": 6,
          "message": "Sed quis mollis massa.",
          "timestamp": "2020-07-27T09:31:10+0000"
        },
        {
          "user_id": 3,
          "message": "Nam ac tempor libero.",
          "timestamp": "2020-07-27T09:20:10+0000"
        },
        {
          "user_id": 3,
          "message": "Pellentesque non mauris nibh. Integer id tortor gravida.",
          "timestamp": "2020-07-27T09:15:10+0000"
        }
      ]
    },
    {
      "user_id": 4,
      "messages": [
        {
          "user_id": 4,
          "message": "Mauris elementum id enim sit amet pharetra.",
          "timestamp": "2020-07-27T09:14:10+0000"
        },
        {
          "user_id": 6,
          "message": "Nunc tempus efficitur nisi, porta pulvinar mi.",
          "timestamp": "2020-07-27T09:00:10+0000"
        },
        {
          "user_id": 4,
          "message": "Fusce pretium tortor eu metus interdum accumsan.",
          "timestamp": "2020-07-27T08:55:10+0000"
        },
        {
          "user_id": 6,
          "message": "Donec eget placerat ante.",
          "timestamp": "2020-07-27T08:54:10+0000"
        }
      ]
    },
    {
      "user_id": 5,
      "messages": [
        {
          "user_id": 5,
          "message": "Maecenas rutrum eget massa maximus cursus.",
          "timestamp": "2020-07-27T08:50:10+0000"
        },
        {
          "user_id": 6,
          "message": "Vivamus et ultrices eros.",
          "timestamp": "2020-07-27T08:45:10+0000"
        },
        {
          "user_id": 5,
          "message": "Nullam tincidunt lorem mauris, facilisis sagittis nisi facilisis nec.",
          "timestamp": "2020-07-27T08:44:10+0000"
        },
        {
          "user_id": 6,
          "message": "Phasellus scelerisque neque eget mauris porta convallis.",
          "timestamp": "2020-07-27T08:33:10+0000"
        }
      ]
    }
  ],
  "users": [
    {
      "user_id": 1,
      "username": "Le Chef",
      "status": "online",
      "avatar": "https://randomuser.me/api/portraits/lego/8.jpg"
    },
    {
      "user_id": 2,
      "username": "José",
      "status": "away",
      "avatar": "https://randomuser.me/api/portraits/lego/6.jpg"
    },
    {
      "user_id": 3,
      "username": "Geekster",
      "status": "online",
      "avatar": "https://randomuser.me/api/portraits/lego/3.jpg"
    },
    {
      "user_id": 4,
      "username": "Scully Mike",
      "status": "offline",
      "avatar": "https://randomuser.me/api/portraits/lego/4.jpg"
    },
    {
      "user_id": 5,
      "username": "Joe Brick",
      "status": "online",
      "avatar": "https://randomuser.me/api/portraits/lego/5.jpg"
    },
    {
      "user_id": 6,
      "username": "Magic Marven",
      "status": "offline",
      "avatar": "https://randomuser.me/api/portraits/lego/2.jpg"
    }
  ]
}
