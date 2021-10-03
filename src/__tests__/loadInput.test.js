const load = require('../loadInput.js')

test('Deve carregar o arquivo de entrada', async () => {
    const expectedResp = {
        upperR: { x: '5', y: '5'}
    }
    const resFile = await load.loadInput('./input.txt')
    expect(resFile).toHaveProperty('input')
    expect(resFile).toMatchObject(expect.objectContaining(expectedResp))   
})

test('Deve falhar ao não encontrar o arquivo de entrada', async () => {
    const resFile = await load.loadInput('./input2.txt')
    expect(resFile).toBe('ENOENT')
})
