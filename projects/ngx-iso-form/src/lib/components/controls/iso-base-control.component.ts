import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IControlModel } from '../../Models/Control';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'iso-base',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class IsoBaseControlComponent {

    @Input() control: IControlModel;
    @Input() formControl: FormControl;

    getKeys(errors: any)
    {
        if(errors)
        {
            return Object.keys(errors);
        }
        return [];
    }
}