export class ProductResponse {
    id: number;
    name: string;
    productType: number;
    inventoryId: number;
    attributes: string;
    deserializeAttributes?: any;
    amount?: number;
    sale_value?: number;
    type_value?: any[];
    validInsertAmount?: boolean;
    validInsertSaleValue?: boolean;
    percentage_profit?: number;
    sale_value_final?: number;
    validInsertPercentage?: boolean;
    valueX?: number;
    valueY?: number;
    valuePrintX?: number;
    valuePrintY?: number;
    typePaper: string;
    typePaperSize: string;
}
