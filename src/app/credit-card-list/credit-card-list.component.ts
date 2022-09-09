import { Component, OnInit } from '@angular/core';
import { CreditCardTransactionService } from '../api/services/credit-card-transaction.service';
import { CreditCardTransactionDto } from '../api/models/credit-card-transaction-dto';
import { faTimes, faEdit, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {
  transactions: CreditCardTransactionDto[] = [];
  callerreference?: string = "";
  settlementdate?: string = "";
  errorMsg?: string;
  pageNumber = 0;
  pageSize = 10;
  faTimes = faTimes;
  faEdit = faEdit;
  faForward = faForward;
  faBackward = faBackward;
  xpagination: any;

  constructor(private transactionsService: CreditCardTransactionService) { }

  ngOnInit(): void {

  }

  onDelete(transaction: CreditCardTransactionDto) {
    console.log(transaction);
  }
  onEdit(transaction: CreditCardTransactionDto) {
    console.log(transaction);
  }

  onSubmit() {
    this.pageNumber = 1;
    this.errorMsg = "";
    this.getTransactions();
  }

  onNextPage() {
    this.pageNumber++;
    this.getTransactions();
  }

  onPrevPage() {
    this.pageNumber--;
    this.getTransactions();
  }

  formatDate(date: string | undefined) {
    if (date) {
      return new Date(date).toLocaleDateString();
    }
    return date;
  }
  //function to display value as currency
  formatCurrency(value: number | undefined) {
    if (value) {
      return value.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
    }
    return value
  }

  //function to validate a string is a valid date
  isValidDate(dateString: string) {
    // First check for the pattern
    if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(dateString))
      return false;
    return true;
  }
  getTransactions() {
    if (this.isValidDate(this.settlementdate!)) {
      this.transactionsService.apiCreditCardTransactionGet$Json$Response({
        callerReference: this.callerreference,
        settlementDate: this.settlementdate,
        pageNumber: this.pageNumber,
        pageSize: this.pageSize
      })
        .subscribe((response) => {
          this.transactions = response.body as CreditCardTransactionDto[];
          this.xpagination = JSON.parse(response.headers.get('X-Pagination') || '{}');
          console.log(this.xpagination);
        })
    } else {
      console.log('invalid date');
      this.errorMsg = 'Invalid date';
    }
  }

}
