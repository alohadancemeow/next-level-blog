---
title: "GCD and Euclidean Algorithm"
date: "2017-05-28T22:40:32.169Z"
tags: ["number theory", "math"]
description: "This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter."
---

Suppose we have two integers $a$ and $b$. We say that the number $d$ is the greatest common divisor of $a$ and $b$ if and only if, $d \mid a$ and $d \mid b$ and if $c \mid a$ and $c \mid b$, then $c \leq d$. Condition $1$ says that $d$ is a common divisor of $a$ and $b$, and condition $2$ says that it is the greatest such divisor.

Note that if $a$ and $b$ are not both zero, then the set of common divisors of $a$ and $b$ is a set of integers that is bounded above by the largest of $a$, $b$, $-a$, and $-b$. Hence, from the well ordering principle for the integers, the set has a largest element, so the greatest common divisor of $a$ and $b$ exists and is unique. Note that $gcd(0,0)$ is not defined, and when $gcd(a,b)$ is defined, then it is positive. In fact, $gcd(a, b) \geq 1$ because $1 \mid a$ and $1 \mid b$ for all $a$ and $b$.

### Properties of GCD

- $gcd(a, 0) = |a|$
- $gcd(a, b) = gcd(b, a)$
- $gcd(a, gcd(b, c)) = gcd(gcd(a, b), c)$
- $gcd(a + mb, b) = gcd(a, b)$
- $gcd(ca, cb) = c * gcd(a, b)$
- $gcd(a, b) = gcd(a - b, b)$
- $gcd(a, b) = gcd(b, a \mod b)$
- If $m \mid a$ and $m \mid b$ then $gcd(a/m, b/m) = gcd(a, b)/m$
- If $gcd(a, b) = d$, then $gcd(a/d, b/d) = 1$
- Every common divisor of $a$ and $b$ is also a divisor of $gcd(a, b)$
- If $gcd(a, b) = d$, then there exists integers $x, y$ such that $ax + by = d$

### Mathematical Proofs

> If a and b are not both 0, and let $d = gcd(a, b)$. Then $d$ is the smallest positive integer that can be expressed as a linear combination of $a$ and $b$, $d = sa+tb$.

The set of all linear combinations of $a$ and $b$ contains a smallest integer $m$ such that, $m = sa+tb$. On the right hand side of the equation we see that $d \mid sa$ abd $d \mid tb$. Hence, in the left hand side, $d \mid m$. The smallest integer that $d$ can divide is $d$. So, $m = d$. So, $d$ is the smallest positive integer that can be expressed as a linear combination of $a$ and $b$. It is known as Bézout's identity.

> If $c$ is any common divisor of $a$ and $b$, then $c$ divides $gcd(a, b)$.

Let $d = gcd(a, b)$. Now we can express $d$ as a linear combination, $d = sa + tb$. Since, the right hand side is divisible by $c$ ($c \mid a$ and $c \mid b$), in the left hand side $c$ must divide $d$.

> $gcd(ca, cb)$ is the same as $c\times gcd(a, b)$

Let $d = gcd(a, b)$. So we can say, $d \mid a$ and $d \mid b$, which implies $d \mid ca$ and $d \mid cb$. Hence $dc \mid ca$ and $dc \mid cb$. As $d$ is the greatest common divisor of $a, b$, we can say that $dc$ is the greatest common divisor of $ca, cb$. So, $gcd(ca, cb) = dc = c \times gcd(a, b)$

> If $m \mid a$ and $m \mid b$ then $gcd(a/m, b/m) = gcd(a, b)/m$

Let $d = gcd(a, b)$, since $m \mid a$ and $m \mid b$, so $m$ is common divisor of $a$ and $b$ and $m \leq d$. We have to prove that $gcd(a / m, b / m) = d / m$. From $d = sa + tb$, it follows that $m \mid d$. We know that $gcd(ca, cb)$ is the same as $c\times gcd(a, b)$. Hence, $gcd(a/m, b/m) = \frac{1}{m} \times gcd(a, b)$

> If $d = gcd(a, b)$ then $gcd(a / d, b / d) = 1$

