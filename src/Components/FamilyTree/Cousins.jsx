import Special from './Special';
import Friend from './Friend';
import { MoneyContext } from './FamilyTree';

const Cousins = ({name,asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name==='Rakat' && <Special asset={asset}></Special>
            }
            {
                name==='Rahad' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousins;