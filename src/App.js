import './App.css';
import Header from "./components/Header/Header.jsx";
import EditBasic from "./components/EditBasic/EditBasic.jsx";
import Content from "./components/Content/Content.jsx";
import Profile from "./components/Profile/Profile.jsx";
import { useReducer, useState } from 'react';

var data = {
  personal: {
    name: "Edward Nashton",
    email: "enigma@yopmail.com",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    // photoURL: "../../assets/error_404.jpg"
  },
  content: {
    education: [{
      institution: "Acme Institute of Technology, Udaipur",
      start_date: "May 2018",
      end_date: "Feb 2019",
      degree: "Masters in Technology",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
    }, {
      institution: "Acme Institute of Technology, Udaipur",
      start_date: "May 2018",
      end_date: "Feb 2019",
      degree: "Masters in Technology",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
    }],
    workExp: [{
      org: "Wayne Enterprises, Bangalore",
      start_date: "May 2019",
      end_date: "Feb 2022",
      role: "Tech Lead",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
    }, {
      org: "Avengers Enterprises, Ghatkoper",
      start_date: "March 2019",
      end_date: "Feb 2026",
      role: "Tech Lead",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
    }, {
      org: "Wayne Enterprises, Bangalore",
      start_date: "May 2019",
      end_date: "Feb 2022",
      role: "Tech Lead",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
    }],
    achievements: [{
      title: "Created Batmobile",
      date: "May 2019",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
    }, {
      title: "Created Batmobile",
      date: "May 2019",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
    }, {
      title: "Created Batmobile",
      date: "May 2019",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
    }]
  }
};

function App() {

  function reducer(state, action) {
    switch(action.type) {
      case "update profile" :
        return {
          ...state,
          personal: {
            name: action.data.name,
            email: action.data.email,
            bio: action.data.bio,
            photoURL: action.data.photoURL
          }
        }
      case "delete education" :
        return {
          ...state,
          content: {
            ...state.content,
            education: state.content.education.filter((item, index) => index !== action.id)
          }
        }
      case "delete work experience" :
        return {
          ...state,
          content: {
            ...state.content,
            workExp: state.content.workExp.filter((item, index) => index !== action.id)
          }
        }
      case "delete achievement" :
        return {
          ...state,
          content: {
            ...state.content,
            achievements: state.content.achievements.filter((item, index) => index !== action.id)
          }
        }
      case "Add new education":
        return {
          ...state,
          content: {
            ...state.content,
            education: [...state.content.education, action.data]
          }
        }
      case "Add new work experience":
        return {
          ...state,
          content: {
            ...state.content,
            workExp: [...state.content.workExp, action.data]
          }
        }
      case "Add new achievement":
        return {
          ...state,
          content: {
            ...state.content,
            achievements: [...state.content.achievements, action.data]
          }
        }
      case "Edit education": 
        return {
          ...state,
          content: {
            ...state.content,
            education: state.content.education.map((item, index) => (index !== action.id ? item : action.data))
          }
        }
      case "Edit work experience": 
        return {
          ...state,
          content: {
            ...state.content,
            workExp: state.content.workExp.map((item, index) => (index !== action.id ? item : action.data))
          }
        }
      case "Edit achievement": 
        return {
          ...state,
          content: {
            ...state.content,
            achievements: state.content.achievements.map((item, index) => (index !== action.id ? item : action.data))
          }
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, data);

  const [editSec, setEditSec] = useState(false);

  return (
    <div className="App">
      <Header />
      { editSec ? 
        <EditBasic data={state.personal} dispatch={dispatch} editSec={editSec} setEditSec={setEditSec} />
        : <Profile data={state.personal} editSec={editSec} setEditSec={setEditSec} />
      }
      <Content data={state.content} dispatch={dispatch} />
    </div>
  );
}

export default App;
