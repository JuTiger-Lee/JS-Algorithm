import { HashTable } from "./HashTable.mjs";
/**
 * add(data) - 데이터삽입 ::매개변수 key이자 데이터
 * isContain(data) - 데이터 체크
 * remove(data) - 데이터 제거
 * clear() - 셋 비우기
 * isEmpty() - 셋이 비었는지 체크
 * printALl() - 데이터 출력
 */

class HashSet {
  constructor() {
    this.hashTable = new HashTable();
  }

  add(data) {
    // 증복 방지를 위해 데이터가 있는지 체크
    if (this.hashTable.get(data) == null) {
      // value 는 안쓰기에 -1을 value로
      this.hashTable.set(data, -1);
    }
  }

  isContain(data) {
    return this.hashTable.get(data) !== null;
  }

  remove(data) {
    this.hashTable.remove(data);
  }

  clear() {
    for (let i = 0; i < this.hashTable.arr.length; i += 1) {
      this.hashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true; // 비어있다고 가정

    for (let i = 0; i < this.hashTable.arr.length; i += 1) {
      if (this.hashTable.arr[i].count) {
        empty = false;
        // 데이터가 하나라도 있으면 for문을 순회할 필요는 없음
        break;
      }
    }

    return empty;
  }

  printAll() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      let currentNode = this.hashTable.arr[i].head;

      while (currentNode !== null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet };
