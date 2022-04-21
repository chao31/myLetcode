# 商品折扣后的最终价格

## 题目

给你一个数组 prices ，其中 prices[i] 是商店里第 i 件商品的价格。

商店里正在进行促销活动，如果你要买第 i 件商品，那么你可以得到与 prices[j] 相等的折扣，其中 j 是满足 j > i 且 prices[j] <= prices[i] 的 最小下标 ，如果没有满足条件的 j ，你将没有任何折扣。

请你返回一个数组，数组中第 i 个元素是折扣后你购买商品 i 最终需要支付的价格。

### 示例 1

```js
> 输入：prices = [8,4,6,2,3]
输出：[4,2,4,2,3]
解释：
商品 0 的价格为 price[0]=8 ，你将得到 prices[1]=4 的折扣，所以最终价格为 8 - 4 = 4 。
商品 1 的价格为 price[1]=4 ，你将得到 prices[3]=2 的折扣，所以最终价格为 4 - 2 = 2 。
商品 2 的价格为 price[2]=6 ，你将得到 prices[3]=2 的折扣，所以最终价格为 6 - 2 = 4 。
商品 3 和 4 都没有折扣。
```

### 示例 2

```js
输入：prices = [1,2,3,4,5]
输出：[1,2,3,4,5]
解释：在这个例子中，所有商品都没有折扣。
```

### 示例 3

```js
输入：prices = [10,1,1,6]
输出：[9,0,1,6]
```

## 题解

### 暴力解法

```js
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const result = [];
    for(let i = 0; i < prices.length; i ++) {
        let j = i +1;
        for(j; j < prices.length; j ++) {
            if(prices[j] <= prices[i]){               
                break;
            }
        }
        if(j === prices.length) {
            result.push(prices[i]);
        }else {
            result.push(prices[i] - prices[j]);
        }
        
    }
    return  result;
};
```

### 单调栈

#### 解题思路

1. 单调`递增` or `递减` 可以解决问题？

这个题其实就是`要求对于某个元素来说，找在右边第一个比其更小的元素是哪个`,`单调栈`的`顺序`跟`需求`是`反`着的，`需求`是`递减`，那`栈`就`递增`。

2. 对于每个`元素`，每次都要`进栈`，区别是直接`进栈`，还是弹出`top 元素`后`进栈`
3. 弹出`top 元素`时，意味着`top 元素`找到了`答案`
4. 最后，未被`弹出`的`元素`，表示`没找到`

#### 代码

```javascript
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const result = [...prices];
    const stack = [];
    for(let i = 0; i < prices.length; i ++) {

        while(stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
            const top = stack.pop();
            result[top] = prices[top] - prices[i];
        }
        stack.push(i);
        
    }
    return  result;
};
```

#### 注意

注意`stack`存下标，不要存元素，否则找不到`栈顶`对应的`原数组元素`：`result[???] = top - current;`

以下代码就出现了上面问题：

```js
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const result = [...prices];
    const stack = [];
    for(let i = 0; i < prices.length; i ++) {
        const current = prices[i];
        while(stack.length && stack[stack.length - 1] >= current) {
            const top = stack.pop();
            // 找不到 top 对应的原数组位置
            result[???] = top - current;
        }
        stack.push(current);
        
    }
    return  result;
};
```

------
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/final-prices-with-a-special-discount-in-a-shop
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
