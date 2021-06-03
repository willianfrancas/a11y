import { Component, Output } from '@angular/core';
import { YesNoButtonGroupComponent } from './shared/components/yes-no-button-group/yes-no-button-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';

  @Output() YesOrNoValue: YesNoButtonGroupComponent;

  public yesOrNoAnswer = 'no';

  ngOnChange() {
    console.log(this.yesOrNoAnswer,this.YesOrNoValue);
  }
}
