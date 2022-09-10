/*
 * @Author: TQA 1101389964@qq.com
 * @Date: 2022-09-04 19:46:07
 * @LastEditors: TQA 1101389964@qq.com
 * @LastEditTime: 2022-09-04 20:21:45
 * @FilePath: \Notes\算法\笔试.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 滴滴
// 1
const n = 5, k = 2;
const nums = [3,10,5,4,2];
const dp = new Array(n);

dp[0] = {
  average: nums[0],
  len: 1,
  maxValue: nums[0],
};

for (let i = 1; i < n; i++) {
  const average = (dp[i - 1].average * dp[i - 1].len + nums[i]) / (dp[i - 1].len + 1);
  const max = dp[i - 1].maxValue > nums[i] ? dp[i - 1].maxValue : nums[i]; 
  if (max <= k * average) {
    dp[i] = {
      average: average,
      len: dp[i - 1].len + 1,
      maxValue: max,
    }
  }else {
    dp[i] = {...dp[i - 1]};
  }
}

console.log(dp);