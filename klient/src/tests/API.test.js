import '@testing-library/jest-dom'
import { testPizzas } from '../tests/testSets/testPizzas'
import { testSauces } from '../tests/testSets/testSauces'
import { expectedSauces } from '../tests/testSets/expectedSauces'

describe('API tests', () => {

    const API = "http://192.168.1.11:3333/api"

    const fetchData = path => fetch(`${API}/${path}`)

    const orderExampleWrong = {
        sauce: testSauces,
        total: 20,
        pizza: testPizzas
    }

    const orderExampleCorrect = {
        sauce: expectedSauces,
        total: 20,
        pizza: testPizzas
    }

    const requestOptionsWrong = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderExampleWrong)
    };

    const requestOptionsCorrect = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderExampleCorrect)
    };

    const postOrder = requestOptions => fetch(`${API}/order`, requestOptions)

    it('Posting wrong order', () => {
        return postOrder(requestOptionsWrong).then(response => response.json()).then(data => {
            expect(data.statusCode).toEqual(400);
            expect(data.error).toEqual('Bad Request');
        });
    })

    it('Posting correct order', () => {
        return postOrder(requestOptionsCorrect).then(response => response.json()).then(data => {
            expect(data.message).toEqual('Order accepted!');
        });
    })

    it('Fetching pizza', () => {
        return fetchData('pizza').then((response) => response.json()).then(data => {
            expect(data[0]).toHaveProperty('id');
            expect(typeof data[0].id).toBe('string');
            expect(data[0]).toHaveProperty('name');
            expect(typeof data[0].name).toBe('string');
            expect(data[0]).toHaveProperty('price');
            expect(typeof data[0].price).toBe('number');
            expect(data[0]).toHaveProperty('ingredients');
            expect(Array.isArray(data[0].ingredients)).toBe(true);
            expect(data[0].ingredients.length).toBeTruthy();
            expect(typeof data[0].ingredients[0]).toBe('string');
        });
    });

    it('Fetching sauces', () => {
        return fetchData('sauce').then((response) => response.json()).then(data => {
            expect(data[0]).toHaveProperty('id');
            expect(typeof data[0].id).toBe('string');
            expect(data[0]).toHaveProperty('name');
            expect(typeof data[0].name).toBe('string');
            expect(data[0]).toHaveProperty('price');
            expect(typeof data[0].price).toBe('number');
        });

    });
    it('Fetching ingredients', () => {
        return fetchData('ingredient').then((response) => response.json()).then(data => {
            expect(data[0]).toHaveProperty('id');
            expect(typeof data[0].id).toBe('string');
            expect(data[0]).toHaveProperty('name');
            expect(typeof data[0].name).toBe('string');
            expect(data[0]).toHaveProperty('price');
            expect(typeof data[0].price).toBe('number');
        });
    });
})