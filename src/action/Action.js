import axios from "axios";
import { toast } from 'react-toastify'

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';


export const userRequest = () => {
    return {
        type: USER_REQUEST
    }
}
export const userSuccess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}
export const userError = (error) => {
    return {
        type: USER_ERROR,
        payload: error
    }
}
export const fetchUser = (values, props) => {
    return (dispatch) => {
        dispatch(userRequest())
        axios.post('http://192.168.1.117:3000/api/signIn', values)
            .then(response => {
                const data = response.data
                dispatch(userSuccess(data))
                if (data.ResponseStatus !== 0) {
                    if (data.message !== '') {
                        toast.error(data.message)
                    }
                }
                else {
                    toast.success("Register Successfully!!")
                    setTimeout(() => {
                        props.history.push("/login")
                    }, 2000);
                }
            })
            .catch(error => {
                dispatch(userError(error.message))
            })
    }
}
// --------------------------Country-------------------------
export const COUNTRY_REQUEST = 'COUNTRY_REQUEST';
export const COUNTRY_SUCCESS = 'COUNTRY_SUCCESS';
export const COUNTRY_ERROR = 'COUNTRY_ERROR';

export const countryRequest = () => ({
    type: COUNTRY_REQUEST,
});

export const countrySuccess = (products) => ({
    type: COUNTRY_SUCCESS,
    payload: products,
});

export const countryError = (error) => ({
    type: COUNTRY_ERROR,
    payload: error,
});

export const getcountry = () => {
    return (dispatch) => {
        dispatch(countryRequest());
        axios
            .get(`http://192.168.1.117:3000/api/getAllCountry`)
            .then((Response) => {
                const country = Response.data.countryList;
                dispatch(countrySuccess(country));
            })
            .catch((error) => {
                const errors = error.message;
                dispatch(countryError(errors));
            });
    };
};

// ------------------------------STATE-------------------------
export const STATE_REQUEST = 'STATE_REQUEST';
export const STATE_SUCCESS = 'STATE_SUCCESS';
export const STATE_ERROR = 'STATE_ERROR';

export const stateReuest = () => ({
    type: STATE_REQUEST,
});

export const stateSuccess = (products) => ({
    type: STATE_SUCCESS,
    payload: products,
});

export const stateError = (error) => ({
    type: STATE_ERROR,
    payload: error,
});

export const getState = (countryId) => {
    return (dispatch) => {
        dispatch(stateReuest());
        axios
            .get(`http://192.168.1.117:3000/api/getStateById/${countryId}`)
            .then((Response) => {
                const state = Response.data.stateList;
                dispatch(stateSuccess(state));
            })
            .catch((error) => {
                const errors = error.message;
                dispatch(stateError(errors));
            });
    };
};
// ----------------------------------------LoGIN-------------------------
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (products) => ({
    type: LOGIN_SUCCESS,
    payload: products,
});

export const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error,
});

export const SendingLoginRequest = (data, props) => {
    return (dispatch) => {
        dispatch(loginRequest());
        axios
            .post(`http://192.168.1.117:3000/api/login`, data)
            .then((Response) => {
                const data = Response.data
                if (Response.data.ResponseStatus !== 0) {
                    localStorage.removeItem('logintoken')
                    toast.error(Response.data.message)
                }
                if (Response.data.ResponseStatus == 0) {
                    dispatch(loginSuccess(data))
                    setTimeout(() => {
                        props.history.push("/dash")
                        window.location.reload()
                    }, 1000)
                    toast.success(Response.data.message)
                }
            })
            .catch((error) => {
                const errors = error.message;
                dispatch(loginError(errors));
            });
    };
};

// ----------------------Reset password---------------------------
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST"
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS"
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR"

