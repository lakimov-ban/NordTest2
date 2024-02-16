import {Component} from '@angular/core';
import {PaginationValue} from "../../@shared/components/pagination/pagination.component";

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
}
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent {
    pagination = {page: 1, pageSize: 10};
    private readonly items = Array.from(Array(100).keys(), (item) => item + 1);

    public visibleItems: PaginatedResponse<number> = {
        items: this.items.slice(0, 10),
        total: this.items.length,
    };

    public onPageChange(pagination: PaginationValue): void {
        const startIndex = (pagination.page - 1) * pagination.pageSize;

        const items = this.items.slice(
            startIndex,
            startIndex + pagination.pageSize
        );

        this.visibleItems = {items, total: this.items.length};
    }
}
