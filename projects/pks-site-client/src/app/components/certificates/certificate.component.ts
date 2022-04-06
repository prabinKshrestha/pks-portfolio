import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pks-certificate',
    templateUrl: './certificate.component.html',
    styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

    public certificates: CertificateModel[] = [];

    constructor() { }

    ngOnInit(): void {
        this.certificates = [
            {
                Name: "Introduction to Data Science in Python",
                StartDate: new Date("2022/03/01"),
                EndDate: null,
                Issuer: "University of Michigan - Coursera",
                CredentialId: "J9MLP37FQFKJ",
                Url: "https://www.coursera.org/account/accomplishments/certificate/J9MLP37FQFKJ",
            },
            {
                Name: "Python for Data Science, AI & Development",
                StartDate: new Date("2022/03/01"),
                EndDate: null,
                Issuer: "IBM - Coursera",
                CredentialId: "MNSD7Z9SV9X7",
                Url: "https://www.coursera.org/account/accomplishments/certificate/MNSD7Z9SV9X7",
            },
            {
                Name: "Python Project for Data Science",
                StartDate: new Date("2022/03/01"),
                EndDate: null,
                Issuer: "IBM - Coursera",
                CredentialId: "KNSN5228NE72",
                Url: "https://www.coursera.org/account/accomplishments/certificate/KNSN5228NE72",
            },
            {
                Name: "The Data Scientist’s Toolbox",
                StartDate: new Date("2022/03/01"),
                EndDate: null,
                Issuer: "Johns Hopkins University - Coursera",
                CredentialId: "LELW839B6CVX",
                Url: "https://www.coursera.org/account/accomplishments/certificate/LELW839B6CVX",
            },
        ]
    }

}

class CertificateModel {
    public Name!: string;
    public StartDate!: Date;
    public EndDate: Date | null = null;
    public Issuer!: string;
    public CredentialId!: string;
    public Url!: string;
}
