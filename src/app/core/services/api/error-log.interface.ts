export interface ErrorLog {

  /**
   * ErrorLogId
   */
  ErrorLogId?: number;

  /**
   * ErrorTime
   */
  ErrorTime?: Date;

  /**
   * UserName
   */
  UserName?: string;

  /**
   * ErrorNumber
   */
  ErrorNumber?: number;

  /**
   * ErrorSeverity
   */
  ErrorSeverity?: number;

  /**
   * ErrorState
   */
  ErrorState?: number;

  /**
   * ErrorProcedure
   */
  ErrorProcedure?: string;

  /**
   * ErrorLine
   */
  ErrorLine?: number;

  /**
   * ErrorMessage
   */
  ErrorMessage?: string;
}
