import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

 const store=new Vuex.Store({
    state:{
        filter:'all',
        todos:[
            
        ]
    },
    getters:{
        remain(state) {
            
            return state.todos.filter(todo => !todo.completed).length
          },
          checkRemain(state, getters) {
            return getters.remain != 0
          },
          todosFiltered(state) {
            if (state.filter == 'all') {
              return state.todos
            } else if (state.filter == 'active') {
              return state.todos.filter(todo => !todo.completed)
            } else if (state.filter == 'completed') {
              return state.todos.filter(todo => todo.completed)
            }
            return state.todos
          },
          showClearCompletedButton(state) {
            return state.todos.filter(todo => todo.completed).length > 0
          }

    },
    mutations: {

      SET_TODOS(state,todos){

        state.todos=todos

      },
        addTodo(state, todo) {
          state.todos.push({
            id: todo.id,
            title: todo.title,
            completed: false,
            editing: false,
          })
        },

        clearCompleted(state){
            state.todos = state.todos.filter(todo => !todo.completed)
        },
        updateFilter(state, filter) {
            state.filter = filter
          },
          checkAll(state, checked) {
            state.todos.forEach(todo => (todo.completed = checked))
          },
          updateTodo(state, todo) {
            const index = state.todos.findIndex(item => item.id == todo.id)
            state.todos.splice(index, 1, {
              'id': todo.id,
              'title': todo.title,
              'completed': todo.completed,
              'editing': todo.editing,
            })
          },
          deleteTodo(state, id) {
            const index = state.todos.findIndex(item => item.id == id)
            state.todos.splice(index, 1)
          },
    },

    actions: {

      getTodos(context) {
            return axios.get(`http://localhost:5000/todos`).then(response => {
              context.commit("SET_TODOS", response.data.todos); // it will call function in mutation
            console.log(response)
              return response;
            });

          },

      

        addTodo(context, todo) {
          return axios.post(`http://localhost:5000/todos`,todo).then(response=>{
            console.log(response)
            return response;
          })
            //context.commit('addTodo', todo)
        },
        updateTodo(context, todo) {

          return axios.put(`http://localhost:5000/todos/${todo.id}`,todo).then(response => {
              // it will call function in mutation
              context.commit('updateTodo', todo)
           // console.log(todo)
              return response;
            });
          
             },


        deleteTodo(context, id) {
          return axios.delete(`http://localhost:5000/todos/${id}`).then(response => {
              context.commit("deleteTodo", id); // it will call function in mutation
            console.log(response)
              return response;
            });
        },
        checkAll(context, checked) {
          setTimeout(() => {
            context.commit('checkAll', checked)
          }, 100)
        },
        updateFilter(context, filter) {
          setTimeout(() => {
            context.commit('updateFilter', filter)
          }, 100)
        },
        clearCompleted(context) {
          setTimeout(() => {
            context.commit('clearCompleted')
          }, 100)
        }
      }

})

export default store;



// actions: {
//   getConfig(context) {
//     return api.get(`shopify/config`).then(response => {
//       context.commit(“SET_CONFIG”, response.config);
//       context.commit(“SET_STORE”, response.store);
//       return response;
//     });
//   },
// 8:50
// mutations: {
//   SET_CONFIG: (state, payload) => {
//     state.config = payload;
//   },