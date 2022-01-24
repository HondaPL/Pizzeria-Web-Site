import PaymentReducer from '../redux/reducers/paymentReducer'
import IngredientsReducer from '../redux/reducers/ingredientsReducer'
import PizzasReducer from '../redux/reducers/pizzasReducer'
import SaucesReducer from '../redux/reducers/saucesReducer'
import PizzaReducer from '../redux/reducers/pizzaOrderedReducer'

import { testPizzas } from './testSets/testPizzas'
import { testIngredient } from './testSets/testIngredients'
import { testSauces } from './testSets/testSauces'
import { expectedSauces } from './testSets/expectedSauces'
import { testPizza } from './testSets/testPizza'


describe('Payment Reducer Actions', () => {
  it('should return 0 as initial state', () => {
    expect(PaymentReducer(undefined, {})).toEqual(0);
  });
  it('should handle ADD_TO_ORDER', () => {
    expect(
      PaymentReducer(0, {
        type: 'ADD_TO_ORDER',
        data: 2,
      })
    ).toEqual(2);

    expect(
      PaymentReducer(5, {
        type: 'ADD_TO_ORDER',
        data: 10,
      })
    ).toEqual(15);
  });

  it('should handle REMOVE_FROM_ORDER', () => {
    expect(
      PaymentReducer(10, {
        type: 'REMOVE_FROM_ORDER',
        data: 3,
      })
    ).toEqual(7);

    expect(
      PaymentReducer(5, {
        type: 'REMOVE_FROM_ORDER',
        data: 2,
      })
    ).toEqual(3);
  });

  it('should handle PAY_FOR_ORDER', () => {
    expect(
      PaymentReducer(10, {
        type: 'PAY_FOR_ORDER',
        data: 0,
      })
    ).toEqual(0);

    expect(
      PaymentReducer(0, {
        type: 'PAY_FOR_ORDER',
        data: 0,
      })
    ).toEqual(0);
  });

  it('should ignore other cases', () => {
    expect(
      PaymentReducer(10, {
        type: 'TEST_TEST',
      })
    ).toEqual(10);

    expect(
      PaymentReducer(0, {
        type: 'TEST_TEST_TEST',
      })
    ).toEqual(0);
  });
})

describe('Ingredients Reducer Actions', () => {
  it('should return [] as initial state', () => {
    expect(IngredientsReducer(undefined, {})).toEqual([]);
  });
  it('should handle ADD_INGREDIENTS', () => {

    expect(
      IngredientsReducer([], {
        type: 'ADD_INGREDIENTS',
        data: [],
      })
    ).toEqual([]);

    expect(
      IngredientsReducer([], {
        type: 'ADD_INGREDIENTS',
        data: testIngredient,
      })
    ).toEqual(testIngredient);
  });
  it('should ignore other cases', () => {
    expect(
      IngredientsReducer([], {
        type: 'TEST_TEST',
      })
    ).toEqual([]);

    expect(
      IngredientsReducer(testIngredient, {
        type: 'TEST_TEST_TEST',
      })
    ).toEqual(testIngredient);
  });
})

describe('Pizzas Reducer Actions', () => {


  it('should return [] as initial state', () => {
    expect(PizzasReducer(undefined, {})).toEqual([]);
  });
  it('should handle ADD_PIZZA', () => {
    expect(
      PizzasReducer([], {
        type: 'ADD_PIZZA',
        data: [],
      })
    ).toEqual([]);

    expect(
      PizzasReducer([], {
        type: 'ADD_PIZZA',
        data: testPizzas,
      })
    ).toEqual(testPizzas);
  });
  it('should ignore other cases', () => {
    expect(
      PizzasReducer([], {
        type: 'TEST_TEST',
      })
    ).toEqual([]);

    expect(
      PizzasReducer(testPizzas, {
        type: 'TEST_TEST_TEST',
      })
    ).toEqual(testPizzas);
  });
})

describe('Sauces Reducer Actions', () => {


  it('should return [] as initial state', () => {
    expect(SaucesReducer(undefined, {})).toEqual([]);
  });
  it('should handle ADD_SAUCES', () => {
    expect(
      SaucesReducer([], {
        type: 'ADD_SAUCES',
        data: [],
      })
    ).toEqual([]);

    expect(
      SaucesReducer([], {
        type: 'ADD_SAUCES',
        data: testSauces,
      })
    ).toEqual(expectedSauces);
  });
  it('should ignore other cases', () => {
    expect(
      SaucesReducer([], {
        type: 'TEST_TEST',
      })
    ).toEqual([]);

    expect(
      SaucesReducer(testSauces, {
        type: 'TEST_TEST_TEST',
      })
    ).toEqual(testSauces);
  });
})

describe('Order Pizza Reducer Actions', () => {


  it('should return [] as initial state', () => {
    expect(PizzaReducer(undefined, {})).toEqual([]);
  });
  it('should handle ORDER_PIZZA', () => {

    expect(
      PizzaReducer([], {
        type: 'ORDER_PIZZA',
        data: testPizza,
      })
    ).toEqual([].concat(testPizza));

    expect(
      PizzaReducer(testPizzas, {
        type: 'ORDER_PIZZA',
        data: testPizza,
      })
    ).toEqual([
      {
        id: 'f2a0806c-31a6-472d-b1a7-89d9bb558c4a',
        name: 'MARGHERITA',
        price: 15,
        ingredients: [
          '48450c6a-a2d4-4ab1-ae76-d9f950b1ba64',
          '0c1ea753-2034-4555-a083-80a27ff97ade'
        ]
      },
      {
        id: '600e53b6-6f58-42e5-8725-64075c1a0b6e',
        name: 'FUNGHI',
        price: 16,
        ingredients: [
          '48450c6a-a2d4-4ab1-ae76-d9f950b1ba64',
          '0c1ea753-2034-4555-a083-80a27ff97ade',
          '152f926f-2822-4a75-b392-9b7082a2ab13'
        ]
      }
    ].concat(testPizza));
  });

  it('should ignore other cases', () => {
    expect(
      PizzasReducer([], {
        type: 'TEST_TEST',
      })
    ).toEqual([]);

    expect(
      PizzasReducer(testPizzas, {
        type: 'TEST_TEST_TEST',
      })
    ).toEqual(testPizzas);
  });
})