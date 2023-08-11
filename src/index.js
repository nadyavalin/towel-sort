"use strict"
module.exports = function towelSort(matrix) {
  // проверяем, является ли matrix undefined, null, false, пустой строкой или имеет длину 0
  // если да, то возвращаем пустой массив, потому что нет элементов для сортировки
  if (!matrix || matrix.length === 0) {
    return [];
  }

  // если matrix не является пустым массивом, используем метод reduce, чтобы пройти по каждой строке матрицы
  return matrix.reduce((result, row, index) => {
    if (index % 2 === 0) { // проверяем четность index
       // если index четный, объединяем элементы row с result с помощью метода concat
      return result.concat(row);
    } else {
      // если index нечетный, переворачиваем элементы row с помощью метода reverse, объединяем их с result
      return result.concat(row.reverse()); 
    }
  }, []);
}

  
  