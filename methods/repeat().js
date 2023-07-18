/*
В JavaScript метод `repeat()` применяется к строке и позволяет создать новую строку, которая содержит исходную строку, повторенную заданное количество раз.

Синтаксис метода `repeat()` выглядит следующим образом:

```javascript
str.repeat(count)
```

- `str`: Исходная строка, которую нужно повторить.
- `count`: Число, определяющее сколько раз нужно повторить исходную строку. Должно быть неотрицательным целым числом.

Вот пример использования метода `repeat()`:

```javascript
const str = "Hello ";
const repeatedStr = str.repeat(3);
console.log(repeatedStr);  // Вывод: "Hello Hello Hello "
```

В этом примере строка `"Hello "` повторяется три раза с помощью метода `repeat(3)`, и результат сохраняется в переменную `repeatedStr`.
Затем выводится повторенная строка `"Hello Hello Hello "`.

Обратите внимание, что метод `repeat()` не изменяет исходную строку, а возвращает новую строку, состоящую из повторений исходной строки.
*/
