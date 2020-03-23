import React from 'react';

import Form from './Form';
import Settings from './Settings';
import PetsList from './PetsList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petsList: [
                {   
                    id: 1,
                    name: 'Люси',
                    owner: 'Евгений',
                    description: 'сопроводительный тест',
                    date: '2020-01-01 10:30',
                },
                {
                    id: 2,
                    name: 'Жорик',
                    owner: 'Татьяна',
                    description: 'Болит живот',
                    date: '2020-01-02 20:00',
                }
            ]
        }
    }
    deletePetItem(id) {
        const copyPetsList = [...this.state.petsList];
        const updatedList = copyPetsList.filter(item => item.id !== id);
        this.setState({petsList: updatedList});
    }
    render() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col-8 offset-2">
                    <Form/>
                    <Settings/>
                    <PetsList petsList={this.state.petsList} deletePetItem={this.deletePetItem.bind(this)}/>
                </div>
            </div>
        </div>
    );
    }
}

export default App;
