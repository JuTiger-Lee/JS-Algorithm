import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  // 데이터를 삽입하는 메서드
  // 리스트의 앞부분에 데이터를 넣기만하면된다.
  enqueue(data) {
    this.list.inserAt(0, data);
  }

  // 데이터를 제거하는 메서드
  // 리스트의 가장 뒷부분에서 데이터를 제거하면됨
  dequeue() {
    // 삭제할수없는 노드인경우 예외를 던지기에 try catch
    try {
      return this.list.deleteLast();
    } catch (err) {
      return null;
    }
  }

  // 데이터를 제거하지 않고 참조함
  // tail에 있는 값을 리턴
  front() {
    return this.list.tail;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Queue };
