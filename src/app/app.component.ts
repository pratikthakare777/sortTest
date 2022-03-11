import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  numArray = [{
    num: 1,
    color: "#00000"
  }, {
    num: 2,
    color: "#333333"
  }, {
    num: 3,
    color: "#FFFFFF"
  },
  {
    num: 4,
    color: "#EFEFEF"
  },
  {
    num: 5,
    color: "#72C3DC"
  },
  {
    num: 6,
    color: "#2B8EAD"
  },
  {
    num: 7,
    color: "#6F98A8"
  },
  {
    num: 8,
    color: "#BFBFBF"
  },
  {
    num: 9,
    color: "#2F454E"
  }];
  // numArray = [1,2,3,4,5,6,7,8,9];
  ngOnInit() {

  }
  sortEle() {
    this.numArray.sort(function (a, b) {
      return a.num - b.num;
    });
  }
  reShuffle() {
    for (var a = 0; a < this.numArray.length; a++) {
      var x = this.numArray[a];
      var y = Math.floor(Math.random() * (a + 1));
      this.numArray[a] = this.numArray[y];
      this.numArray[y] = x;
    }
  }
}
