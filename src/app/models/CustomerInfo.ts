export class CustomerInfo {
    name: string;
    email: string;
    primaryPhone: string;
    cellPhone: string;
    clientAddress: string;
    inspectionAddress: string;
    desiredService: string;
    message: string;

    constructor(
        name: string = '',
        email: string = '',
        primaryPhone: string = '',
        cellPhone: string = '',
        clientAddress: string = '',
        inspectionAddress: string = '',
        desiredService: string = '',
        message: string = ''
    ) {
        this.name = name;
        this.email = email;
        this.primaryPhone = primaryPhone;
        this.cellPhone = cellPhone;
        this.clientAddress = clientAddress;
        this.inspectionAddress = inspectionAddress;
        this.desiredService = desiredService;
        this.message = message;
    }
}
