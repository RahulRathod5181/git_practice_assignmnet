num = 23
var isprime = true;
for (i = 2; i < num; i++) {
  if (num % i == 0) {
    isprime = false;
  }
}
if (isprime == true) {
  console.log("Yes")
} else {
  console.log("No")
}