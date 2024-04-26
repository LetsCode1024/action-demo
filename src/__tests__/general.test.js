it('should greet with hello world', async () => {
	const result = await fetch('http://127.0.0.1:3000');
	const data = await result.text(); 
	expect(data).toBe('Hello World!');
});
