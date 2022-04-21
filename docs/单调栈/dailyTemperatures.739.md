# 每日温度

## 题目

给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指在第 i 天之后，才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

### 示例 1

```js
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
```

### 示例 2

```js
输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
```

### 示例 3

```js
输入: temperatures = [30,60,90]
输出: [1,1,0]

```

## 题解（单调栈）

### 易错点

1. 容易操作错下标
2. 容易 push 错元素

```js
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = Array(temperatures.length).fill(0);
    // 单调递减
    const stack = [];
    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[stack[stack.length -1]] < temperatures[i]) {
            const top = stack.pop();
            // 容易操作错下标：answer[top] = temperatures[i] - temperatures[top];
            answer[top] = i - top;
        }
        // 容易 push 错元素: stack.push(temperatures[i])
        stack.push(i);
    }
    return answer;
};
```

----
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/daily-temperatures
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
