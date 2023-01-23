import { LinkedList } from "./LinkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  // 연결리스트이 head를 삽입
  push(data) {
    this.list.inserAt(0, data);
  }

  // 연결리스트의 head에서 꺼냄
  pop() {
    // 빈리스트를 지우면 예외를 던지기에 try catch
    try {
      return this.list.deleteAt(0);
    } catch (err) {
      return null;
    }
  }

  // 스택의 top에 있는 데이터를 참조
  peek() {
    return this.list.getNodeAt(0);
  }

  // 스택이 비어있으면 true, 비어있지 않으면 false를 리턴
  isEmpty() {
    return this.list.count === 0;
  }
}

export { Stack };
