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
				"QustId": "q0001",
				"ServId": "S001",
				"StartDate": "20180504",
				"EndDate": "20180505",
				"QustType": "option",
				"Qust": "{\"tile\":\"How satisfied are you with our website?\",\"ans1\":\"Very satisfied\",\"ans2\":\"Somewhat satisfied\",\"ans3\":\"Neutral\",\"ans4\":\"Somewhat dissatisfied\","
			},
			{
				"QustId": "q0002",
				"ServId": "S001",
				"StartDate": "20180504",
				"EndDate": "20180505",
				"QustType": "check",
				"Qust": "{\"tile\":\"How did you learn of our website? Select all that apply.\",\"ans1\":\"Surfing the web\",\"ans2\":\"Media\",\"ans3\":\"Friend/colleague\",\"ans4\":\"Company m"
			},
			{
				"QustId": "q0003",
				"ServId": "S001",
				"StartDate": "20180504",
				"EndDate": "20180505",
				"QustType": "option",
				"Qust": "{\"tile\":\"On your last visit, what was your primary reason for visiting our website?\",\"ans1\":\"Seeking company information\",\"ans2\":\"Seeking product info"
			},
			{
				"QustId": "q004",
				"ServId": "s001",
				"StartDate": "20180504",
				"EndDate": "20180504",
				"QustType": "option",
				"Qust": "{\"tile\":\"On your last visit, what was your primary reason for visiting our website?\",\"ans1\":\"Seeking company information\",\"ans2\":\"Seeking product information\",\"ans3\":\"Seeking contact information\",\"ans4\":\"Product purchase\",\"ans5\":\"To find calendar/schedule\",\"ans6\":\"Other\"}"
			},
			{
				"QustId": "q005",
				"ServId": "s001",
				"StartDate": "20180504",
				"EndDate": "20180504",
				"QustType": "option",
				"Qust": "{\"tile\":\"How often do you visit our website?\",\"ans1\":\"Daily\",\"ans2\":\"Weekly\",\"ans3\":\"Monthly\",\"ans4\":\"Quarterly\",\"ans5\":\"Annually\",\"ans6\":\"Other\"}"
			},
			{
				"QustId": "q006",
				"ServId": "s001",
				"StartDate": "20180504",
				"EndDate": "20180504",
				"QustType": "option",
				"Qust": "{\"tile\":\"Which of the following are true? Select all that apply.\",\"ans1\":\"You were able to find exactly what you were looking for\",\"ans2\":\"You were able to find a part of what you were looking for\",\"ans3\":\"You were able to find something better than what you were looking for\",\"ans4\":\"You were able to find something better than what you were looking"
			}
		];	
}
