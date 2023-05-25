import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnDestroy {
  @Input() rooms: RoomList[] | null = []

  @Input() title: string = "s"

  @Output() selectedRoom = new EventEmitter<RoomList>()

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  ngOnDestroy(): void {
      console.log("on destroy is called")
  }

  selectRoom(room : RoomList){
    this.selectedRoom.emit(room)
  }
}