Let us assume that, $gcd(a / d, b / d) = 1$. We know that $gcd(ca, cb)$ is the same as $c\times gcd(a, b)$. Hence, $gcd(a, b) = d * gcd( a / d, b / d )$. In order to satisfy the equation $gcd(a / d, b / d)$ must be equal to $1$.

> $gcd(a, b)$ is equal $gcd(b, a \mod b)$

Let $d = gcd(a, b)$. We know that since $d \mid a$ and $d \mid b$, it follows from $b = qa + r$ that $d \mid r$. Thus $d$ is a common divisor of $a$ and $r$. Now we need to make sure that $d$ is the greatest of all common divisors of $a$ and $r$. Let $c$ be a common divisor of $a$ and $r$. From $b = qa + r$, if $c \mid a$ and $c \mid r$, then also $c \mid b$. Now $c \leq d$, because $d$ is the largest of all common divisors. So we can conclude that $gcd(a, b)$ = $gcd(b, a \mod b) = gcd(b, r)$ where $r = a \mod b$.

### Prime Factorization to Compute GCD

If we have two integers $a, b$ and we can find $gcd(a, b)$ from the prime factorization of $a, b$. Suppose $a = 2^{a_1} \times 3^{a_2} \times 5^{a_3}...$ and $b = 2^{b_1} \times 3^{b_2} \times 5^{b_3}...$, then we can write $a \times b = 2^{a_1 + b_1} \times3^{a_2+b_2} \times5^{a_3 + b_3}...$. Now, if we take the $min(a_i, b_i)$ for each $p_i$ we get the common portion for that $p_i$. In this way, we can keep multiplying the common portions to get $gcd(a, b)$. Thus mathematically if $ab = p_1^{a_1 + b_1} \times p_2^{a_2 + b_2} \times p_3^{a_3 + b_3} \times \dots \times p_n^{a_n + b_n}$ then, $$gcd(a, b) = \prod p_i^{min(a_i , b_i)}$$

### Euclidean Algorithm to Compute GCD

One of the ways to compute the GCD of two integers is to list down the divisors of $a$ and $b$ and pick the largest one. But this naive method takes a lot of time. Another way is the Euclidean Algorithm. This is much more efficient and the time complexity of this algorithm is roughly $O(log_2n)$. This algorithm is based on the fact that when $a = bq + r$, then we can say that $gcd(a, b) = gcd(b, r)$. We know from the division algorithm, $a = bq + r$, where $r$ is the remainder when $a$ is divided by $b$. So, $r = a \mod b$.

The division algorithm is nothing but a proof that the long divisions that we used to do in schools was right. Let’s take a look at the proof, Let $d = gcd(a, b)$. From the division algorithm we know that $a = bq + r$. We know, $d \mid a$ and $d \mid b$, which implies that $d \mid r$. Again let $c$ is any common divisor of $b$ and $r$, then we know $c \mid b$ and $c \mid r$ which implies $c \mid a$. Both parts of the definition of GCD are satisfied and hence Thus $gcd(a, b) = gcd(b, r)$ where $r = a \mod b$. Let's now implement the algorithm. As we have seen, $gcd(a, b) = gcd(b, a \mod b)$ which is a recurrence relation and this relation can be used to calculate GCD of two integers recursively. When we reach $b = 0$, we can say that $gcd(a, 0) = a$.

```cpp
int gcd( int a, int b ) {
    if ( b == 0 ) return a;
    return gcd( b, a % b );
}
```

We can also implement the euclidean algorithm without recursive calls, which may reduce the recursion overhead. Thus making it a bit faster than the recursive one.

```cpp
int gcd( int a, int b ) {
    while( b != 0 ) {
        int new_a = b;
        b = a % b;
        a = new_a;
    }
    return a;
}
```

```js
console.log("heloo");
```

### Related problems

[UVa 11417 - GCD](https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem=2412) <br>
[SPOJ GCD - Greatest Common Divisor](https://www.spoj.com/problems/GCD/) <br>
[CF 664A - Complicated GCD](https://codeforces.com/problemset/problem/664/A) <br>

### References

[Wikipedia - Greatest Common Divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) <br>
[Khan Academy - Euclidean Algorithm](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm)
