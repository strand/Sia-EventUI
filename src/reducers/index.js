import { combineReducers } from 'redux'
import tickets from './ticketReducers'
import auth from './authReducer'
import incidents from './incidentReducers'
import engagements from './engagementReducer'
import events from './eventReducer'
import expandSection from './expandSectionReducer'
import signalR from './signalRReducer'

const rootReducer = (authContext, clientId) => combineReducers({
    incidents,
    auth: auth(authContext, clientId),
    tickets,
    engagements,
    events,
    expandSection,
    signalR
})

export default rootReducer