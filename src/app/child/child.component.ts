import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';
import {GrandChildComponent} from "../grand-child/grand-child.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @ContentChild('childTempRef',{static:true}) paraElement!:ElementRef;
  @ContentChild(GrandChildComponent,{static:true}) gcElement!:GrandChildComponent;

  ngOnInit() {
    console.log('The project content value ==',this.paraElement.nativeElement.innerText)
    console.log('The project content value ==',this.paraElement)
    console.log('Gc element',this.gcElement.name + ' --- From parent component (child component)');
  }

}
