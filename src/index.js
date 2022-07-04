module.exports = function reverse (n) {
  let str=Math.abs(n).toString();
  let i=0;
  let res='';
  while (i<=str.length-1) {
    res=str[i]+res;
    i=i+1;
  }
  return (res);
}
