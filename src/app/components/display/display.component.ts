import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { DogsService } from 'src/services/dogs.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

    data: any = []
    image: any = {
        message: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg"
    }
    constructor(private dogs:DogsService){
    
        this.dogs.getData().subscribe(data => {
            // console.log(data);
            this.data = data;
        })
    }

  ngOnInit(): void {

  }

  displayNewImage(breed: any){
    this.dogs.getImage(breed).subscribe(imageObj => {        
        this.image = imageObj;
    })
  }
}
