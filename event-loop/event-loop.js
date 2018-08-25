(function() {
	console.log('ADD SCRIPT TO TASK QUEUE')
	console.log('STACK IS EMPTY, ADD SCRIPT TO CALL STACK')
	console.log(`	start`)
	console.log('ADD FIRST setTimeout TO TASK QUEUE')
	setTimeout(() => {
		console.log('STACK IS EMPTY, ADD FIRST setTimeout TO CALL STACK')
		console.log(`	first setTimeout`)
		console.log('ADD Promise TO TASK QUEUE')
		Promise.resolve()
			.then(() => {
				console.log('TASK IS FINISHED, ADD FIRST MICROTASK TO CALL STACK')
				console.log(`	then 1`)
			})
			.then(() => {
				console.log('FIRST MICROTASK IS FINISHED, ADD SECOND MICROTASK TO CALL STACK')
				console.log(`	then 2`)
			})
		console.log('ADD SECOND setTimeout TO TASK QUEUE')	
		setTimeout(() => {
			console.log('STACK IS EMPTY, ADD SECOND setTimeout TO CALL STACK')	
			console.log(`	second setTimeout`)
		}, 0)
	}, 0)
	console.log(`	finish`)
})()