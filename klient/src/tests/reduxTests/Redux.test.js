import PaymentReducer from '../../redux/reducers/paymentReducer'
import IngredientsReducer from '../../redux/reducers/ingredientsReducer'
import PizzasReducer from '../../redux/reducers/pizzasReducer'
import SaucesReducer from '../../redux/reducers/saucesReducer'
import PizzaReducer from '../../redux/reducers/pizzaOrderedReducer'

import { testPizzas } from '../testSets/testPizzas'
import { testIngredient } from '../testSets/testIngredients'
import { testSauces } from '../testSets/testSauces'
import { expectedSauces } from '../testSets/expectedSauces'
import { testPizza } from '../testSets/testPizza'

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
      IngredientsReducer([{"id":"a7802174-0f21-459a-b096-0796f9f88a39","name":"sos","price":1},{"id":"1666602d-1b9b-4f9c-9488-9650141efca7","name":"ser","price":2},{"id":"b0cb5473-ddc9-4efe-965b-db0eab63f516","name":"pieczarki","price":2},{"id":"78e79168-59a0-4842-bb58-d16a0ac74b14","name":"szynka","price":3},{"id":"9af30bd1-e907-4cf4-ab48-0113fac67e02","name":"salami","price":3},{"id":"ce65ca77-297e-43d4-a953-6e57cab5f095","name":"ananas","price":2},{"id":"6a922895-48e4-44c1-816d-abc6bd4fa92b","name":"papryka","price":2},{"id":"b8537eca-f30f-47db-b963-85f36f53fcbc","name":"cebula","price":2},{"id":"615cf920-1441-4e8b-93dc-0a6874895431","name":"pomidor","price":2}], {
        type: 'ADD_INGREDIENTS',
        data: [],
      })
    ).toEqual([]);

    expect(
      IngredientsReducer([], {
        type: 'ADD_INGREDIENTS',
        data: testIngredient,
      })
    ).toEqual([{"id":"a7802174-0f21-459a-b096-0796f9f88a39","name":"sos","price":1},{"id":"1666602d-1b9b-4f9c-9488-9650141efca7","name":"ser","price":2},{"id":"b0cb5473-ddc9-4efe-965b-db0eab63f516","name":"pieczarki","price":2},{"id":"78e79168-59a0-4842-bb58-d16a0ac74b14","name":"szynka","price":3},{"id":"9af30bd1-e907-4cf4-ab48-0113fac67e02","name":"salami","price":3},{"id":"ce65ca77-297e-43d4-a953-6e57cab5f095","name":"ananas","price":2},{"id":"6a922895-48e4-44c1-816d-abc6bd4fa92b","name":"papryka","price":2},{"id":"b8537eca-f30f-47db-b963-85f36f53fcbc","name":"cebula","price":2},{"id":"615cf920-1441-4e8b-93dc-0a6874895431","name":"pomidor","price":2}]);
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
    ).toEqual([{"id":"a7802174-0f21-459a-b096-0796f9f88a39","name":"sos","price":1},{"id":"1666602d-1b9b-4f9c-9488-9650141efca7","name":"ser","price":2},{"id":"b0cb5473-ddc9-4efe-965b-db0eab63f516","name":"pieczarki","price":2},{"id":"78e79168-59a0-4842-bb58-d16a0ac74b14","name":"szynka","price":3},{"id":"9af30bd1-e907-4cf4-ab48-0113fac67e02","name":"salami","price":3},{"id":"ce65ca77-297e-43d4-a953-6e57cab5f095","name":"ananas","price":2},{"id":"6a922895-48e4-44c1-816d-abc6bd4fa92b","name":"papryka","price":2},{"id":"b8537eca-f30f-47db-b963-85f36f53fcbc","name":"cebula","price":2},{"id":"615cf920-1441-4e8b-93dc-0a6874895431","name":"pomidor","price":2}]);
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
      PizzasReducer(testPizzas, {
        type: 'ADD_PIZZA',
        data: [],
      })
    ).toEqual([]);

    expect(
      PizzasReducer([], {
        type: 'ADD_PIZZA',
        data: testPizzas,
      })
    ).toEqual([{"id":"4ae09684-b909-4e09-abc6-2d4184d6bbdd","name":"MARGHERITA","price":15,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7"]},{"id":"61befbaa-5134-4810-8095-219406644f30","name":"FUNGHI","price":16,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516"]},{"id":"d5741b9b-a2ac-4389-9ce3-dd72bb52b9a0","name":"VESUVIO","price":17,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","78e79168-59a0-4842-bb58-d16a0ac74b14"]},{"id":"2ec93441-fd6a-46d3-88de-aef810790ecd","name":"SALAMI","price":17,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02"]},{"id":"50d337bc-3928-4e4c-8216-15693917830a","name":"CAPRICCIOSA","price":20,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516","78e79168-59a0-4842-bb58-d16a0ac74b14"]},{"id":"69e8485d-0759-4058-b1c5-7661a6ad3d9c","name":"HAWAJSKA","price":20,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","78e79168-59a0-4842-bb58-d16a0ac74b14","ce65ca77-297e-43d4-a953-6e57cab5f095"]},{"id":"5360884a-0fb2-4601-8a98-7bb1a1f9d525","name":"VERONA","price":21,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02","ce65ca77-297e-43d4-a953-6e57cab5f095"]},{"id":"cc3110be-b9b4-440b-bec6-4b97200f13ab","name":"ROMA","price":22,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02","b8537eca-f30f-47db-b963-85f36f53fcbc","615cf920-1441-4e8b-93dc-0a6874895431"]},{"id":"c8fa30d3-fa84-4ff6-bacf-23a47fe992d9","name":"COLOSSEUM","price":22,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516","78e79168-59a0-4842-bb58-d16a0ac74b14","6a922895-48e4-44c1-816d-abc6bd4fa92b","b8537eca-f30f-47db-b963-85f36f53fcbc"]}]);
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
    ).toEqual([{"id":"4ae09684-b909-4e09-abc6-2d4184d6bbdd","name":"MARGHERITA","price":15,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7"]},{"id":"61befbaa-5134-4810-8095-219406644f30","name":"FUNGHI","price":16,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516"]},{"id":"d5741b9b-a2ac-4389-9ce3-dd72bb52b9a0","name":"VESUVIO","price":17,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","78e79168-59a0-4842-bb58-d16a0ac74b14"]},{"id":"2ec93441-fd6a-46d3-88de-aef810790ecd","name":"SALAMI","price":17,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02"]},{"id":"50d337bc-3928-4e4c-8216-15693917830a","name":"CAPRICCIOSA","price":20,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516","78e79168-59a0-4842-bb58-d16a0ac74b14"]},{"id":"69e8485d-0759-4058-b1c5-7661a6ad3d9c","name":"HAWAJSKA","price":20,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","78e79168-59a0-4842-bb58-d16a0ac74b14","ce65ca77-297e-43d4-a953-6e57cab5f095"]},{"id":"5360884a-0fb2-4601-8a98-7bb1a1f9d525","name":"VERONA","price":21,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02","ce65ca77-297e-43d4-a953-6e57cab5f095"]},{"id":"cc3110be-b9b4-440b-bec6-4b97200f13ab","name":"ROMA","price":22,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02","b8537eca-f30f-47db-b963-85f36f53fcbc","615cf920-1441-4e8b-93dc-0a6874895431"]},{"id":"c8fa30d3-fa84-4ff6-bacf-23a47fe992d9","name":"COLOSSEUM","price":22,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516","78e79168-59a0-4842-bb58-d16a0ac74b14","6a922895-48e4-44c1-816d-abc6bd4fa92b","b8537eca-f30f-47db-b963-85f36f53fcbc"]}]);
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
      SaucesReducer(testSauces, {
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
    ).toEqual([
      {
          id: '8b6300ce-5326-4689-9759-3ea5ee0506c9',
          name: 'czosnkowy',
          price: 2,
          count: 0
      },
      {
          id: '12353637-8f29-464e-9748-8708d8892ce5',
          name: 'ostry',
          price: 2.5,
          count: 0
      },
      {
          id: '241813bc-1de4-47ef-9dbc-3f243b90b9ca',
          name: '1000 wysp',
          price: 2.5,
          count: 0
      }
  ]);
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
    ).toEqual([{"id":"4ae09684-b909-4e09-abc6-2d4184d6bbdd","name":"MARGHERITA","price":15,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7"]},{"id":"61befbaa-5134-4810-8095-219406644f30","name":"FUNGHI","price":16,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516"]},{"id":"d5741b9b-a2ac-4389-9ce3-dd72bb52b9a0","name":"VESUVIO","price":17,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","78e79168-59a0-4842-bb58-d16a0ac74b14"]},{"id":"2ec93441-fd6a-46d3-88de-aef810790ecd","name":"SALAMI","price":17,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02"]},{"id":"50d337bc-3928-4e4c-8216-15693917830a","name":"CAPRICCIOSA","price":20,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516","78e79168-59a0-4842-bb58-d16a0ac74b14"]},{"id":"69e8485d-0759-4058-b1c5-7661a6ad3d9c","name":"HAWAJSKA","price":20,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","78e79168-59a0-4842-bb58-d16a0ac74b14","ce65ca77-297e-43d4-a953-6e57cab5f095"]},{"id":"5360884a-0fb2-4601-8a98-7bb1a1f9d525","name":"VERONA","price":21,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02","ce65ca77-297e-43d4-a953-6e57cab5f095"]},{"id":"cc3110be-b9b4-440b-bec6-4b97200f13ab","name":"ROMA","price":22,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02","b8537eca-f30f-47db-b963-85f36f53fcbc","615cf920-1441-4e8b-93dc-0a6874895431"]},{"id":"c8fa30d3-fa84-4ff6-bacf-23a47fe992d9","name":"COLOSSEUM","price":22,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516","78e79168-59a0-4842-bb58-d16a0ac74b14","6a922895-48e4-44c1-816d-abc6bd4fa92b","b8537eca-f30f-47db-b963-85f36f53fcbc"]},
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
    ]);
  });

  it('should ignore other cases', () => {

    const testPizzas = [{"id":"4ae09684-b909-4e09-abc6-2d4184d6bbdd","name":"MARGHERITA","price":15,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7"]},{"id":"61befbaa-5134-4810-8095-219406644f30","name":"FUNGHI","price":16,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516"]},{"id":"d5741b9b-a2ac-4389-9ce3-dd72bb52b9a0","name":"VESUVIO","price":17,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","78e79168-59a0-4842-bb58-d16a0ac74b14"]},{"id":"2ec93441-fd6a-46d3-88de-aef810790ecd","name":"SALAMI","price":17,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02"]},{"id":"50d337bc-3928-4e4c-8216-15693917830a","name":"CAPRICCIOSA","price":20,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516","78e79168-59a0-4842-bb58-d16a0ac74b14"]},{"id":"69e8485d-0759-4058-b1c5-7661a6ad3d9c","name":"HAWAJSKA","price":20,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","78e79168-59a0-4842-bb58-d16a0ac74b14","ce65ca77-297e-43d4-a953-6e57cab5f095"]},{"id":"5360884a-0fb2-4601-8a98-7bb1a1f9d525","name":"VERONA","price":21,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02","ce65ca77-297e-43d4-a953-6e57cab5f095"]},{"id":"cc3110be-b9b4-440b-bec6-4b97200f13ab","name":"ROMA","price":22,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02","b8537eca-f30f-47db-b963-85f36f53fcbc","615cf920-1441-4e8b-93dc-0a6874895431"]},{"id":"c8fa30d3-fa84-4ff6-bacf-23a47fe992d9","name":"COLOSSEUM","price":22,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516","78e79168-59a0-4842-bb58-d16a0ac74b14","6a922895-48e4-44c1-816d-abc6bd4fa92b","b8537eca-f30f-47db-b963-85f36f53fcbc"]}]
    expect(
      PizzasReducer([], {
        type: 'TEST_TEST',
      })
    ).toEqual([]);

    expect(
      PizzasReducer(testPizzas, {
        type: 'TEST_TEST_TEST',
      })
    ).toEqual([{"id":"4ae09684-b909-4e09-abc6-2d4184d6bbdd","name":"MARGHERITA","price":15,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7"]},{"id":"61befbaa-5134-4810-8095-219406644f30","name":"FUNGHI","price":16,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516"]},{"id":"d5741b9b-a2ac-4389-9ce3-dd72bb52b9a0","name":"VESUVIO","price":17,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","78e79168-59a0-4842-bb58-d16a0ac74b14"]},{"id":"2ec93441-fd6a-46d3-88de-aef810790ecd","name":"SALAMI","price":17,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02"]},{"id":"50d337bc-3928-4e4c-8216-15693917830a","name":"CAPRICCIOSA","price":20,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516","78e79168-59a0-4842-bb58-d16a0ac74b14"]},{"id":"69e8485d-0759-4058-b1c5-7661a6ad3d9c","name":"HAWAJSKA","price":20,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","78e79168-59a0-4842-bb58-d16a0ac74b14","ce65ca77-297e-43d4-a953-6e57cab5f095"]},{"id":"5360884a-0fb2-4601-8a98-7bb1a1f9d525","name":"VERONA","price":21,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02","ce65ca77-297e-43d4-a953-6e57cab5f095"]},{"id":"cc3110be-b9b4-440b-bec6-4b97200f13ab","name":"ROMA","price":22,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","9af30bd1-e907-4cf4-ab48-0113fac67e02","b8537eca-f30f-47db-b963-85f36f53fcbc","615cf920-1441-4e8b-93dc-0a6874895431"]},{"id":"c8fa30d3-fa84-4ff6-bacf-23a47fe992d9","name":"COLOSSEUM","price":22,"ingredients":["a7802174-0f21-459a-b096-0796f9f88a39","1666602d-1b9b-4f9c-9488-9650141efca7","b0cb5473-ddc9-4efe-965b-db0eab63f516","78e79168-59a0-4842-bb58-d16a0ac74b14","6a922895-48e4-44c1-816d-abc6bd4fa92b","b8537eca-f30f-47db-b963-85f36f53fcbc"]}]);
  });
})