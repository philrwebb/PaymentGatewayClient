/* tslint:disable */
/* eslint-disable */
import { TransactionItemDto } from './transaction-item-dto';
export interface CreditCardTransactionDto {
  amount?: number;
  attemptNumber?: number;
  bankStatementItemId?: string;
  callerApplication?: null | string;
  callerReference?: null | string;
  cardCvv?: number;
  cardHolder?: null | string;
  cardNumber?: null | string;
  cardType?: null | string;
  comment?: null | string;
  confirmationNumber?: number;
  expiryMonth?: number;
  expiryYear?: number;
  generalLedgerJournalId?: string;
  id?: string;
  manualResolveReason?: null | string;
  numberOfTransactionItems?: number;
  receiptNumber?: null | string;
  reconcilledDate?: string;
  refundTransactionId?: string;
  requestDate?: string;
  settlementDate?: string;
  status?: number;
  transactionItems?: null | Array<TransactionItemDto>;
  transmittedDate?: string;
}
