import { Component, OnInit } from '@angular/core';
import { BankStatementService } from '../api/services';
import { BankStatementDto } from '../api/models/bank-statement-dto';

@Component({
  selector: 'app-bank-statement-detail',
  templateUrl: './bank-statement-detail.component.html',
  styleUrls: ['./bank-statement-detail.component.css']
})
export class BankStatementDetailComponent implements OnInit {
  bankstatement: BankStatementDto = {};
  fileId: number = 0;
  bsid: string = '';
  

  constructor(private bankStatementService: BankStatementService) { }

  ngOnInit(): void {
    this.getBankStatement('AC07F420-36AC-42CE-AB72-175B0D191C33');
  }
  getBankStatement(id: string) {
    this.bankStatementService.apiBankStatementIdGet$Json$Response({id}).subscribe((statement) => {
      this.bankstatement = statement.body;
      this.fileId = this.bankstatement.fileId as number;
      this.bsid = this.bankstatement.id as string;
    })
  }

}
