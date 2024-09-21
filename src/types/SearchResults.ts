import { DocumentField } from "./DocumentField";

export interface SearchResultsItem {
   Id?: string;
   Type?: string;
   DocumentId: string;
   DocumentTitle: DocumentField;
   DocumentExcerpt: DocumentField;
   DocumentURI: string;
}

export interface SearchResultsResponse {
    TotalNumberOfResults: number;
    Page: number;
    PageSize: number;
    ResultItems: SearchResultsItem[]
}