import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/services/dogs.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

    data:any = []
    constructor(private dogs:DogsService){
    
        this.dogs.getData().subscribe(data => {
            // console.log(data);
            this.data = data;
            console.log(this.data.message)
        })
    }

  ngOnInit(): void {

  }

}