export const changePasswordRequest = () => {
    return {
        type: RESET_PASSWORD_REQUEST
    }
}
export const changePasswordSuccess = (change) => {
    return {
        type: RESET_PASSWORD_SUCCESS,
        payload: change,
    }
}
export const changePasswordFailure = (error) => {
    return {
        type: RESET_PASSWORD_ERROR,
        ReturnCode: '',
        payload: error
    }
}
export const changePassword = (change, onSubmitProps) => {
    let token = JSON.parse(localStorage.getItem('loginToken'))

    return (dispatch) => {
        dispatch(changePasswordRequest())
        axios.put(`http://192.168.1.117:3000/api/changePassword`, change,
            {
                headers: {
                    'Authorization': token,
                    'content-type': "application/json"
                }
            })
            .then((Response) => {
                const change = Response.data
                dispatch(changePasswordSuccess(change))
                onSubmitProps.resetForm();
                if (change.ReturnCode !== 0) {
                    if (change.message !== "") {
                        toast.error(change.message)
                    }
                }
                else {
                    toast.success(change.message)
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(changePasswordFailure(errors))
            })

    }
}
// -------------------create blog---------------------------

export const CREATE_BLOG_REQUEST = "CREATE_BLOG_REQUEST"
export const CREATE_BLOG_SUCCESS = "CREATE_BLOG_SUCCESS"
export const CREATE_BLOG_ERROR = "CREATE_BLOG_ERROR"

export const createBlogRequest = () => {
    return {
        type: CREATE_BLOG_REQUEST
    }
}
export const createBlogSuccess = (data) => {
    return {
        type: CREATE_BLOG_SUCCESS,
        payload: data,
    }
}
export const createBlogFailure = (error) => {
    return {
        type: CREATE_BLOG_ERROR,
        ReturnCode: '',
        payload: error
    }
}
export const createBlog = (blog, onSubmitProps) => {
    let token = JSON.parse(localStorage.getItem('loginToken'))
    return (dispatch) => {
        dispatch(createBlogRequest())
        axios.post(`http://192.168.1.117:3000/api/createBlog`, blog,
            {
                headers: {
                    'Authorization': token,
                    'content-type': "multipart/form-data"
                }
            })
            .then((Response) => {
                const blog = Response.data
                dispatch(createBlogSuccess(blog))
                if (blog.ResponseStatus === 0) {
                    if (blog.message !== "") {
                        toast.success(blog.message)
                        onSubmitProps.resetForm();
                    }
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(createBlogFailure(errors))
            })

    }
}
// ------------------------Get all blog---------------------------

export const GET_ALL_BLOG_REQUEST = "GET_ALL_BLOG_REQUEST"
export const GET_ALL_BLOG_SUCCESS = "GET_ALL_BLOG_SUCCESS"
export const GET_ALL_BLOG_ERROR = "GET_ALL_BLOG_ERROR"

export const getAllBlogRequest = () => {
    return {
        type: GET_ALL_BLOG_REQUEST
    }
}
export const getAllBlogSuccess = (data) => {
    return {
        type: GET_ALL_BLOG_SUCCESS,
        payload: data,
    }
}
export const getAllBlogError = (error) => {
    return {
        type: GET_ALL_BLOG_ERROR,
        Blogs: '',
        payload: error
    }
}
export const getAllBlog = () => {

    return (dispatch) => {
        dispatch(getAllBlogRequest())
        axios.get(`http://192.168.1.117:3000/api/getAllBlog`)
            .then((Response) => {
                const blog = Response.data

                dispatch(getAllBlogSuccess(blog))
            })
            .catch((error) => {
                const errors = error.message
                dispatch(getAllBlogError(errors))
            })
    }
}

// -------------------Get blog by id---------------------

export const GET_BLOG_BY_ID_REQUEST = "GET_BLOG_BY_ID_REQUEST"
export const GET_BLOG_BY_ID_SUCCESS = "GET_BLOG_BY_ID_SUCCESS"
export const GET_BLOG_BY_ID_ERROR = "GET_BLOG_BY_ID_ERROR"

export const getBlogByIdRequest = () => {
    return {
        type: GET_BLOG_BY_ID_REQUEST
    }
}
export const getBlogByIdSuccess = (blogById) => {
    return {
        type: GET_BLOG_BY_ID_SUCCESS,
        payload: blogById,
    }
}
export const getBlogByIdFailure = (error) => {
    return {
        type: GET_BLOG_BY_ID_ERROR,
        ReturnCode: '',
        payload: error
    }
}
export const getBlogById = () => {
    let token = JSON.parse(localStorage.getItem('loginToken'))
    return (dispatch) => {
        dispatch(getBlogByIdRequest())
        axios.get(`http://192.168.1.117:3000/api/getBlogById`,
            {
                headers: {
                    'Authorization': token,
                    'content-type': "application/json"
                }
            })
            .then((Response) => {
                const blogById = Response.data
                dispatch(getBlogByIdSuccess(blogById))
            })
            .catch((error) => {
                const errors = error.message
                dispatch(getBlogByIdFailure(errors))
            })

    }
}
// -------------------------DELET BLOG-----------------------
export const DELETE_BLOG_REQUEST = "DELETE_BLOG_REQUEST"
export const DELETE_BLOG_SUCCESS = "DELETE_BLOG_SUCCESS"
export const DELETE_BLOG_ERROR = "DELETE_BLOG_ERROR"

export const deleteBlogRequest = () => {
    return {
        type: DELETE_BLOG_REQUEST
    }
}
export const deleteBlogSuccess = (data) => {
    return {
        type: DELETE_BLOG_SUCCESS,
        payload: data,
    }
}
export const deleteBlogFailure = (error) => {
    return {
        type: DELETE_BLOG_ERROR,
        ReturnCode: '',
        payload: error
    }
}
export const deleteBlog = (deleteId) => {
    let token = JSON.parse(localStorage.getItem('loginToken'))
    return (dispatch) => {
        dispatch(deleteBlogRequest())
        axios.delete(`http://192.168.1.117:3000/api/deleteBlog/${deleteId}`,
            {
                headers: {
                    'Authorization': token,
                    'content-type': "application/json"
                }
            })
            .then((Response) => {
                const deleteBlog = Response.data
                dispatch(deleteBlogSuccess(deleteBlog))
                if (deleteBlog.ResponseStatus === 0) {
                    if (deleteBlog.message !== "") {
                        toast.success(deleteBlog.message)
                        setTimeout(() => {
                            dispatch(getBlogById())
                        }, 2000);
                    }
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(deleteBlogFailure(errors))
            })

    }
}

// ----------------------FORGOT PASSWORD-----------------
export const FORGET_REQUEST = "FORGET_REQUEST"
export const FORGET_SUCCESS = "FORGET_SUCCESS"
export const FORGET_ERROR = "FORGET_ERROR"

export const forgetPasswordRequest = () => {
    return {
        type: FORGET_REQUEST
    }
}
export const forgetPasswordSuccess = (email) => {
    return {
        type: FORGET_SUCCESS,
        payload: email,
    }
}
export const forgetPasswordError = (error) => {
    return {
        type: FORGET_ERROR,
        ReturnCode: '',
        payload: error
    }
}
export const forgetPassword = (email) => {
    return (dispatch) => {
        dispatch(forgetPasswordRequest())
        axios.post(`http://192.168.1.117:3000/api/forgetPassword`, email)
            .then((Response) => {
                const email = Response.data
                dispatch(forgetPasswordSuccess(email))
                if (email.ReturnCode === 1) {
                    if (email.message !== "") {
                        toast.success(email.message)
                    }
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(forgetPasswordError(errors))
            })
    }
}
// ----------------------------NEW password-------------------
export const NEW_PASSWORD_REQUEST = "NEW_PASSWORD_REQUEST"
export const NEW_PASSWORD_SUCCESS = "NEW_PASSWORD_SUCCESS"
export const NEW_PASSWORD_ERROR = "NEW_PASSWORD_ERROR"

export const newPasswordrequest = () => {
    return {
        type: NEW_PASSWORD_REQUEST
    }
}
export const newPasswordSuccess = (data) => {
    return {
        type: NEW_PASSWORD_SUCCESS,
        payload: data,
    }
}
export const newPasswordError = (error) => {
    return {
        type: NEW_PASSWORD_ERROR,
        ReturnCode: '',
        payload: error
    }
}
export const newPassword = (data) => {
    return (dispatch) => {
        dispatch(newPasswordrequest())
        axios.post(`http://192.168.1.117:3000/api/resetPassword`, data)
            .then((Response) => {
                const data = Response.data
                dispatch(newPasswordSuccess(data))
                if (data.ReturnCode === 1) {
                    if (data.message !== "") {
                        toast.success(data.message)
                    }
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(newPasswordError(errors))
            })
    }
}
// ---------------------CONTACT US----------------------
export const CONTACT_US_REQUEST = "CONTACT_US_REQUEST"
export const CONTACT_US_SUCCESS = "CONTACT_US_SUCCESS"
export const CONTACT_US_ERROR = "CONTACT_US_ERROR"

export const contactusRequest = () => {
    return {
        type: CONTACT_US_REQUEST
    }
}
export const contactusSuccess = (message) => {
    return {
        type: CONTACT_US_SUCCESS,
        payload: message,
    }
}
export const contactusError = (error) => {
    return {
        type: CONTACT_US_ERROR,
        ResponseStatus: '',
        payload: error
    }
}
export const sendMessage = (message) => {
    return (dispatch) => {
        dispatch(contactusRequest())
        axios.post(`http://192.168.1.117:3000/api/contactUs`, message)
            .then((Response) => {
                const message = Response.data
                dispatch(contactusSuccess(message))
                if (message.ResponseStatus === 0) {
                    if (message.message !== "") {
                        toast.success(message.message)
                    }
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(contactusError(errors))
            })
    }
}
// ---------------Post-----------------
export const SET_ACTIVE_POST = "SET_ACTIVE_POST"

export const setActivePost = (item) => {
    return {
        type: SET_ACTIVE_POST,
        payload: item
    }
}
// --------------Blog Comment------------------------
export const COMMENT_REQUEST = "COMMENT_REQUEST"
export const COMMENT_SUCCESS = "COMMENT_SUCCESS"
export const COMMENT_ERROR = "COMMENT_ERROR"

export const commentRequest = () => {
    return {
        type: CONTACT_US_REQUEST
    }
}

export const commentSuccess = (comment) => {
    return {
        type: COMMENT_SUCCESS,
        payload: comment
    }
}

export const commentError = (errors) => {
    return {
        type: CONTACT_US_ERROR,
        ReturnCode: '',
        payload: errors
    }
}

export const sendComment = (values, blog_id) => {
    let token = JSON.parse(localStorage.getItem('loginToken'))
    return (dispatch) => {

        dispatch(commentRequest())
        axios.post(`http://192.168.1.117:3000/api/blog-commit/${blog_id}`, values,
            {
                headers: {
                    'Authorization': token,
                    'content-type': "application/json"
                }
            })
            .then((Response) => {
                const comment = Response.data
                dispatch(commentSuccess(comment))
                if (comment.ResponseStatus !== 0) {
                    if (comment.message !== "") {
                        toast.error(comment.message)
                    }
                }
                else {
                    toast.success(comment.message)
                }

            })
            .catch((error) => {
                const errors = error.message
                dispatch(commentError(errors))
            })
    }
}
// -------------------Blog Like------------------------
export const LIKE_REQUEST = "LIKE_REQUEST"
export const LIKE_SUCCESS = "LIKE_SUCCESS"
export const LIKE_ERROR = "LIKE_ERROR"

export const likeRequest = () => {
    return {
        type: LIKE_REQUEST
    }
}

export const likeSuccess = (like) => {
    return {
        type: LIKE_SUCCESS,
        payload: like
    }
}
export const likeError = (error) => {
    return {
        type: LIKE_ERROR,
        ReturnCode: '',
        payload: error
    }
}

export const sendLike = (blog_id) => {
    let token = JSON.parse(localStorage.getItem('loginToken'))
    return (dispatch) => {
        dispatch(likeRequest())
        axios.get(`http://192.168.1.117:3000/api/blogLike/${blog_id}`,
            {
                headers: {
                    'Authorization': token,
                    'content-type': "application/json"
                }
            })
            .then((Response) => {
                const like = Response.data
                dispatch(likeSuccess(like))
                if (like.ResponseStatus !== 0) {
                    if (like.message !== "") {
                        toast.error(like.message)
                    }
                }
                else {
                    toast.success(like.message)
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(likeError(errors))
            })
    }
}
// ---------------------Blog dislike-------------------------
export const DISLIKE_REQUEST = "DISLIKE_REQUEST"
export const DISLIKE_SUCCESS = "DISLIKE_SUCCESS"
export const DISLIKE_ERROR = "DISLIKE_ERROR"

export const dislikeRequest = () => {
    return {
        type: DISLIKE_REQUEST
    }
}

export const dislikeSuccess = (disLike) => {
    return {
        type: DISLIKE_SUCCESS,
        payload: disLike
    }
}

export const dislikeError = (error) => {
    return {
        type: DISLIKE_ERROR,
        ResponseStatus: '',
        payload: error
    }
}

export const sendDislike = (blog_id) => {
    let token = JSON.parse(localStorage.getItem('loginToken'))
    return (dispatch) => {
        dispatch(dislikeRequest())
        axios.get(`http://192.168.1.117:3000/api/blogDisLike/${blog_id}`,
            {
                headers: {
                    'Authorization': token,
                    'content-type': "application/json"
                }
            })
            .then((Response) => {
                console.log(Response);
                const disLike = Response.data
                dispatch(dislikeSuccess(disLike))
                if (disLike.ResponseStatus !== 0) {
                    if (disLike.message !== "") {
                        toast.error(disLike.message)
                    }
                }
                else {
                    toast.success(disLike.message)
                }
            })
            .catch((error) => {
                const errors = error.message
                dispatch(dislikeError(errors))
            })
    }
}