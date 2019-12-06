// Store/Reducers/luReducer.js

const initialState = { lusArticle: [] }

function toggleLu(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE ':
                const luArticleIndex = state.lusArticle.findIndex(Article => Article.url === action.value.url)
                if (luArticleIndex !== -1) {
                  // Le film est déjà dans les favoris, on le supprime de la liste
                  nextState = {
                    ...state,
                    lusArticle: state.lusArticle.filter( (Article, index) => index !== luArticleIndex)
                  }
                }
                else {
                  // Le film n'est pas dans les films favoris, on l'ajoute à la liste
                  nextState = {
                    ...state,
                    lusArticle: [...state.lusArticle, action.value]
                  }
                }
                return nextState || state
            default:
              return state
            }
  }

export default toggleLu