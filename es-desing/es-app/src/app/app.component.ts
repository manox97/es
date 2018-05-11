import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  obj = [
		  {
		        "QustId": "q02",
		        "ServId": "s001",
		        "StartDate": "20180504",
		        "EndDate": "20180504",
		        "QustType": "option",
		        "Qust": {
		            "question": "Which one is correct team name in NBA?",
		            "options": [
		                "New York Bulls",
		                "Los Angeles Kings",
		                "Golden State Warriros",
		                "Huston Rocket"
		            ]
		        }
		    },
		    {
		        "QustId": "q03",
		        "ServId": "s001",
		        "StartDate": "20180504",
		        "EndDate": "20180504",
		        "QustType": "option",
		        "Qust": {
		            "question": "Which of the following are true? Select all that apply.",
		            "options": [
		                "You were able to find exactly what you were looking for",
		                "You were able to find something better than what you were looking for",
		                "You were able to find a part of what you were looking for",
		                "You were able to find something better than what you were looking for"
		            ]
		        }
		    },
		    {
		        "QustId": "q04",
		        "ServId": "s001",
		        "StartDate": "20180504",
		        "EndDate": "20180504",
		        "QustType": "option",
		        "Qust": {
		            "question": "On your last visit, what was your primary reason for visiting our website?",
		            "options": [
		                "Seeking company information",
		                "Seeking product information",
		                "Seeking contact information",
		                "Product purchase"
		            ]
		        }
		    }
		];
}
