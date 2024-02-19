
export namespace CategoriessActions {
    export class GetCategories {
        static type = '[CategoriessActions] Get Categories';
    }
    export class SearchProducts {
        static type = '[CategoriessActions] Search Products';
        constructor(public searchTerm: string) { }
    }
}
