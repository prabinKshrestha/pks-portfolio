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
                Name: "Advanced Learning Algorithms",
                StartDate: new Date("2023/09/01"),
                EndDate: null,
                Issuer: "DeepLearning.AI, Stanford University - Coursera",
                CredentialId: "CKT5M3K2Z4ZA",
                Url: "https://www.coursera.org/account/accomplishments/certificate/CKT5M3K2Z4ZA",
            },
            {
                Name: "Supervised Machine Learning: Regression and Classification",
                StartDate: new Date("2023/07/01"),
                EndDate: null,
                Issuer: "DeepLearning.AI, Stanford University - Coursera",
                CredentialId: "T5UAM9HP83KM",
                Url: "https://www.coursera.org/account/accomplishments/certificate/T5UAM9HP83KM",
            },
            {
                Name: "AI For Everyone",
                StartDate: new Date("2023/09/01"),
                EndDate: null,
                Issuer: "DeepLearning.AI, Stanford University - Coursera",
                CredentialId: "9XYVLS22SCRQ",
                Url: "https://www.coursera.org/account/accomplishments/certificate/9XYVLS22SCRQ",
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
                Name: "Databases and SQL for Data Science with Python",
                StartDate: new Date("2022/06/30"),
                EndDate: null,
                Issuer: "IBM - Coursera",
                CredentialId: "EGWPU4FAZBS4",
                Url: "https://www.coursera.org/account/accomplishments/certificate/EGWPU4FAZBS4",
            },
            {
                Name: "Introduction to Data Science in Python",
                StartDate: new Date("2022/03/01"),
                EndDate: null,
                Issuer: "University of Michigan - Coursera",
                CredentialId: "J9MLP37FQFKJ",
                Url: "https://www.coursera.org/account/accomplishments/certificate/J9MLP37FQFKJ",
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
