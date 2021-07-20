import { Pipe, PipeTransform } from '@angular/core';
import { getPackedSettings } from 'http2';
import { ItemModelInterface } from '../models/itemModelInterface';
import { paginationConfig } from '../models/paginationConfig';

@Pipe({
  name: 'pagination'
})


export class PaginationPipe implements PipeTransform {

  getPage = (a: Array<ItemModelInterface>, pg: number, item4page = 5) => {
    return a.slice((pg - 1) * item4page, pg * item4page)
  }

  transform(allItems: ItemModelInterface[], args?: paginationConfig): unknown {

    return args.paginationActive? this.getPage(allItems,args.currentPage,args.items4page):allItems
  }

}
