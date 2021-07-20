import { Pipe, PipeTransform } from '@angular/core';
import { getPackedSettings } from 'http2';
import { ItemModelInterface } from '../models/itemModelInterface';
import { paginationConfig } from '../models/paginationConfig';

@Pipe({
  name: 'pagination'
})


export class PaginationPipe implements PipeTransform {

  getPage = (a: Array<ItemModelInterface>, currentPage = 0, item4page = 5) => {
    return a.slice((currentPage ) * item4page, (currentPage+1) * item4page)
  }

  transform(allItems: ItemModelInterface[], options?: paginationConfig,paginationActive?:boolean): ItemModelInterface[] {

    return paginationActive && options.paginationActive ? this.getPage(allItems, options.currentPage, options.items4page) : allItems
  }

}
