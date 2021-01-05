import { combineReducers } from 'redux'
import {
   reducer, Countryreducer, Statereducer, Loginreducer, changePasswordReducer,
   createBlogReducer, getAllBlogReducer, getBlogByIdReducer, deleteBlogReducer,
   ForgetPasswordReducer, newPasswordReducer, contactusReducer, activePostReducer
} from './Reducer'

const rootreducer = combineReducers({
   registration: reducer,
   country: Countryreducer,
   state: Statereducer,
   login: Loginreducer,
   changePassword: changePasswordReducer,
   createBlog: createBlogReducer,
   getAllBlog: getAllBlogReducer,
   getBlogById: getBlogByIdReducer,
   deletBLog: deleteBlogReducer,
   forgrtPassword: ForgetPasswordReducer,
   newPassword: newPasswordReducer,
   contactus: contactusReducer,
   activePost: activePostReducer,
})

export default rootreducer