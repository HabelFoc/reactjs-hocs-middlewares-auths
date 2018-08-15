export default function({ dispatch }){
	return next => action => {

		// check if payload contain promises
		// if not, just go to the next middleware
		if(!action.payload || !action.payload.then){
			return next(action);
		}

		// wait until the promises resolved,
		// then dispatch a new action, then we will flow from the top again
		action
		.payload
		.then(response => {
			// dispatch a new action, with new payload data
			// while preserve the action type
			dispatch({ ...action, payload: response })
		})
		.catch(err => console.log('Promise Catch Error:',err))

	}
}