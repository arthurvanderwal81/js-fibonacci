function fibonacci(n)
{
    if (n == 0)
    {
        return 0;
    }
    else if (n == 1)
    {
        return 1;
    }

    let nmin1 = 1;
    let nmin2 = 0;

    for (i = 2; i < n; i++)
    {
        currentn = nmin1 + nmin2;
        nmin2 = nmin1;
        nmin1 = currentn;
    }

    return nmin1 + nmin2;
}

for (n = 0; n <= 12; n++)
{
    console.log("Fibonacci for n = " + n, fibonacci(n));
}