import {
    USER_REQUEST, USER_SUCCESS, USER_ERROR,
    COUNTRY_REQUEST, COUNTRY_SUCCESS, COUNTRY_ERROR,
    STATE_REQUEST, STATE_SUCCESS, STATE_ERROR,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR,
    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR,
    CREATE_BLOG_REQUEST, CREATE_BLOG_SUCCESS, CREATE_BLOG_ERROR,
    GET_ALL_BLOG_REQUEST, GET_ALL_BLOG_SUCCESS, GET_ALL_BLOG_ERROR,
    GET_BLOG_BY_ID_REQUEST, GET_BLOG_BY_ID_SUCCESS, GET_BLOG_BY_ID_ERROR,
    DELETE_BLOG_REQUEST, DELETE_BLOG_SUCCESS, DELETE_BLOG_ERROR,
    FORGET_REQUEST, FORGET_SUCCESS, FORGET_ERROR,
    NEW_PASSWORD_REQUEST, NEW_PASSWORD_SUCCESS, NEW_PASSWORD_ERROR,
    CONTACT_US_REQUEST, CONTACT_US_SUCCESS, CONTACT_US_ERROR, SET_ACTIVE_POST,
} from './Action'

import {
    intialState, countrydata, statedata, Logindata, resetPassword,
    createBlog, getAllBlog, getBlogById, deleteBlog, forgetPassword, NewPassword,
    contactus,
    activePost
} from './State'

export const reducer = (state = intialState, action) => {
    switch (action.type) {
        case USER_REQUEST: return {
            ...state,
            loading: true
        }

        case USER_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }
        case USER_ERROR: return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        };
        default:
            return state
    }
}
// -------------------------------------COUNTRY-------------------------------
export const Countryreducer = (state = countrydata, action) => {
    switch (action.type) {
        case COUNTRY_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                country: action.payload,
                error: ""
            };

        case COUNTRY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                country: [],
            };

        default:

            return state;
    }
}
// ----------------------------STATE-----------------------
export const Statereducer = (state = statedata, action) => {
    switch (action.type) {
        case STATE_REQUEST:
            return {
                ...state,
                loading: true,
            };


        case STATE_ERROR:
            return {
                ...state,
                loading: false,
                stateData: [],
                error: action.payload,
            };

        case STATE_SUCCESS:
            return {
                ...state,
                loading: false,
                stateData: action.payload,
            };

        default:
            return state;
    }
}
// --------------------------LOGIN-------------------------------
export const Loginreducer = (state = Logindata, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                Login: [],
                error: action.payload,
            };

        case LOGIN_SUCCESS:
            state = {
                ...state,
                loading: false,
                LoginToken: action.payload,
            }
            localStorage.setItem('loginToken', JSON.stringify(action.payload !== undefined && action.payload.token !== false && action.payload.token))
            return state
        default:
            return state;
    }
}
// --------------------------change Password--------------------
export const changePasswordReducer = (state = resetPassword, action) => {
    switch (action.type) {
        case RESET_PASSWORD_REQUEST: return {
            ...state,
            loading: true
        }

        case RESET_PASSWORD_SUCCESS: return {

            ...state,
            loading: false,
            ReturnCode: action.payload,
            error: ''
        }

        case RESET_PASSWORD_ERROR: return {
            ...state,
            loading: false,
            ReturnCode: '',
            error: action.payload
        }
        default:
            return state;
    }
}
// --------------------------create blog-------------------------

export const createBlogReducer = (state = createBlog, action) => {
    switch (action.type) {
        case CREATE_BLOG_ERROR: return {
            ...state,
            loading: true
        }

        case CREATE_BLOG_SUCCESS: return {

            ...state,
            loading: false,
            ResponseStatus: action.payload,
            error: ''
        }

        case CREATE_BLOG_REQUEST: return {
            ...state,
            loading: false,
            ResponseStatus: '',
            error: action.payload
        }
        default:
            return state;
    }
}
// -------------get all block-------------------------

export const getAllBlogReducer = (state = getAllBlog, action) => {
    switch (action.type) {
        case GET_ALL_BLOG_ERROR: return {
            ...state,
            loading: true
        }
        case GET_ALL_BLOG_SUCCESS:
            return {

                ...state,
                loading: false,
                Blogs: action.payload,
                error: ''
            }
        case GET_ALL_BLOG_REQUEST: return {
            ...state,
            loading: false,
            Blogs: [],
            error: action.payload
        }
        default:
            return state;
    }
}
// --------------GET BLOG BY ID---------------------------
export const getBlogByIdReducer = (state = getBlogById, action) => {
    switch (action.type) {
        case GET_BLOG_BY_ID_REQUEST: return {
            ...state,
            loading: true
        }

        case GET_BLOG_BY_ID_SUCCESS: return {

            ...state,
            loading: false,
            blogById: action.payload,
            error: ''
        }

        case GET_BLOG_BY_ID_ERROR: return {
            ...state,
            loading: false,
            blogById: [],
            error: action.payload
        }
        default:
            return state;
    }
}
// ---------------------------delete blog-----------------
export const deleteBlogReducer = (state = deleteBlog, action) => {
    switch (action.type) {
        case DELETE_BLOG_REQUEST: return {
            ...state,
            loading: true
        }

        case DELETE_BLOG_SUCCESS: return {

            ...state,
            loading: false,
            ResponseStatus: action.payload,
            error: ''
        }

        case DELETE_BLOG_ERROR: return {
            ...state,
            loading: false,
            ResponseStatus: '',
            error: action.payload
        }
        default:
            return state;
    }
}
// --------------------FORGOT PASSWORD----------------------
export const ForgetPasswordReducer = (state = forgetPassword, action) => {
    switch (action.type) {
        case FORGET_REQUEST: return {
            ...state,
            loading: true
        }

        case FORGET_SUCCESS: return {

            ...state,
            loading: false,
            ReturnCode: action.payload,
            error: ''
        }

        case FORGET_ERROR: return {
            ...state,
            loading: false,
            ReturnCode: '',
            error: action.payload
        }
        default:
            return state;
    }
}
// ----------------------NEW PASSWORD-------------------------
export const newPasswordReducer = (state = NewPassword, action) => {
    switch (action.type) {
        case NEW_PASSWORD_REQUEST: return {
            ...state,
            loading: true
        }

        case NEW_PASSWORD_SUCCESS: return {

            ...state,
            loading: false,
            ReturnCode: action.payload,
            error: ''
        }

        case NEW_PASSWORD_ERROR: return {
            ...state,
            loading: false,
            ReturnCode: '',
            error: action.payload
        }
        default:
            return state;
    }
}
// ------------------------Contact us-------------------
export const contactusReducer = (state = contactus, action) => {
    switch (action.type) {
        case CONTACT_US_ERROR: return {
            ...state,
            loading: true
        }
        case CONTACT_US_SUCCESS: return {
            ...state,
            loading: false,
            ResponseStatus: action.payload,
            error: ''
        }
        case CONTACT_US_REQUEST: return {
            ...state,
            loading: false,
            ResponseStatus: '',
            error: action.payload
        }
        default:
            return state;
    }
}
export const activePostReducer = (state = activePost, action) => {
    switch (action.type) {
        case SET_ACTIVE_POST: return {
            ...state,
            currentPost: action.payload
        }
        default:
            return state;
    }
}