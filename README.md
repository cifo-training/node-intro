# Introducción a NodeJS

## Requisitos y entrega

Clona la rama del repositorio `github.com/bcncodes-training/intro-node.git` que lleva tu nombre. Una vez completado el ejercicio actualiza la rama con tu solución.

    - Practicarás con objetos y clases.

- Upon completion, run the following commands

```
git add .
git commit -m "done"
git push origin master
```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Testing

Este ejercicio se ha de completar mediante tests. Durante todo el itinerario de Mean-stack hemos ido utilizado el _testing_ para realizar algunos ejercicios. Para los que no hayan tenido oportunidad de practicar con ellos, se acompaña una breve introducción al testing.

### Qué es el testing

El testing es un proceso por el cual se ejecuta una aplicación para validar y verificar que se cumplen todos los requisitos técnicos, de negocio y de funcionamiento de un software.

El testing es un proceso, no una única actividad. Por tanto, el diseño de tests durante las fases iniciales del desarrollo de un producto puede ayudar a prevenir deficiencias en el código o en el propio diseño del producto.

En este ejercicio, se han creaado todos los test necesarios para obtener la solución, y se han de ejecutar todos ellos para construir el código que cumpla con los requisitos.

Los tests probarán que el código funciona en cualquier situación en las que se prevé que lo haga. También nos servirá para el diseño o la implementación de nuevas funcionalidades, de manera que los cambios que se hagan al código no rompan lo que ya está funcionando.

### Testing con Mocha

![](https://imgur.com/h07x7bq.png)

[Mocha](https://mochajs.org/) es un framework de JavaScript para pruebas que corre en Node.js y en el navegador, facilitando el testing de funciones asíncronas.

### Utilización

Para comenzar a utilizar mocha, se ha de instalar el package como **global package** en el sistema.

```
$ npm install -g mocha
```

Probamos que se ha instalado correctamente:

```
$ mocha --version
6.2.0
```

## Estructura del proyecto:


```
starter-code/
├── test
│   └── test.js
└─ package.json
└─ index.js
```
Trabajaremos con el fichero `index.js`. Escribiremos la implementación de nuestra clase `SortedList`.

La carpeta `test` contiene todos los tests que se ejecutarán con Mocha.

### Ejecución de los tests

Para correr los tests ejecutamos: `npm test`.

```
$ npm test

> introduccion-node@1.0.0 test C:\Users\rglep\Documents\Curso CIFO-La Violeta\Mean Stack 2019\MS-3\Ejercicios\1.introduccion-node\starter-code
> mocha



  SortedList
    Constructor
      1) should create an empty SortedList
    #add(x)
      2) should add a single value to SortedList
      3) should add a second value to SortedList, sorted
      4) should add a third value to SortedList, sorted
    #get(i)
      √ should return an OutOfBounds exception if there is no element in that position
      5) should return the element in that position
    #max()
      √ should return an EmptyList exception if there is no element in the list
      6) should return the max element in the list
    #min()
      √ should return an EmptyList exception if there is no element in the list
      7) should return the min element in the list
    #average()
      √ should return an EmptySortedList exception if there are no elements
      8) should return the average of elements in the array
    sum()
      √ should return a EmptySortedList exception if there are no elements in the list
      9) should add(sum) all elements of the array if there are elements in the list


  5 passing (9ms)
  9 failing

```
De momento sólo hay 5 tests pasados, pero el objetivo es pasarlos TODOS!!!

## SortedList Class

Hay que crear una clase que mantenga una lista ordenada de números, en orden ascendente.

La clase tendrá los siguientes métodos:

### Constructor

`new SortedList` debería crear un nuevo objeto de la clase `SortedList`. 

El objeto tendría las propiedades `items` y `length`. 

- `items` debe ser un array.
- `length` debe contener el número de elementos de ese array.

### Add

El método `add(x)` añade `x` al array `items` y lo ordena.

### Get

Este método obtiene el `n-esimo` valor de la lista.
En este caso necesitarás también la propiedad `length` que te proporciona el tamaño de la lista.

### Max

El método `max()` devuelve el valor más alto del array.

### Min
El método `min()` devuelve el menor valor de la lista.

### Average

El método `average()` devuelve el valor medio del array.

### Sum

El método `sum()` devuelve la suma de todos los valores.

