import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

/** 추상 자료형
 *
 * printAll - 모든 데이터 출력
 * addFirst - head에 데이터 삽입
 * removeFirst - head에서 데이터 제거
 * addLast - list tail에 데이터 삽입
 * removeLast - list tail에 데이터제거
 * isEmpty - 리스트가 비었는지 체크
 *
 */

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  printAll() {
    this.list.printAll();
  }

  addFirst(data) {
    this.list.inserAt(0, data);
  }

  removeFirst() {
    return this.list.deleteAt(0);
  }

  addLast(data) {
    this.list.insertLast(data);
  }

  removeLast() {
    this.list.deleteLast();
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Deque };
