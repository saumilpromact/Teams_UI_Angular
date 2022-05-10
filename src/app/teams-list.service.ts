import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsListService {

  listArray = [
    {
      "id": 1,
      "title": "Amey Bhosle",
      "receivedMessage": "Hey Saumil, How much did you score in Angular quiz?",
      "sentMessage": "Hello Amey, I got 32 out of 35."
    },
    {
      "id": 2,
      "title": "Abhishek Bhatt",
      "receivedMessage": "Hey, Have completed the assignment? I am finding it really tough.",
      "sentMessage": "Yeah, I have even submitted it."
    },
    {
      "id": 3,
      "title": "Parinita Sharma",
      "receivedMessage": "From which college did you get your bachlors degree from?",
      "sentMessage": "I studied from The Maharaja Sayajirao University of Baroda."
    },
    {
      "id": 4,
      "title": "Bikram Biswas",
      "receivedMessage": "I am from Kolkata, so I wanted to ask how's Vadodara city?",
      "sentMessage": "I find it really enjoyable !"
    },
    {
      "id": 5,
      "title": "Ashiyana Halvadiya",
      "receivedMessage": "How much of assignment have you completed?",
      "sentMessage": "I have implemented till routing section."
    },
    {
      "id": 6,
      "title": "Manikandan",
      "receivedMessage": "Hey Saumil, how did you implemented bootstrap?",
      "sentMessage": "Hey, I haven't yet implemented it."
    },
    {
      "id": 7,
      "title": "Dipa Majumdar",
      "receivedMessage": "Please submit the documentation requested by EOD.",
      "sentMessage": "Sure ma'am, infact I have completed 90% of it."
    },
    {
      "id": 8,
      "title": "Firoja Parveen",
      "receivedMessage": "Please send your task mail if proper format.",
      "sentMessage": "Sure ma'am, I shall send another mail."
    },
    {
      "id": 9,
      "title": "Sourav Kumar",
      "receivedMessage": "Are you facing any roadblocks in course?",
      "sentMessage": "No, as of now I am not facing any roadblocks."
    }
  ];

  constructor(private http : HttpClient) { }

  getTeamsList()
  {
   return this.http.get<any>("http://localhost:3000/posts")
   .pipe(map((res:any)=>{
     return res;
   }))
  }
}
