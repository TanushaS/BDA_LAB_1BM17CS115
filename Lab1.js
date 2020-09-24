use BMS

db.createCollection(Student);
db.Student.insert({_id:1,Studname:"Anu",Grade:"VII",Hobbies:"painting",usn:"2800",sem:"5"});
db.Student.insert({_id:2,Studname:"Banu",Grade:"I",Hobbies:"sketching",age:"23",usn:"1002",cgpa:"9.8"});
db.Student.insert({_id:3,Studname:"priya",Grade:"II",Hobbies:"gaming",usn:"1003",age:"20"});
db.Student.insert({_id:4,Studname:"Hari",Grade:"III",Hobbies:"gaming",usn:"2004",sem:"8"});

db.Sttudent.find({Studname:"Banu"});

db.createCollection("faculty");
db.faculty.insert({_id:1,Name:"Anupurna",Designation:"Professor",location:"Bangalore",sem:"3",Salary:"50k"});
db.faculty.insert({_id:2,Name:"Ravi",Designation:"Professor",dept:"CSE",Salary:"60k"});
db.faculty.insert({_id:3,Name:"Saroja",Designation:"Associate Professor",location:"chennai",sem:"4",dept:"ISE"});
db.faculty.insert({_id:4,Name:"Sooraj",Designation:"Professor",location:"Bangalore",subject:"DS",Salary:"50K"});  
    
db.createCollection("Library");
db.Library.insert({_id:1,Bookname:"Wings of fire",Author:"Abdul kalam",Price:"250",Noofpages:"345"});  
db.Library.insert({_id:2,Book:"Immortals of meluha",Author:"Amish",Price:"245",NoAvailable:"23"});  
db.Library.insert({_id:3,Bookname:"Secret of nagas",Author:"Amish",Price:"250",AuthorEmail:"amish@gmail.com"});  
db.Library.insert({_id:4,Bookname:"Alchemist",Author:"Paulo",Price:"100",NoAvailable:"20",Publishedyear:"1990"});  

db.createCollection("COE");
db.COE.insert({_id:1,name:"Anu",desig:"Professor",salary:"50k",Age:"40"});  
db.COE.insert({_id:2,name:"Bharat",dept:"CSE",salary:"",hobby:"Gaming"});
db.COE.insert({_id:3,name:"Vhandan",desig:"Professor",salary:"",Noofworkinghrs:"8"});
db.COE.insert({_id:4,name:"Kumar",desig:"ISE",salary:"",lastname:"G",gender:"Male"});

db.createCollection("Admission");
db.Admission.insert({_id:1,name:"anu",type:"cet",10th:"59",loc:"Bangalore"});
db.Admission.insert({_id:2,name:"bharat",type:"comedk",age:"20",12th:"93"});
db.Admission.insert({_id:3,name:"ram",type:"",email:"ram@gmail.com",phno:"9876543201"});
db.Admission.insert({_id:4,name:"ramya",type:"",10th:"95",age:"21"});

db.createCollection("festival");
db.festival.insert({_id:1,ename:"Reverse coding",etype:"academic",eprize:"1000"});
db.festival.insert({_id:2,ename:"treasure hunt",dept:"CSE",coordinator:"ram",email:"ram@gmail.com"});
db.festival.insert({_id:3,ename:"quiz",eduration:"1 hr",coordinator:"rahul",noofparticipants:"30",fee:"500"});
db.festival.insert({_id:4,ename:"puzzle",noofstudentsinateam:"3",fee:"100",Venue:"Auditorium"});

            
show collections;
