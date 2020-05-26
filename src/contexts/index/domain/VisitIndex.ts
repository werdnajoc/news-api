import {IndexSay} from '@contexts/index/domain/IndexSay';

export class VisitIndex {
  readonly say: IndexSay;

  constructor(say: IndexSay) {
    this.say = say;
  }

  static fromPrimitives(plainData: {say: string;}): VisitIndex {
    return new VisitIndex(
      new IndexSay(plainData.say)
    );
  }

  toPrimitives() {
    return {
      say: this.say.value
    };
  }
}
