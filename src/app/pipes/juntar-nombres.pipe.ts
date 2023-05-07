import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'juntarNombre'
})
export class JuntarNombresPipe implements PipeTransform {


  transform(value: unknown, ...args: unknown[]): unknown {   
    return args[0] + " " + args[1];
  }

}
