import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { YesNoButtonGroupComponent } from './shared/components/yes-no-button-group/yes-no-button-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() YesOrNoValue: YesNoButtonGroupComponent;

  public form: FormGroup = null;

  title = 'a11y-p1';


  constructor(private formBuilder: FormBuilder) {

    this.form = formBuilder.group({
      yesOrNoAnswer: ['no'],
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
