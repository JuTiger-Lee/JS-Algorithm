class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    // 이전 노드를 알기 위해
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    // 시작 노드
    this.head = null;
    // 끝 노드
    this.tail = null;
    // 총 저장된 노드의 수를 정하는 count 프로퍼티
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    // 노드를 전분 순환 마지막 인덱스의 next는 null이 므로 전부다 순환이 가능하다.
    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode !== null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  // 리스트의 모슨 원소를 제거하는 기능
  clear() {
    this.head = null;
    this.count = 0;
  }

  // 원하는 인덱스에 데이터를 삽입하는 메서드
  inserAt(index, data) {
    // index가 -1이거나 총 저장된 노드수보다 높은 인덱스일시 에러
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let newNode = new Node(data);

    // 리스트의 가장 앞부분에 삽입하는 경우
    // 즉 새로 삽입한 노드가 head가 되는 경우
    if (index === 0) {
      newNode.next = this.head;
      // 데이터가 0개일 때 즉 데이터가 없을 때 예외처리
      if (this.head !== null) {
        // header가 가리키는 노드의 이전 노드를 새로운 노드로 설정
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      // tail에 삽입하는 경우
      newNode.next = null; // 새로운 노드의 다음 노드를 null로 설정
      newNode.prev = this.tail; // 새로운 노드의 이전 노드를 tail이 가리키던 노드로 설정
      this.tail.next = newNode; // tail이 가리키던 노드의 다음 노드를 새로운 노드로 설정
    } else {
      // 가장 앞부분을 제외한 나머지 부분에 삽입하는 경우
      // head 노드에서 next로 목표인덱스까지 계속 참조해서 가는 경우
      let currentNode = this.head; // head에서 타고 가기 때문에 head로 초기화

      // 목표 인덱스 바로 전까지 next를 이용해서 currentNode로 이동
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      // 새로운 노드가 currentNode의 Next 노드를 가리키게
      newNode.next = currentNode.next;
      newNode.prev = currentNode; // 새로운 노드의 이전 노드를 currentNode로 설정
      // currentNode가 새로운 Node를 가리키게
      currentNode.next = newNode;
      newNode.next.prev = newNode; // 새로 삽인한 노드의 다음 노드의 이전노드를 새로 삽입한 노드로 설정
    }

    // 새로 삽입한 노드가 마지막이라면
    if (newNode.next === null) {
      this.tail = newNode; // 새로 삽인한 노드를 tail로 설정
    }

    this.count++;
  }

  // 마지막에 데이터를 넣는 메서드
  insertLast(data) {
    this.inserAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다.");
    }

    let currentNode = this.head;

    // 첫번째 노드를 제거
    if (index === 0) {
      // 삭제된 노드 반환을 위해서 변수에 담는다.
      let deletedNode = this.head;
      if (this.head.next === null) {
        // 데이터가 1개 이상일 때
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
        // 데이터가 2개 이상일 때
      }

      this.count--;

      return deletedNode;
    } else if (index === this.count - 1) {
      // 마지막 노드를 제거하는 경우
      let deletedNode = this.tail; // tail이 가리킬 노드를 삭제할 노드를 설정
      this.tail.prev.next = null; // tail 이전 노드의 다음 노드를 null
      this.tail = this.tail.prev; // tail의 이전 노드를 tail로 설정
      this.count--;

      return deletedNode;
    } else {
      // 제거하기전 이전 노드를 가리킴
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode; // 현재 노드의 다음 노드의 이전 노드를 현재 노드로 설정
      this.count--;

      return deletedNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범휘를 넘어갔습니다.");
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Node, DoublyLinkedList };
