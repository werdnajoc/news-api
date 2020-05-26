import {StringValueObject} from '@shared/domain/value-object/StringValueObject';

import BadRequestException from '@shared/domain/exceptions/BadRequestException';

export class IndexSay extends StringValueObject {
  constructor(value: string) {
    super(value);
    IndexSay.ensureLengthIsLessThan10Characters(value);
  }

  private static ensureLengthIsLessThan10Characters(value: string): void {
    if (value.length > 10) {
      throw new BadRequestException(
        `The indexSay <${value}> has more than 10 characters`,
        "CAN_BE_LENGTH_IS_LESS_10"
      );
    }
  }
}
