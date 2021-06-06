import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ],
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() public disabled = false;
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();

  public id = null;
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => { };
  public onTouched = () => { };

  constructor(private uniqueIdService: UniqueIdService) {
    this.id = this.uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
  }

  ngOnInit(): void {
  }

  public activate(value: string): void {
    this.writeValue(value);
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
