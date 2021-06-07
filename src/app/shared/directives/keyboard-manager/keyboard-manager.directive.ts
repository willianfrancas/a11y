import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";
import { KeyboardManagedItemDirective } from "./keyboard-managed-item.directive";


@Directive({
  selector: '[app-keyboard]'
})
export class KeyboardManagerDirective {

  @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective>;
  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveFocus(ArrowDirections.RIGHT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirections.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirections.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirections.LEFT).focus();
        break;
    }
  }

  public moveFocus(direction: ArrowDirections): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const currentItemSelectedIndex = items.findIndex(item => item.isFocused());
    const targetItemFocus = items[currentItemSelectedIndex + direction];
    if (targetItemFocus) return targetItemFocus;
    return direction === ArrowDirections.LEFT ? items[items.length - 1] : items[0];
  }
}

enum ArrowDirections {
  LEFT = -1,
  RIGHT = 1,
}
