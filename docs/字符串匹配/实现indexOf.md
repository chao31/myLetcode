## 实现 indexOf() 函数

### 示例 1

```js
输入：haystack = "hello", needle = "ll"
输出：2
```

### 示例 2

```js
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```

## 暴力解法

### 代码

```js
let lenP = haystack.length;
let lenC = needle.length;

for(let i = 0; i <= lenP - lenC; i++) {
    let j = 0;
    let ii = i;

    while(j < lenC && haystack[ii] === needle[j]) {
        ii++;
        j++;
    }

    if(j === lenC) return i;
}

return -1;
```

## kmp 算法实现

可以通过以下视频帮助理解 `kmp 算法`:

1. [KMP 算法易懂版](https://www.bilibili.com/video/BV1jb411V78H?spm_id_from=333.337.search-card.all.click)
2. [KMP 字符串匹配算法 2
](https://www.bilibili.com/video/BV1hW411a7ys/?spm_id_from=autoNext)

### code

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) { 
    let i = len = 0;
    const next = getNext(needle);
    const lenP = haystack.length;
    const lenC = needle.length;

    while(i < lenP) {
        if(haystack[i] === needle[len]) {
            // 找到答案
            if(len === lenC - 1) {
                return i - lenC + 1;
            }
            i++;
            len++;
        }else {
            if(len > 0){
                len = next[len -1];
            }else {
                i++;
            }
        }
    }

    return -1;
};

function getNext(str) {
    let i = 1;
    let len = 0;
    const next = new Array(str.length).fill(0);

    while(i < str.length) {
        if(str[i] === str[len]){
            len++;
            next[i] = len;
            i++;
        }else {
            if(len > 0) {
                len = next[len - 1];
            }else {
                next[i] = 0;
                i++
            }
        }
    }
    return next;
}
```

----
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/implement-strstr
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。