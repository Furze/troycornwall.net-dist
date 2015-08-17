"use strict";angular.module("troycornwallnetApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"BlankCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"BlankCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"BlankCtrl"}).when("/cv",{templateUrl:"views/cv.html",controller:"CVCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("troycornwallnetApp").controller("BlankCtrl",["$scope",function(a){a.blank=!0}]),angular.module("troycornwallnetApp").controller("CVCtrl",["$scope",function(a){var b={link:"images/troy.jpg",alt:"Troy Cornwall",size:"220px"},c=[{icon:"fa-home",text:"Whanagaparaoa, Auckland"},{icon:"fa-envelope",text:"furze@troycornwall.net"},{icon:"fa-phone",text:"021 022 96 304"},{icon:"fa-linkedin",link:"https://linkedin.com/pub/troy-cornwall/65/a48/838/",text:"Troy Cornwall"},{icon:"fa-twitter",link:"https://twitter.com/DevTroy",text:"@DevTroy"},{icon:"fa-github",text:"Furze",link:"https://github.com/Furze"}],d="I enjoy finding creative solutions to complicated problems. In my spare time I like to contribute to projects and find improvements. This includes turning a game client into a fully automated bot, reverse engineering phone applications and writing patches on the Android Xposed Framework. I love to program using JavaScript and node.js, and exploring new technology such as MongoDB.",e={title:"Team work",desc:"I am a great team player, and work well in group enviroments.  I always strive to help the team work to the best of our abilities. I perfer smaller 4 – 7 people teams compared to larger teams. During university there have been multiple times where I have had to work in a group for assignments or projects. I have also worked in a 4 person team for the Microsoft Imagine Cup, and also in a small 8 man team as an intern at Active Mobile Security. "},f={title:"Problem Solving",desc:"I love solving tricky problems. If I cannot make something work, I will keep thinking and work out different ways to solve the problem. For me, talking to people about the problem helps me think about different ways to solve it, while also completing an unrelated task can help. "},g={title:"DevOps",desc:"DOCKER PUPPET JENKINS <33"},h={title:"Programming",desc:"I automate as many of my daily tasks, using what the most efficient language for the task. However my favorite languages to use are JavaScript, Java and C#. I have been programming since I was 14, firstly in VB.NET at high school then onto much more interesting languages at University and in my spare time."},i=[e,f,g,h],j={title:"Spark Ventures",role:"Intern",date:"November 2014 - Currently",desc:"Doing full stack development on the BigPipe and Digilife Ventures. Using the full Tech stack of Java Enterprise, Node, Postgres, CouchDB, Angular, Bootstrap, Jenkins, Docker, JBoss, JBoss-fuse, ActiveMQ, Puppet, Selenium and SoapUI Dockerizing the entire stack"},k={title:"Active Mobile Security",role:"Intern",date:"May 2014 - November 2014",desc:"For a month I was asked to do user device testing of FireDroid on a mobile device, where I was using the software in as many different was I could think of, and when it didn’t respond as I thought it should I would report this. Over the month I found over 30 bugs.\n After the user device testing, I started Unit Testing of the REST api. I wrote the tests in Java using JUnit and RESTFuse. Active Mobile Security are looking to include the Unit tests into the build proccess"},l={title:"Microsoft Imagine Cup - New Zealand Finalists",role:"Developer",date:"2014",desc:"I was part of Team Astraeus, where we took out product Examinate from an idea to a live demo over the course of 3 months. We were chosen for the top 5 in the innovation category, but sadly were not picked to go on to the Asia Pacific part of the compitetion. I learnt a lot competiting in the Imagine Cup, including how to develop to a time line, how to give a great presentation under stress & how to network with important people in the tech industry."},m={title:"Shearpac Ltd",role:"Shearing Assistant and web developer",date:"Summer 2013 and Summer 2014",desc:"Got spat on by alpaca :("},n=[j,k,l,m],o="furze@troycornwall.net",p=[{name:"Java",lvl:8,time:"4 Years"},{name:"JavaScript",lvl:7,time:"2 Years"},{name:"C# (.NET)",lvl:6,time:"2 Years"},{name:"Python",lvl:5,time:"6 Months"},{name:"HTML",lvl:7,time:"3 Years"},{name:"CSS",lvl:7,time:"3 Years"},{name:"Linux",lvl:6,time:"4 Years"},{name:"Docker",lvl:7,time:"1 Year"},{name:"Puppet",lvl:5,time:"4 Months"},{name:"C & C++",lvl:4,time:"6 Months"},{name:"RESTful Services",lvl:7,time:"6 Months"}];a.contactArray=c,a.introduction=d,a.skillSummary=i,a.picture=b,a.experience=n,a.refEmail=o,a.skills=p}]);