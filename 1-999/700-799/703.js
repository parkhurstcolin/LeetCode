/**
 * @param {number} k
 * @param {number[]} nums
 */

class KthLargest {
	constructor(k, nums) {
		this.k = k;
		this.minHeap = new MinPriorityQueue();
		for (let num of nums) {
			this.add(num);
		}
	}

	/**
	 * @param {number} val
	 * @return {number}
	 */

	add(val) {
		if (this.minHeap.size() < this.k) {
			this.minHeap.enqueue(val);
		} else if (val > this.minHeap.front().element) {
			this.minHeap.dequeue();
			this.minHeap.enqueue(val);
		}
		return this.minHeap.front().element;
	}
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
