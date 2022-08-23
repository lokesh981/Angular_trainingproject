import { Component, EventEmitter, Input, Output } from "@angular/core";
 
@Component({
    selector:'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',

    styles:[`
        .green {color: #003300 !important }
        .thumbnail {min-height : 210px;}
        .bold { font-weight : bold; }
        .pad-left{margin-left:100px;}
        .well div{ color : red;}
    `]
})
export class EventThumbnailComponent{
    @Input() event:any
   
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return{green:isEarlyStart,bold:isEarlyStart}
    }
    getStartTimeClass2(){
        if(this.event && this.event.time === '8:00 am')
        return 'green bold'
        else
        return ''
    }
    getStartTimeClass3(){
        if(this.event && this.event.time === '8:00 am')
        return ['green', 'bold']
        else
        return []
    }
    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
          return {color: 'white', 'font-weight': 'bold'}
        return {}
      }



    /*handleClickMe(){
        this.eventClicked.emit(" Angular training At Value Momemtum");
    }

    logFoo()
    {        
        console.log("Log Foo method in EventThumnail executed");    
    }
    address:string = "roadnumber3 sharadanagr gadiannaram"*/
}